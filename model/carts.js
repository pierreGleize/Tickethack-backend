const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    paiement: Boolean,
    info: {type: mongoose.Schema.Types.ObjectId, ref:'trips'},
})

const Cart = mongoose.mongoose.model('carts', cartSchema);

module.exports = Cart;