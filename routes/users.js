var express = require('express');
var router = express.Router();
const Trip = require("../model/trips");
const Cart = require("../model/carts");
const moment = require("moment");

router.post("/carts", (req, res) => {
  const { /*id à recuperer du front*/ } = req.body;

  const newCart = new Cart({
    paiement: true,
    /*id à recuperer du front: id à recuperer du front,*/
  });

  newCart.save().then(() => { 
    res.json({/*id à recuperer du front: id à recuperer du front,*/ paiement: true });
  })
});

router.get('/carts', (req, res) => {
  Cart.find()
    .populate('info')
    .then(carts => {
      res.json(carts);
    })
});

module.exports = router;
