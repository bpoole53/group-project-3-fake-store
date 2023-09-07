



const express = require("express");
const router = express.Router();
const productController = require("../../controllers/product-controller");

// GET Create a new product
router.post("/", productController.createProduct);

// PUT Update a product by ID
router.put("/:id", productController.updateProductById);

// GET all products
router.get("/", productController.getAllProducts);

// DELETE a product by ID
router.delete("/:id", productController.deleteProduct);

module.exports = router;