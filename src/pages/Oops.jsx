import React, { useState, useEffect } from "react";
import backImg from "../assets/Background/2.jpg";
const ThankYou = () => {
  const [seconds, setSeconds] = useState(5); // Set the countdown time

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer); // Clear timeout on cleanup
    } else {
      // Redirect to the home page when timer reaches 0
      window.location.href = "/Contact";
    }
  }, [seconds]);

  return (
    <div style= {{ backgroundImage: "url(" + backImg + ")", backgroundSize: "cover" }}
     className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          OOPS! Something went wrong

        </h1>
        <h2>Please Try Again</h2>
        <p className="text-gray-600">
          You will be redirected to the home page in{" "}
          <span className="font-semibold text-blue-500">{seconds}</span>{" "}
          seconds.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
