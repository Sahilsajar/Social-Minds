import React from "react";

const Graph = () => {
  return (
    <div className="m-10">
      <svg
        viewBox="0 0 600 400"
        xmlns="http://www.w3.org/2000/svg"
        className="h-40 md:h-80 w-full" // Resize the SVG to 33% of its original size
      >
        {/* Background */}
        <rect width="600" height="400" fill="#1A202C" />
        {/* CodeHelp Smooth Line */}
        <path
          d="M50 350 
             C100 300, 150 320, 200 280 
             S300 220, 380 210 
             S450 160, 500 140"
          fill="none"
          stroke="#4A90E2"
          strokeWidth="4" // Reduced stroke width
        />
        <circle cx="500" cy="140" r="5" fill="#4A90E2" /> // Reduced radius
        <text x="510" y="145" fill="#FFFFFF" fontSize="12">
          Social Minds
        </text>
        {/* Other Smooth Line */}
        <path
          d="M50 350 
             C100 340, 150 330, 200 310 
             S300 290, 360 260 
             S450 240, 500 220"
          fill="none"
          stroke="#A3A3A3"
          strokeWidth="4" // Reduced stroke width
        />
        <circle cx="500" cy="220" r="5" fill="#A3A3A3" /> // Reduced radius
        <text x="510" y="225" fill="#FFFFFF" fontSize="12">
          Other's
        </text>
        {/* Axes */}
        <line
          x1="49"
          y1="351"
          x2="550"
          y2="340"
          stroke="#E2E8F0"
          strokeWidth="3"
        />
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="352"
          stroke="#E2E8F0"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};

export default Graph;
