import React from "react";
import { useLocation } from "react-router-dom"; // Adjust based on your routing library
import CountdownTimer from "./CountdownTimer";

const AppLayout = ({ children }) => {
  const location = useLocation();

  // Example logic for determining if it's the last room
  const isLastRoom = location.pathname === "/endscreen";

  return (
    <div>
      <CountdownTimer initialTime={600} isLastRoom={isLastRoom} />
      {children}
    </div>
  );
};

export default AppLayout;
