import React from "react";

const Welcome = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#184355] px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl border border-white/20 py-6 px-3 sm:p-10 text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#c59b41] font-breathney drop-shadow-lg">
          Welcome, Admin!
        </h1>
        <p className="mt-4 text-sm sm:text-lg text-[#e9e6de] font-merienda leading-relaxed">
          Manage products, update contact details, and oversee customer feedback. 
          The power is in your hands to streamline operations and create an amazing shopping experience!
        </p>
        <p className="mt-4 text-sm sm:text-lg text-[#e9e6de] font-merienda leading-relaxed">
          Stay in control with real-time updates, effortless inventory management, and seamless customer interactions. 
          Keep your catalog fresh, monitor insights, and make data-driven decisions to enhance business growth. 
          Your role is key to ensuring a smooth and efficient shopping experience for every customer!
        </p>
      </div>
    </div>
  );
};

export default Welcome;
