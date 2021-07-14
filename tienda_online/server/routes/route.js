const router = require('express').Router(); 
const product = require('../controllers/controller');

router.get('/api',product.getAllProducts)

module.exports=router