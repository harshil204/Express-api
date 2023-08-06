const asyncHandler = require("express-async-handler")


// @desc Register a user
// @route POST /api/user/register
// @access public
const register = asyncHandler(async (req, res) =>{
    res.json({message: "Register the user"})
})

// @desc Authenticate a user
// @route POST /api/user/login
// @access public
const login = asyncHandler(async (req, res) => {
    res.json({message: "Logged in user"})
})

// @desc get Authenticated User's Info
// @route GET /api/user
// @access public
const userInfo = asyncHandler(async (req, res) =>{
    res.json({message: "Current user info"})
})

module.exports = {
    register,
    login,
    userInfo
}