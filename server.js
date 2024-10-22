const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(port, (error) => {
  if (!error) console.log(`Server listening to http://localhostt:${port}/`);
  else console.log("Error ocuured! Server can't start", error);
});

const userRouter = require("./src/user/router");
const wishlistRouter = require("./src/wishlist/router");

app.use("/user", userRouter);

app.use("/wishlist", wishlistRouter);
