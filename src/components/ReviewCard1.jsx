import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { motion } from "framer-motion";
//import backImg from "../assets/backgroundReview.jpg";
import backImg from "../assets/Background/2.jpg";
import revImg from "../assets/backgroundReview.jpg";

const ReviewPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    review: "",
  });
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(false);

  const labels = [
    { id: 1, label: "SEO", percentage: "92%", color: "red" },
    { id: 2, label: "Social Media Ads", percentage: "86%", color: "blue" },
    { id: 3, label: "Graphic Design", percentage: "82%", color: "green" },
    {
      id: 4,
      label: "Social Media Handling",
      percentage: "88%",
      color: "yellow",
    },
    { id: 5, label: "Website Devlopment", percentage: "90%", color: "purple" },
    { id: 6, label: "Performance Marketing", percentage: "84%", color: "pink" },
    {
      id: 7,
      label: "Social Media Content Writing",
      percentage: "87%",
      color: "orange",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Sebastian Clark",
      rating: 4.8,
      comment: "Exceptional service and quality. Highly recommended!",
    },
    {
      id: 2,
      name: "Leonardo Costa",
      rating: 4.5,
      comment: "Great experience overall. Will definitely come back.",
    },
    {
      id: 3,
      name: "Maximilian Weber",
      rating: 4.7,
      comment: "Outstanding product quality and customer service.",
    },
    {
      id: 4,
      name: "Ethan Williams",
      rating: 4.8,
      comment: "Outstanding product quality and customer service.",
    },
    {
      id: 5,
      name: "Kai Nakamura",
      rating: 4.5,
      comment: "Outstanding product quality and customer service.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = document.getElementById("star-meter");
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} className="text-yellow-400 inline-block" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="text-yellow-400 inline-block" />
      );
    }

    return stars;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.review.trim()) newErrors.review = "Review is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      setShowForm(false);
      setFormData({ name: "", rating: 5, review: "" });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url(" + backImg + ")",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-slate-600 text-white p-6">
        OUR CUSTOMER STORIES
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Main Review Card */}

        <div className="bg-gray-800 bg-opacity-45 text-white border-1 rounded-2xl shadow-[1px_2px_26px_7px_rgba(59,_130,_246,_0.5)] p-6 mx-4 mb-6">
          <h1 className="text-3xl font-bold mb-2">Customer Reviews</h1>
          <div className="flex items-center mb-2">
            <span className="text-4xl font-bold mr-4">4.6</span>
            <div className="flex items-center">
              {renderStars(4.6)}
              <span className="ml-2 text-gray-600">(234 reviews)</span>
            </div>
          </div>

          {/* Bar fields*/}
          <div>
            {" "}
            {labels.map((item) => (
              <div key={item.id}>
                {" "}
                <span>{item.label}</span>{" "}
                <div
                  id="star-meter"
                  className="relative h-4 bg-gray-200 rounded-full mb-8"
                >
                  {" "}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isVisible ? item.percentage : 0 }}
                    transition={{ duration: 1.5 }}
                    style={{ background: item.color }}
                    className="absolute h-full rounded-full"
                  />{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            aria-label="Add your review"
          >
            Add Your Review
          </button>
        </div>

        {/* Top Reviews Section */}
        <div className="space-y-6 mb-4">
          <h2 className="border-3 text-white text-2xl font-bold mb-6 ml-3">
            Top Reviews
          </h2>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-800 bg-opacity-25 text-white rounded-xl shadow-lg p-4 transition-transform hover:scale-105 hover:shadow-[1px_2px_26px_7px_rgba(249,_115,_22,_0.5)] mx-4"
            >
              <div className="flex items-center">
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="text-white flex items-center">
                    {renderStars(review.rating)}
                    <span className="ml-2 text-white">({review.rating})</span>
                  </div>
                </div>
              </div>
              <p className="text-white">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Review Model */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Write Your Review</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded-lg ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Rating</label>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, rating: index + 1 })
                      }
                      className="focus:outline-none"
                    >
                      <FaStar
                        className={`${
                          index < formData.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        } text-2xl`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="review">
                  Review
                </label>
                <textarea
                  id="review"
                  name="review"
                  value={formData.review}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded-lg ${
                    errors.review ? "border-red-500" : "border-gray-300"
                  }`}
                  rows="4"
                  aria-invalid={errors.review ? "true" : "false"}
                />
                {errors.review && (
                  <p className="text-red-500 text-sm mt-1" role="alert">
                    {errors.review}
                  </p>
                )}
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewPage;
