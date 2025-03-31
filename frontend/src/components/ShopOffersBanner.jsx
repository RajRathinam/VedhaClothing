import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaTags } from "react-icons/fa"; 

export default function ShopOffersBanner({contactInfo}) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null; 

  return (
    <div className="fixed sm:bottom-5 sm:right-5 bottom-2 animate-bounce right-2 sm:w-40 sm:h-40 w-28 h-28  rounded-full bg-gradient-to-r from-[#184355] to-[#c59b41] 

 text-accent p-3 md:p-4 flex flex-col items-center justify-around shadow-lg z-50">
      <FaTags className="sm:w-7 sm:h-7 w-5 h-5"/>
      <p className="text-[11px] md:text-[18px] text-accent text-center font-merienda font-semibold tracking-wide leading-tight">
{contactInfo.special_offer}
</p>

      <button
        onClick={() => setVisible(false)}
        className="p-1 rounded-full  absolute top-0 sm:-left-3 -left-2 hover:bg-secondary transition"
      >
        <IoCloseSharp className="sm:w-5 sm:h-5 w-3 h-3 text-black" />
      </button>
    </div>
  );
}
