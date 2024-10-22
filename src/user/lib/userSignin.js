const { User, Wishlist, Product } = require("../../../database/models");
const generateJWT = require("./generateJWT");

module.exports = async (data) => {
  try {
    console.log("LLLLLL");
    if (!data.email || !data.password)
      throw new Error("Enter email and password!");
    const user = await User.findOne({
      where: {
        email: data.email,
        password: data.password,
      },
      attributes: {
        exclude: ["updatedAt", "createdAt", "deletedAt", "password"],
      },
      include: {
        model: Wishlist,
        as: "wishlist",
        attributes: {
          exclude: ["updatedAt", "createdAt", "deletedAt"],
        },
        include: {
          model: Product,
          as: "product",
          attributes: {
            exclude: ["updatedAt", "createdAt", "deletedAt"],
          },
        },
      },
    });
    return generateJWT(user);
  } catch (error) {
    console.log("OOOOOOOO", error);
    throw error;
  }
};
