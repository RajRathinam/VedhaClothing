import React from "react";

const VisitUs = ({contactInfo}) => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-12 bg-gray-100 rounded-lg shadow-md">
     <h2 className="text-5xl font-bold text-secondary text-center sm:p-1 font-breathney">Visit Us</h2>
<h2 className="text-lg sm:text-xl font-bold text-slate-600 text-center sm:p-3 font-oxygen mb-2">Come meet us at our location and explore our latest collections.</h2>
<div className="w-full max-w-4xl h-80 overflow-hidden rounded-lg shadow-lg">
        <iframe
          className="w-full h-full border-0"
          src={contactInfo.mapUrl || null}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default VisitUs;
