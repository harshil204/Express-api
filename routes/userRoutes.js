const express = require("express")
const router = express.Router()
const {
    register,
    login,
    userInfo
} = require("../controllers/userController")

router.get("/", userInfo)

router.post("/register",  register)

router.post("/login", login)


module.exports = router