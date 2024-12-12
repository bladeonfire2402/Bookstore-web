import React, { useState, useEffect } from 'react';
import '../Styles/Clock.css'

const Clock = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countDown = () => {
      const destination = new Date('July 10, 2024').getTime();

      const interval = setInterval(() => {
        const now = new Date().getTime();
        const difference = destination - now;

        if (difference < 0) {
          clearInterval(interval);
        } else {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          setDays(days);
          setHours(hours);
          setMinutes(minutes);
          setSeconds(seconds);
        }
      }, 1000);

      return () => clearInterval(interval);
    };

    countDown();
  }, []);

  return (
    <div className='clock__wrapper flex2 gap-10 fw-600'>
      <div className='clock__data flex2 text-white gap-10'>
        <div className='text__center flex2 gap-10'>
          <h2 className='fw-500'>{days}</h2>
          <h5>Days</h5>
        </div>
        <span>:</span>
      </div>
      <div className='clock__data flex2 text-white gap-10'>
        <div className='text__center flex2 gap-10'>
          <h2 className='fw-500'>{hours}</h2>
          <h5>Hours</h5>
        </div>
        <span>:</span>
      </div>
      <div className='clock__data text-white flex2 gap-10'>
        <div className='text__center flex2 gap-10'>
          <h2 className='fw-500'>{minutes}</h2>
          <h5>Minutes</h5>
        </div>
        <span>:</span>
      </div>
      <div className='clock__data text-white flex2 gap-10'>
        <div className='text__center flex2 gap-10'>
          <h2 className='fw-500'>{seconds}</h2>
          <h5>Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
