'use strict';

const { products } = require('../models/index');


async function createProduct (req,res) {
  let productData = req.body;
  let newProduct = await products.create(productData);
  res.status(201).json(newProduct);
}


async function getProducts (req , res) {
  const id = parseInt(req.params.id);
  let oneProduct = await Items.get(id);
  res.status(200).json(oneProduct);
}

async function getAllProducts(req, res) {
  let allProducts = await products.getAll();
  res.status(200).json(allProducts);
}

async function updateProduct (req , res) {
  const id = parseInt(req.params.id);
  let productData = req.body;
  let updateProducts = await products.update(id ,productData);
  res.status(200).json(updateProducts);
}

async function deleteProduct (req , res) {
  const id = parseInt(req.params.id);
  let deleteProduct = await products.delete(id);
  res.status(204).json(deleteProduct);
}

module.exports = {
    createProduct,
    getProducts,
    getAllProducts,
    updateProduct,
    deleteProduct,
};