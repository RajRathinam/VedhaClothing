import React, { useState,useEffect } from "react";


const CategoryGallery = ({ categories,fetchProducts }) => {
  const tags = ["ALL", ...new Set(categories.map((category) => category.tag))];
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProducts();
  }, []); 
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");
  
  const filteredCategories = categories.filter(category =>
    (filter === "ALL" || category.tag === filter) &&
    (category.name.toLowerCase().includes(search.toLowerCase()) || category.tag.toLowerCase().includes(search.toLowerCase()))
  );
  
  return (
   <section>
     <div className="flex flex-col">
      {/* Search Bar for Mobile */}
      <div className="sm:hidden w-full p-4">
        <input
          type="text"
          placeholder="Search categories..."
          className="w-full px-4 py-2 border rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex">
        {/* Sidebar Category Filter Buttons */}
        <div className="w-1/5 fixed left-0 p-4 pb-20 pt-6 h-screen overflow-auto hidden sm:block">
          <div className="flex flex-wrap gap-3 pb-28">
            {tags.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`text-sm sm:text-lg py-0.5 px-2 border rounded-2xl transition text-left ${
                  filter === category
                    ? "bg-gradient-to-tr from-primary to-primary/90 text-accent"
                    : "bg-transparent text-black border-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Category Grid */} 
        <div className="sm:w-4/5 w-full sm:ml-auto px-10 py-5 sm:px-6 sm:py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 min-h-screen">
          {filteredCategories.map((category, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg group sm:hover:-translate-y-2 transition-transform duration-300">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-72 object-cover"
              />
              <div className="w-full bg-opacity-75 text-secondary font-merienda text-xl text-center pt-1">
                {category.name}
              </div>
              <div className="text-sm text-center text-gray-600 p-1">{category.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
   </section>
  );
};

export default CategoryGallery;
