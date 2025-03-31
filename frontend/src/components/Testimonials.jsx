import React from "react";


const TestimonialCard = ({ testimonial, name, image }) => {
    return (
        <div className="bg-primary shadow-lg sm:p-2 p-1 rounded-lg  flex items-center text-center">
            <img src={image} alt={name} className="sm:w-36 sm:h-36 w-24 h-24 rounded-box object-cover" />
            <div>
                <p className="text-white italic">{testimonial}</p>
                <p className="text-secondary font-semibold mt-2">- {name}</p>
            </div>
        </div>
    );
};

const Testimonials = ({testimonials}) => {
    return (
        <div className="p-3 sm:p-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary text-center sm:p-6 font-breathney mb-2">What Our Customers Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
