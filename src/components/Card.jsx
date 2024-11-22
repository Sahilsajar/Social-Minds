import PropTypes from "prop-types";

function Card({ name, profile_picture, rating, review_text }) {
  const coverStyle = {
    backgroundImage: `url(${profile_picture})`,
  };

  return (
    <div className="mx-auto p-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto bg-slate-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Profile Section */}
      <div className="flex items-center mb-4">
        <div
          style={coverStyle}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cover bg-center mr-3"
          aria-label={`${name}'s profile`}
        ></div>
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{name}</h3>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center justify-center mb-3">
        {Array.from({ length: 5 }, (_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 sm:w-6 sm:h-6 ${
              index < rating ? "text-yellow-500" : "text-gray-300"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9.049 2.927a1 1 0 011.902 0l1.444 4.455a1 1 0 00.95.69h4.678a1 1 0 01.593 1.81l-3.79 2.757a1 1 0 00-.364 1.118l1.444 4.455a1 1 0 01-1.538 1.118L10 14.347l-3.79 2.757a1 1 0 01-1.538-1.118l1.444-4.455a1 1 0 00-.364-1.118L2.659 9.882a1 1 0 01.593-1.81h4.678a1 1 0 00.95-.69l1.444-4.455z" />
          </svg>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-sm sm:text-base truncate">
        {review_text}
      </p>
    </div>
  );
}

// Prop Types
Card.propTypes = {
  name: PropTypes.string.isRequired,
  profile_picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  review_text: PropTypes.string.isRequired,
};

export default Card;
