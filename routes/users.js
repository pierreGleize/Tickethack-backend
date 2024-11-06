var express = require("express");
var router = express.Router();
const Trip = require("../model/trips");
const Cart = require("../model/carts");
const moment = require("moment");

router.post("/", (req, res) => {
  const { id } = req.body;

  const newCart = new Cart({
    paiement: true,
    info: id,
  });
  console.log(newCart);
  newCart.save().then(() => {
    res.json({
      paiement: true,
    });
  });
});

router.get("/", (req, res) => {
  Cart.find()
    .populate("info")
    .then((carts) => {
      res.json(carts);
    });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const deleteCart = await Cart.deleteOne({ info: id });
  console.log(deleteCart);
  if (deleteCart.deletedCount > 0) {
    const cart = await Cart.find();
    res.json({ result: "Success", cart: cart });
  } else {
    res.json({ result: "Fail" });
  }
});

module.exports = router;
