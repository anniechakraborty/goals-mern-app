const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to Momgo DB : ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Error connecting to Mongo DB : ${error}`.red.underline);
        process.exit(1);
    }
}

module.exports = {
    connectDB
}