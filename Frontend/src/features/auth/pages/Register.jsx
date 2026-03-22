import React, { useState, useRef } from 'react'
import { BiUser } from 'react-icons/bi'
import { HiOutlineMail } from "react-icons/hi";
import { CiLock } from "react-icons/ci";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router';
import Loader from '../../../Loader';

const Register = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { loading, handleRegister } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [isPasswordSame, setIsPasswordSame] = useState(true);
  const confirmPasswordRef = useRef(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setformData({
      ...formData, [e.target.name]: e.target.value
    })
  }
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      await handleRegister({ name: formData.name, email: formData.email, password: formData.password });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }
  if ( loading) {
    return (
      <main  className="w-full h-screen flex-center">
        <Loader />
      </main>
    )
  }
  return (
    <main className='w-full h-dvh bg-[#F0F5FE] relative z-30 flex overflow-x-hidden flex-center'>
      <img src="./imgs/cloud3.png" className='size-100 absolute object-contain rotate-180 top-0 left-0 -translate-y-4/10 -translate-x-1/10' alt="" />
      <img src="./imgs/cloud3.png" className='size-200 absolute object-contain rotate-180 top-0 right-0 -translate-y-1/2 translate-x-1/2' alt="" />
      <div className='w-full lg:w-1/2 relative '>
        <img src="./imgs/cloud.png" className='absolute z-10 size-70 lg:size-100 object-contain bottom-0 translate-y-4/10 lg:translate-y-2/10 lg:translate-x-2/10 right-0' alt="" />
        <img src="./imgs/signup.png" className='absolute z-40 size-40 object-contain top-0 -translate-y-6/10 lg:translate-x-3/10 left-0' alt="" />
        <div className='w-9/10 lg:w-7/10 bg-white/50  [box-shadow:_0_24px_56px_#3b73e33e] rounded-2xl px-10 py-10 relative z-20 mx-auto lg:mx-auto'>
          <h1 className='font-heading capitalize text-3xl'>
            create your <span className='text-primary font-medium'>account</span>
          </h1>
          <p className='mt-2 font-body text-base'>Sign up to start tracking your daily tasks and building better habits.</p>
          <form className='mt-10' onSubmit={formSubmit}>
            <fieldset className='flex gap-4 mt-5 items-center border-1 rounded border-gray-300 p-2 font-body text-sm focus-within:border-primary/50 focus-within:[box-shadow:_0_2px_4px_#0a58f43e]'>
              <label htmlFor="full-name" className='text-[#555] text-base'><BiUser /></label>
              <input type="text"
                name='name' 
                placeholder='Full Name' 
                id='full-name' 
                onChange={handleChange}
                 className='outline-none w-full' 
              />
            </fieldset>
            <fieldset className='flex gap-4 mt-5 items-center border-1 rounded border-gray-300 p-2 font-body text-sm focus-within:border-primary/50 focus-within:[box-shadow:_0_2px_4px_#0a58f43e]'>
              <label htmlFor="email" className='text-[#555] text-base'><HiOutlineMail /></label>
              <input type="email" name='email' placeholder='Email Address' id='email' onChange={handleChange} className='outline-none w-full' />
            </fieldset>
            <fieldset className='flex gap-4 mt-5 items-center border-1 rounded border-gray-300 p-2 font-body text-sm pr-5 focus-within:border-primary/50 focus-within:[box-shadow:_0_2px_4px_#0a58f43e]'>
              <label htmlFor="password" className='text-base'><CiLock /></label>
              <input 
                type={showPassword ? "text" : "password"} 
                name='password' 
                placeholder='Password' 
                id='password' 
                maxLength={30}
                minLength={8}
                onChange={handleChange}  className='outline-none w-full' 
              />
              {showPassword ? (
                <FiEyeOff className='text-2xl text-[#555] ' onClick={() => setShowPassword(false)} />
              ) : (
                <FiEye className='text-2xl text-[#555] ' onClick={() => setShowPassword(true)} />
              )}
            </fieldset>
            <fieldset className={`flex gap-4 mt-5 items-center border-1 rounded border-gray-300 p-2 font-body text-sm pr-5 ${!isPasswordSame ? "focus-within:border-red-500" : "focus-within:border-primary/50 focus-within:[box-shadow:_0_2px_4px_#0a58f43e]"}`}>
              <label htmlFor="confirm-password" className='text-base'><CiLock /></label>
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                ref={confirmPasswordRef}
                name='confirmPassword' 
                placeholder='Confirm Password' 
                id='confirm-password'
                maxLength={30}
                minLength={8}
                onChange={handleChange}  className={`outline-none w-full ${!isPasswordSame ? "border-red-500" : ""}`} 
              />
              {showConfirmPassword ? (
                <FiEyeOff className='text-2xl text-[#555] ' onClick={() => setShowConfirmPassword(false)} />
              ) : (
                <FiEye className='text-2xl text-[#555] ' onClick={() => setShowConfirmPassword(true)} />
              )}
            </fieldset>
            <button type='submit' className='btn font-body mt-10 w-full bg-[linear-gradient(145deg,rgba(59,_115,_227,_1)_17%,_rgba(137,_59,_227,_0.8)_88%)] text-white hover:bg-primary '>
              sign up
            </button>
          </form>
          <p className='font-body text-sm mt-5'>Already have an accunt? <span className='text-primary cursor-pointer'><a href="/login">log in</a></span></p>
        </div>
      </div>
    </main>
  )
}

export default Register