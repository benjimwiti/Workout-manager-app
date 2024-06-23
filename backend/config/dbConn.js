const mongoose = require("mongoose")
const dbURI = process.env.MONGO_URI

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI)
        .then(() => console.log('mongoDB says HI'))
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB