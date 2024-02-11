const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "First name is required"],
    },
    lastname: {
        type: String,
        required: [true, "Last name is required"],
    },
    role: {
        type: String,
        required: [true, "Role is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email address already taken"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
},
    {
        timestaps: true
    })

module.exports = mongoose.model("User", userSchema)