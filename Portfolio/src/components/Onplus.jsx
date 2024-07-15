import React, { useRef, useState } from 'react';
import Fullimage from './Fullimage';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const list = [
  { img: "book1.jpeg" },
  { img: "book2.jpeg" },
  { img: "book3.jpeg" }
];

export default function Onplus() {
  const elementRef = useRef();
  const [isVisible, setIsVisible] = useState(true);

  const handleRightArrow = (element) => {
    const scrollAmount = element.offsetWidth; // width of the container
    element.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleLeftArrow = (element) => {
    const scrollAmount = element.offsetWidth; // width of the container
    element.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <main>
        <div className='absolute bg-[#000000b4] h-full w-full flex justify-center items-center'>
          <div className='relative flex h-[100%] w-[600px] overflow-hidden' ref={elementRef}>
            {list.map((items, index) => (
              <div key={index}>
                <Fullimage items={items} />
              </div>
            ))}
          </div>
          <button
            className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-r-md'
            onClick={() => handleLeftArrow(elementRef.current)}
          >
            <FaChevronLeft className='h-6 w-6' />
          </button>
          <button
            className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-l-md'
            onClick={() => handleRightArrow(elementRef.current)}
          >
            <FaChevronRight className='h-6 w-6' />
          </button>
          <button
            className='absolute top-4 right-4 bg-gray-200 p-2 rounded-full'
            onClick={handleClose}
          >
            <FaTimes className='h-6 w-6' />
          </button>
        </div>
      </main>
    )
  );
}
