const mongoose = require("mongoose");
const schema = mongoose.Schema

const Cartschema = new schema({
    user_id: {
        type: String,
        required: true,
        unique : true
    },
    price: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamp : true})

module.exports = mongoose.model('Cart', Cartschema)