import React from 'react'

const Hero = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row gap-10 lg:gap-0 lg:px-10 relative z-10'>
        <div className='w-full lg:w-3/10 lg:h-90 flex flex-col justify-between relative z-10'>
            <div>
                <h1 className='capitalize font-heading font-semibold leading-tight text-[8vw] lg:text-5xl pr-10 lg:pr-0'>manage your tasks <span className='font-normal text-primary'>efficiently</span></h1>
                <p className='font-body text-[4vw] lg:text-base pt-5'>Organize your projects and boost productivity with our task management platform.</p>
            </div>
            <a href="/dashboard"><button className='btn capitalize w-fit bg-[linear-gradient(145deg,rgba(59,_115,_227,_1)_17%,_rgba(137,_59,_227,_0.8)_88%)] text-white lg:mt-5 hover:bg-blue-700 shadow-md align-bottom mt-10'>
                get started
            </button></a>
            <img src="./imgs/cloud.png" className='absolute bottom-0 right-0 translate-y-1/2 translate-x-2/10 lg:translate-x-7/10 size-200 object-contain z-20' alt="" />
        </div>
        <div className='w-full lg:w-7/10 lg:px-30 lg:pl-40 lg:h-90 relative z-10 pointer-events-none'>
            <div className='w-9/10 lg:size-full rounded-2xl [box-shadow:_0_24px_56px_#3b73e33e] pt-3 pb-5 lg:py-5 px-5 lg:px-10 relative z-20 mx-auto bg-white/50'>
                <div className='flex justify-between'>
                    <h1 className='font-heading capitalize font-semibold text-[4vw] lg:text-base'>system tasks</h1>
                </div>
                <hr className='h-1 border-gray-300 my-2 lg:my-4'/>
                <ul className='w-full'>
                    <li className='flex justify-between py-2 lg:py-3 bg-[#3c79f414] rounded-lg mb-4 px-2 lg:px-5 items-center shadow-sm'>
                        <div className='flex gap-4 items-center'>
                            <div className='size-4 border-2 border-primary rounded'></div>
                            <p className='font-heading text-[3.5vw] lg:text-base'>Design landing page</p>
                        </div>
                        <span className='border-l-2 border-[#99a1af60] pl-3 lg:pl-5 text-gray-600 text-[3.5vw] lg:text-base'>20 Oct</span>
                    </li>
                    <li className='flex justify-between py-2 lg:py-3 bg-[#3c79f414] rounded-lg mb-4 px-2 lg:px-5 items-center shadow-sm'>
                        <div className='flex gap-4 items-center'>
                            <div className='size-4 border-2 border-primary rounded flex-center text-xs text-white bg-primary'>&#10003;</div>
                            <p className='font-heading text-[3.5vw] lg:text-base'>Write new blog post</p>
                        </div>
                        <span className='border-l-2 border-[#99a1af60] pl-3 lg:pl-5 text-gray-600 text-[3.5vw] lg:text-base'>20 Oct</span>
                    </li>
                    <li className='flex justify-between py-2 lg:py-3 bg-[#3c79f414] rounded-lg mb-4 px-2 lg:px-5 items-center shadow-sm'>
                        <div className='flex gap-4 items-center'>
                            <div className='size-4 border-2 border-primary rounded flex-center text-xs text-white bg-primary'>&#10003;</div>
                            <p className='font-heading text-[3.5vw] lg:text-base'>Fix login bug</p>
                        </div>
                        <span className='border-l-2 border-[#99a1af60] pl-3 lg:pl-5 text-gray-600 text-[3.5vw] lg:text-base'>20 Oct</span>
                    </li>
                    
                </ul>
                <button className='btn capitalize w-fit bg-[linear-gradient(145deg,rgba(59,_115,_227,_1)_17%,_rgba(137,_59,_227,_0.8)_88%)] text-white mt-6 hover:bg-blue-700 shadow-md align-bottom'>
                    add task
                </button>
            </div>
        </div>
        <img src="./imgs/hero.png" className='size-[90vw] lg:size-160 absolute right-0 bottom-0 translate-y-[45%] lg:translate-y-[65%] translate-x-1/4 lg:translate-x-2/10 z-30' alt="" />
        <img src="./imgs/cloud.png" className='absolute bottom-0 right-0 translate-y-1/2 -translate-x-5/10 size-40 object-contain z-20' alt="" />
        <img src="./imgs/cloud.png" className='hidden lg:block absolute bottom-0 right-0 -translate-y-3/10 -translate-x-3/10 size-40 object-contain z-20' alt="" />
    </div>
  )
}

export default Hero