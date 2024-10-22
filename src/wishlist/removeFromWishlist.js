const Responder = require("../shared/responder");
const wishlistDelete = require("./lib/wishlist.delete");

module.exports = async (req, res) => {
  const responder = new Responder(res);
  try {
    const deletedItem = await wishlistDelete(
      req.body.user.id,
      req.body.productId,
    );
    responder.success({ message: "Removed From Cart", payload: deletedItem });
  } catch (error) {
    responder.fail(error.message);
  }
};
