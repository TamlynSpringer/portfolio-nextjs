import React from 'react';
import Image from 'next/image';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import logoDark from '../../public/logo-d.svg';
import logoLight from '../../public/logo-l.svg';
import Link from 'next/link';

const Nav = ({ darkMode, setDarkMode }) => {
  return (
    <nav className='py-4 mb-12 mx-10 flex justify-around'>
    {darkMode === true ? (
      <Link href='/'>
        <Image
          src={logoLight}
          alt="Light Logo"
          width={200}
          height={120}
        />
      </Link>
    ) : (
      <Link href='/'>
        <Image
          src={logoDark}
          alt="Dark Logo"
          width={200}
          height={120}
        />
      </Link>
    )}
      <ul className='flex items-center'>
        <li className='cursor-pointer text-2xl text-zinc-900 dark:text-zinc-200'>
          <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} />
        </li>
        <li><a 
          className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white py-4 px-6 font-medium rounded'
        	download="TamlynSpringerCV.pdf"
          href="/files/TamlynSpringerCV.pdf"
          aria-label="Download Resume">
            CV</a>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;