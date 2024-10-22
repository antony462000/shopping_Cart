const { Product } = require("../../../database/models");

module.exports = (data) => {
  try {
    return Product.findOne({
      where: {
        id: data.id,
      },
    });
  } catch (error) {
    throw error;
  }
};
