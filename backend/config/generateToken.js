const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "Dheeraj", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
