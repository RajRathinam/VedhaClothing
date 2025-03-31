import Contact from "../models/Contact.js";

// Get contact details
export const getContact = async (req, res) => {
  try {
    const contact = await Contact.findOne(); // Fetch the first contact record
    if (!contact) return res.status(404).json({ message: "Contact not found" });

    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update contact details
export const updateContact = async (req, res) => {
  try {
    let contact = await Contact.findOne(); // Fetch existing contact

    if (!contact) {
      contact = new Contact(req.body);
    } else {
      contact.set(req.body); // Update fields
    }

    await contact.save();
    res.json({ message: "Contact updated successfully", contact });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
