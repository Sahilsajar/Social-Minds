import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TypeAni({ isFullWidth }) {
  const staticText = "We deliver results tailored to your";
  const typingWords = ["Goals!", "Growth!", "Success!"]; // Words to cycle through

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    if (!isErasing) {
      // Typing effect
      if (charIndex < typingWords[currentWordIndex].length) {
        const timeout = setTimeout(() => {
          setTypedText(
            (prev) => prev + typingWords[currentWordIndex][charIndex]
          );
          setCharIndex((prev) => prev + 1);
        }, 100); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        // Pause after typing
        const timeout = setTimeout(() => {
          setIsErasing(true);
        }, 1000); // Pause before erasing
        return () => clearTimeout(timeout);
      }
    } else {
      // Erasing effect
      if (typedText.length > 0) {
        const timeout = setTimeout(() => {
          setTypedText((prev) => prev.slice(0, -2)); // Remove 2 characters at a time
        }, 30); // Erasing speed (adjust for faster erasing)
        return () => clearTimeout(timeout);
      } else {
        // Move to the next word
        setIsErasing(false);
        setCharIndex(0);
        setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
      }
    }
  }, [charIndex, isErasing, typedText, currentWordIndex, typingWords]);

  return (
    <div
      className={
        isFullWidth
          ? "leftIntroDiv flex items-center w-0 ease-in duration-1000"
          : "basis-1/2 leftIntroDiv flex items-center ease-in duration-1000"
      }
    >
      <div className="pl-5 leftIntroSubDiv font-sans">
        <h3 className="typAniHeading">
          Social Minds have helped Business grow
        </h3>
        <div className="typing-container">
          {staticText} <span className="TypeAniDiv">{typedText}</span>
          <span className="cursor">|</span>
        </div>
        <Link to={"/Contact"}>
          <button className="button-64" role="button">
            <span className="text">Connect Today</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TypeAni;
