import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  // Initial state: 10 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(600);
  const [isActive, setIsActive] = useState(false);
  const timerIdRef = useRef(null);

  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
      timerIdRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerIdRef.current);
            setIsActive(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isActive) {
      clearInterval(timerIdRef.current);
      setIsActive(false);
    }
  };

  const resetTimer = () => {
    clearInterval(timerIdRef.current);
    setIsActive(false);
    setTimeLeft(600);
  };

  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className='h-fit p-4 left-0 top-0 bg-black opacity-50 absolute rounded-br-lg'>
      <h2>{formatTime(timeLeft)}</h2>
    </div>
  );
};

export default Timer;
