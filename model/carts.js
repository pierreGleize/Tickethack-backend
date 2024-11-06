const mongoose = require('mongoose');
//schema/model avec clé externe pour lié avec trips
const cartSchema = mongoose.Schema({
    paiement: Boolean,
    info: {type: mongoose.Schema.Types.ObjectId, ref:'trips'},
})

const Cart = mongoose.mongoose.model('carts', cartSchema);

module.exports = Cart;