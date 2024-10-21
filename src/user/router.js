const fileUpload = require("../shared/middlewares/fileUpload");
const addProduct = require("./addProduct");
const listProducts = require("./listProducts");
const userSignup = require("./signup");
const uploadProdImg = require("./uploadProdImg");
const userRouter = require("express").Router();

userRouter.post("/signup", userSignup);
userRouter.post("/addproduct", addProduct);
userRouter.post("/uploadImage", fileUpload, uploadProdImg);
userRouter.get("/listproduct", listProducts);

module.exports = userRouter;
