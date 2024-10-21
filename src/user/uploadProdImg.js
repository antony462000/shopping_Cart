const Responder = require("../shared/responder");

module.exports = async (req, res) => {
  const responder = new Responder(res);
  try {
    responder.success({
      message: "Succefully Signed Up",
      payload: req.body.urls,
    });
  } catch (error) {
    responder.fail(error);
  }
};
