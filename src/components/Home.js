import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
      
      <div name="home" className='w-full h-screen bg-[#0a192f]'>
          {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className="text-pink-400">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Jay Patel</h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Full Stack Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Aliquam dicta veniam sed molestias, suscipit amet quo impedit quos nesciunt 
                nihil?
            </p>
            <div>
                <buttom className="text-white group border-2 flex items-center px-6 py-4 w-[170px] hover:bg-pink-400 hover:border-pink-400">View Work 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' /> 
                </span>
                </buttom>
            </div>
        </div>
    </div>
  )
}

export default Home