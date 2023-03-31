import React from 'react';
import Image from 'next/image';
import profileDark from '../../public/profile-d.svg';
import profileLight from '../../public/profile-l.svg';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

const Intro = ({ darkMode }) => {
  return (
    <section className='flex flex-col gap-10 lg:flex-row lg:flex-wrap'>
    <div className='py-4 basis-1/3 flex-1'>
      <div className='text-center p-10 basis-1/3 flex-1'>
        <h2 className='text-5xl py-4 text-emerald-900 font-medium md:text-6xl dark:text-emerald-50'>Tamlyn Springer</h2>
        <h3 className='text-2xl py-2 md:text-3xl dark:text-emerald-100'>Full-stack JavaScript & TypeScript developer based in Stockholm, Sweden</h3>
      </div>
      <div className='text-5xl flex justify-center gap-16 py-3 text-zinc-700  dark:text-zinc-200'>
        <a href='https://github.com/TamlynSpringer' target='blank'><AiFillGithub /></a>
        <a href='https://www.linkedin.com/in/tamlyn-springer-v/' target='blank'><AiFillLinkedin /></a>                
      </div>
    </div>
    <div className='relative py-4 basis-1/3 flex-1'>
    {darkMode === true ? (
      <Image
        className='mx-auto'
        src={profileDark}
        alt="Dark profile"
        width={500}
        height={500}
      />
    ) : (
      <Image
        className='mx-auto'
        src={profileLight}
        alt="Light profile"
        width={500}
        height={500}
      />
    )}
    </div>
  </section>
  )
}

export default Intro;