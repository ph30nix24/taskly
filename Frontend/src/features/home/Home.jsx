import React from 'react'
import Hero from './components/Hero'
import Middle from './components/Middle'
import Feature from './components/Feature'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from '../../Loader.jsx'
import { useAuth } from '../auth/hooks/useAuth'

const Home = () => {
  const { loading, user, avatar } = useAuth()
  if (loading ) {
    return (
      <main className='w-full h-screen flex-center'><Loader /></main>
    )
  }
  return (
    <div>
      <Navbar user={user} avatar={avatar}/>
      <main className='px-5 lg:px-30 relative overflow-x-hidden z-10 bg-[#2268f411] pt-30'>
          <img src="./imgs/cloud3.png" className='size-100 absolute object-contain rotate-180 top-0 left-0 -translate-y-4/10 -translate-x-1/10' alt="" />
          <img src="./imgs/cloud3.png" className='size-200 absolute object-contain rotate-180 top-0 right-0 -translate-y-1/2 translate-x-1/2' alt="" />
          <Hero />
          <Middle />
          <Feature />
      </main>
      <Footer />
    </div>
  )
}

export default Home