const jwt = require("jsonwebtoken");

const generateToken = (id, password) => {
  const token = jwt.sign({ id }, password);
  return token;
};

module.exports = generateToken;
