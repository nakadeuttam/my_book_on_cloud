const mongoose = require('mongoose');
const mongoURI='mongodb://localhost:27017/my_book-User';


const connectToMongo=()=>{
    mongoose.connect(mongoURI);
    console.log("Connected to database successfully")
    
}

module.exports = connectToMongo;