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
    }, 
    getProduct: async (req,res) => {
        let name = req.params.name
        let regex = new RegExp(name, 'i')
        let data = await Product.find({
            $or:[
                {'name': {$regex: regex}},
                {'manufacter': {$regex: regex}}
            ]
            })
            console.log(data)
        res.status(200).json(data)
    }
}

module.exports=routes