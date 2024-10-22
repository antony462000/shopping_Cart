const verifyJWT = require("../../user/lib/verifyJWT");
const Responder = require("../responder");
module.exports = (req, res, next) => {
  console.log("+++++++++++");
  const responder = new Responder(res);
  try {
    const token = req.headers.token;
    if (!token) throw new Error("Token Not Recieved");
    const user = verifyJWT(token);
    req.body["user"] = user;
    next();
  } catch (error) {
    console.log("+++++++++++", error);
    responder.fail(error.message);
  }
};
