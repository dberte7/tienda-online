const router = require('express').Router(); 
const product = require('../controllers/controller');

router.get('/api',product.getAllProducts)
router.get('/api/:name',product.getProduct)

module.exports=router