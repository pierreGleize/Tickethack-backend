var express = require("express");
var router = express.Router();
const Trip = require("../model/trips");
const Cart = require("../model/carts");
const moment = require("moment");

router.post("/", async (req, res) => {
  const { id } = req.body;
  console.log(typeof id);
  const findTrip = await Trip.findById(id);
  console.log(findTrip);
  res.json({ findTrip });
  // const newCart = new Cart({
  //   paiement: true,
  //   info: info,
  // });

  // newCart.save().then(() => {
  //   res.json({ newCart });
  // });
});

// router.get(){
//   Cart
// }

module.exports = router;
