import React, { useState } from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { CiLock } from "react-icons/ci";
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router';
import Loader from '../../../Loader';

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate();
  const handleChanges = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin({ email: formData.email, password: formData.password });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }
  if (loading) {
    return (
      <main  className="w-full h-screen flex-center">
        <Loader />
      </main>
    )
  }
  return (
    <div className='w-full h-dvh bg-[#F0F5FE] relative z-30 flex overflow-x-hidden flex-center'>
      <img src="./../../imgs/cloud3.png" className='size-100 absolute object-contain rotate-180 top-0 left-0 -translate-y-4/10 -translate-x-1/10' alt="" />
      <img src="./../../imgs/cloud3.png" className='size-200 absolute object-contain rotate-180 top-0 right-0 -translate-y-1/2 translate-x-1/2' alt="" />
      <div className='w-full lg:w-1/2 relative '>
        <img src="./../../imgs/cloud.png" className='absolute z-10 size-70 lg:size-100 object-contain bottom-0 translate-y-4/10 lg:translate-y-2/10 lg:translate-x-2/10 right-0' alt="" />
        <img src="./../../imgs/signup.png" className='absolute z-40 size-40 object-contain top-0 -translate-y-6/10 lg:translate-x-3/10 left-0' alt="" />
        <div className='w-9/10 lg:w-7/10 bg-white/50  [box-shadow:_0_24px_56px_#3b73e33e] rounded-2xl px-10 py-10 relative z-20 mx-auto lg:mx-auto'>
          <h1 className='font-heading capitalize text-3xl'>
            Welcome <span className='text-primary font-medium'>back</span>
          </h1>
          <p className='mt-2 font-body text-base'>Log in to your account to continue tracking your daily tasks.</p>
          <form className='mt-10' onSubmit={formSubmit}>
            <fieldset className='flex gap-4 mt-4 items-center border-1 rounded border-gray-300 p-2 font-body text-sm'>
              <label htmlFor="email" className='text-[#555] text-base'><HiOutlineMail /></label>
              <input type="email" placeholder='Email Address' name='email' onChange={handleChanges} id='email' className='outline-none w-full' />
            </fieldset>
            <fieldset className='flex gap-4 mt-4 items-center border-1 rounded border-gray-300 p-2 font-body text-sm'>
              <label htmlFor="password" className='text-base'><CiLock /></label>
              <input type="password" placeholder='Password' name='password' onChange={handleChanges} id='password' className='outline-none w-full' />
            </fieldset>
            <p className='text-base text-primary font-body mt-4 text-center'><a href="">forget your password</a></p>
            <button type='submit' className='btn font-body mt-10 w-full bg-[linear-gradient(145deg,rgba(59,_115,_227,_1)_17%,_rgba(137,_59,_227,_0.8)_88%)] text-white hover:bg-primary'>
              log in
            </button>
          </form>
          <p className='font-body text-sm mt-5'>Already have an accunt? <span className='text-primary cursor-pointer'><a href="/register">sign up</a></span></p>
        </div>
      </div>
    </div>
  )
}

export default Login