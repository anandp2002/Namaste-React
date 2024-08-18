import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-lg bg-white p-8 rounded shadow-md">
          <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
          <form className="flex flex-col space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-swiggy-orange"
                placeholder="Your name.."
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-swiggy-orange"
                placeholder="Your email.."
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-lg font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-swiggy-orange"
                placeholder="Subject.."
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-swiggy-orange"
                placeholder="Write something.."
                rows="4"
                required
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit"
              className="w-full bg-swiggy-orange text-white py-2 rounded hover:bg-orange-500 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
