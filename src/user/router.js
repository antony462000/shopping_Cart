const authenticatioon = require("../shared/middlewares/authenticatioon");
const fileUpload = require("../shared/middlewares/fileUpload");
const roleGaurd = require("../shared/middlewares/roleGaurd");
const addProduct = require("./addProduct");
const listProducts = require("./listProducts");
const signIn = require("./signIn");
const userSignup = require("./signup");
const uploadProdImg = require("./uploadProdImg");
const viewProduct = require("./viewProduct");
const userRouter = require("express").Router();

userRouter.post("/signup", userSignup);
userRouter.post("/addproduct", authenticatioon, roleGaurd("ADMIN"), addProduct);
userRouter.post("/uploadImage", fileUpload, uploadProdImg);
userRouter.get("/listproduct", listProducts);
userRouter.get("/productdetails", viewProduct);
userRouter.post("/signin", signIn);

module.exports = userRouter;
