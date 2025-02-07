import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CountdownTimer = ({ initialTime, isLastRoom }) => {
  const [time, setTime] = useState(initialTime);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;

    if (time > 0 && !isLastRoom) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      navigate("/gameover"); // Navigate to Game Over screen
    }

    return () => clearInterval(timer); // Ensure the timer is cleaned up
  }, [time, isLastRoom, navigate]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="absolute top-4 left-4 bg-black bg-opacity-70 text-white text-lg font-bold py-2 px-4 rounded-lg shadow-md z-50"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      {formatTime(time)}
    </div>
  );
};

export default CountdownTimer;
