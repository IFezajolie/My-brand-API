require('dotenv').config();

const config = {
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
};

module.exports = config;

require('dotenv').config();

module.exports = {
  email: process.env.EMAIL,
  username: process.env.USERNAME,
  password: process.env.PASSWORD
};
