const createProduct = require("../product/lib/product.create");
const Responder = require("../shared/responder");

module.exports = async (req, res) => {
  const responder = new Responder(res);
  try {
    const product = await createProduct(req.body);
    responder.success({ message: "Succefully Signed Up", payload: product });
  } catch (error) {
    responder.fail(error);
  }
};
