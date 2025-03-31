import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = ({ contactInfo}) => {

  const contact = contactInfo;

  return (
    <footer className="footer sm:footer-horizontal bg-primary text-accent items-center px-2 sm:px-6 py-1 z-50">
    <aside className="grid-flow-col items-center">
      <img src="/Web-logo.webp" className='w-10 h-10'/>
      <p>© {new Date().getFullYear()} Vedha Clothing - All right reserved</p>
    </aside>
    <nav className="grid-flow-col hidden sm:flex gap-4 md:place-self-center md:justify-self-end">
   { contact.whatsapp &&  <a href={`${contact.whatsapp}`}>
       <IoLogoWhatsapp className='text-2xl text-[#e9e6de] font-bold'/>          
      </a>}
   { contact.youtube &&  <a href={`${contact.youtube}`}>
          <FaYoutube className='text-2xl text-[#e9e6de] font-bold'/>                        
      </a>}
      {contact.instagram && <a href={`${contact.instagram}`}>
       <FaInstagram className='text-2xl text-[#e9e6de] font-bold'/>
      </a>}
    </nav>
  </footer>
  )
}

export default Footer
