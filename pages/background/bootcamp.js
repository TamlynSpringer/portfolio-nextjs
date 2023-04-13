import React from 'react';
import { SiJavascript, SiMongodb, SiHtml5, SiCss3, SiNetlify, SiContentful, SiPostgresql, SiGraphql, SiExpress, SiFirebase, SiSocketdotio, SiRedux } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { RiLeafFill, RiLeafLine } from 'react-icons/ri'
import Nav from '../components/Nav';

const SaltBootcamp = () => {
  return (
    <section className='min-h-screen bg-zinc-100 md:px-20 lg:px-80 dark:bg-zinc-800'>
      <Nav />
      <article>
        <h2 className='text-4xl font-medium py-6 dark:text-emerald-100'>Full-stack JavaScript development</h2>
        <h3 className='py-4 text-emerald-900 font-semibold text-3xl'>School of Applied Technology</h3>
        <h3 className='py-4 text-emerald-900 font-semibold text-2xl'>Stockholm, Sweden</h3>
        <p className='text-gray-800 py-4 text-lg'>Of the approximately 1,000 candidates who applied to Salt, I was 1 of 40 people selected to partake in an intensive JavaScript developer training program.</p>
        <p className='text-gray-800 py-4 text-lg'>Over a three-month period, with weekly practical tests and over 500 development hours I graduated with a diploma in software development.</p>
      </article>
      <div className='grid grid-cols-2'>
        <article className=''>
          <h3 className='py-4 text-emerald-900 font-semibold text-3xl'>Tech skills</h3>
          <ul>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><SiJavascript/>&emsp; JavaScript</li>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><FaReact />&emsp; React</li>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><FaNodeJs />&emsp; NodeJS</li>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><TbBrandNextjs />&emsp; NextJS</li>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><SiMongodb />&emsp; MongoDB</li>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><SiHtml5 />&emsp; HTML</li>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><SiCss3 />&emsp; CSS</li>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><SiRedux />&emsp; Redux</li>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><SiNetlify />&emsp; Netlify</li>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><SiContentful />&emsp; Contentful</li>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><SiPostgresql />&emsp; Postgres SQL</li>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><SiGraphql />&emsp; GraphQL</li>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><SiExpress />&emsp; ExpressJS</li>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><SiFirebase />&emsp; Firebase</li>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><SiSocketdotio />&emsp; SocketIO</li>
          </ul>
        </article>
        <article>
          <h3 className='py-4 text-emerald-900 font-semibold text-3xl'>Team skills</h3>
          <ul>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><RiLeafFill />&emsp; Mob programming / software teaming</li>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><RiLeafLine />&emsp; Pair programming</li>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><RiLeafFill />&emsp; Daily stand up meetings</li>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><RiLeafLine />&emsp; Team retrospectives</li>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><RiLeafFill />&emsp; Projects demos</li>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><RiLeafLine />&emsp; Vertical slicing</li>
            <li className='flex flex-row text-gray-800 py-2 text-lg'><RiLeafFill />&emsp; Agile methodology</li>
          </ul>
        </article>
      </div>
    </section>
  )
};

export default SaltBootcamp;

