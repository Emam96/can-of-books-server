


const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/books", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  
  //Schema
  const Book = new mongoose.Schema({
    title: String,
    description: String,
    email: String,
  });




  module.exports = Book;









