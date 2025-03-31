import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import baseUrl from "../config/config.js";

const Contact = () => {

const Api_url = baseUrl;

  const [contactInfo, setContactInfo] = useState({
    address: "",
    phone: "",
    email: "",
    youtube: "",
    instagram: "",
    whatsapp: "",
    mapUrl: "",
    special_offer: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch contact details from backend
  useEffect(() => {
    const fetchContact = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${Api_url}/api/contact`); // API call to get data
        setContactInfo(data);
      } catch (error) {
        console.error("Error fetching contact details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchContact();
  }, []);

  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.put(`${Api_url}/api/contact`, contactInfo); // API call to update data
      setMessage("Contact details updated successfully!");
    } catch (error) {
      console.error("Error updating contact details:", error);
      setMessage("Failed to update contact details.");
    } finally {
      setLoading(false);
      toast.success("Successfully Updated!!!")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#184355] sm:py-10">
      <div className="w-full max-w-3xl bg-white p-3 sm:p-8 sm:rounded-lg shadow-lg">
        <h2 className="sm:text-3xl text-xl font-bold text-[#c59b41] text-center font-merienda">
          Edit Contact Details
        </h2>
  
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Address:</label>
            <input
              type="text"
              name="address"
              value={contactInfo.address}
              onChange={handleChange}
              className="w-full sm:p-2 p-1 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Phone:</label>
            <input
              type="text"
              name="phone"
              value={contactInfo.phone}
              onChange={handleChange}
              className="w-full sm:p-2 p-1 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              value={contactInfo.email}
              onChange={handleChange}
              className="w-full sm:p-2 p-1 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">YouTube Link:</label>
            <input
              type="text"
              name="youtube"
              value={contactInfo.youtube}
              onChange={handleChange}
              className="w-full sm:p-2 p-1 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Instagram Link:</label>
            <input
              type="text"
              name="instagram"
              value={contactInfo.instagram}
              onChange={handleChange}
              className="w-full sm:p-2 p-1 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">WhatsApp Link:</label>
            <input
              type="text"
              name="whatsapp"
              value={contactInfo.whatsapp}
              onChange={handleChange}
              className="w-full sm:p-2 p-1 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Google Map URL:</label>
            <input
              type="text"
              name="mapUrl"
              value={contactInfo.mapUrl}
              onChange={handleChange}
              className="w-full sm:p-2 p-1 border rounded-lg"
            />
          </div>

          {/* Offer Field */}
          <div>
            <label className="block text-gray-700 font-semibold">Special Offer:</label>
            <input
              type="text"
              name="special_offer"
              value={contactInfo.special_offer}
              onChange={handleChange}
              className="w-full sm:p-2 p-1 border rounded-lg"
              placeholder="Enter any ongoing offers..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#c59b41] text-white py-2 font-oxygen rounded-lg hover:bg-[#a07c30] transition duration-300"
            disabled={loading}
          >
            {loading ? <span className="loading loading-spinner loading-sm"></span> : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
