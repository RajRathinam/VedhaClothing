import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  youtube: { type: String },
  instagram: { type: String },
  whatsapp: { type: String },
  mapUrl: { type: String },
  special_offer: { type: String }
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
