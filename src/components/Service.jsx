import React, { useState, useEffect } from "react";
import "../resource/service.css";
import { Link } from "react-router-dom";

const postsData = [
  {
    title: "Social Media Ads",
    msg: "Boost your brand with targeted and high-converting social media ads",
    tag: "Video",
    img: "/serviceSocialAds.jpeg",
    alt: "Social Media Ads showcasing targeted campaigns for brand growth",
  },
  {
    title: "SEO",
    msg: "Rank higher and drive organic traffic with expert SEO strategies",
    tag: "News",
    img: "/serviceSEO.jpeg",
    alt: "SEO strategies for higher rankings and increased organic traffic",
  },
  {
    title: "Graphic Design",
    msg: "Captivate your audience with creative and visually stunning designs",
    tag: "News",
    img: "/serviceGraphicDesign.jpg",
    alt: "Creative and visually stunning graphic design examples",
  },
  {
    title: "Social Media Handling",
    msg: "Engage your followers with seamless and professional social media management",
    tag: "News",
    img: "/serviceSocialHandling.jpg",
    alt: "Social media management with professional handling techniques",
  },
  {
    title: "Website Development",
    msg: "Build a fast, user-friendly website tailored to your business needs",
    tag: "News",
    img: "/serviceWebD.jpg",
    alt: "Website development service showing a fast and user-friendly design",
  },
  {
    title: "Performance Marketing",
    msg: "Achieve measurable growth with data-driven performance marketing strategies",
    tag: "News",
    img: "/servicePerformanceMarketing.jpg",
    alt: "Performance marketing with data-driven growth strategies",
  },
  {
    title: "Social Media Content Writing",
    msg: "Deliver impactful content that resonates and converts.",
    tag: "News",
    img: "/serviceContentWriting.jpeg",
    alt: "Social media content writing delivering impactful and engaging content",
  },
];


function Service() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Handle automatic slide progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 0));
    }, 50);

    if (progress === 100) {
      handleNext();
    }

    return () => clearInterval(interval);
  }, [progress]);

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % postsData.length);
  };

  const handlePostClick = (index) => {
    setProgress(0);
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="progress-bar progress-bar--primary">
        <div
          className="progress-bar__fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-center bg-transparent absolute z-30 w-full text-white text-5xl top-16">
        <h1>Services</h1>
      </div>
      {/* backSlides */}
      <div className="main-post-wrapper">
        <div className="slides">
          {postsData.map((post, index) => (
            <div
              className={`main-post ${
                index === currentIndex
                  ? "main-post--active"
                  : "main-post--not-active"
              }`}
              key={index}
            >
              <div className="main-post__image">
                <img src={post.img} alt={post.alt} loading="lazy"/>
              </div>
              <div className="main-post__content">
                {/* <div className="main-post__tag-wrapper">
                  <span className="main-post__tag">{post.tag}</span>
                </div> */}
                <h1 className="main-post__title mb-4">{post.title}</h1>
                <p className="mb-4">{post.msg}</p>
                <Link to={'/service'} className="main-post__link">
                  {/* <span className="main-post__link-text">Find out more</span> */}
                  <button className="main-post__link-text button-64">
                   <span className="text">View All</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Down cards */}
      <div className="posts-wrapper">
        {postsData.map((post, index) => (
          <div
            className={`post ${index === currentIndex ? "post--active" : ""}`}
            key={index}
            onClick={() => handlePostClick(index)}
          >
            <div className="progress-bar">
              <div
                className="progress-bar__fill"
                style={{
                  width: index === currentIndex ? `${progress}%` : "0%",
                }}
              ></div>
            </div>

            <h2 className="post__title">{post.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
