const mongoose = require("mongoose");
// const Prod = require('../models/product')

mongoose.connect('mongodb://localhost:27017/onlineShop', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex:true});
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", async() => {
    console.log("connection to db established")
});
