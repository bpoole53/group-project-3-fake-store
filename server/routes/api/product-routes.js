


const express = require("express");
const router = express.Router();
const productController = require("../../controllers/product-controller");

// POST Create a new product
router.post("/", productController.createProduct);

// PUT Update a product by ID
router.put("/:id", productController.updateProductById);

// GET all products
router.get("/", productController.getAllProducts);

// DELETE a product by ID
router.delete("/:id", productController.deleteProductById);

module.exports = router;