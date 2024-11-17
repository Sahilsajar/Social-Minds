import React from 'react';
import { FaFacebook,FaInstagram, FaLinkedinIn,FaTwitter, FaShareAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white dark:bg-white dark:text-black py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Brand Description */}
        <div>
            {/* For Logo */}
          <h1 className="text-2xl font-bold mb-4">Social Minds</h1>
          {/* Description */}
          <p className="text-sm">
          At Social Minds, we help you create, manage, and optimize ads that connect with the right audience. Whether you're a small business or a marketer, our platform provides the tools and insights you need to elevate your brand and drive results. Join us today and make your ads impactful and effective.
          </p>
          <div className='flex gap-4 items-center mt-3'><FaShareAlt/><span className='text-xl'>Follow</span></div>
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

        {/* Our Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Our Services</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Brand Strategy</a></li>
            <li><a href="#" className="hover:underline">Creative Designing</a></li>
            <li><a href="#" className="hover:underline">Web Solutions</a></li>
            <li><a href="#" className="hover:underline">Digital Marketing</a></li>
            <li><a href="#" className="hover:underline">Audio-Visual</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Industries</a></li>
            <li><a href="#" className="hover:underline">Location</a></li>
            <li><a href="#" className="hover:underline">Case Study</a></li>
            <li><a href="#" className="hover:underline">Career</a></li>
            <li><a href="#" className="hover:underline">Blogs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Get In Touch</h2>
          <div>
            <p className="text-sm">508, Ambuja Neotia EcoCentre, Sector V, Kolkata, West Bengal - 700 091</p>
            <p className="mt-4">
              <span className="block"><strong>Sales:</strong> +91 98363 34345</span>
              <span className="block">hello@promotedge.com</span>
            </p>
            <p className="mt-4">
              <span className="block"><strong>Career:</strong> +91 98305 88442</span>
              <span className="block">hr@promotedge.com</span>
            </p>
          </div>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;