const jwt = require("jsonwebtoken");
module.exports = (token) => {
  try {
    return jwt.verify(token, "secret");
  } catch (error) {
    throw error(error);
  }
};
