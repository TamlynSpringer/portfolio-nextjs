import React from 'react';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='flex flex-row bg-emerald-900 justify-center py-3'>
      <div id='contact' className='text-3xl flex gap-16 py-3 text-zinc-200'>
        2023&nbsp;  • &nbsp;Tamlyn Springer&nbsp;  •
        <a href='https://github.com/TamlynSpringer' className='text-4xl hover:text-emerald-200 hover:shadow-xl focus:text-emerald-200 focus:shadow-xl focus:outline-none focus:ring-0 active:text-emerald-300 active:shadow-xl transition duration-150 ease-in-out' target='blank'><AiFillGithub /></a>  • 
        <a href='https://www.linkedin.com/in/tamlyn-springer-v/' className='text-4xl hover:text-emerald-200 hover:shadow-xl focus:text-emerald-200 focus:shadow-xl focus:outline-none focus:ring-0 active:text-emerald-300 active:shadow-xl transition duration-150 ease-in-out' target='blank'><AiFillLinkedin /></a>     
      </div>
    </footer>
  )
};

export default Footer;