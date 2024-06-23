// ========== IMPORTS ==============
require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./config/dbConn')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')

/*  route imports */
const workouts = require("./routes/api/workouts")


// ============ VARIABLES ===============
const PORT = process.env.PORT


// ============== MIDDLEWARE =================
app.use(express.json())
connectDB()
app.use(cors(corsOptions))


// ============== ROUTES =================
app.use('/workouts', workouts)


// ============= Listener ===============
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
} )

