const express = require('express');
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
    searchProductsByTagName
} = require('../controllers/ProductController');
const { isManager, isCustomer, isEmployee } = require('../middleware/auth');

const router = express.Router();

router.route('/tags/search')
    .get(searchProductsByTagName); 

router.route('/search')
    .get(searchProducts);

router.route('/')
    .get(getAllProducts) 
    .post(isEmployee, createProduct); 

router.route('/:id')
    .get(getProductById) 
    .put(isEmployee, updateProduct)  
    .delete(isEmployee, deleteProduct); 

module.exports = router;
