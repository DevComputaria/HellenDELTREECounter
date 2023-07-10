import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [count, setCount] = useState({ days: 5, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('July 5, 2023 00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

    //   if (difference <= 0) {
    //     clearInterval(timer);
    //   } else {
        const seconds = Math.floor((difference / 1000) % 60);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        setCount({ days, hours, minutes, seconds });
      //}
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>      
      <div className="App">Estamos a </div>
      <div className="App">{count.days} Dias</div>
      <div className="App">{count.hours} Horas</div>
      <div className="App">{count.minutes} Minutos</div>
      <div className="App">{count.seconds} Segundos</div>
      <div className="App">sem a EscravOps Hellen DELTREE</div>
    </div>
    
    
  );
};

export default Clock;
