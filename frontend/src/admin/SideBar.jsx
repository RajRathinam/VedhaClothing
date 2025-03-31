import React from 'react'
import { Link } from 'react-router-dom'
import { IoLogOut } from "react-icons/io5";
import { toast } from 'react-toastify';

const SideBar = ({setAdmin}) => {

  const handleLogout = () => {
    localStorage.removeItem("adminToken"); 
    setAdmin(null); 
    toast.warn("You have been logged out!");
  };

  return (
 <aside className='sm:w-1/4 sm:h-screen bg-primary sm:bg-white sm:py-8 py-4 flex sm:flex-col'>
  <h1 className='text-4xl font-oxygen text-primary font-bold text-center mb-10 hidden sm:block'>Admin Panel</h1>

<div className='flex sm:flex-col flex-row overflow-x-auto scrollbar-none gap-3 px-5'>
<Link to="/admin" className="btn btn-lg sm:btn-xl hover:bg-primary hover:text-accent bg-white w-full text-primary">Home</Link>
<Link to="/admin/contact" className="btn btn-lg sm:btn-xl hover:bg-primary hover:text-accent bg-white w-full text-primary">Contact Info.</Link>
<Link to="/admin/products" className="btn btn-lg sm:btn-xl hover:bg-primary hover:text-accent bg-white w-full text-primary">Products</Link>
<Link to="/admin/customeropinion" className="btn btn-lg sm:btn-xl hover:bg-primary hover:text-accent bg-white w-full text-primary">Customer Opinions</Link>
<div>
<button onClick={handleLogout} className="btn btn-lg sm:btn-xl w-full hover:bg-primary hover:text-accent bg-white flex gap-5 text-primary"><IoLogOut className='text-4xl'/>Logout</button>
</div></div>

 </aside>
  )
}

export default SideBar
