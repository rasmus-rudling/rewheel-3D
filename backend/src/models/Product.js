import mongoose from "mongoose";

const schema = new mongoose.Schema({
  modelSrc: String ,
  name: String ,
  brand: String ,
  grade: Number ,
  numReviews: Number ,
  price: Number,
  imgLink: String ,
  type: String 
});


module.exports = mongoose.model("Product", schema);