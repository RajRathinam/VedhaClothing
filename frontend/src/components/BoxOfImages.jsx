import React from 'react';
import Masonry from './Masonry';

const BoxOfImages = ({ categories }) => {
  // Shuffle categories and pick 11 random items
  const data = [...categories]
    .sort(() => 0.5 - Math.random()) // Shuffle array
    .slice(0, 11) // Get only 11 items
    .map((category, index) => ({
      id: index + 1,
      image: category.image, // Extract image from categories
      height: [450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 850][index], // Assign predefined heights
    }));

  return (
    <section className="w-full">
      <h2 className="text-5xl font-bold text-secondary text-center sm:p-6 mt-2 font-breathney">
        Best Sellers
      </h2>
      <Masonry data={data} />
    </section>
  );
};

export default BoxOfImages;
