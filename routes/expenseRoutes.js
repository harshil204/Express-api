const express = require("express")
const router = express.Router()
const {
    createExpense,
    getExpenses,
    getExpense,
    updateExpense,
    deleteExpense
} = require("../controllers/expenseController")

router.route("/").get(getExpenses).post(createExpense)
router.route("/:id").get(getExpense).put(updateExpense).delete(deleteExpense)

module.exports = router