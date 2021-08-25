const axios = require("axios");
module.exports = deleteBook; 

const bookModel = require("./model.js");


function deleteBook(req, res) {
    let index = Number(req.params.id);
  
    let email = req.query.email;
  
    // bookModel.findOne({ email: email }, (error, books) => {
    //   if (error) {
    //     res.send("NO DATA :(");
    //   } else {
    //     let books2 = books.filter((book, i2) => {
    //       if (i2 !== index) {
    //         return book;
    //       }
    //     });
    //     // console.log(books2);
    //     books = books2;
    //     console.log(books[0]);
    //         books.save();
    //     res.send(books);
    //   }
    // });
  
    bookModel.remove({ _id: index }, (error, books) => {
      if (error) {
        console.log("error in deleteing the data");
      } else {
        bookModel.findOne({ email: email }, function (err, books) {
          if (err) {
            console.log("error in getting the data");
          } else {
            books.save();
            res.send(books);
          }
        });
      }
    });
  }