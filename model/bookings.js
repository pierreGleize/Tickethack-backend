const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number,
    calcul: String,
})

const Book = mongoose.mongoose.model('bookings', bookingSchema);

module.exports = Book;