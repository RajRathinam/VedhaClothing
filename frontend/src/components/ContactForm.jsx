import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here, you can integrate with a backend or email service
  };

  return (
   <section className="p-3 sm:p-12 bg-accent/50">
     <div className="max-w-lg sm:mx-auto p-3 sm:p-6 bg-primary shadow-lg rounded-lg">
      <h2 className="text-5xl sm:text-6xl font-bold text-center text-secondary font-breathney mb-4">Contact Us</h2>
      <p className="text-center hidden sm:block text-accent mb-6">
        We would love to hear from you! Send us your thoughts, and we’ll get back to you soon.
      </p>
      <form onSubmit={handleSubmit} className="sm:space-y-4">
        <div>
          <label className="block text-gray-700">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full sm:p-2 p-1 border rounded-lg"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-1 sm:p-2 border rounded-lg"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            placeholder="Enter your message here"
            className="w-full p-1 sm:p-2 mb-1 border rounded-lg"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-secondary/90 text-white p-2 rounded-lg hover:bg-secondary">
          Submit
        </button>
      </form>
    </div>
   </section>
  );
};

export default ContactForm;
