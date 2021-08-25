const axios = require("axios");
module.exports = addBook; 

const bookModel = require("./model.js");

async function addBook(req, res) {
    let { email, title, description } = req.body;
  
   
   
   await bookModel.create({ title, description, email });

  bookModel.find({ email: email }, function (err, books) {
    if (err) {
      console.log("error in getting the data");
    } else {
      console.log(books);
      res.status(201).send(books);
    }
  });
   

}


//   async function addCatHandler(req, res) {
//     console.log(req.body);
//     // { catName: 'mishmish', catBreed: 'persian', ownerName: 'razan' }
//     // let owner = req.body.ownerName;
//     // let name = req.body.catName;
//     // let breed = req.body.catBreed;
//     let { catName, catBreed, ownerName } = req.body;
//     // const newCat = new kittenModel({
//     //     ownerName: ownerName,
//     //     catName: catName,
//     //     catBreed: catBreed
//     // })

//     // await newCat.save();

//     await kittenModel.create({ownerName,catName,catBreed})
//     // await kittenModel.create(req.body)


//     kittenModel.find({ ownerName }, function (err, ownerData) {
//         if (err) {
//             console.log('error in getting the data')
//         } else {
//             console.log(ownerData);
//             res.send(ownerData)
//         }
//     })



// }




// bookModel.findOne({ email: email }, function (error, books) {
    //   if (error) {
    //     res.send("NO DATA :(");
    //   } else {
    //     books.push({
    //       title,
    //       description,
    //     });
  
    //     books.save();
    //     res.status(201).send(books);
    //   }
    // })