var express = require('express');
var router = express.Router();
const Trip = require('../model/trips');
const moment = require('moment');


router.post('/trips', async (req, res) => {
  const { departure, arrival, date} = req.body;
  const dateStart = moment(date).startOf('day').toDate();
  const dateEnd = moment(date).endOf('year').toDate();
  const tripsFilter = await Trip.find({
    departure: departure,
    arrival: arrival,
    date: { $gte: dateStart, $lte: dateEnd },
  })
  res.json({ tripsFilter })
});

module.exports = router;