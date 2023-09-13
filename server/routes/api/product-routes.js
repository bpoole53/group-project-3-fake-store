


const express = require("express");
const router = express.Router();
const productController = require("../../controllers/product-controller");

/// http://localhost:3001/api/product

// POST Create a new product
router.post("/", productController.createProduct);

// PUT Update a product by ID
router.put("/:id", productController.updateProductById);

// GET all products
router.get("/", productController.getAllProducts);

// DELETE a product by ID
router.delete("/:id", productController.deleteProductById);

// GET large water vessels
router.get("/large-water-vessels", productController.getLargeWaterVessels);

// GET small water vessels
router.get("/small-water-vessels", productController.getSmallWaterVessels);

// GET a single product by ID
router.get("/:id", productController.getProductById);


module.exports = router;