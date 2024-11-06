var express = require("express");
var router = express.Router();
const Trip = require("../model/trips");
const moment = require("moment");

//route post pour update les données validé dans l'accueil
router.post("/trips", async (req, res) => {
  const { departure, arrival, date } = req.body;
  const dateStart = moment(date).startOf("day").toDate();
  const dateEnd = moment(date).endOf("day").toDate();
//permet d'afficher la date correctement
  const tripsFilter = await Trip.find({
    departure: { $regex: new RegExp(departure, "i") },
    arrival: { $regex: new RegExp(arrival, "i") },
    date: { $gte: dateStart, $lte: dateEnd },
  });
  res.json({ tripsFilter });
});

module.exports = router;
