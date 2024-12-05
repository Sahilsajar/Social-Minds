import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../public/astronaut.json'; 

const NotFoundPage = () => {
  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, // Loaded Lottie data
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center px-6">
        {/* Lottie Animation */}
        <div className="w-64 h-64 mx-auto">
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mt-6">
          404 Not Found
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          Oops! The page you're looking for doesn't exist. 😟
        </p>

        {/* Back Home Button */}
        <button
          onClick={() => (window.location.href = '/')} // Replace "/" with the home route
          className="mt-6 px-6 py-3 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600 dark:bg-indigo-400 dark:hover:bg-indigo-500 transition duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
