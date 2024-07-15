const list = [
    {
        title: "Birthday:",
        desc: "15/06/2002",
        img: <IoIosArrowForward />
    },
    {
        title: "Phone:",
        desc: "+92 326 4880343",
        img: <IoIosArrowForward />
    },
    {
        title: "City:",
        desc: "Sheikhupura",
        img: <IoIosArrowForward />
    },
    {
        title: "Freelance:",
        desc: "Available",
        img: <IoIosArrowForward /> 
    },
    {
        title: "Age:",
        desc: "22",
        img: <IoIosArrowForward />
    },
    {
        title: "Degree:",
        desc: "Bs (CS)",
        img: <IoIosArrowForward />
    },
    {
        title: "Email:",
        desc: "ahmadmirzasufiyan@gmail.com",
        img: <IoIosArrowForward />
    },
   
    {
        img: <RiEmotionHappyLine />,
        numb: "323",
        title: "Happy client",
        desc: "consequuntur quae"
    },
    {
        img: <RiFile2Fill />,
        numb: "10-20",
        title: "projects",
        desc: "Personal Projects"
    },
    {
        img: <RiHeadphoneLine />,
        numb: "1524",
        title: "Hours of Suppot",
        desc: "Personal projects"
    },
    {
        img: <IoPeople />,
        numb: "3-5",
        title: "Hard Workers",
        desc: "MY Batchmates"
    }
]
const Skills=[
    {
        skillname:'React',
        skillpercentage:'98%',
    },
    {
        skillname:'Next.js',
        skillpercentage:'95%',
    },
    {
        skillname:'Node.js',
        skillpercentage:'96%',
    },
    {
        skillname:'Express.js',
        skillpercentage:'95%',
    },
    {
        skillname:'MongoDB',
        skillpercentage:'95%',
    },
    {
        skillname:'Tailwind CSS',
        skillpercentage:'98%',
    },
    {
        skillname:'JavaScript',
        skillpercentage:'98%',
    },
    {
        skillname:'BootStrap',
        skillpercentage:'90%',
    },
    {
        skillname:'MySQL',
        skillpercentage:'87%',
    },
    {
        skillname:'C++',
        skillpercentage:'88%',
    },
    {
        skillname:'HTML',
        skillpercentage:'96%',
    },
    {
        skillname:'CSS',
        skillpercentage:'95%',
    },
]
import { IoIosArrowForward } from "react-icons/io";
import { RiEmotionHappyLine, RiFile2Fill, RiHeadphoneLine } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
import React from 'react'

export default function About() {
    return (
        <main id="about">
            <div className= 'text-black md:ml-72 ml-0  flex-1 section '>
                <div className="p-8">
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-3xl font-bold '>About</h1>
                        <div className='h-1 w-14 bg-blue-600'></div>
                        <p className='text-[17px] text-gray-600'>I am Mirza Sufiyan Ahmad, a passionate and dedicated software engineer currently pursuing a BS in Computer Science from UET Lahore. With a strong foundation in web development, I have honed my skills in HTML5, CSS, JavaScript, and various modern frameworks such as React JS, Next JS, and Tailwind CSS. My educational journey has been complemented by practical experiences as an intern at Entspos Developers Inc. and CodeSoft, where I worked on projects that required robust authentication, seamless CRUD operations, and dynamic web applications.
                        </p>
                    </div>
                    <div className='mt-10 md:flex  gap-4 h-80'>
                        <div className="flex justify-center items-center"><img src="/last.jpg" alt="about_img" className="md:h-[370px] h-[420px] md:w-[390px] sm:w-[400px] lg:h-[510px] lg:w-[500px]  sm:h-[380px] rounded-lg mt-10"  /></div>
                        <div className="flex flex-col gap-4">
                            <h1 className='md:mt-0 mt-5  
                            text-2xl font-bold'>MERN Stack Developer & Web Designer</h1>
                            <p className='text-[17px] text-gray-600'>With a strong foundation in web development, I have honed my skills in the MERN stack, specializing in building dynamic web applications.</p>
                            <div className='md:flex gap-14 flex-wrap'>
                                <div>
                                    {
                                        list.map((items, index) => index < 4 && (
                                            <ul key={index} className="flex items-center lg:gap-5 sm:gap-3 mt-4">
                                                <li className="text-blue-600">{items.img}</li>
                                                <li className=" text-lg font-semibold">{items.title}</li>
                                                <li className="text-[17px] text-gray-600">{items.desc}</li>
                                            </ul>
                                        ))
                                    }
                                </div>
                                <div className="">
                                    {
                                        list.map((items, index) => (index > 3 && index < 7) && (
                                            <ul key={index} className="flex items-center justify-start lg:gap-5 sm:gap-3 mt-4">
                                                <li className="text-blue-600">{items.img}</li>
                                                <li className=" text-lg font-semibold">{items.title}</li>
                                                <li className="text-[17px] text-gray-600">{items.desc}</li>
                                            </ul>
                                        ))
                                    }
                                </div>

                            </div>
                        </div>
                    </div>

                    <p className="md:ml-[330px] lg:mt-[700px] sm-mt[400px]  ml-0 text-[17px] text-gray-600 md:mt-5 mt-[750px]">My journey has been enriched by internships at Entspos Developers Inc. and CodeSoft, where I worked on robust authentication, seamless CRUD operations, and dynamic web applications.</p>

                    <div className="mt-28">
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4">
    {list.map((items, index) =>index>6&& (
      <ul key={index} className="bg-[#e3f1f7] p-4 rounded-lg">
        <div className="flex text-5xl font-bold gap-5 items-center">
          <li className="text-blue-600">{items.img}</li>
          <li>{items.numb}</li>
        </div>
        <div className="ml-[70px] mt-5">
          <li className="text-gray-500 font-semibold">{items.title}</li>
          <li className="text-gray-400">{items.desc}</li>
        </div>
      </ul>
    ))}
  </div>
</div>


                </div>
                <div className="bg-[#e3f1f7] p-8 flex-1 mt-16 ">
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-3xl font-bold '>Skills</h1>
                        <div className='h-1 w-14 bg-blue-600'></div>
                        <p className='text-[17px] text-gray-600'>Hello! I'm Mirza Sufiyan, a web developer with a passion for design, AI, and machine learning. I'm also an avid reader. I thrive on creating elegant and practical solutions. Welcome to my corner of the internet—let's connect and create something amazing together!</p>
                    </div>
                    <div className="md:flex gap-5 mt-5">
    <div className="md:w-[100%] w-[100%] grid md:grid-cols-2 sm:grid-cols-1 gap-5">
        {Skills.map((item, index) => (
            <div key={index} className="w-[100%]">
                <div className="flex justify-between w-full">
                    <h2>{item.skillname}</h2>
                    <h2>{item.skillpercentage}</h2>
                </div>
                <div className="h-2 w-[100%] bg-gray-400">
                    <div 
                        className="h-2 bg-blue-600"
                        style={{ width: item.skillpercentage }}
                    >
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>

                </div>
            </div>

        </main>
    )
}
