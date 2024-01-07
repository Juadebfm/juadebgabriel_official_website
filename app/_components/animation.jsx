"use client";
import React, { useState, useEffect, useRef } from "react";
import Lottie from "react-lottie";

const MyAnimation = () => {
  const [animationData, setAnimationData] = useState(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch("/assets/svg/arrow.json"); // Adjust the URL as needed
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error fetching animation data:", error);
      }
    };

    fetchAnimationData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start animation when it enters the viewport
          entry.target.style.visibility = "visible";
        }
      });
    });

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
  };

  return (
    <div
      ref={animationRef}
      className="absolute -top-36 md:top-24 left-0 -z-20 transform rotate-90"
      style={{ visibility: "hidden" }}
    >
      {animationData ? (
        <Lottie options={defaultOptions} height={200} width={200} />
      ) : (
        <p>Loading animation...</p>
      )}
    </div>
  );
};

export default MyAnimation;
