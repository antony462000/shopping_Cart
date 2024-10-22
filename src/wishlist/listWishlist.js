const Responder = require("../shared/responder");
const wishlistList = require("./lib/wishlist.list");
module.exports = async (req, res) => {
  const responder = new Responder(res);
  try {
    console.log(req.body.user.id);
    const listItems = await wishlistList(req.body.user.id);
    responder.success({ message: "My Cart Items", payload: listItems });
  } catch (error) {
    responder.fail(error.message);
  }
};
