import React from "react";

const FloatingContact = ({ closeForm }) => {
  return (
    <div className="fixed top-0 right-0 w-80 bg-white shadow-lg h-full z-50 transform transition-transform duration-500">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-bold">Contact Us</h2>
        <button onClick={closeForm} className="text-xl text-gray-600">
          &times;
        </button>
      </div>
      <form className="p-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FloatingContact;
