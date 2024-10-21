const createUser = require("./lib/user.create");
const Responder = require("../shared/responder");

module.exports = async (req, res) => {
  const responder = new Responder(res);
  try {
    const user = await createUser(req.body);
    responder.success({ message: "Succefully Signed Up", payload: user });
  } catch (error) {
    responder.fail(error);
  }
};
