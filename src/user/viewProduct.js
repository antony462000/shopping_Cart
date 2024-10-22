const viewProduct = require("../product/lib/product.details");
const Responder = require("../shared/responder");

module.exports = async (req, res) => {
  const responder = new Responder(res);
  try {
    const productDetails = await viewProduct(req.body);
    responder.success({
      message: "Succefully Signed Up",
      payload: productDetails,
    });
  } catch (error) {
    responder.fail(error.message);
  }
};
