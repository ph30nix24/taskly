import React from 'react'

const Feature = () => {
  return (
    <div className='w-full pt-20 z-30 lg:px-20 relative '>
        <img src="./imgs/drop3.png" className="size-15 lg:size-20 absolute -translate-x-[140%]  lg:-translate-x-1/2 translate-y-[120%] lg:translate-y-6/10 top-0 left-1/4 z-10" alt="" />
        <h1 className='text-center text-[8vw] leading-[1.251] lg:text-4xl font-heading capitalize relative z-20'><span className='text-primary font-semibold'>powerful features</span> to keep you on track</h1>
        <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-20 mt-5 lg:mt-16'>
            <div className='w-full lg:w-1/3 text-center flex flex-col items-center'>
                <img src="./icons/list.png" className='size-15 lg:size-30 object-contain' alt="" />
                <h1 className='text-[5vw] lg:text-2xl font-heading capitalize mt-3 mb-1'>create tasks</h1>
                <p className='font-body text-[3.5vw] lg:text-base'>Easily add and manage your tasks.</p>
            </div>
            <div className='w-full lg:w-1/3 text-center flex flex-col items-center'>
                <img src="./icons/clock.png" className='size-15 lg:size-30 object-contain' alt="" />
                <h1 className='text-[5vw] lg:text-2xl font-heading capitalize mt-3 mb-1'>set deadlines</h1>
                <p className='font-body text-[3.5vw] lg:text-base'>Prioritize and pick due dates.</p>
            </div>
            <div className='w-full lg:w-1/3 text-center flex flex-col items-center'>
                <img src="./icons/user.png" className='size-15 lg:size-30 object-contain' alt="" />
                <h1 className='text-[5vw] lg:text-2xl font-heading capitalize mt-3 mb-1'>collaborate</h1>
                <p className='font-body text-[3.5vw] lg:text-base'>Work with your team efficiently.</p>
            </div>
        </div>
        <div className='w-full py-20 relative'>
          <h1 className='text-center text-[8vw] leading-[1.251] lg:text-3xl font-heading capitalize'>boost your productivity today!</h1>
          <img src="./imgs/drop1.png" className='absolute size-12 rotate-180 top-1/2 left-2/10 -translate-y-[140%] lg:-translate-y-8/10 -translate-x-[190%] lg:translate-x-5 z-10' alt="" />
          <img src="./imgs/cloud.png" className='absolute size-60 object-contain top-1/2 right-2/10 translate-y-3/10 lg:translate-y-0 translate-x-6/10 lg:translate-x-20  z-10' alt="" />
          <div className='w-full lg:w-150 lg:h-35 mt-20 bg-white/50 shadow-md mx-auto rounded-xl [box-shadow:_0_24px_56px_#3b73e33e] overflow-hidden flex flex-col lg:flex-row items-center z-20 relative'>
            <img src="./imgs/manager2.png" className='size-30 lg:size-40 object-contain' alt="" />
            <div className='w-110 h-full px-10 py-3'>
                <p className='font-body mb-3 px-4 lg:px-0 text-[3.8vw] lg:text-base'>Taskly has transformed the way our team works. It’s intuitive, and everyone picked it up quickly.</p>
                <p className='font-heading px-4 lg:px-0 text-[3.8vw] lg:text-base'>Phe0nix - <span className='text-[#444] text-[3.5vw] lg:text-sm'>Product Manager</span></p>
            </div>
          </div>
        </div>
        <div className='w-full my-10 flex flex-col items-center relative z-30'>
          <h1 className='text-center capitalize font-heading text-[8vw] leading-[1.251] lg:text-3xl mb-3'>start managing your tasks <span className='font-semibold text-primary'>efficiently</span></h1>
          <p className='text-center text-[3.8vw] lg:text-base font-body mb-10'>Sign up today and boost your productivity with taskly.</p>
          <button className='btn capitalize bg-[linear-gradient(145deg,rgba(59,_115,_227,_1)_17%,_rgba(137,_59,_227,_0.8)_88%)] mx-auto w-fit text-white'><a href="/dashboard">get started</a></button>
        </div>
    </div>
  )
}

export default Feature