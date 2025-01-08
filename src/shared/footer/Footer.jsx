import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex flex-col justify-center bg-slate-900'>
      <div className='container py-12'>
        <div className='mb-8'><img src="src\assets\full-logo-white.png" alt="full-logo" className='mx-auto'/></div>
        <ul className='flex flex-wrap justify-center gap-4 text-white text-[15px] font-medium'>
          <li>Home</li>
          <li>How it Works</li>
          <li>Privacy & Policy</li>
          <li>Contact us</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
      <div className='h-[1px] w-full bg-neutral-300'></div>
      <div className='container py-12'>
        <div>© 2025  Jobstack. Design & Develop with Heart</div>
        <div className='flex items-center'>
          {/* under development */}
        </div>
      </div>
    </div>
  )
}

export default Footer