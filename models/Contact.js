const mongoose = require("mongoose")

const contactSchema = mongoose.Schema(
    //     user_id: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         required: true,
    //         ref: "User"
    //     },
    //     name:{
    //         type: String,
    //         required: [true, "Contact name is required"]
    //     },
    //     email:{
    //         type: String,
    //         required: [true, "Contact name is required"]
    //     },
    //     phone:{
    //         type: String,
    //         required: [true, "Contact name is required"]
    //     },
    //     address:{
    //         type: String,
    //         required: [true, "Contact name is required"]
    //     }
    // }, {
    //     timestamps: true
    // }

    {
        name: {
            type: String,
            required: [true, "Contact name is required"]
        },
        email: {
            type: String,
            required: [true, "Contact name is required"]
        },
        concern: {
            type: String,
            required: [true, "Please write your concern"]
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Contact", contactSchema)