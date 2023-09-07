


const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// POST create a new product
router.post("/", productController.createProduct);

// PUT update a product by ID
router.put("/:id", productController.updateProductById);

// GET ALL products
router.get("/", productController.getAllProducts);

// DELETE a product by ID
router.delete("/:id", productController.deleteProduct);
=======
const router = require('express').Router();


module.exports = router;