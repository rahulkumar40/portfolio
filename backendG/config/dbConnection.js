const mongoose = require("mongoose");

require('dotenv').config();
const DATA_BASE_URL = process.env.DATA_BASE_URL;
const connection = ()=>{
    mongoose.connect(DATA_BASE_URL)
    .then(()=>{
        console.log("DB is Connected successfully")
    })
    .catch((e)=>{
        process.exit();
    })
}

module.exports = connection;