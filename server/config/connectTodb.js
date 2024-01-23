// load env variables
    require('dotenv').config();

const mongoose = require('mongoose');
async function connectTodb(){
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
    }}
module.exports = connectTodb;