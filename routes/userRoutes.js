const express = require("express")
const router = express.Router()
const {
    register,
    login,
    userInfo
} = require("../controllers/userController")
const validateToken = require("../middleware/validateTokenHandler")

router.get("/", validateToken, userInfo)
router.post("/register",  register)
router.post("/login", login)


module.exports = router