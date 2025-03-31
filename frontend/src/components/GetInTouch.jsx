export default function GetInTouch() {
    return (
      <div className="sm:w-1/2 w-full mx-auto px-4 py-3 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl text-secondary sm:text-5xl text-center mb-3 text-blue font-breathney font-extrabold">
          Get in Touch
        </h2>
        <form className="space-y-2 sm:space-y-4">
          <div>
            <label className="block text-gray-500 font-medium">FIRST NAME</label>
            <input
              type="text"
              placeholder="Please enter first name..."
              className="w-full sm:p-2 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
            />
          </div>
  
          <div>
            <label className="block text-gray-500 font-medium">EMAIL</label>
            <input
              type="email"
              placeholder="Please enter email..."
              className="w-full sm:p-2 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
            />
          </div>
  
          <div>
            <label className="block text-gray-500 font-medium">PHONE NUMBER</label>
            <input
              type="tel"
              placeholder="Please enter phone number..."
              className="w-full sm:p-2 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
            />
          </div>
  
          <div>
            <label className="block text-gray-500 font-medium">WHAT DO YOU HAVE IN MIND?</label>
            <textarea
              placeholder="Please enter query..."
              className="w-full sm:p-2 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              rows={4}
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="w-full bg-secondary/75 font-merienda font-bold tracking-widest text-white py-2 rounded-md hover:bg-secondary transition"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
  