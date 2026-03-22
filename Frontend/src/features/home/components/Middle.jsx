import React from 'react'
import { GrInProgress } from "react-icons/gr";

const Middle = () => {
  return (
    <div className='w-full h-fit pt-40 pb-10 relative z-30 px-5 lg:px-30'>
        <h1 className='text-center text-[8vw] leading-[1.251] lg:text-4xl font-heading'><span className='text-primary font-semibold'>Organize</span> Your Workflow</h1>
        <p className='text-center font-body text-[4vw] lg:text-base mt-3'>Keep your tasks organized and never miss a deadline.</p>
        <img src="./imgs/cloud2.png" className='size-120 object-contain -translate-y-4/10 absolute lg:-translate-y-3/10 -translate-x-4/10 ' alt="" />
        <div className='w-full lg:w-full flex flex-col lg:flex-row gap-5 lg:gap-10 justify-center mt-10 lg:mt-20 px-0 lg:px-10 relative z-40 pointer-events-none'>
            <img src="./imgs/cloud2.png" className='absolute ' alt="" />
            <div className='w-9/10 lg:w-1/2 rounded-2xl [box-shadow:_0_24px_56px_#3b73e33e] pt-3 pb-5 lg:py-5 px-5 lg:px-10 relative z-20 bg-[#FEFEFE]'>
                <div className='flex justify-between'>
                    <h1 className='font-heading capitalize font-semibold text-[4vw] lg:text-lg'>Completed Tasks</h1>
                </div>
                <hr className='h-1 border-gray-300 my-2 lg:mt-3 lg:mb-4'/>
                <ul className='w-full'>
                    <li className='flex justify-between py-3 bg-[#3c79f414] rounded-lg mb-2 lg:mb-4 px-2 lg:px-5 items-center shadow-sm'>
                        <div className='flex gap-4 items-center'>
                            <div className='size-5 border-2 border-red-400 bg-red-400 rounded text-white flex-center'>&#10003;</div>
                            <p className='font-heading text-[3.5vw] lg:text-base'>Mobile App</p>
                        </div>
                        <span className='border-l-2 border-[#99a1af60] pl-3 lg:pl-5 text-gray-600 text-[3.5vw] lg:text-base'>20 Nov</span>
                    </li>
                    <li className='flex justify-between py-3 bg-[#3c79f414] rounded-lg mb-2 lg:mb-4 px-2 lg:px-5 items-center shadow-sm'>
                        <div className='flex gap-4 items-center'>
                            <div className='size-5 border-2 border-primary rounded flex-center text-white bg-primary'>&#10003;</div>
                            <p className='font-heading text-[3.5vw] lg:text-base'>Blog</p>
                        </div>
                        <span className='border-l-2 border-[#99a1af60] pl-3 lg:pl-5 text-gray-600 text-[3.5vw] lg:text-base'>20 Sept</span>
                    </li>
                    <li className='justify-between py-3 bg-[#3c79f414] rounded-lg mb-2 lg:mb-4 px-2 lg:px-5 items-center shadow-sm hidden lg:flex'>
                        <div className='flex gap-4 items-center'>
                            <div className='size-5 border-2 border-green-bg-green-400 rounded flex-center text-white bg-green-400'>&#10003;</div>
                            <p className='font-heading text-[3.5vw] lg:text-base'>Website</p>
                        </div>
                        <span className='border-l-2 border-[#99a1af60] pl-3 lg:pl-5 text-gray-600 text-[3.5vw] lg:text-base'>20 Oct</span>
                    </li>
                    
                </ul>
                <button className='btn capitalize w-full bg-[linear-gradient(145deg,rgba(59,_115,_227,_1)_17%,_rgba(137,_59,_227,_0.8)_88%)] text-white mt-6 hover:bg-blue-700 shadow-md align-bottom'>
                    add task
                </button>
            </div>
            <div className='w-9/10 lg:w-1/2 rounded-2xl [box-shadow:_0_24px_56px_#3b73e33e] pt-3 pb-5 lg:py-5 px-5 lg:px-10 relative z-20 bg-[#FEFEFE] self-end'>
                <div className='flex justify-between'>
                    <h1 className='font-heading capitalize font-semibold text-[4vw] lg:text-lg'>In Progress</h1>
                </div>
                <hr className='h-1 border-gray-300 my-2 lg:mt-3 lg:mb-4'/>
                <ul className='w-full'>
                    <li className='flex justify-betweenflex justify-between py-3 bg-[#3c79f414] rounded-lg mb-2 lg:mb-4 px-2 lg:px-5 items-center shadow-sm'>
                        <div className='flex gap-4 items-center'>
                            <div className='size-5 text-primary flex-center'><GrInProgress /></div>
                            <p className='font-heading text-[3.5vw] lg:text-base'>Develop new feature</p>
                        </div>
                        <span className='border-l-2 border-[#99a1af60] pl-3 lg:pl-5 text-gray-600 text-[3.5vw] lg:text-base'>20 Nov</span>
                    </li>
                    <li className='flex justify-between py-3 bg-[#3c79f414] rounded-lg mb-2 lg:mb-4 px-2 lg:px-5 items-center shadow-sm'>
                        <div className='flex gap-4 items-center'>
                            <div className='size-5 text-primary flex-center'><GrInProgress /></div>
                            <p className='font-heading text-[3.5vw] lg:text-base'>User testing</p>
                        </div>
                        <span className='border-l-2 border-[#99a1af60] pl-3 lg:pl-5 text-gray-600 text-[3.5vw] lg:text-base'>20 Sept</span>
                    </li>
                    <li className='hidden lg:flex justify-between py-3 bg-[#3c79f414] rounded-lg mb-2 lg:mb-4 px-2 lg:px-5 items-center shadow-sm'>
                        <div className='flex gap-4 items-center'>
                            <div className='size-5 text-primary flex-center'><GrInProgress /></div>
                            <p className='font-heading text-[3.5vw] lg:text-base'>Create presentation</p>
                        </div>
                        <span className='border-l-2 border-[#99a1af60] pl-3 lg:pl-5 text-gray-600 text-[3.5vw] lg:text-base'>20 Oct</span>
                    </li>
                    
                </ul>
                <button className='btn capitalize w-full bg-[linear-gradient(145deg,rgba(59,_115,_227,_1)_17%,_rgba(137,_59,_227,_0.8)_88%)] text-white mt-6 hover:bg-blue-700 shadow-md align-bottom'>
                    add task
                </button>
            </div>
        </div>
    </div>
  )
}

export default Middle