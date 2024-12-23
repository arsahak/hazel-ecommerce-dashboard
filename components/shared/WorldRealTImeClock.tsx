"use client";
import React, { useEffect, useState } from "react";

const WorldRealTimeClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time using requestAnimationFrame for smoother updates
  useEffect(() => {
    const updateClock = () => {
      setCurrentTime(new Date());
      requestAnimationFrame(updateClock); // Schedule the next frame
    };

    // Start the clock updates
    requestAnimationFrame(updateClock);

    // No cleanup needed because requestAnimationFrame is self-clearing
  }, []);

  // Format the time with proper options
  const formattedTime = currentTime.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // 12-hour clock format
  });

  return (
    <div className="flex justify-center items-center p-4 ">
      <div className="md:text-md lg:text-xl font-bold text-gray-800">{formattedTime}</div>
    </div>
  );
};

export default WorldRealTimeClock;
