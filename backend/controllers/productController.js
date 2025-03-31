import Product from "../models/productModel.js";
import cloudinary from "../config/cloudinary.js";

// @desc Get all products
// @route GET /api/products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Add new product
// @route POST /api/products
export const addProduct = async (req, res) => {
  try {
    const { name, description, tag } = req.body;
    const result = await cloudinary.uploader.upload(req.file.path);

    const product = new Product({
      name,
      image: result.secure_url,
      description,
      tag,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error adding product" });
  }
};

// @desc Delete a product
// @route DELETE /api/products/:id
export const deleteProduct = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) return res.status(404).json({ message: "Product not found" });
  
      // Extract Cloudinary public_id from the image URL
      const imageUrl = product.image;
      const publicId = imageUrl.split("/").pop().split(".")[0]; // Extract public_id from URL
  
      // Delete the image from Cloudinary
      await cloudinary.uploader.destroy(publicId);
  
      // Delete product from database
      await Product.findByIdAndDelete(req.params.id);
  
      res.json({ message: "Product and image deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting product" });
    }
  };