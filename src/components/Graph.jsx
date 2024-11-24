import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Graph = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const containerRef = useRef(null);

  const handleMouseMove = (event) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    // Calculate the mouse position relative to the container
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Normalize the values to range from -1 to 1
    const xPercent = (x / rect.width - 0.5) * 2;
    const yPercent = (y / rect.height - 0.5) * 2;

    // Adjust the tilt angles
    const rotateX = -yPercent * 12; // Tilt vertically
    const rotateY = xPercent * 10; // Tilt horizontally

    // Apply the tilt transformation
    container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    // Reset the transformation and hide the cursor effect when the mouse leaves
    containerRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const timeline = gsap.timeline();

    timeline
      .fromTo(
        line1Ref.current,
        { strokeDasharray: 500, strokeDashoffset: 500 },
        { strokeDashoffset: 0, duration: 2 }
      )
      .fromTo(
        line2Ref.current,
        { strokeDasharray: 500, strokeDashoffset: 500 },
        { strokeDashoffset: 0, duration: 2 },
        "-=1.5" // Start this animation 1.5s before the first ends
      );
    },10000)
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      className="graph-container relative w-full h-auto rounded-lg max-w-md  lg:max-w-lg hover:shadow-sm hover:shadow-green-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 0.2s ease", // Smooth transition back to neutral
        perspective: "1000px", // Enable 3D perspective
      }}
      
    >

      <svg
        viewBox="0 0 600 400"
        xmlns="http://www.w3.org/2000/svg"
        // className="h-24 w-24 rounded-lg"
        className="rounded-lg hover:shadow-sm"
      >
        {/* Background */}
        <rect width="600" height="400" fill="#1A202C" />
        {/* CodeHelp Smooth Line */}
        <path
          ref={line1Ref}
          d="M50 350 
             C100 300, 150 320, 200 280 
             S300 220, 380 210 
             S450 160, 500 140"
          fill="none"
          stroke="#4A90E2"
          strokeWidth="4"
        />
        <circle cx="500" cy="140" r="5" fill="#4A90E2" />
        <text x="510" y="145" fill="#FFFFFF" fontSize="12">
          Social Minds
        </text>
        {/* Other Smooth Line */}
        <path
          ref={line2Ref}
          d="M50 350 
             C100 340, 150 330, 200 310 
             S300 290, 360 260 
             S450 240, 500 220"
          fill="none"
          stroke="#A3A3A3"
          strokeWidth="4"
        />
        <circle cx="500" cy="220" r="5" fill="#A3A3A3" />
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
