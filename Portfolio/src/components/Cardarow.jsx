import React from 'react';
import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";

const Cardarow = ({items}) => {
  return (
   <div className=' flex-1 bg-[#e3f1f7] md:w-[320px]
   lg:w-[600px] sm:w-[300px] '>
    <div>
    <div className="relative bg-white p-6 rounded-lg shadow-lg md:max-w-xs max-w-6xl mx-auto">
        
        <p className="text-[17px] text-gray-600 inline-block mt-4 ">
           <RiDoubleQuotesL className="inline mr-1 text-blue-600 text-2xl mb-1 " />
           {items.desc}
           <RiDoubleQuotesR className="inline mr-1 text-blue-600 text-2xl " />
         </p>
       
         <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
           <div className="w-8 h-8 bg-white transform rotate-45 "></div>
         </div>
       </div>
       <div className='flex flex-col justify-center items-center mt-8'>
          
           <div className=" bg-cover bg-center  rounded-full w-28 h-28"
             style={{ backgroundImage: `url(${items.img})` }}
           ></div>
           <h1 className='text-xl font-bold'>{items.name}</h1>
           <h3 className='text-[17px] text-gray-600'>{items.posit}</h3>
       </div>
    </div>
   </div>
  );
};

export default Cardarow;
