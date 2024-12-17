import React, { useState, useEffect } from "react";
import { FaCommentAlt } from "react-icons/fa"; // React Icons
import emailjs from "emailjs-com";

const FloatingButton = () => {
  // State to toggle the contact form visibility
  const [showForm, setShowForm] = useState(false);

  // State to track which paragraph and which line should be visible
  const [visibleTextIndex, setVisibleTextIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  // List of paragraphs with multiple lines
  const paragraphs = [
    "BOOST YOUR BUSINESS RISK FREE\nSign up now and get started!",
    "SIGN UP FOR OUR 7-DAY FREE TRIAL\nExperience the benefits risk-free.",
    "NO PAYMENT UNTIL YOU ARE SATISFIED WITH THE RESULTS\nCancel anytime if you're not happy.",
  ];

  // Split paragraphs into arrays of lines
  const splitParagraphs = paragraphs.map((para) => para.split("\n"));

  // Show the contact form after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true); // Show the contact form after 2 seconds
    }, 2000); // 2000ms (2 seconds)

    // Cleanup timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  // Handle the visibility of each paragraph and line with an infinite cycling delay
  useEffect(() => {
    if (showForm) {
      const interval = setInterval(() => {
        setLineIndex((prevIndex) => {
          if (prevIndex === splitParagraphs[visibleTextIndex].length - 1) {
            // After finishing all lines of a paragraph, go to the next paragraph
            setVisibleTextIndex((prevParagraphIndex) =>
              prevParagraphIndex === splitParagraphs.length - 1
                ? 0
                : prevParagraphIndex + 1
            );
            return 0; // Reset line index to 0
          }
          return prevIndex + 1; // Move to next line
        });
      }, 2000); // 2-second delay between each line

      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [showForm, visibleTextIndex, lineIndex]);

  // Handle the button click to toggle form visibility
  const handleSubmit = () => {
    setShowForm(!showForm);
  };

  const handleContact=async(e)=>{
    e.preventDefault();
    await emailjs.sendForm(
        'service_8oop2kj',  // Replace with your EmailJS service ID
        'template_eim3a8i', // Replace with your EmailJS template ID
        e.target,            // The form being submitted
        'vuTY47KiOsexBDWrl' // Replace with your EmailJS user ID
      );
      setShowForm(false)
  }

  return (
    <div>
      {/* Floating button */}
      <button
        onClick={handleSubmit}
        className="fixed bottom-6 right-6 flex items-center justify-center z-10 w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 hover:scale-110 animate-bounce transition-transform duration-300"
      >
        <FaCommentAlt className="w-6 h-6" />
      </button>

      {/* Contact Form positioned at the bottom-right corner */}
      {showForm && (
        <div className="fixed bottom-6 right-6 w-96 p-4 text-black dark:text-white text-xl font-semibold bg-white dark:bg-slate-400 shadow-lg rounded-lg z-20">
          {/* Text container */}
          <div className="relative h-24 overflow-hidden">
            {/* Show one line at a time from the paragraph */}
            {splitParagraphs[visibleTextIndex].slice(0, lineIndex + 1).map((line, index) => (
              <p
                key={index}
                className={`font-bold mb-4 text-center transition-all duration-500 transform ${
                  index === lineIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Contact form */}
          <form className="dark:text-white text-black"
          onSubmit={handleContact}>
            <div className="mb-4">
              <label className="block ">Name</label>
              <input
              name="Name"
                type="text"
                className="w-full px-3 py-2 border dark:bg-slate-500  rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block ">Email</label>
              <input
              name="email"
                type="email"
                className="w-full px-3 py-2 border dark:bg-slate-500 border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block ">Contact Number</label>
              <input
              name="phone"
                type="text"
                className="w-full px-3 py-2 border dark:bg-slate-500 border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>

          {/* Close Button */}
          <button
            onClick={() => setShowForm(false)}
            className="mt-4 p-2 rounded-md text-white bg-red-600"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
