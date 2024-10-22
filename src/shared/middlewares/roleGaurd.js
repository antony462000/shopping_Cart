const Responder = require("../responder");
module.exports = (role) => {
  return (req, res, next) => {
    const responder = new Responder(res);
    if (role === req.body.user.type) next();
    else responder.fail("Permission Denied");
  };
};
