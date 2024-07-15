
import React, { useState, useEffect } from 'react';
import Cardarow from './Cardarow';
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      desc: "I am dedicated to mastering full-stack development through extensive projects and rigorous training. Eager to collaborate with future clients, I am committed to delivering high-quality work.",
  img: "profile-blank.jpg",
  name: "Asim Shezad",
  posit: "Freelancer"
},
{
  desc: "I am dedicated to mastering full-stack development through extensive projects and rigorous training. Eager to collaborate with future clients, I am committed to delivering high-quality work.",
  img: "profile-blank.jpg",
  name: "Abdullah",
  posit: "Freelancer"
},
{
  desc: "I am dedicated to mastering full-stack development through extensive projects and rigorous training. Eager to collaborate with future clients, I am committed to delivering high-quality work.",
  img: "profile-blank.jpg",
  name: "MIRZA",
  posit: "Freelancer"
},
{
  desc: "I am dedicated to mastering full-stack development through extensive projects and rigorous training. Eager to collaborate with future clients, I am committed to delivering high-quality work.",
  img: "profile-blank.jpg",
  name: "Noman",
  posit: "Freelancer"
},
{
  desc: "I am dedicated to mastering full-stack development through extensive projects and rigorous training. Eager to collaborate with future clients, I am committed to delivering high-quality work.",
  img: "profile-blank.jpg",
  name: "Shahzaib",
  posit: "Freelancer"
},
{
  desc: "I am dedicated to mastering full-stack development through extensive projects and rigorous training. Eager to collaborate with future clients, I am committed to delivering high-quality work.",
  img: "profile-blank.jpg",
  name: "Arslan",
  posit: "Freelancer"
},
{
  desc: "I am dedicated to mastering full-stack development through extensive projects and rigorous training. Eager to collaborate with future clients, I am committed to delivering high-quality work.",
  img: "profile-blank.jpg",
  name: "",
  posit: "Freelancer"
},
{
  desc: "I am dedicated to mastering full-stack development through extensive projects and rigorous training. Eager to collaborate with future clients, I am committed to delivering high-quality work.",
  img: "profile-blnak.jpg",
  name: "Sariya",
  posit: "Freelancer"
},
   
  ];


  const totalTestimonials = testimonials.length;
  const visibleCardsLg = 3;
  const visibleCardsSm = 1;

  const slideNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const slidePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slideNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleCards = () => {
    return window.innerWidth >= 760 ? visibleCardsLg : visibleCardsSm;
  };

  const displayedTestimonials = [...testimonials, ...testimonials.slice(0, getVisibleCards())];

  return (
    <main className='text-black md:ml-72 ml-0 mt-[500px] md:mt-[40px] flex-1  sm:mt-[100px] 
   section ' id='test'>
      <div className='bg-[#e3f1f7] p-8'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-3xl font-bold'>Testimonials</h1>
          <div className='h-1 w-14 bg-blue-600'></div>
          <p className='text-[17px] text-gray-600'>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>
        <div className='relative mt-8 group cursor-pointer'>
          <div className='overflow-hidden'>
            <div
              className='flex transition-transform duration-500 ease-in-out'
              style={{
                transform: `translateX(-${(currentIndex % totalTestimonials) * (100 / getVisibleCards())}%)`,
              }}
            >
              {displayedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 p-2`}
                  style={{ minWidth: `${100 / getVisibleCards()}%` }}
                >
                  <Cardarow items={testimonial} />
                </div>
              ))}
            </div>
          </div>
          <button
            className='hidden group-hover:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-r-md'
            onClick={slidePrev}
          >
            <FaChevronLeft className='h-6 w-6' />
          </button>
          <button
            className='hidden group-hover:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-l-md'
            onClick={slideNext}
          >
            <FaChevronRight className='h-6 w-6' />
          </button>
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalTestimonials }).map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;