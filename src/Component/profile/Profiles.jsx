import React, { useState } from 'react'
import { FaQuestionCircle } from 'react-icons/fa'
import './profile.css'
const Profiles = () => {
    const [menu,setMenu]= useState('about')

    return (
        <div className='  h-full lg:w-[43%] w-[100%] ' >

            <div className='absolute left-[0.9rem] top-[0.9rem] opacity-1'>
                <FaQuestionCircle  className='w-[25px] h-[25px]'/>
            </div>


            <div className='absolute left-[0.8rem] top-[7rem]'>
                <div className='grid grid-cols-2 gap-[0.1rem]'>
                    <div className='bg-[#4A4E54] rounded-[1px] w-[0.4rem] h-[0.4rem]'></div>
                    <div className='bg-[#4A4E54] rounded-[1px] w-[0.4rem] h-[0.4rem]'></div>
                    <div className='bg-[#4A4E54] rounded-[1px] w-[0.4rem] h-[0.4rem]'></div>
                    <div className='bg-[#4A4E54] rounded-[1px] w-[0.4rem] h-[0.4rem]'></div>
                    <div className='bg-[#4A4E54] rounded-[1px] w-[0.4rem] h-[0.4rem]'></div>
                    <div className='bg-[#4A4E54] rounded-[1px] w-[0.4rem] h-[0.4rem]'></div>
                </div>
            </div>

            <div className='content ps-8 pe-4 m-5'>
                <div className="NavBar  gap-2 justify-evenly ">
                    <button className={menu==='about'?"active":"about"} onClick={()=>{setMenu('about')}} >
                        About Me
                    </button>
                    <button className={menu==='experience'?"active":"experience"} onClick={()=>{setMenu('experience')}} >
                        Experiences
                    </button>
                    <button className={menu==='recommend'?"active":"recommend"} onClick={()=>{setMenu('recommend')}} >
                        Recommended
                    </button>
                </div>

                <div className="custom-scrollbar text-[#7C7C7C] w-[611px] mt-4  overflow-y-scroll chakra-tabs__tab-panel css-a5mhaz lg:py-4 max-h-[10rem] " tabindex="0" role="tabpanel" aria-labelledby="tabs-:r0:--tab-0" id="tabs-:r0:--tabpanel-0">
                    <p className="text-sm leading-snug">
                        Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
                    </p>
                    <p className="mt-4 text-sm leading-snug ">
                        I was born and raised in Albany, NY, and have been living in Santa Carla for the past 10 years with my wife Tiffany and our 4-year-old twin daughters, Emma and Ella. It's been an amazing journey watching our girls grow up in this vibrant community. Emma loves to paint, while Ella is fascinated with anything that involves building and construction. They both just started school, and it's a joy to see how excited they are about learning and making new friends.

                        As they settle into their new routine, I've adjusted my schedule to make sure I'm there for them in the mornings. This means my calendar is usually blocked between 9–10 AM, so I can drop them off at school and spend a bit of quality time with them before diving into my workday. My family is my top priority, and these moments in the morning are incredibly precious to me. Balancing work and family can be challenging, but it's all worth it to see the smiles on their faces every day.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profiles
