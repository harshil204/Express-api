// Need to implement UserModel and Continue the video after skipping 1 hour

const express = require("express");
const connectDB = require("./config/dbConnection")
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config() ;

const app = express()
const port = process.env.PORT || 5000
connectDB()

app.use(express.json())
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use("/api/user", require("./routes/userRoutes"))
app.use(errorHandler)

app.listen(port, () =>{
    console.log(`Hello world from express js on the port of ${port}`)
})