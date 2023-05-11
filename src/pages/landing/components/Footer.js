import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-[#2e3f48] w-[100%] py-12 font-Mulish'>
      <div className='max-w-[1000px] mx-auto flex flex-col space-y-4 justify-center items-center px-8'>
        <div className='cursor-pointer text-[12px] text-[#c2c2c2] space-y-4 text-center'>
          <div>
            <p>© 2023 Wildestorys. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;