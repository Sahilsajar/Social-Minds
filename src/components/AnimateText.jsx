import React, { useEffect, useState } from "react";

const AnimateText = ({ start = 0, end, duration = 500, interval = 5000 }) => {
  const [count, setCount] = useState(start);

  const startCounter = () => {
    const range = end - start;
    const increment = range / (duration / 10); // Update every 10ms
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        clearInterval(timer);
        current = end;
      }
      setCount(Math.floor(current)); // Update count
    }, 10);
  };

  useEffect(() => {
    startCounter(); // Start the counter animation
    const intervalId = setInterval(() => {
      setCount(start); // Reset to start value
      startCounter(); // Restart the counter animation
    }, interval);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [start, end, duration, interval]);

  return (
    <span className="font-extrabold">
      {count}
    </span>
  );
};

export default AnimateText;
