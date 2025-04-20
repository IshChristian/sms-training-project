const mongoose = require('mongoose');

const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://127.0.0.1:27017/training");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = ConnectDB;