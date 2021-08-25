const axios = require("axios");
module.exports = deleteBook;

const bookModel = require("./model.js");

function deleteBook(req, res) {
  let email = req.query.email;
  let bookID = req.params.id;

  bookModel.remove({ _id: bookID }, (error, bookData) => {
    if (error) {
      res.status(403).send("error in deleting the data");
    } else {
      console.log("data deleted", bookData);
      bookModel.find({ email: email }, function (err, books) {
        if (err) {
          console.log("error in getting the data");
        } else {
          // console.log(books);
          res.send(books);
        }
      });
    }
  });
}

// function deleteCatHandler(req,res) {
//   // console.log(req.query.catID)
//   console.log('inside the deleteCatHandler')
//   console.log(req.params)
//   console.log(req.params.catId2);
//   let ownerName= req.query.ownerName;

//   let catDataID = req.params.catId2;
//   kittenModel.remove({_id:catDataID},(error,catData)=>{
//       if(error) {
//           console.log('error in deleteing the data')
//       } else {
//           console.log('data deleted', catData)
//           kittenModel.find({ ownerName }, function (err, ownerData) {
//               if (err) {
//                   console.log('error in getting the data')
//               } else {
//                   console.log(ownerData);
//                   res.send(ownerData)
//               }
//           })
//       }
//   })
