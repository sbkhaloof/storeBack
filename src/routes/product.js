'use strict';

const express = require('express');
const router = express.Router();

const {
    createProduct,
    getProducts,
    getAllProducts,
    updateProduct,
    deleteProduct,

} = require('../modules/implementations');

router.post('/Product' , createProduct);
router.get('/Product/:id', getProducts);
router.get('/Products', getAllProducts);
router.put('/Product/:id', updateProduct);
router.delete('/Product/:id', deleteProduct);

module.exports = router;