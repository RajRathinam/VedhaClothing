import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import baseUrl from "../config/config.js";


const Products = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    name: "",
    image: null, // File object instead of URL
    description: "",
    tag: "",
  });
  const [loading, setLoading] = useState(false);
  const [delId, setDelId] = useState(null);

  // Backend API URL
  const API_URL = `${baseUrl}/api/products`;

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(API_URL);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to fetch products");
      }
    };

    fetchProducts();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setNewCategory({ ...newCategory, image: e.target.files[0] });
  };

  // Add new product (POST request)
  const addCategory = async () => {
    if (!newCategory.name || !newCategory.image || !newCategory.description || !newCategory.tag) {
      toast.error("Please fill all fields before adding!");
      return;
    }

    const formData = new FormData();
    formData.append("name", newCategory.name);
    formData.append("description", newCategory.description);
    formData.append("tag", newCategory.tag);
    formData.append("image", newCategory.image); // Send image as file

    try {
      setLoading(true);
      const { data } = await axios.post(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" }, // Important for file uploads
      });
      setLoading(false);
      setCategories([...categories, data]);
      setNewCategory({ name: "", image: null, description: "", tag: "" });
      document.querySelector('input[type="file"]').value = "";
      toast.success("Product added successfully!");
    } catch (error) {
      setLoading(false);
      console.error("Error adding product:", error);
      toast.error("Failed to add product");
    }
  };

  // Delete product (DELETE request)
  const deleteCategory = async (id) => {
    try {
    setDelId(id);
      await axios.delete(`${API_URL}/${id}`);
      setCategories(categories.filter((category) => category._id !== id));
      toast.success("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product");
    }
  };

  return (
    <div className="min-h-screen bg-[#184355] sm:p-6 p-3 flex flex-col items-center">
      <h2 className="text-3xl sm:text-5xl font-bold font-breathney text-[#c59b41] mb-4">Product Management</h2>

      {/* Add Category Form */}
      <div className="bg-white p-3 sm:p-6 rounded-lg shadow-md mb-6 w-full">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Add New Product</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Product Name" value={newCategory.name} onChange={handleInputChange} className="w-full sm:p-2 p-1 border rounded-lg" />
          <input type="file" accept="image/*" onChange={handleFileChange} className="w-full sm:p-2 p-1 border rounded-lg" />
          <input type="text" name="description" placeholder="Description" value={newCategory.description} onChange={handleInputChange} className="w-full sm:p-2 p-1 border rounded-lg" />
          <input type="text" name="tag" placeholder="Tag" value={newCategory.tag} onChange={handleInputChange} className="w-full sm:p-2 p-1 border rounded-lg" />
        </div>
        <button onClick={addCategory} className="w-full mt-4 bg-[#c59b41] text-white py-2 rounded-lg hover:bg-[#a07c30] transition" disabled={loading}>
          {loading ? <span className="loading loading-spinner loading-sm"></span> : "Add Product"}
        </button>
      </div>

      {/* Product Table */}
      <div className="w-full bg-white sm:p-4 p-3 rounded-lg shadow-lg overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-[#c59b41] text-white">
              <th className="p-2 border">Image</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Tag</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category._id} className="text-center border border-gray-200">
                <td className="p-2 border"><img src={category.image} alt={category.name} className="w-16 h-16 object-cover mx-auto rounded" /></td>
                <td className="p-2 border">{category.name}</td>
                <td className="p-2 border">{category.description}</td>
                <td className="p-2 border">{category.tag}</td>
                <td className="p-2 border">
                  <button onClick={() => deleteCategory(category._id)} className="text-red-500 hover:text-red-700">
                  {delId === category._id ?<span className="loading loading-spinner loading-sm"></span> :<FaTrash className="text-xl" />}
                  </button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && <tr><td colSpan="5" className="text-center p-4">No products added yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
