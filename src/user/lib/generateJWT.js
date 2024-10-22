const jwt = require("jsonwebtoken");

module.exports = (user) => {
  return jwt.sign(JSON.parse(JSON.stringify(user)), "secret", {
    expiresIn: 8600,
  });
};
