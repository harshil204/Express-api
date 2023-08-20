const asyncHandler = require("express-async-handler")
const User = require("../models/User")
const brcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// @desc Register a user
// @route POST /api/user/register
// @access public
const register = asyncHandler(async (req, res) => {
    const { username, email, password } = req?.body
    if ( !username || !email || !password ) {
        res.status(400)
        throw new Error("All fields are mandatory!")
    }
    const userAvailable = await User.findOne({email})
    if(userAvailable){
        res.status(409)
        throw new Error("Duplicate record found")
    }
    const hashedPassword =  await brcrypt.hash(password, 10)
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    }) 
    if(user){
        res.status(201).json({_id: user.id, email: user.email})
    }else{
        res.status(422)
        throw new Error("Please enter valid details")
    }
})

// @desc Authenticate a user
// @route POST /api/user/login
// @access public
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if(!email || !password){
        res.status(400)
        throw new Error("All fields are mendatory!")
    }
    const user = await User.findOne({email})
    if(user && (await brcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "1m"}
        )
        res.status(200).json({token: accessToken})
    }else{
        res.status(401)
        throw new Error("Email or password is not valid")
    }
})

// @desc get Authenticated User's Info
// @route GET /api/user
// @access public
const userInfo = asyncHandler(async (req, res) => {
    res.status(200).json({user: req.user})
})

module.exports = {
    register,
    login,
    userInfo
}