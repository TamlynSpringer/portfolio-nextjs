import React, { useState } from 'react';
import Image from 'next/image';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {RxHamburgerMenu} from 'react-icons/rx';
import logoDark from '../../public/logo-d.svg';
import logoLight from '../../public/logo-l.svg';
import Link from 'next/link';

const Nav = ({ darkMode, setDarkMode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
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
      <div className='pt-20 cursor-pointer text-2xl text-zinc-900 dark:text-zinc-200'>
        <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} />
      </div>
      <section className="flex lg:hidden">
        <div
          className="space-y-2 pt-20"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <div className='cursor-pointer text-3xl text-zinc-900 dark:text-zinc-200'><RxHamburgerMenu /></div>
        </div>

        <div className={isNavOpen ? "showMenuNav bg-zinc-100 dark:bg-zinc-800" : "hideMenuNav"}>
          <div
            className="absolute top-0 right-0 px-16 pt-20"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-zinc-900 dark:text-zinc-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li className='ml-8 bg-gradient-to-r from-emerald-900 to-emerald-600 text-white py-4 px-6 font-medium rounded-3xl'>
              <a href="#projects">Projects</a>
            </li>
            <li className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white py-4 px-6 font-medium rounded-3xl'>
              <a href="#background">Background</a>
            </li>
            <li className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white py-4 px-6 font-medium rounded-3xl'>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </section>

      <ul className='hidden lg:flex items-center'>
        <li>
          <a 
          className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white py-4 px-6 font-medium rounded-3xl'
          href="#projects"
          aria-label="Projects">
          Projects
          </a>
        </li>
        <li>
          <a 
          className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white py-4 px-6 font-medium rounded-3xl'
          href="#background"
          aria-label="Background">
          Background
          </a>
        </li>
        <li>
          <a 
          className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white py-4 px-6 font-medium rounded-3xl'
          href="#contact"
          aria-label="Contact">
          Contact
          </a>
        </li>
      </ul>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 60vh;
          top: 0;
          left: 0;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </nav>
  )
};

export default Nav;