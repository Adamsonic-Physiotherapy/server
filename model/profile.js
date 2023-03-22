const mongoose = require("mongoose");
const schema = mongoose.Schema

const ProfileSchama = new schema({
    username: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    }
}, { timestamp : true})

const Profile = mongoose.model('Profile', ProfileSchama)
module.exports = Profile