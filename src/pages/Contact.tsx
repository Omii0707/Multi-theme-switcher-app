import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">We’d love to hear from you!</p>
      <form className="max-w-md mx-auto bg-white dark:bg-gray-700 p-6 rounded shadow">
        <div className="mb-4">
          <label htmlFor="name" className="block text-left mb-1 font-semibold">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-left mb-1 font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-left mb-1 font-semibold"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
