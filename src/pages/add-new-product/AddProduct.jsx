import React from 'react'
import './add-product.css'
const AddProduct = () => {
  return (
    <div className='mb-10'>
        <div className='relative w-full bg-front py-36 rounded-b-[20px] md:rounded-b-[80px] overflow-hidden'>
          <div className='absolute inset-0 bg-emerald-900/90'></div>
          <div className='text-center text-white text-4xl relative font-semibold'>Idea Detail</div>
          <div className='absolute left-1/2 -translate-x-1/2 bottom-0 flex items-center justify-center gap-2 font-medium text-white/50 max-md:text-xs text-nowrap mb-2'>
            <span>Jobstack</span> &lt; <span className='text-white'>Add New Idea</span>
          </div>
        </div>
        <div className='flex items-center'>
            <div className='flex flex-col'>
                
            </div>
        </div>
    </div>
  )
}

export default AddProduct