
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaHome, FaFile, FaImage, FaPhone, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { IoPerson } from 'react-icons/io5';
import { IoIosArrowDropdown } from 'react-icons/io';
import { FaServer } from "react-icons/fa6";
import { MdOutlineRateReview } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const menu = [
    { title: "HOME", img: <FaHome />, id: "#home", id1: "home" },
    { title: "ABOUT", img: <IoPerson />, id: "#about", id1: "about" },
    { title: "RESUME", img: <FaFile />, id: "#resume", id1: "resume" },
    { title: "PORTFOLIO", img: <FaImage />, id: "#portfolio", id1: "portfolio" },
    { title: "SERVICES", img: <FaServer />, id: "#service", id1: "service" },
    { title: "TESTIMONIALS", img: <MdOutlineRateReview />, id: "#test", id1: "test" },
    { title: "CONTACT", img: <FaPhone />, id: "#contact", id1: "contact" },
    { title: "DROPDOWN", img: <IoIosArrowDropdown />, id: "#", id1: "#" }
];

export default function SideNavBAr() {
    const [active, setActive] = useState('#home');
    const [toggle, setToggle] = useState(false)
    const handelMenu = () => {
        setToggle(!toggle)

    }
    const handleScroll = (id) => {
      let scroll=  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setActive(id);
    };
    return (
        <main className='flex '>
            <div className='hidden md:block fixed inset-y-0 left-0 h-screen w-72 bg-[#091320]  flex-col border-r-2 border-[#1f2a3a]'>
                <div className='flex justify-center items-center flex-col mt-5'>
                    <img className='size-44   rounded-full ' src="/mirzaprofile.jpg" alt="img" />
                    <h1 className='text-2xl font-bold text-center text-white'>MIRZA SUFIYAN</h1>
                </div>
                <div className='mt-5 py-5'>
                    <ul className='flex justify-center items-center gap-3 text-xl'>
                        <li className='p-2 bg-gray-800 text-white rounded-full  cursor-pointer hover:bg-blue-600 '>
                            <FaFacebook />
                        </li>
                        <li className='p-2 bg-gray-800 text-white rounded-full  cursor-pointer hover:bg-blue-600'>
                          <a href="https://github.com/mirzasufiyan786">  <FaGithub /></a>
                        </li>
                        <li className='p-2 bg-gray-800 text-white rounded-full  cursor-pointer hover:bg-blue-600'>
                           <a href="https://www.linkedin.com/in/mirzasufiyanahmad1122/"> <FaLinkedin /></a>
                        </li>
                        <li className='p-2 bg-gray-800 text-white rounded-full  cursor-pointer hover:bg-blue-600'>
                            <FaTwitter />
                        </li>
                        <li className='p-2 bg-gray-800 text-white rounded-full  cursor-pointer hover:bg-blue-600'>
                            <FaInstagram />
                        </li>
                    </ul>
                </div>
                <div className='mt-1 px-4 overflow-hidden  '>


                    {menu.map((item, index) => (
                      <div key={index}  >
                        <a id={item.id} href={item.id} onClick={() => handleScroll(item.id)}>
                        <div 
                            id='nav'
                            className={`relative flex items-center  gap-2  p-4 text-lg font-semibold text-neutral-400 group cursor-pointer ${item.id === active ? ' rounded-2xl border border-gray-800 text-white' : ''}`}>
                                    <span className={`group-hover:text-blue-600 ${item.id === active ? 'text-blue-800' : ''}`}>{item.img}</span>
                                    <span className='duration-500 '>
                                        <a id={item.id} href={item.id} onClick={() => handleScroll(item.id)} className={`text-neutral-400  ${item.id === active ? 'text-white' : ''}`}>
                                            {item.title}
                                        </a>
                                    </span>
                                </div>
                        </a>
                      </div>
                    ))}


                </div>
            </div>
            {
                toggle ? <div className='md:hidden block fixed inset-y-0 left-0 h-screen w-72 bg-[#091320]  flex-col border-r-2 border-[#1f2a3a] z-50'>
                    <div className='flex justify-center items-center flex-col mt-5'>
                        <img className='h-36 w-36  rounded-full border-[8px] border-gray-600' src="/mirzaprofile.jpg" alt="img" />
                        <h1 className='text-2xl font-bold text-center text-white'>MIRZA SUFIYAN</h1>
                    </div>
                    <div className='mt-5 py-5'>
                        <ul className='flex justify-center items-center gap-3 text-xl'>
                            <li className='p-2 bg-gray-800 text-white rounded-full  cursor-pointer hover:bg-blue-600'>
                                <FaFacebook />
                            </li>
                            <li className='p-2 bg-gray-800 text-white rounded-full  cursor-pointer hover:bg-blue-600'>
                                <FaGithub />
                            </li>
                            <li className='p-2 bg-gray-800 text-white rounded-full  cursor-pointer hover:bg-blue-600'>
                                <FaLinkedin />
                            </li>
                            <li className='p-2 bg-gray-800 text-white rounded-full  cursor-pointer hover:bg-blue-600'>
                                <FaTwitter />
                            </li>
                            <li className='p-2 bg-gray-800 text-white rounded-full  cursor-pointer hover:bg-blue-600'>
                                <FaInstagram />
                            </li>
                        </ul>
                    </div>
                    <div className='mt-1 px-4  overflow-hidden'>
                    {menu.map((item, index) => (
                        <div key={index} className={`relative flex items-center gap-2 p-4 text-lg font-semibold text-neutral-400 group cursor-pointer ${item.id === active ? ' rounded-2xl border border-gray-800 text-white' : ''}`}>
                            <span className={`group-hover:text-blue-600 ${item.id === active ? 'text-blue-800' : ''}`}>{item.img}</span>
                            <span className='duration-500'>
                                <a id={item.id} href={item.id} onClick={() => handleScroll(item.id)} className={`text-neutral-400 ${item.id === active ? 'text-white' : ''}`}>
                                    {item.title}
                                </a>
                            </span>
                        </div>
                    ))}
                    </div>
                </div> : null
            }

            <div id='home' className='ml-0   md:ml-72  flex-1 h-screen  bg-cover sm:bg-right  flex ' 
            style={{ backgroundImage: `url('/bgImg.jpg')` }}
            >
                <div className='flex p-8 flex-col justify-center h-[100%] w-[100%] bg-[#00000093]'>
                    <div className='flex flex-col justify-center'>

                        <h1 className='text-7xl text-white font-bold'>MIRZA SUFIYAN</h1>
                        <h2 className='text-3xl text-white font-semibold '>I'm &nbsp;</h2>
                        <div className='md:hidden h-12 w-12 sm:ml-5 hover:bg-blue-500 cursor-pointer rounded-full bg-blue-600 fixed lg:top-5 lg:right-5 sm:top-5 sm:right-3 text-white text-2xl flex justify-center items-center  z-50' onClick={handelMenu}>
                            {toggle ? <ImCross /> : <GiHamburgerMenu />}
                        </div>
                        <TypeAnimation
                            sequence={[
                                'MERN Stack Developer',
                                1000,
                                'Freelancer',
                                1000,
                                'Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={40}
                            className='text-3xl text-[#328cf1] font-semibold inline-block '
                            repeat={Infinity}
                        />

                    </div>
                </div>
            </div>
        </main>
    );
}
