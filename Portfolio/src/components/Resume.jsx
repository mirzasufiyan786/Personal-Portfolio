import React from 'react'

export default function Resume() {
    return (
        <main className='md:ml-72 ml-0 p-8 flex-1 md:mb-0 mb-60 section  ' id='resume' >
            <div className='flex flex-col gap-5'>
                <h1 className='text-3xl font-bold '>Resume</h1>
              <a href="/LinkidIn resume.pdf" target='blank'>  <h1 className='mt-[-10px] text-blue-900'>📄 Download My Resume</h1></a>
                <div className='h-1 w-14 bg-blue-600'></div>
                <p className='text-[17px] text-gray-600'>Highly dedicated React developer with over 3 years of
experience. Over the past year, I enhanced my MERN stack skills,
integrating MongoDB, Express, React, and Node.js to deliver fully
fledged web solutions. I build dynamic web applications with
robust authentication and seamless CRUD operations. I excel in
collaborative environments and am passionate about driving
innovation and delivering high-quality software solutions.</p>
            </div>
            <div className='md:flex md:gap-5'>
                <div className='leftdiv md:w-[50%] w-[100%]'>
                <div className='mt-5  '>
                    <h1 className='text-3xl font-semibold'>Sumary</h1>
                    <div className='flex gap-5 h-40 mt-5'>
                        <div className='flex felx-col items-start justify-center'>
                            <div className='h-6 w-6 rounded-full border-blue-600 border-2 absolute '></div>
                            <div className='md:h-[292px] lg:h-[240px] sm:h-[360px] w-1 bg-blue-600 mt-6'> </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-lg font-medium text-gray-500'>MIRZA SUFIYAN AHMAD</h2>
                            <p className='text-[17px] text-gray-600'>I am a highly skilled software engineer specializing in the MERN stack, currently pursuing a BS in Computer Science at UET Lahore. My internships at Entspos Developers Inc. and CodeSoft have provided extensive experience in creating dynamic web applications.</p>

                            <li className='text-[16px] text-gray-800'>ahmadmirzasufiyan@gmail.com</li>
                            <li className='text-[16px] text-gray-800'>+92 326 4880343</li>
                            <li className='text-[16px] text-gray-800'>Sheikhupura, Punjab, Pakistan</li>
                            <li className='text-[16px] text-blue-800'><a href="https://github.com/mirzasufiyan786">
                            https://github.com/mirzasufiyan786
                                </a></li>

                        </div>
                    </div>
                </div>
                <div className='mt-24   sm:mt-60'>
                    <h1 className='text-3xl font-semibold'>Eduction</h1>
                </div>
                  <div className='flex gap-5 h-40 -mt-20 '>
                    <div className='flex felx-col items-start justify-center'>
                        <div className='h-6 w-6 rounded-full border-blue-600 border-2 absolute sm:mt-[118px] '></div>
                        <div className='sm:mt-[141px] sm:h-[384px] lg:h-[190px]  md:h-[230px] w-1 bg-blue-600 mt-6 '> </div>
                    </div>
                    <div className='flex flex-col gap-3 sm:mt-28'>
                        <h2 className='text-lg font-medium text-gray-500'>BS Computer Science Program (BSCS)</h2>
                        <h3 className='font-semibold'>2022 - 2026</h3>
                        <p className='text-[17px] text-gray-600'>University of Engineering and Technology, Lahore

                        </p>
                        <p className='text-[17px] text-gray-600'>Currently pursuing a BS in Computer Science at UET Lahore since 2022, where I am gaining comprehensive knowledge and practical experience in software engineering, algorithms, data structures, and modern web development technologies. This program is enhancing my technical skills and preparing me for a successful career in the tech industry.</p>

                    </div>
                </div>
                </div>
<div className="rightdiv lg:mt-[0px] md:w-[50%] w-[100%] sm:mb-10 ">
<div className='md:mt-5  sm:mt-96'>
                    <h1 className='text-3xl font-semibold '>Professional Experience</h1>
                    <div className='flex gap-5 h-40 mt-5'>
                        <div className='flex felx-col items-start justify-center'>
                            <div className='h-6 w-6 rounded-full border-blue-600 border-2 absolute '></div>
                            <div className='h-[444px] md:h-[320px] lg:h-[225px] sm:h-[410px] w-1 bg-blue-600 mt-6'> </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-lg font-medium text-gray-500'>MERN STACK DEVELOPER INTERN</h2>
                            <h3 className='font-semibold'>2024 - Present</h3>
                            <p className='text-[17px] text-gray-600'>
                                Entspos Developers Inc., Lahore
                            </p>
                            <li className='text-[16px] text-gray-800'>Deepened my understanding of JavaScript, focusing on advanced concepts and best practices.</li>
                            <li className='text-[16px] text-gray-800'>Gained hands-on experience with Tailwind CSS for efficient and responsive design.</li>
                            <li className='text-[16px] text-gray-800'>Developed proficiency in React JS, building dynamic and interactive user interfaces.</li>
                            <li className='text-[16px] text-gray-800'>Enhanced my skills in the MERN stack, working on full-stack web development projects.</li>
                           

                        </div>
                    </div>

                </div>
            
</div>
            </div>
        </main>
    )
}
