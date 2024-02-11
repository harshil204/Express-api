const mongoose = require("mongoose")

const expensesSchema = mongoose.Schema(
    {
        receipt_img: {
            type: String,
            required: [true, "Receipt is required"]
        },

        title: {
            type: String,
            required: [true, "Title is required"]
        },

        description: {
            type: String,
            required: [true, "Description is required"]
        },

        amount: {
            type: String,
            required: [true, "Amount is required"]
        },

        expenseCategory: {
            type: String,
            required: [true, "Expense Category is required"]
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Expenses", expensesSchema)