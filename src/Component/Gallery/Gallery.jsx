import React, { useRef } from 'react'
import { FaQuestionCircle } from 'react-icons/fa'
import './gallery.css'
const Gallery = () => {
    const fileInputRef = useRef(null);

  // Handle button click to trigger file input
  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger the hidden input click
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    console.log("Selected file:", file);
    // Do something with the selected file, like uploading it
  };
    return (
        <div>
            <div className='absolute  left-[0.9rem] top-[1rem] opacity-1'>
                <FaQuestionCircle  className='w-[25px] h-[25px]' />
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

            <div className='flex justify-between items-center ml-9  p-1 w-[92%]'>
                <span className='text-white m-4 font-medium bg-[#171717] px-9 py-4 rounded-2xl'>Gallery</span>
                <button onClick={handleButtonClick} className='addImage m-[300] bg-[#FFFFFF08] text-xs font-medium text-white add-btn px-6 h-11 rounded-full xl:me-5'>
                    <div className=' flex items-center gap-1 shadow-inner'>
                        <span>+ ADD IMAGE</span>
                    </div>
                </button>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
                <div className='Arrow flex justify-around '>
                    <button className='rightArrow arrow-btn me-1 h-11 w-11 rounded-full flex items-center justify-center'>
                        <img src="data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.40222%208.37645H15.5967'%20stroke='%236F787C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.40222%2015.3765L1.40222%208.37646L8.40222%201.37646'%20stroke='%236F787C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                            alt="right arrow" />
                    </button>
                    <button className='leftArrow arrow-btn h-11 ms-1 w-11 rounded-full flex items-center justify-center'>
                        <img src="data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.5968%208.37648L1.40236%208.37648'%20stroke='%236F787C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.5968%201.37646L15.5968%208.37646L8.5968%2015.3765'%20stroke='%236F787C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                            alt="right arrow" />
                    </button>

                </div>
            </div>
            <div className='slider-container  grid grid-cols-3 gap-0 ms-3 mx-4 mt-9 mb-3 w-[90%]'>
                <div className="carousel-item  relative pb-[100%]">
                    <img src="https://picsum.photos/200/300" alt="Slide 1
                    " className='absolute top-0 h-[179px] w-[190px] left-0 w-191px  object-cover rounded-3xl grayscale carousel-img' />
                </div>
                <div className="carousel-item relative pb-[100%]">
                    <img src="https://picsum.photos/200/300" className='absolute top-0  left-0  h-[179px] w-[190px] object-cover rounded-3xl grayscale carousel-img' alt="Slide 1
                    " />

                </div>
                <div className="carousel-item   relative pb-[100%]">
                    <img src="https://picsum.photos/200/300" className='absolute top-0  left-0 h-[179px] w-[190px] object-cover rounded-3xl grayscale carousel-img' alt="Slide 1
                    " />

                </div>
            </div>
        </div>
    )
}

export default Gallery