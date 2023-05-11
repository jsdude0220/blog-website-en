import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTwitter, BsPinterest } from 'react-icons/bs';
import BoyIMG from '../../../assets/boy.png';
import Logo from '../../../assets/logo.png';

const HeaderNav = ({ goSection }) => {
  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] = useState(false);

  const menuLists = [
    // { id: 1, title: 'TESTIMONIALS', secId: 1 },
  ]

  return (
    <>
      {/* sidebar menu */}
      {openSidebar && <div className='fixed h-[100vh] inset-0 z-30 bg-black opacity-70' onClick={() => setOpenSidebar(false)} />}
      <div className={`fixed z-40 top-0 bottom-0 right-0 overflow-x-hidden py-16 -sm:py-12 transition-all duration-[0.3s] -sm:transition-all -sm:duration-[0.5s] overflow-y-scroll
      ${openSidebar ? `px-12 -sm:!w-[100%] -sm:px-8 -sm:!min-w-[100%]` : '!w-[0px] min-w-0'}`}
        style={{
          width: '100%',
          background: 'rgba(255, 255, 255, 0.8)'
        }}
      >
        <FaTimes
          className="absolute top-[15px] right-[30px] -sm:right-[15px] text-[#ed6c43] text-[30px] text-bolder cursor-pointer"
          onClick={() => {
            setOpenSidebar(false);
          }}
        />
        <div className='flex flex-col justify-center items-center py-[30px] text-white'>
          {menuLists.map((item, index) => {
            return (
              <div
                key={index}
                className="text-[#333333] p-4 text-[16px] font-Mulish"
                onClick={() => {
                  setOpenSidebar(false);
                  goSection(item.secId);
                }}
              >
                {item.title}
              </div>
            )
          })}
        </div>
      </div>

      {/* header bar */}
      <div className={`fixed inset-x-0 top-0 py-4 px-8 -sm:px-4 ease-in-out duration-500 z-20`}
        style={{
          background: 'rgba(255,255,255,0.8)'
        }}
      >
        <div className='mx-auto max-w-[1000px] flex flex-row justify-between items-center text-black'>
          <div className='cursor-pointer flex flex-row justify-start items-center space-x-4'>
            <img src={Logo} className='h-[40px] -sm:h-[30px] rounded-full' />
          </div>
          <div className='cursor-pointer'>
            {/* <div className='flex flex-row justify-end items-center md:hidden space-x-2'>
              <HiMenu 
                className='inline text-[30px] cursor-pointer text-[#ed6c43]' 
                onClick={() => {
                  setOpenSidebar(true);
                }}
              />
            </div> */}
            <div className='flex flex-row justify-center items-center space-x-6 -lg:space-x-3 text-[14px] -md:hidden'>
              {menuLists.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='font-Mulish uppercase text-[#333333]'
                    onClick={() => goSection(item.secId)}
                  >
                    {item.title}
                  </div>
                )
              })}
            </div>
            <div className='flex flex-row justify-start items-center space-x-4 cursor-pointer'
              onClick={() => {
                window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
              }}
            >
              <BsFacebook className='text-[#222]' />
              <BsInstagram className='text-[#222]' />
              <BsTwitter className='text-[#222]' />
              <BsPinterest className='text-[#222]' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderNav;