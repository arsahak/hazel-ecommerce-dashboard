// import React, { useEffect, useState } from "react";

// const WorldRealTImeClock: React.FC = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     // Update the time every second
//     const interval = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     // Cleanup interval on component unmount
//     return () => clearInterval(interval);
//   }, []);

//   // Format the date to match "November 04, 2024 22:47 PM"
//   const formattedTime = currentTime.toLocaleString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true, // Use 24-hour format
//   });

//   return (
//     <div className="flex justify-center items-center  ">
//       <div className="text-xl font-bold text-gray-800">{formattedTime}</div>
//     </div>
//   );
// };

// export default WorldRealTImeClock;
