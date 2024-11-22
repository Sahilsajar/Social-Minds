import React, { useEffect, useRef, useState } from 'react';
import { useInView } from "react-intersection-observer";

import data from '../assets/data.json';
import Card from "./Card";

const Try = () => {
  const star_5 = useRef(null);
  const star_4 = useRef(null);
  const star_3 = useRef(null);
  const star_2 = useRef(null);
  const star_1 = useRef(null);

  const handleScroll = () => {
    const bars = [
      { ref: star_5, width: '72%' },
      { ref: star_4, width: '18%' },
      { ref: star_3, width: '6%' },
      { ref: star_2, width: '2%' },
      { ref: star_1, width: '2%' }
    ];
    const windowHeight = window.innerHeight;

    bars.forEach((bar) => {
      const barOffset = bar.ref.current.offsetTop;
      const barHeight = bar.ref.current.offsetHeight;

      if (window.scrollY + windowHeight >= barOffset + barHeight && window.scrollY <= barOffset + windowHeight) {
        bar.ref.current.style.width = bar.width;
      } else {
        bar.ref.current.style.width = '0%';
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollRef = useRef(null);
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(data);
    const scrollContainer = scrollRef.current;

    const scroll = () => {
      if (!scrollContainer) return;

      const isSmallScreen = window.innerWidth < 1024; // Tailwind's lg breakpoint
      if (isSmallScreen) {
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0; // Reset horizontal scroll position
        } else {
          scrollContainer.scrollLeft += 1; // Increment horizontal scroll
        }
      } else {
        if (
          scrollContainer.scrollTop + scrollContainer.clientHeight >=
          scrollContainer.scrollHeight
        ) {
          scrollContainer.scrollTop = 0; // Reset vertical scroll position
        } else {
          scrollContainer.scrollTop += 1; // Increment vertical scroll
        }
      }
    };

    const scrollInterval = setInterval(scroll, 20); // Adjust speed with the interval

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  return (
    // Main div
    <div className="h-screen bg-black flex flex-col lg:flex-row items-center lg:justify-evenly space-y-2 md:justify-start md:pl-10">
      {/* Middle div (Review and Rating section) */}
      <div className="delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0 shadow-[-5px_-6px_60px_-1px_rgba(59,_130,_246,_0.5)] bg-white p-6 rounded-3xl shadow-md w-11/12 md:w-2/5 lg:w-2/5 h-auto md:h-4/6 flex flex-col justify-center" data-taos-offset="400">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Reviews and Ratings</h2>
        <div className="flex items-center mb-4">
          <span className="text-4xl md:text-6xl font-bold">4.6</span>
          <div className="ml-2 flex items-center">
            <div className="flex text-yellow-500">
              {[...Array(4)].map((_, i) => (
                <svg key={i} className="animate-pulse w-6 h-6 md:w-10 md:h-10 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.417 8.253L12 18.897l-7.417 4.626L6 15.27 0 9.423l8.332-1.268z" />
                </svg>
              ))}
              <svg className="animate-pulse w-6 h-6 md:w-10 md:h-10 fill-current" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.417 8.253L12 18.897l-7.417 4.626L6 15.27 0 9.423l8.332-1.268z" />
                <path d="M12 2.587l2.668 5.568L20 9.423l-4 3.847 1.417 6.253L12 15.897l-5.417 3.626L8 13.27 4 9.423l5.332-.268z" fill="#d1d5db" />
              </svg>
            </div>
            <span className="ml-2 text-gray-600 text-sm md:text-lg">Based on 200+ ratings</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-gray-600 text-sm md:text-lg">
            <span>5 Stars</span>
            <span>72%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 md:h-3">
            <div className="bg-[#57e32c] h-2.5 md:h-3 rounded-full transition-all duration-1000" style={{ width: '0%' }} ref={star_5}></div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-gray-600 text-sm md:text-lg">
            <span>4 Stars</span>
            <span>18%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 md:h-3">
            <div className="bg-[#b7dd29] h-2.5 md:h-3 rounded-full transition-all duration-1000" style={{ width: '0%' }} ref={star_4}></div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-gray-600 text-sm md:text-lg">
            <span>3 Stars</span>
            <span>6%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 md:h-3">
            <div className="bg-[#ffe234] h-2.5 md:h-3 rounded-full transition-all duration-1000" style={{ width: '0%' }} ref={star_3}></div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-gray-600 text-sm md:text-lg">
            <span>2 Stars</span>
            <span>2%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 md:h-3">
            <div className="bg-[#ffa534] h-2.5 md:h-3 rounded-full transition-all duration-1000" style={{ width: '0%' }} ref={star_2}></div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-gray-600 text-sm md:text-lg">
            <span>1 Stars</span>
            <span>2%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 md:h-3">
            <div className="bg-[#ff4545] h-2.5 md:h-3 rounded-full transition-all duration-1000" style={{ width: '0%' }} ref={star_1}></div>
          </div>
        </div>
        <button className="text-blue-500 mt-4 text-sm md:text-lg">Show summary</button>
      </div>

      {/* Comment section */}
      <div
        ref={scrollRef}
        className="h-screen lg:overflow-y-scroll w-full lg:w-1/3 md:w-2/3 overflow-x-scroll scrollbar-hide bg-transparent flex lg:flex-col flex-row"
        style={{ scrollBehavior: "smooth" }}
      >
        {item.map((item, index) => (
          <div
            className="p-4 bg-transparent w-full lg:w-4/5 xl:w-3/4 shadow rounded-lg text-lg text-gray-800 m-2"
            key={index}
          >
            <Card 
              name={item.name}
              profile_picture={item.profile_picture}
              rating={item.rating}
              review_text={item.review_text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Try;
