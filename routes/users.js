var express = require('express');
var router = express.Router();
const Trip = require("../model/trips");
const Cart = require("../model/carts");
const moment = require("moment");

router.post("/carts", async (req, res) => {
  const { info } = req.body;
  
  const newCart = new Cart({
    paiement: true,
    info: info,
  });

  newCart.save().then(() => {})
  res.json({});
});

router.get(){
  Cart
}

module.exports = router;
