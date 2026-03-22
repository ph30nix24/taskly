import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='w-full bg-[#2268f411] relative z-10 pt-40'>
        <img src="./../../imgs/footer.png" className='w-full lg:h-100 object-cover relative z-10' alt="" />
         <div className='w-9/10 lg:w-3/5 lg:h-50 absolute bg-white/10 lg:bg-white/20 backdrop-blur-md rounded-xl [box-shadow:_0_24px_56px_#3b73e33e] top-1/2 left-1/2 -translate-x-1/2 -translate-y-7/10 lg:-translate-y-1/2 z-30 flex px-2'>
            <div className='w-2/10 lg:w-1/3 flex-center h-full'>
                <img src="./../../imgs/footer2.png" className='size-40 object-contain' alt="" />
            </div>
            <div className='w-2/5 lg:w-1/3 pt-4 lg:py-5'>
                <h1 className='text-primary text-[8vw] leading-[1.251] lg:text-3xl font-hero text-center'>taskly</h1>
                <div className='flex justify-center mt-3 lg:mt-7'>
                    <FaLinkedin className='text-primary size-6 mx-2 cursor-pointer hover:scale-110 transition-transform duration-300' />
                    <FaTwitter className='text-primary size-6 mx-2 cursor-pointer hover:scale-110 transition-transform duration-300' />
                    <FaInstagramSquare className='text-primary size-6 mx-2 cursor-pointer hover:scale-110 transition-transform duration-300' />
                </div>
                <p className='text-center font-body mt-3 text-[3vw] lg:text-base lg:mt-6'>Copyright &copy; 2026 Taskly</p>
            </div>
            <div className='w-2/5 lg:w-1/3 pt-5 lg:py-5 justify-center'>
                {/* Empty for future content or design balance */}
                <h1 className='text-center text-primary text-[3.8vw] lg:text-base font-body capitalize font-semibold'>features</h1>
                <ul>
                    <li className='text-center text-[3vw] lg:text-sm font-body mt-2 cursor-pointer hover:text-primary/70 transition-colors duration-300'>Task Management</li>
                    <li className='text-center text-[3vw] lg:text-sm font-body lg:mt-3 cursor-pointer hover:text-primary/70 transition-colors duration-300'>Deadline Tracking</li>
                </ul>
                <a href="" className='block text-center mt-2 lg:mt-4 text-sm font-body text-primary hover:text-primary/70 transition-colors duration-300'>Privacy Policy</a>
                <a href="" className='block text-center mt-1 text-sm font-body text-primary hover:text-primary/70 transition-colors duration-300'>Terms of Service</a>
            </div>
        </div>
       
    </footer>
  )
}

export default Footer