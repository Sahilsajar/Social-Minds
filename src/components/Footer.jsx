import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaShareAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black dark:bg-black dark:text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Brand Description */}
        <div className="ml-8">
          {/* For Logo */}
          <h1 className="text-3xl font-bold mb-4 ">Social Minds</h1>
          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-white">
            At Social Minds, we help you create, manage, and optimize ads that
            connect with the right audience. Whether you're a small business or
            a marketer, our platform provides the tools and insights you need to
            elevate your brand and drive results. Join us today and make your
            ads impactful and effective.
          </p>
          <div className="flex gap-4 items-center mt-3">
            <FaShareAlt />
            <span className="text-xl">Follow</span>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:opacity-75 text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="hover:opacity-75 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:opacity-75 text-xl">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:opacity-75 text-xl">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="mx-auto grid grid-cols-2 gap-8">
          {/* Our Services */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Brand Strategy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Creative Designing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Web Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Audio-Visual
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="md:ml-10">
            <h2 className="text-2xl font-semibold mb-4">Useful Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Industries
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Location
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Case Study
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="ml-8">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <div className="">
            <p className="text-sm">
              508, Ambuja Neotia EcoCentre, Sector V, Kolkata, West Bengal - 700
              091
            </p>
            <p className="mt-4">
              <span className="block">
                <strong>Sales:</strong> +91 98363 34345
              </span>
              <span className="block">hello@promotedge.com</span>
            </p>
            <p className="mt-4">
              <span className="block">
                <strong>Career:</strong> +91 98305 88442
              </span>
              <span className="block">hr@promotedge.com</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
