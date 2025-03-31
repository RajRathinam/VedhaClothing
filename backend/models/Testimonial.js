import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true }, // Cloudinary image URL
    cloudinary_id: { type: String, required: true }, // Cloudinary public ID for deletion
    testimonial: { type: String, required: true },
  },
  { timestamps: true }
);

const Testimonial = mongoose.model("Testimonial", testimonialSchema);
export default Testimonial;
