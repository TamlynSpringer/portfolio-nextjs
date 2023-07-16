import React from 'react';
import { SiJsonwebtokens, SiTypescript, SiBootstrap, SiRemix, SiTailwindcss, SiVite, SiSqlite, SiExpo } from 'react-icons/si';
import { TbBrandVite } from 'react-icons/tb';
import { GrReactjs } from 'react-icons/gr';
import BackNav from '../components/BackNav';
import Link from 'next/link';
import Image from 'next/image';
import backL from '../../public/back-l.svg'

const SaltConsultant = () => {
  return (
    <section className='min-h-screen bg-zinc-100 md:px-20 lg:px:40 dark:bg-zinc-800'>
      <BackNav />
      <article>
        <h2 className='text-4xl font-medium py-6 dark:text-green-100'>Software developer consultant </h2>
        <h3 className='py-4 text-green-900 font-semibold text-3xl'>Applied Technology</h3>
        <h3 className='py-4 text-green-900 font-semibold text-2xl'>Stockholm, Sweden</h3>
        <p className='text-gray-800 py-4 text-lg'>After graduating from Salt&apos;s JavaScript career program I was hired as one of their software developer consultants.</p>
        <p className='text-gray-800 py-4 text-lg'>Primarily working on internal projects and improving my technical skills to meet the requirements of clients.</p>
      </article>
      <article>
        <h3 className='py-4 text-green-900 font-semibold text-2xl'>Additonal skills</h3>
        <ul className=''>
          <li className='flex flex-row text-gray-800 py-2 text-lg'><SiTypescript />&emsp; TypeScript</li>
          <li className='flex flex-row text-gray-800 py-2 text-lg'><SiTailwindcss />&emsp; Tailwind</li>
          <li className='flex flex-row text-gray-800 py-2 text-lg'><SiBootstrap />&emsp; Bootstrap</li>
          <li className='flex flex-row text-gray-800 py-2 text-lg'><GrReactjs />&emsp; React Native</li>
          <li className='flex flex-row text-gray-800 py-2 text-lg'><SiExpo />&emsp; Expo</li>
          <li className='flex flex-row text-gray-800 py-2 text-lg'><SiJsonwebtokens />&emsp; JWT</li>
          <li className='flex flex-row text-gray-800 py-2 text-lg'><SiVite />&emsp; Vite</li>
          <li className='flex flex-row text-gray-800 py-2 text-lg'><SiSqlite />&emsp; SQLite</li>
        </ul>
      </article>
    </section>
  )
}

export default SaltConsultant;