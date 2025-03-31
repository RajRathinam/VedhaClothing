import React from 'react';
import { IoHome,IoInformationCircleSharp,IoShirt ,IoCallSharp  } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar p-1 sm:px-10 gap-5 bg-base-100 shadow-md z-50 sticky top-10 left-0 right-0">
      <div className="navbar-end w-full flex justify-between">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
           <TiThMenu className='text-3xl text-primary'/>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-100 gap-4 z-1 mt-6 -ml-1 w-52 p-2 shadow">
            <li className='font-merienda text-lg text-primary hover:bg-transparent'><Link to="/"><IoHome className="text-2xl"/>Home</Link></li>
          <li className='font-merienda text-lg text-primary hover:bg-transparent'><Link to="/poster"><IoShirt className="text-2xl"/>Our Products</Link></li>
          <li className='font-merienda text-lg text-primary hover:bg-transparent'><Link to="/testimonial"><FaUser className="text-2xl"/>Testimonials</Link></li>
          <li className='font-merienda text-lg text-primary hover:bg-transparent'><Link to="/about"><IoInformationCircleSharp className="text-2xl"/>About Us</Link> </li>
          <li className='font-merienda text-lg text-primary hover:bg-transparent'><Link to="/contactus"><IoCallSharp className="text-2xl"/>Contact Us</Link></li>
          </ul>
        </div>
        <div className='flex gap-2 sm:gap-5 sm:hidden'>
          <img src="/Web-logo.webp" className='w-20 h-20' />
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-oxygen font-medium bg-gradient-to-r from-[#c9a227] via-[#144552] to-[#e6d2b6] bg-[200%] bg-clip-text text-transparent animate-glitter-slide">
              Vedha <span className='font-breathney'>Clothing</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="navbar-center w-full hidden lg:flex justify-between">
      <div className='sm:flex gap-5 hidden'>
          <img src="/Web-logo.webp" className='w-20 h-20' />
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-oxygen font-medium bg-gradient-to-r from-[#c9a227] via-[#144552] to-[#ebcb9f] bg-[200%] bg-clip-text text-transparent animate-glitter-slide">
              Vedha <span className='font-breathney'>Clothing</span>
            </h1>
          </div>
        </div>
        <ul className="menu menu-horizontal px-1 gap-3">
          <li className='font-merienda text-lg text-primary hover:bg-transparent'><Link to="/"><IoHome className="text-2xl"/>Home</Link></li>
          <li className='font-merienda text-lg text-primary hover:bg-transparent'><Link to="/poster"><IoShirt className="text-2xl"/>Our Products</Link></li>
          <li className='font-merienda text-lg text-primary hover:bg-transparent'><Link to="/testimonial"><FaUser className="text-2xl"/>Testimonials</Link></li>
          <li className='font-merienda text-lg text-primary hover:bg-transparent'><Link to="/about"><IoInformationCircleSharp className="text-2xl"/>About Us</Link> </li>
          <li className='font-merienda text-lg text-primary hover:bg-transparent'><Link to="/contactus"><IoCallSharp className="text-2xl"/>Contact Us</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
