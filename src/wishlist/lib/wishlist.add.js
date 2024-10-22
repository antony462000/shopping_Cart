const { Wishlist } = require("../../../database/models");

module.exports = async (userId, productId) => {
  try {
    return await Wishlist.create({
      userId: userId,
      productId: productId,
    });
  } catch (error) {
    throw error;
  }
};
