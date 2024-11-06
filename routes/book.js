var express = require("express");
var router = express.Router();
const Trip = require("../model/trips");
const Cart = require("../model/carts");
const moment = require("moment");

//route post pour "essayer" de déplacer ce qu'il y a du cart au book et créer une nouvelle collection
router.post("/trips", async (req, res) => {
  const { departure, arrival, date } = req.body;
  const dateBook = moment();
  const ;
  
  const tripsFilter = await Trip.find({
    departure: { $regex: new RegExp(departure, "i") },
    arrival: { $regex: new RegExp(arrival, "i") },
    date: { $gte: dateStart, $lte: dateEnd },
  });
  res.json({ tripsFilter });
});

module.exports = router;