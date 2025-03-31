export default function OurValues() {
  const values = [
    {
      title: "Our Vision",
      text: "To be a leading clothing brand that empowers customers to express themselves through fashion, while maintaining a commitment to sustainability and quality.",
      image: "/Web-logo.webp", // Replace with your actual image path
    },
    {
      title: "Our Mission",
      text: "To create high-quality, stylish, and affordable clothing that connects with our customers’ sense of individuality and confidence.",
      image: "/Web-logo.webp",
    },
    {
      title: "Our Future",
      text: "Expanding into women's clothing, our goal is to offer a wide range of fashionable and affordable options for women of all ages, while maintaining the same high standards we’re known for.",
      image: "/Web-logo.webp",
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-6 sm:py-12 px-3">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {values.map((item, index) => (
          <div
            key={index}
            className="bg-[#0c4855] shadow-xl rounded-lg p-6 text-center relative group overflow-hidden"
          >
            {/* Default View (Logo + Title) */}
            <div className="flex flex-col items-center justify-center h-full transition-opacity duration-300 group-hover:opacity-0">
              <img src={item.image} alt={item.title} className="w-20 h-20 mb-3" />
              <h3 className="text-2xl font-bold text-secondary font-breathney">{item.title}</h3>
            </div>

            {/* Hover View (Text) */}
            <div className="absolute inset-0 flex items-center justify-center p-6 bg-primary/30 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <p className="text-accent">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
