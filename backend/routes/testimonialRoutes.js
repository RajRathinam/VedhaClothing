import express from "express";
import { getTestimonials, addTestimonial, deleteTestimonial } from "../controllers/testimonialController.js";
import upload from "../middleware/uploadMiddleware.js"; // Multer middleware for file uploads

const router = express.Router();

router.get("/", getTestimonials); // Get all testimonials
router.post("/", upload.single("image"), addTestimonial); // Add new testimonial
router.delete("/:id", deleteTestimonial); // Delete a testimonial

export default router;
