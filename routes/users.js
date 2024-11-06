var express = require('express');
var router = express.Router();
const Trip = require("../model/trips");
const Cart = require("../model/carts");
const moment = require("moment");

router.post('/', async (req, res) => {
  const { id } = req.body;

  const newCart = new Cart({
    paiement: true,
    info: id,
  });

  newCart.save().then(() => { 
    res.json({ paiement: true });
  })
});

router.get('/', async (req, res) => {
  const carts = await Cart.find()
    .populate('info');
    res.json(carts);
});

router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  const deleteCart = await Cart.findByIdAndDelete(id);
    res.json({ result: true, cart: deleteCart });
});

module.exports = router;
