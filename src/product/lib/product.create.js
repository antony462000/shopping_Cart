const { Product } = require("../../../database/models");
const { CATEGORY } = require("../../shared/constants");
// const CATEGORY = require("../../shared/constants")
module.exports = async (data) => {
  try {
    if (
      !data.name ||
      !data.price ||
      !data.details ||
      !data.quantity ||
      !data.category ||
      !data.imageurls
    ) {
      throw new Error("Fill all details of the product");
    }
    // if (CATEGORY != data.category) { throw new Error("Select a proper category") }
    console.log(CATEGORY);
    return await Product.create({
      name: data.name,
      price: data.price,
      details: data.details,
      quantity: data.quantity,
      category: data.category,
      imageurls: data.imageurls,
    });
  } catch (error) {
    console.log("LLLLLLLL", error);
    throw error.message;
  }
};
