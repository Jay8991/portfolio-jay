import React from 'react'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Js from '../assets/js.png'
import ReactJS from '../assets/react.png'
import Mysql from '../assets/mysql.png'
import Java from '../assets/java.png'
import Python from '../assets/python.png'
import NodeJS from '../assets/nodejs.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300' >
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-400'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500'>
                    <img className='w-20 h-20 object-contain mx-auto' src={Html} alt="html-logo" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500'>
                    <img className='w-20 h-20 object-contain mx-auto' src={Css} alt="css-logo" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500'>
                    <img className='w-20 h-20 object-contain mx-auto' src={Js} alt="js-logo" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500'>
                    <img className='w-20 h-20 object-contain mx-auto' src={ReactJS} alt="react-logo" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500'>
                    <img className='w-20 h-20 object-contain mx-auto' src={Mysql} alt="mysql-logo" />
                    <p className='my-4'>MYSQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500'>
                    <img className='object-contain w-20 h-20 mx-auto' src={Java} alt="java-logo" />
                    <p className='my-4'>JAVA</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500'>
                    <img className='object-contain w-20 h-20 mx-auto' src={Python} alt="python-logo" />
                    <p className='my-4'>PYTHON</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500'>
                    <img className='object-contain w-20 h-20 mx-auto' src={NodeJS} alt="nodejs-logo" />
                    <p className='my-4'>NODE.JS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills