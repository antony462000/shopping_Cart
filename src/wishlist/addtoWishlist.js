const Responder = require("../shared/responder");
const wishlistadd = require("./lib/wishlist.add");

module.exports = async (req, res) => {
  console.log(req.body);
  const responder = new Responder(res);
  try {
    const wishedItem = await wishlistadd(req.body.user.id, req.body.productId);
    responder.success({ message: "Added to Wishlist", payload: wishedItem });
  } catch (error) {
    responder.fail(error.message);
  }
};
