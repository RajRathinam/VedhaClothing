import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import baseUrl from "../config/config.js";

const API_URL = `${baseUrl}/api/testimonials`; // Change this to your backend URL

const CustomerOpinion = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({ name: "", testimonial: "", image: null });

  const [loading, setLoading] = useState(false);
   const [delId, setDelId] = useState(null);

  // Fetch testimonials from backend
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(API_URL);
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials", error);
      }
    };
    fetchTestimonials();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial({ ...newTestimonial, [name]: value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setNewTestimonial({ ...newTestimonial, image: e.target.files[0] });
  };

  // Add new testimonial
  const addTestimonial = async () => {
    if (!newTestimonial.name || !newTestimonial.testimonial || !newTestimonial.image) {
      alert("Please fill all fields before adding!");
      return;
    }

    const formData = new FormData();
    formData.append("name", newTestimonial.name);
    formData.append("testimonial", newTestimonial.testimonial);
    formData.append("image", newTestimonial.image);

    try {
      setLoading(true);
      const response = await axios.post(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setTestimonials([...testimonials, response.data]);
      setNewTestimonial({ name: "", testimonial: "", image: null });
      document.querySelector('input[type="file"]').value = "";
    } catch (error) {
      console.error("Error adding testimonial", error);
    }finally{
      setLoading(false);
      toast.success("Added Successfully!!!")
    }
  };

  // Delete testimonial
  const deleteTestimonial = async (id) => {
    try {
      setDelId(id);
      await axios.delete(`${API_URL}/${id}`);
      setTestimonials(testimonials.filter((testimonial) => testimonial._id !== id));
    } catch (error) {
      console.error("Error deleting testimonial", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#184355] sm:p-6 p-2 flex flex-col items-center">
      <h2 className="text-3xl sm:text-5xl font-bold font-breathney text-[#c59b41] mb-4">Testimonial Management</h2>

      {/* Add Testimonial Form */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6 w-full">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Add New Testimonial</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Customer Name / Experience" value={newTestimonial.name} onChange={handleInputChange} className="w-full p-3 border rounded-lg col-span-2  sm:col-span-1" />
          <input type="file" name="image" onChange={handleFileChange} className="w-full p-3 border rounded-lg col-span-2 sm:col-span-1" />
          <textarea name="testimonial" placeholder="Description" value={newTestimonial.testimonial} onChange={handleInputChange} className="w-full p-3 border rounded-lg col-span-2" />
        </div>
        <button onClick={addTestimonial} className="w-full mt-4 bg-[#c59b41] text-white py-3 rounded-lg hover:bg-[#a07c30] transition">{loading?<span className="loading loading-spinner loading-sm"></span>:"Add Testimonial"}</button>
      </div>

      {/* Testimonial Table */}
      <div className="w-full bg-white p-4 rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-gray-700">
          <thead>
            <tr className="bg-[#c59b41] text-white">
              <th className="p-3 border">Image</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Testimonial</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((testimonial) => (
              <tr key={testimonial._id} className="text-center border border-gray-300 hover:bg-gray-100 transition">
                <td className="p-3 border">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 object-cover rounded-box mx-auto" />
                </td>
                <td className="p-3 border">{testimonial.name}</td>
                <td className="p-3 border">{testimonial.testimonial}</td>
                <td className="p-3 border">
                  <button onClick={() => deleteTestimonial(testimonial._id)} className="text-red-500 hover:text-red-700">
                   {delId===testimonial._id? <span className="loading loading-spinner loading-sm"></span> : <FaTrash className="text-xl" />}
                  </button>
                </td>
              </tr>
            ))}
            {testimonials.length === 0 && <tr><td colSpan="4" className="text-center p-4">No testimonials added yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerOpinion;
