import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            Empowering businesses with tailored strategies for ads, SEO, social media, and content.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Section 1 */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <span className="bg-yellow-400 p-4 rounded-full text-white text-3xl">
                <i className="fas fa-bullhorn"></i>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Client Ads</h3>
            <p className="text-gray-600 mt-4">
              Transform your business with high-impact advertising campaigns tailored to your audience.
            </p>
          </div>
          {/* Section 2 */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <span className="bg-green-500 p-4 rounded-full text-white text-3xl">
                <i className="fas fa-chart-line"></i>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">SEO Services</h3>
            <p className="text-gray-600 mt-4">
              Boost your visibility and rank higher on search engines with expert SEO strategies.
            </p>
          </div>
          {/* Section 3 */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <span className="bg-blue-500 p-4 rounded-full text-white text-3xl">
                <i className="fas fa-share-alt"></i>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Social Media</h3>
            <p className="text-gray-600 mt-4">
              Engage your audience with creative and data-driven social media strategies.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div>
            <img
              src="https://via.placeholder.com/600x400"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Right Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision & Mission
            </h3>
            <p className="text-gray-600">
              We are committed to empowering businesses through effective ad campaigns, cutting-edge SEO, 
              creative content, and impactful social media strategies. Your growth is our priority.
            </p>
            <p className="text-gray-600 mt-4">
              With a focus on measurable results and client satisfaction, our team of experts ensures that 
              your brand's voice is heard, your audience is engaged, and your goals are achieved.
            </p>
            <Link
              to={"/contact"}
              className="mt-6 inline-block bg-yellow-400 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-500"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
