const asyncHandler = require("express-async-handler")
const Expenses = require("../models/Expenses")


const createExpense = asyncHandler(async (req, res) => {
    try {
        const { receipt_img, title, description, amount, expenseCategory } = req?.body
        if (
            !receipt_img ||
            !title ||
            !description ||
            !amount ||
            !expenseCategory
        ) {
            res.status(403)
            throw new Error("Please enter all required fields")
        }
        const data = await Expenses.create({
            receipt_img,
            title,
            description,
            amount,
            expenseCategory
        })
        res.status(200).json({ message: "Record has been created", data })
    } catch (error) {
        res?.status(400).json({ message: error?.message })
    }
})

const getExpenses = asyncHandler(async (req, res) => {
    try {
        const data = await Expenses.find();
        res.status(200).json({ message: 'success', data })
    } catch (error) {
        res?.status(400).json({ message: error?.message })
    }
})

const getExpense = asyncHandler(async (req, res) => {
    try {
        const id = req?.params?.id
        const data = await Expenses.findById(id);
        res.status(200).json({ message: 'success', data })
    } catch (error) {
        res?.status(400).json({ message: error?.message })
    }
})

const updateExpense = asyncHandler(async (req, res) => {
    try {
        const { receipt_img, title, description, amount, expenseCategory } = req?.body
        if (
            !receipt_img ||
            !title ||
            !description ||
            !amount ||
            !expenseCategory
        ) {
            res.status(403)
            throw new Error("Please enter all required fields")
        }
        const data = await Expenses.findById(req.params.id);
        if (!data) {
            res.status(404)
            throw new Error("No records found")
        }
        const updateExpense = await Expenses.updateOne(
            { _id: req?.params?.id },
            {
                $set: {
                    receipt_img: receipt_img ?? data?.receipt_img,
                    title: title ?? data?.title,
                    description: description ?? data?.description,
                    amount: amount ?? data?.amount,
                    expenseCategory: expenseCategory ?? data?.expenseCategory,
                }
            }
        )
        res.status(200).json({ message: "Record update successfully", data: updateExpense })
    } catch (error) {
        res?.status(400).json({ message: error?.message })
    }
})

const deleteExpense = asyncHandler(async (req, res) => {
    try {
        const data = await Expenses.findById(req.params.id);
        if (!data) {
            res.status(404)
            throw new Error("No records found")
        }
        const deletedExpense = await Expenses.findByIdAndRemove(req.params.id)
        res.status(200).json({ message: `Record No. ${req.params.id} has been deleted successfully`, data: deletedExpense })
    } catch (error) {
        res?.status(400).json({ message: error?.message })
    }
})

module.exports = {
    createExpense,
    getExpenses,
    getExpense,
    updateExpense,
    deleteExpense
}