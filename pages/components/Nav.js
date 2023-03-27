import React from 'react';
import Image from 'next/image';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import logoDark from '../../public/logo-d.svg';
import logoLight from '../../public/logo-l.svg';

const Nav = ({ darkMode, setDarkMode }) => {
  return (
    <nav className='py-4 mb-12 mx-10 flex justify-around'>
    {darkMode === true ? (
      <Image
        src={logoLight}
        alt="Light Logo"
        width={200}
        height={120}
      />
    ) : (
      <Image
        src={logoDark}
        alt="Dark Logo"
        width={200}
        height={120}
      />
    )}
      <ul className='flex items-center'>
        <li className='cursor-pointer text-2xl text-zinc-900 dark:text-zinc-200'>
          <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} />
        </li>
        <li><a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded' href='#'>Resume</a></li>
      </ul>
    </nav>
  )
};

export default Nav;