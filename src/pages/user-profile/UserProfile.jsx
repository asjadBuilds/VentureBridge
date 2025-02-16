import React from 'react'
import '../user-profile/user-profile.css';
import { MdWorkOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaUserCog } from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import Ripples from 'react-ripples';
const UserProfile = () => {
  return (
    <div>
      <div className='flex flex-col bg-white'>
        <div>
          <img src="\src\assets\dashboard\cover-profile.svg" alt="" className='w-full object-cover h-[250px]'/>
        </div>
        <div className='flex items-center'>
          <div className='size-[150px] overflow-hidden mt-[-35px] mx-4 border-[6px] border-white border-solid'>
            <img src="\src\assets\dashboard\user-profile-pic.jpg" alt="" className='w-full h-full object-cover'/>
          </div>
          <div className='flex justify-between items-center w-full px-4'>
            <div className='flex flex-col gap-2'>
              <h3 className='text-xl font-medium'>Will Hams</h3>
              <div className='flex items-center gap-4 *:flex *:items-center *:gap-2'>
                <div>
                <MdWorkOutline />
                Web Developer
                </div>
                <div>
                <IoLocationOutline />
                Pakistan
                </div>
                <div>
                <BsCalendarDate />
                Jan 19 2024
                </div>
              </div>
            </div>
            <div>
              <button className='flex items-center gap-2 bg-[#7367f0] text-white text-sm py-2 px-5 rounded btn-shadow'>
              <IoShareSocialOutline />
              Share
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <Ripples>
        <div className='flex items-center gap-2 bg-[#7367f0] text-white text-sm py-2 px-5 rounded btn-shadow cursor-pointer'>
        <FaUserCog />
        Profile Settings
        </div>
        </Ripples>
        <Ripples>
        <div className='flex items-center gap-2 bg-[#7367f0] text-white text-sm py-2 px-5 rounded btn-shadow cursor-pointer'>
        <CiMoneyBill />
        Billing Settings
        </div>
        </Ripples>
        <Ripples>
        <div className='flex items-center gap-2 bg-[#7367f0] text-white text-sm py-2 px-5 rounded btn-shadow cursor-pointer'>
        <IoShieldCheckmarkOutline />
        General Settings
        </div>
        </Ripples>
      </div>
      <div className='mt-4'>
        
      </div>
    </div>
  )
}

export default UserProfile