import React from 'react';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='flex flex-row bg-green-900 justify-center py-3 px-0'>
      <div id='contact' className='text-lg lg:text-2xl flex gap-4 lg:gap-16 py-3 text-zinc-200'>
        2023&nbsp;  • &nbsp;Tamlyn Springer&nbsp;  •
        <a href='https://github.com/TamlynSpringer' className='text-3xl hover:text-green-200 hover:shadow-xl focus:text-green-200 focus:shadow-xl focus:outline-none focus:ring-0 active:text-green-300 active:shadow-xl transition duration-150 ease-in-out' target='blank'><AiFillGithub /></a>  • 
        <a href='https://www.linkedin.com/in/tamlyn-springer-v/' className='text-3xl hover:text-green-200 hover:shadow-xl focus:text-green-200 focus:shadow-xl focus:outline-none focus:ring-0 active:text-green-300 active:shadow-xl transition duration-150 ease-in-out' target='blank'><AiFillLinkedin /></a>     
      </div>
    </footer>
  )
};

export default Footer;