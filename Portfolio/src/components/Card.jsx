import React, { useState } from 'react';
import Onplus from './Onplus';

export default function Card({ items }) {
  const [showOnplus, setShowOnplus] = useState(false);


  const handleClose = () => {
    setShowOnplus(false);
  };

  return (
    <div>
      <div className='relative md:h-[230px] md:w-[320px] h-[200px] w-[300px] group cursor-pointer overflow-hidden  sm:h-[300px] sm:w-[330px] '>
        <div
          className='absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110'
          style={{ backgroundImage: `url(${items.bgimage})` }}
        ></div>
        <div className='relative z-10 opacity-0 group-hover:opacity-100 bg-[#0000009f] p-3 flex flex-col justify-between h-full transition-opacity duration-300'>
          <div className='h-8 w-20 bg-blue-600 flex justify-center items-center text-white'>
            {items.box}
          </div>
          <div className='flex gap-1 text-4xl text-white justify-center items-center'>
            <span  className='hover:text-blue-600 cursor-pointer'>
              {items.icon1}
            </span>
            <span className='hover:text-blue-600'><a href={items.link} target='blank'>{items.icon2}</a></span>
          </div>
          <p className='text-2xl text-gray-300 font-semibold'>{items.desc}</p>
        </div>
      </div>
      {showOnplus && <Onplus onClose={handleClose} />}
    </div>
  );
}
