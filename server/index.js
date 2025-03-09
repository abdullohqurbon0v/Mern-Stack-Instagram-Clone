require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const userRoute = require("./routes/user.route");
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/api/user/", userRoute);

app.listen(PORT, () => {
  console.log(`Server has been started on PORT: http://localhost:${PORT}`);
});
