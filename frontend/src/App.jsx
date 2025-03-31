import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState ,useEffect} from "react";
import "./App.css";
import Marquee from "./components/Marquee";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import TestimonialPage from "./pages/TestimonialPage"
import CategoryGallery from "./components/CategoryGallery";
import ContactUsPage from "./pages/ContactUsPage";
import OurProducts from "./pages/OurProducts";
import AdminPanel from "./admin/AdminPanel";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { HiH1 } from "react-icons/hi2";
import baseUrl from "./config/config.js";

function App() {

  const API_URL = baseUrl;

   const [categories, setCategories] = useState([]);
const [testimonials, setTestimonials] = useState([]);
 const [contactInfo, setContactInfo] = useState(null);

 // Fetch products from backend
 const fetchProducts = async () => {
   try {
     const { data } = await axios.get(`${API_URL}/api/products`);
     setCategories(data);
   } catch (error) {
     console.error("Error fetching products:", error);
     toast.error("Failed to fetch products");
   }
 };
 useEffect(() => {

  fetchProducts();
}, []);

  // Fetch testimonials from backend
  const fetchTestimonials = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/testimonials`);
      setTestimonials(response.data);
    } catch (error) {
      console.error("Error fetching testimonials", error);
    }
  };
  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Fetch contact details from backend
  const fetchContact = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/contact`); // API call to get data
      setContactInfo(data);
      
    } catch (error) {
      console.error("Error fetching contact details:", error);
    }
  };
  useEffect(() => {
    fetchContact();
  }, []);

  if (!contactInfo) return <section className='flex justify-center items-center h-screen'>
    <div className='p-3 bg-gradient-to-r from-primary via-accent to-secondary rounded-[50%] flex justify-center items-center'>
      <img src="/Web-logo.webp" className='w-[100px] h-[100px]' />
    </div>
  </section>;
  return (
    <Router>
      <Marquee contactInfo={contactInfo}/>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage fetchContact={fetchContact} testimonials={testimonials} categories={categories} contactInfo={contactInfo}/>} />
        <Route path="/about" element={<AboutUsPage contactInfo={contactInfo}/>} />
        <Route path="/testimonial" element={<TestimonialPage fetchTestimonials={fetchTestimonials} testimonials={testimonials} contactInfo={contactInfo}/>} />
        <Route path="/contactus" element={<ContactUsPage  contactInfo={contactInfo}/>} />
        <Route path="/gallery" element={<CategoryGallery categories={categories} fetchProducts={fetchProducts}/>} />
        <Route path="/poster" element={<OurProducts categories={categories}/>} />
        <Route path="/admin/*" element={<AdminPanel />} />
      </Routes>
      <Footer  contactInfo={contactInfo}/>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
