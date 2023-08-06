const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Contact name is required"]
    },
    email:{
        type: String,
        required: [true, "Contact name is required"]
    },
    phone:{
        type: String,
        required: [true, "Contact name is required"]
    },
    address:{
        type: String,
        required: [true, "Contact name is required"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Contact", contactSchema)