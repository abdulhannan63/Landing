import React, { useState } from 'react'
import Profile from './profile/Profiles'
import './Left.css'
import Gallery from './Gallery/Gallery'
const Left = () => {

    return (
        <div className='mainDiv flex justify-around items-center'>
            <div className='leftDiv' >
            </div>
            <div className='rightDiv' >
                <div className='upper w-[720px] h-[316px] flex flex-col absolute top-[96px] left-[922px] gap-0 bg-[#363C43] rounded-[18.89px]'>
                    <Profile />
                </div>
                <div className="lowerT">
                    <hr />
                    <div className="lower">
                        <Gallery />
                    </div>
                </div>
            </div>
            <hr className='hrLine' />
        </div>
    )
}

export default Left