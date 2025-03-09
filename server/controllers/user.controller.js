const database = require("../db/postgres");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;

class UserController {
  async create(req, res) {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        error: true,
      });
    }

    const isUsernameExist = await database.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    if (isUsernameExist.rows.length > 0) {
      return res.status(400).json({
        message: "User with this username already exists",
        error: true,
      });
    }

    const isUserExist = await database.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    if (isUserExist.rows.length > 0) {
      return res.status(400).json({
        message: "User with this email already exists",
        error: true,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await database.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username.toLowerCase(), email, hashedPassword]
    );

    const user = createdUser.rows[0];
    delete user.password;

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: "30d",
    });

    return res.status(200).json({
      message: "User created successfully",
      error: false,
      user,
      token,
    });
  }

  async login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        error: true,
      });
    }

    try {
      const userQuery = await database.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
      );

      const user = userQuery.rows[0];

      if (!user) {
        return res.status(404).json({
          message: "User not found",
          error: true,
        });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({
          message: "Incorrect password",
          error: true,
        });
      }
      const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
        expiresIn: "30d",
      });

      delete user.password;

      return res.status(200).json({
        message: "Login successful",
        error: false,
        user,
        token,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        message: "Server error",
        error: true,
      });
    }
  }
}

module.exports = new UserController();
