/** @format */

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import { GiTie } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Sidebar = () => {

  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  };


  return (
    <div>
      <Image
        src='/images/profpic.jpg'
        alt='avatar'
        className='w-32 h-32 mx-auto border rounded-full'
        height="150"
        width="150"
        layout='responsive'
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
        <span className='text-green'>Graeme </span>
        Grant
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500'>
        Web Developer
      </p>

      <a
        className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200'
        href=''
        download='name'
      >
        <GiTie className='w-6 h-6 rounded-full' />
        <span>Download Resume</span>
      </a>

      {/* //Social icons */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
        <a href=''>
          <AiFillGithub className='w-8 h-8 cursor-pointer' />
        </a>
        <a href=''>
          <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
        </a>
        <a href=''>
          <AiFillInstagram className='w-8 h-8 cursor-pointer' />
        </a>
      </div>
      {/* //Address */}
      <div
        className='py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500'
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation className='mr-2' />
          <span>Edinburgh,UK</span>
        </div>
        <p className='my-2'>Graemejgrant@gmail.com</p>
        <p className='my-2'>0777777777777</p>
      </div>
      {/* Email Button */}
      <button
        className='w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-400 focus:outline-none'
        onClick={() => window.open('mailto:graemejgrant@gmail.com')}
      >
        Email
      </button>
      <button
        onClick={changeTheme} className='w-8/12 px-5 py-2 my-2 text-white rounded-full text bg-gradient-to-r from-green to-blue-400'>
        Toggle
      </button>
    </div>
  );
};

export default Sidebar;
