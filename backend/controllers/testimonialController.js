import Testimonial from "../models/Testimonial.js";
import cloudinary from "../config/cloudinary.js";

// @desc Get all testimonials
// @route GET /api/testimonials
export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Add new testimonial
// @route POST /api/testimonials
export const addTestimonial = async (req, res) => {
  try {
    const { name, testimonial } = req.body;
    const result = await cloudinary.uploader.upload(req.file.path); // Upload image to Cloudinary

    const newTestimonial = new Testimonial({
      name,
      image: result.secure_url, // Store Cloudinary image URL
      cloudinary_id: result.public_id, // Store Cloudinary public ID
      testimonial,
    });

    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(500).json({ message: "Error adding testimonial" });
  }
};

// @desc Delete a testimonial
// @route DELETE /api/testimonials/:id
export const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) return res.status(404).json({ message: "Testimonial not found" });

    // Delete image from Cloudinary
    await cloudinary.uploader.destroy(testimonial.cloudinary_id);

    // Delete testimonial from database
    await Testimonial.findByIdAndDelete(req.params.id);

    res.json({ message: "Testimonial and image deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting testimonial" });
  }
};
