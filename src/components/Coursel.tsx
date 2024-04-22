import React, { useEffect, useState } from 'react'

const images = [
    '/assets/3 (2).png',
    '/assets/4 (2).png',
    
  ];
  


const Coursel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    // Autoplay functionality
    const autoplayTimer = setInterval(handleNext, 3000);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(autoplayTimer);
    };
  }, []);

  return (
    <div className=" flex flex-grow w-full flex-shrink basis-[100%] h-[25rem]">
      
      
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="flex w-[100%] object-cover object-center" />
     
    </div>
  );
};

export default Coursel;

/*
<div className="flex">
        <button className="mr-2 px-2 py-1 bg-gray-200 rounded-md" onClick={handlePrev}>
          Prev
        </button>
        <button className="ml-2 px-2 py-1 bg-gray-200 rounded-md" onClick={handleNext}>
          Next
        </button>
      </div>
 */