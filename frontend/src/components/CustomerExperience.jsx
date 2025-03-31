export default function CustomerExperience({testimonials}) {
  const reviews = testimonials.sort(() => 0.5 - Math.random()).slice(0, 3);
  
    return (
      <div className="container mx-auto p-3 sm:pb-10">
          <h1 className="sm:text-5xl text-3xl mt-4 mb-4 font-oxygen text-primary text-center sm:mb-10">Client <span className="font-breathney font-bold sm:text-5xl text-secondary">Testimonials</span></h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="relative group overflow-hidden p-5 bg-primary shadow-lg">
              <img src={review.image} alt="Customer Review" className="w-full mb-2 h-64 object-center transition-transform duration-300" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-[#e9e6de] text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                {review.testimonial}
              </div>
              <h1 className="text-[#e9e6de] text-sm tracking-widest font-merienda">{review.name}</h1>
            </div>
          ))}
        </div>
      </div>
    );
  }
  