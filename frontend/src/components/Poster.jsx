import React from 'react'
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { useEffect,useState } from 'react';

const Poster = () => {

  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/ShopBG.webp')" }}>
   
   <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(0,0,0,0.27)] before:to-[rgba(60,95,113,0.25)]"></div>
  
        <Link to="/admin"
          className="hover:opacity-100 z-50 absolute right-2 text-white top-2 text-2xl opacity-0 bg-black/35 p-4 rounded-full sm:text-3xl font-extrabold cursor-pointer"
        >
          <FaUser />
        </Link>
     

    <div className="relative flex flex-col sm:gap-8 items-center justify-center h-full text-white text-center px-6">
      <h1 className="text-5xl sm:text-6xl text-secondary font-breathney font-extrabold">
      Our Products</h1>
      <h2 className="text-lg sm:text-3xl text-accent mb-6">"Explore our trendy and fashionable collection for every occasion!"</h2>
      <Link to="/gallery" className="bg-gradient-to-r from-primary to-secondary/70 font-merienda text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
  See Our Collection
</Link>

    </div>
  </section>
  )
}

export default Poster
