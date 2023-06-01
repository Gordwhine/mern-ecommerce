require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set("strictQuery", false);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true
        });
        console.log('MongoDB connection SUCCESS')
    } catch (error) {
        console.error('MongoDB connection FAIL')
        //console.log(error)
        process.exit(1);
    }
}

module.exports = connectDB;