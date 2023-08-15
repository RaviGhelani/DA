import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Box } from '@mui/material';

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  const calculateTimeRemaining = () => {
    const now = moment();
    const targetTime = moment().day(5).hour(24).minute(30).second(0); // Friday 11:30 PM
    if (now.isAfter(targetTime)) {
      targetTime.add(7, 'days'); // Move to next Friday
    }
    const duration = moment.duration(targetTime.diff(now));
    return duration.asSeconds();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (seconds) => {
    const duration = moment.duration(seconds, 'seconds');
    const hours = duration.hours();
    const minutes = duration.minutes();
    const secs = duration.seconds();
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <Box sx={{color:"green", fontSize:{xs:"20px", sm:"20px", md:"24px", lg:"26px", fontWeight: 600}}}>Countdown Timer</Box>
      <p>{formatTime(timeRemaining)}</p>
    </div>
  );
};

export default Timer;
