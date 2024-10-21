const { Op } = require("sequelize");
const { Product } = require("../../../database/models");

module.exports = async (data) => {
  try {
    let filter = { where: {} };
    if (data.category) filter["where"].category = data.category;
    data.priceStart = data.priceStart || 0;
    if (data.priceStart) filter["where"].price = { [Op.gt]: data.priceStart };
    if (data.priceEnd)
      filter["where"].price = {
        [Op.between]: [data.priceStart, data.priceEnd],
      };
    if (data.key) {
      filter["where"][Op.or] = {
        name: { [Op.iLike]: `%${data.key}%` },
        category: { [Op.iLike]: `%${data.key}%` },
      };
    }
    return await Product.findAll(filter);
  } catch (error) {
    throw error.message;
  }
};
