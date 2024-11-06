var express = require('express');
var router = express.Router();
const Trip = require("../model/trips");
const Cart = require("../model/carts");
const moment = require("moment");

router.post("/carts", (req, res) => {
  const { info } = req.body;

  const newCart = new Cart({
    paiement: true,
    info: info,
  });

  newCart.save().then(() => { 
    res.json({ info: info, paiement: true });
  })
});

router.get('/carts', (req, res) => {
  Cart.find()
    .then(carts => {
      res.json(carts);
    })
});

module.exports = router;
