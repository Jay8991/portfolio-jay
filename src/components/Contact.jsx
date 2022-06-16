import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-ceter p-4'>

        <form method='POST' className='flex flex-col max-w-[600px] w-full' action="https://getform.io/f/bad193ea-4e55-45f8-ba9b-1ee66cf67e8a">
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-400 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - pateljaym.98@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message' />
            <button className='text-white border-2 hover:bg-pink-400 hover:border-pink-300 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>

    </div>
  )
}

export default Contact