DROP TABLE IF EXISTS follows;
DROP TABLE IF EXISTS users;

CREATE TABLE users
(
      id SERIAL PRIMARY KEY,
      full_name VARCHAR(255),
      username VARCHAR(255) UNIQUE,
      email VARCHAR(255) UNIQUE,
      password VARCHAR(255),
      bio VARCHAR(255),
      profileImage VARCHAR(255)
);

CREATE TABLE follows
(
      follower_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      following_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      PRIMARY KEY (follower_id, following_id)
);
