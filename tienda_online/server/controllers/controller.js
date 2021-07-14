const Product = require("../models/product")

const routes = {
    getAllProducts: async (req,res) => {
        try{
        let data = await Product.find({})
        // console.log(data)
        res.status(200).json(data)
        } catch(err){
            console.log(err)
        }
    }
}

module.exports=routes