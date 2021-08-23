"use strict";

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");
const mongoose = require("mongoose");

const PORT = process.env.PORT;
const server = express();
server.use(cors());
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

//Model
const bookModel = mongoose.model("book", Book);

let arr = [];

function seedDataCollection() {
  const book1 = new bookModel({
    title:
      "Numbers Don't Lie: 71 Stories to Help Us Understand the Modern World",
    description:
      "An essential guide to understanding how numbers reveal the true state of our world—exploring a wide range of topics including energy, the environment, technology, transportation, and food production.",
    email: "emamsh990@gmail.com",
  });

  arr.push(book1);

  const book2 = new bookModel({
    title: "Blue Ocean Strategy",
    description:
      "Drawing on more than a decade of new research, Blue Ocean Shift is the definitive guide to help you move beyond competing, inspire your people’s confidence, and seize new growth.",
    email: "emamsh990@gmail.com",
  });

  arr.push(book2);

  const book3 = new bookModel({
    title: "A Short History of Nearly Everything",
    description:
      "In Bryson's biggest book, he confronts his greatest challenge: to understand—and, if possible, answer—the oldest, biggest questions we have posed about the universe and ourselves.",
    email: "emamsh990@gmail.com",
  });

  arr.push(book3);

  book1.save();
  book2.save();
  book3.save();
}

seedDataCollection();

console.log(arr);

server.get("/books", getData);

function getData(req, res) {
  let arr2 = arr.map((x) => {
    return x;
  });

  res.send(arr2);
}

server.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});