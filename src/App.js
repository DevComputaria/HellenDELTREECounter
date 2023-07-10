import React, { useState, useEffect } from 'react';


const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt="" />
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const targetDate = new Date('July 5, 2023 15:30:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        const seconds = Math.floor((difference / 1000) % 60);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        setCount({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="counter">
      Estamos a {count.days} dias, {count.hours} horas, {count.minutes} minutos e {count.seconds} segundos sem a EscravOps Hellen DELTREE.
    </div>
  );
};

const App = () => {
  const images = [
    './image1.jpg',
    './image2.jpg',
    './image3.jpg',
    // adicione mais imagens aqui
  ];

  return (
    <div className="App-header">      
      <Carousel images={images} />
      <Counter />
    </div>
  );
};

export default App;
