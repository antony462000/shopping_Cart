const authenticatioon = require("../shared/middlewares/authenticatioon");
const addtoWishlist = require("./addtoWishlist");
const listWishlist = require("./listWishlist");
const removeFromWishlist = require("./removeFromWishlist");

const wishlistRouter = require("express").Router();

wishlistRouter.post("/addtowishlist", authenticatioon, addtoWishlist);
wishlistRouter.delete("/deletefromCart", authenticatioon, removeFromWishlist);
wishlistRouter.get("/listWishlist", authenticatioon, listWishlist);
module.exports = wishlistRouter;
