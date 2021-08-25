const axios = require("axios");
module.exports = addBook; 

const bookModel = require("./model.js");

function addBook(req, res) {
    let { email, title, description } = req.body;
  
    bookModel.findOne({ email: email }, function (error, books) {
      if (error) {
        res.send("NO DATA :(");
      } else {
        books.push({
          title,
          description,
        });
  
        books.save();
        res.send(books);
      }
    })

}
// await bookModel.create({ title, description });

  // bookModel.findOne({ email: email }, function (err, books) {
  //   if (err) {
  //     console.log("error in getting the data");
  //   } else {
  //     // console.log(books);
  //     books.save();
  //     res.send(books);
  //   }
  // });