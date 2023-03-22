const mongoose = require("mongoose");
const schema = mongoose.Schema

const Settingschema = new schema({
    user_id: {
        type: String,
        required: true,
    },
    Fa_Auth: {
        type: String,
        required: true,
    }
}, { timestamp : true})

module.exports = mongoose.model('Setting', Settingschema)