const mongoose = require("mongoose");
const schema = mongoose.Schema

const DefaultCoinSchama = new schema({
    coin_image: {
        type: String,
        required: true,
    },
    coin_name: {
        type: String,
        required: true,
    },
    coin_bal: {
        type: String,
        required: true,
    },
    wallet_address: [],
    user_id: {
        type: String,
        required: true,
    }
}, { timestamp : true})

const DefaultCoin = mongoose.model('DefaultCoin', DefaultCoinSchama)
module.exports = DefaultCoin