const { Wishlist } = require("../../../database/models");

module.exports = async (userId) => {
  try {
    return await Wishlist.findAll({
      where: { userId },
    });
  } catch (error) {
    throw error;
  }
};
