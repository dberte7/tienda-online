const mongoose = require("mongoose");
const Schema = mongoose.Schema;

 const productSchema = new Schema({
   name: {
     type: String,
     required: true,
     unique: true,
   },
   url: {
    type: String,
    required: true,
  },
   price: {
     type: Number,
     required: true,
   },
   relevance: {
     type: Number,
     required: true,
   },
   manufacter: {
     type: String,
     required: true,
   },
   address: {
     type: String,
     required: true,
   },
   cif: {
     type: String,
     required: true,
   },
 });

const Product = mongoose.model("products", productSchema);
module.exports = Product;