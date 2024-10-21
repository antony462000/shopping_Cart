const listProduct = require("../product/lib/product.list");
const Responder = require("../shared/responder");

module.exports = async (req, res) => {
  const responder = new Responder(res);
  try {
    const productList = await listProduct(req.body);
    responder.success({ message: "Product Listed", payload: productList });
  } catch (error) {
    responder.fail(error);
  }
};
