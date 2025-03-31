import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import GetInTouch from "./GetInTouch";

const ReachUs = ({contactInfo}) => {
  
const contact = contactInfo;

    return (
        <section className="sm:px-10 bg-primary">
             
            <div className=" mx-auto bg-white/10 backdrop-blur-lg border border-white/30 shadow-lg sm:rounded-xl p-2 sm:p-8 flex flex-col sm:flex-row  gap-6">
                
             <div className="sm:w-1/2 w-full flex flex-col justify-between">
            <h1 className='text-4xl text-secondary sm:text-5xl text-center text-blue mb-4 font-breathney font-extrabold'>Reach Us</h1>
               
                   <div className="flex flex-col justify-center mb-4 gap-3 sm:gap-6 w-full">
                    <div className="flex items-center gap-4 text-[#e9e6de]">
                        <FaMapMarkerAlt className="text-xl sm:text-3xl" />
                        <p className="sm:text-lg leading-relaxed">{contact.address}</p>
                    </div>

                    <div className="flex items-center gap-4 text-[#e9e6de]">
                        <FaPhoneAlt className="text-xl sm:text-2xl" />
                        <p className="sm:text-lg">{contact.phone}</p>
                    </div>

                    <div className="flex items-center gap-4 text-[#e9e6de]">
                        <FaEnvelope className="text-xl sm:text-2xl" />
                        <p className="sm:text-lg">{contact.email}</p>
                    </div>
                        <div className='sm:w-[20%] flex justify-evenly my-2 gap-2 sm:gap-5'>
                        {contact.whatsapp &&  <div className='bg-white/5 border border-blue p-2 px-2 rounded-[50%] hover:scale-125  hover:bg-white transition-all duration-300  flex justify-center items-center'>
                            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                              <IoLogoWhatsapp className='text-2xl hover:text-primary text-[#e9e6de] font-bold' />
                            </a>
                          </div>}
                      {contact.youtube &&    <div className='bg-white/5 border border-blue p-2 px-2 rounded-[50%] hover:scale-125  hover:bg-white transition-all duration-300  flex justify-center items-center'>
                            <a href={`${contact.youtube}`} target="_blank" rel="noopener noreferrer">
                              <FaYoutube className='text-2xl hover:text-primary text-[#e9e6de] font-bold' />
                            </a>
                          </div>}
                      {contact.instagram &&    <div className='bg-white/5 border border-blue p-2 px-2 rounded-[50%] hover:scale-125  hover:bg-white transition-all duration-300  flex justify-center items-center'>
                            <a href={`${contact.instagram}`} target="_blank" rel="noopener noreferrer">
                              <FaInstagram className='text-2xl hover:text-primary text-[#e9e6de] font-bold' />
                            </a>
                          </div>}
                        </div>
                </div>

                <div className="w-full">
                    {contact.mapUrl && <iframe
                        title="Google Map"
                        src={contact.mapUrl}
                        className="w-full h-60 rounded-lg border border-white/30 shadow-lg"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>}
                </div>
             </div>
<GetInTouch/>
       
            </div>
        </section>
    );
};
export default ReachUs;
