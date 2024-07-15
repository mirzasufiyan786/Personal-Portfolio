const list = [
    {
        img: <SlEnvolopeLetter />,
        title: "Address",
        desc: "Sheikhupura, Punjab Pakistan"
    },
    {
        img: <PiListChecksFill />,
        title: "Call US",
        desc: "+92 326 4880343"
    },
    {
        img: <BsGraphUpArrow />,
        title: "Email",
        desc: "ahmadmirzasufiyan@gmail.com"
    }
]

import { SlEnvolopeLetter } from "react-icons/sl";
import { PiListChecksFill } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";

import React from 'react'
export default function Contact() {
    return (
        <main className='text-black md:ml-72 ml-0  flex-1 mt-4' id="contact section">
            <div className='p-8'>
                <div className='flex flex-col gap-5 '>
                    <h1 className='text-3xl font-bold '>Contact</h1>
                    <div className='h-1 w-14 bg-blue-600'></div>
                    <p className='text-[17px] text-gray-600'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.</p>
                </div>
                <div className="md:flex gap-5 ">
                    <div className="left md:w-[40%] w-[100%] bg-white shadow-xl mt-10">
                        <div>
                            <div>
                                {

                                    <div className="flex flex-wrap ">
                                        {list.map((items, index) => (
                                            <div key={index} className="flex group  items-center justify-start p-8 gap-10 w-[350px] cursor-pointer transform transition-all duration-700 ease-in-out">
                                                <div className={` 
                  rounded-full flex justify-center items-center group cursor-pointer 
                  size-[60px]
                  group-hover:bg-blue-600 bg-blue-50 transition-colors duration-700 ease-in-out`}><span className='text-blue-600 text-2xl group-hover:text-white transition-colors duration-700 ease-in-out'>{items.img}</span></div>
                                                <div className="flex  flex-col justify-center w-40 ">
                                                    <h1 className="text-xl font-semibold "><span className="group-hover:text-blue-600 transition-colors duration-700 ease-in-out ">{items.title}</span></h1>
                                                    <p className="sm:text-[12px] 
                                                    lg:text-[16px] text-gray-600">{items.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="p-5">
                            <img src="/map2.jpeg" alt="map"  height={300} width={400} />
                        </div>
                    </div>
                    <div className="right md:w-[60%] w-[100%]  bg-white shadow-xl mt-10">

                        <form>
                            
                              <div class="grid gap-6 mb-6 grid-cols-2 md:grid-cols-2
                             p-8">
                              <div>
                                    <label for="first_name" class="block mb-2 text-xl  text-black ">Your name</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required />
                                </div>
                                <div>
                                    <label for="first_name" class="block mb-2 text-xl  text-black ">Your mail</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required />
                                </div>
                              </div>
                          
                               
                               <div className="grid p-8">
                                    <label for="first_name" class="block mb-2 text-xl  text-black ">Subject</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required />
                                </div>
                               
                              
                                <div className="grid p-8">
                                    <label for="text" class="block mb-2 text-xl  text-black ">Message</label>
                                    <textarea className="bg-gray-50 border border-gray-300  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " name="text" id="text" rows={6}></textarea>
                                </div>
                                <div className="flex justify-center items-center mb-3">
                                <button type="button" class="text-white bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-xl px-5 py-2.5 me-2 mb-2 w-[190px] h-[50px]">Send Message</button>
                                </div>
                        </form>

                    </div>
                </div>
            </div>
        </main>
    )
}
