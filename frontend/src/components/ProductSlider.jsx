import { useState, useEffect } from "react";
import { IoInformationCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function ProductSlider({ categories }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3); // Set default items per slide

  // Ensure we get exactly 12 products
  const products = [...categories]
    .sort(() => 0.5 - Math.random()) // Shuffle the array
    .slice(0, 12); // Pick 12 items

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change slides every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= products.length ? 0 : prevIndex + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerSlide < 0 ? products.length - itemsPerSlide : prevIndex - itemsPerSlide
    );
  };

  return (
    <section className="relative w-full pb-5 sm:p-10 max-w-5xl mx-auto overflow-hidden">
      <h1 className="sm:text-5xl text-3xl mt-4 font-oxygen text-primary text-center sm:mb-10">
        Clothing <span className="font-breathney font-bold sm:text-5xl text-secondary">Showcase</span>
      </h1>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex / products.length) * 100}%)`,
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className={`flex-shrink-0 text-center p-4 sm:p-2`}
              style={{ width: `${100 / itemsPerSlide}%` }}
            >
              <img
                src={product.image}
                className="w-full h-[250px] mx-auto rounded-md shadow-md object-cover"
                alt={`Product ${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 hover:bg-slate-500/50 bg-white px-3 py-1 rounded-full shadow-md"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 hover:bg-slate-500/50 bg-white px-3 py-1 rounded-full shadow-md"
      >
        ❯
      </button>

      {/* More Info Link */}
      <div className="flex justify-center">
        <Link
          to="/gallery"
          className="flex gap-1 border-primary border-2 px-1.5 py-0.5 sm:py-1 sm:px-3 mt-2 sm:mt-8 rounded-3xl justify-center items-center text-lg sm:text-xl font-semibold text-primary hover:text-white hover:bg-primary"
        >
          <IoInformationCircleSharp className="text-3xl" />
          Click Here
        </Link>
      </div>
    </section>
  );
}
