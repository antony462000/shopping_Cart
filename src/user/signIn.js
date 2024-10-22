const userSignin = require("./lib/userSignin");
const Responder = require("./../shared/responder");
module.exports = async (req, res) => {
  const responder = new Responder(res);
  try {
    const User = await userSignin(req.body);
    responder.success({ message: "Successfully Signed In", payload: User });
  } catch (error) {
    responder.fail(error.message);
  }
};
