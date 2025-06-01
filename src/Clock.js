import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [count, setCount] = useState({ days: 5, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('July 5, 2023 00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      // The countdown continues even if the target date is passed, showing negative values.
      // Original logic to stop at zero was commented out and has been removed.
      const seconds = Math.floor((difference / 1000) % 60);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      setCount({ days, hours, minutes, seconds });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-text">Estamos a </div>
      <div className="countdown-item">{count.days} <span className="countdown-label">Dias</span></div>
      <div className="countdown-item">{count.hours} <span className="countdown-label">Horas</span></div>
      <div className="countdown-item">{count.minutes} <span className="countdown-label">Minutos</span></div>
      <div className="countdown-item">{count.seconds} <span className="countdown-label">Segundos</span></div>
      <div className="countdown-text">sem a EscravOps Hellen DELTREE</div>
    </div>


  );
};

export default Clock;
