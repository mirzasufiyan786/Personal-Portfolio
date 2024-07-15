import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const [activeLink, setActiveLink] = useState('ALL'); 

  const handleSetActiveLink = (link) => {
    setActiveLink(link); 
  };

  return (
    <main  className=' ml-0 md:ml-72 sm:mt-32 lg:mt-[150px] md:mt-52   flex-1 bg-[#e3f1f7] sm:h-[400px] md:h-[250px]' id='portfolio'>
      <div className='bg-[#e3f1f7] p-4 ml-4 flex-1 mt-8 h-[260px]'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-3xl font-bold'>Portfolio</h1>
          <div className='h-1 w-14 bg-blue-600'></div>
          <p className='text-[17px] text-gray-600'>
          I have developed numerous personal projects utilizing React, Tailwind CSS, and the MERN stack, focusing on robust CRUD operations and dynamic web applications. My work showcases my ability to integrate modern frameworks and deliver seamless user experiences. These projects reflect my commitment to continuous learning and innovation in web development.</p>
        </div>
        <div className='text-[17px] text-blue-600'><h1>Check out my projects showcased below!</h1></div>
        <div>
          <ul className='flex mt-8 gap-5 sm:gap-3 items-center justify-center cursor-pointer'>
            <li>
              <Link
                className={`nav-link text-neutral-600 border-b-2 ${activeLink === 'ALL' ? 'border-blue-600 text-blue-500' : ''}`}
                to="/"
                onClick={() => handleSetActiveLink('ALL')}
              >
                ALL
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link text-neutral-600 border-b-2 ${activeLink === 'APP' ? 'border-blue-600 text-blue-500' : ''}`}
                to="/app"
                onClick={() => handleSetActiveLink('APP')}
              >
                APP
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link text-neutral-600 border-b-2 ${activeLink === 'PRODUCTS' ? 'border-blue-600 text-blue-500' : ''}`}
                to="/product"
                onClick={() => handleSetActiveLink('PRODUCTS')}
              >
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link text-neutral-600 border-b-2 ${activeLink === 'BRANDING' ? 'border-blue-600 text-blue-500' : ''}`}
                to="/branding"
                onClick={() => handleSetActiveLink('BRANDING')}
              >
                BRANDING
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link text-neutral-600 border-b-2 ${activeLink === 'BOOKS' ? 'border-blue-600 text-blue-500' : ''}`}
                to="/book"
                onClick={() => handleSetActiveLink('BOOKS')}
              >
                BOOKS
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </main>
  );
}
