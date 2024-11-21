const express = require('express');
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/ProductController');
const { isManager, isCustomer } = require('../middleware/auth');

const router = express.Router();

router.route('/')
    .get(isCustomer, getAllProducts) 
    .post(isManager, createProduct); 

router.route('/:id')
    .get(isCustomer, getProductById) 
    .put(isManager, updateProduct)  
    .delete(isManager, deleteProduct); 

module.exports = router;