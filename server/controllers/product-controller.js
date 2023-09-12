

const Product = require ("../models/Product")


const productController = {

  createProduct: async (req, res) => {
    try {
      const product = await Product.create(req.body);
      return res.status(201).json({ status: "success", payload: product });
    } catch (err) {
      console.error(err.message);
      return res.status(400).json({ status: "error", msg: `Error creating product: ${err.message}` });
    }
  },

  updateProductById: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedProduct) {
        return res.status(404).json({ status: "error", msg: "Product not found" });
      }
      return res.status(200).json({ status: "success", payload: updatedProduct });
    } catch (err) {
      console.error(err.message);
      return res.status(400).json({ status: "error", msg: `Error updating product: ${err.message}` });
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      return res.status(200).json({ status: "success", payload: products });
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ status: "error", msg: "Server error" });
    }
  },

  deleteProductById: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);
      if (!deletedProduct) {
        return res.status(404).json({ status: "error", msg: "Product not found" });
      }
      return res.status(200).json({ status: "success", payload: deletedProduct });
    } catch (err) {
      console.error(err.message);
      return res.status(400).json({ status: "error", msg: `Error deleting product: ${err.message}` });
    }
  },

  getLargeWaterVessels: async (req, res) => {
    try {
      const largeWaterVessels = await Product.find({ category: "Large Water Vessel" });
      return res.status(200).json({ status: "success", payload: largeWaterVessels });
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ status: "error", msg: "Server error" });
    }
  },

  getSmallWaterVessels: async (req, res) => {
    try {
      const smallWaterVessels = await Product.find({ category: "Small Water Vessel" });
      return res.status(200).json({ status: "success", payload: smallWaterVessels });
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ status: "error", msg: "Server error" });
    }
  },
  
  getProductById: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ status: "error", msg: "Product not found" });
      }
      return res.status(200).json({ status: "success", payload: product });
    } catch (err) {
      console.error(err.message);
      return res.status(400).json({ status: "error", msg: `Error fetching product: ${err.message}` });
    }
  },
};

module.exports = productController
  