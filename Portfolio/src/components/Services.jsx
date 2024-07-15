const list=[
    {
        img:<SlEnvolopeLetter/>,
        title:"Web Development",
        desc:"Enhance your business with cutting-edge web solutions that drive growth."
    },
    {
        img:<PiListChecksFill/>,
        title:"Custom Web Design",
        desc:"Transform your vision into reality with our custom web design services.              "
    },
    {
        img:<BsGraphUpArrow/>,
        title:"Business Growth",
        desc:"Drive business growth with scalable web apps that streamline operations."
    },
    {
        img:<BsBinoculars/>,
        title:"Digital Transformation:",
        desc:"Leverage tailored solutions to accelerate your business's digital journey."
    },
    {
        img:<BsBrightnessHigh/>,
        title:"User-Centric Design:",
        desc:"Create engaging web experiences with seamless, interactive interaction."
    },
    {
        img:<BsFileRuledFill/>,
        title:"Responsive Design",
        desc:"Deliver exceptional user experiences across all devices with our responsiveness."
    },
    
]
import { SlEnvolopeLetter } from "react-icons/sl";
import { PiListChecksFill } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsBinoculars } from "react-icons/bs";
import { BsBrightnessHigh } from "react-icons/bs";
import { BsFileRuledFill } from "react-icons/bs";
import React from 'react'

export default function Services() {
  return (
    <main className=' text-black md:ml-72 ml-0 flex-1  md:mb-0 section' id="service">
     <div className='flex flex-col gap-5 m-8'>
                        <h1 className='text-3xl font-bold '>Services</h1>
                        <div className='h-1 w-14 bg-blue-600'></div>
                        <p className='text-[17px] text-gray-600'>Elevate your business with our comprehensive web development services. We specialize in leveraging the latest technologies like React, Next.js, and Tailwind CSS to deliver responsive and scalable solutions. From creating dynamic web applications with robust authentication to crafting visually stunning designs, we ensure your digital presence stands out in today's competitive landscape.</p>
                    </div>
                    <div>
                        {
                        
                           <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-0 ">
                            {  list.map((items,index)=>(
                                <div key={index} className="flex group  items-center p-8 gap-6 w-[390px] 
                                sm:h-[140px]
                                cursor-pointer transform transition-all duration-700 ease-in-out">
                                    <div className="sm:h-[60px] sm:w-[120px] md:h-[60px] md-w-[80px] rounded-full bg-blue-600 flex justify-center items-center group cursor-pointer group-hover:bg-white border-2 border-blue-600 transition-colors duration-700 ease-in-out"><span className="text-white text-3xl sm:text-2xl group-hover:text-blue-600 transition-colors duration-700 ease-in-out">{items.img}</span></div>
                                    <div className="flex flex-col justify-center mt-10">
                                        <h1 className="text-xl font-semibold "><span className="group-hover:text-blue-600 transition-colors duration-700 ease-in-out ">{items.title}</span></h1>
                                        <p className="text-[15px] text-gray-600">{items.desc}</p>
                                    </div>
                                </div>
                            ))}
                           </div>
                        }
                    </div>
    </main>
  )
}
