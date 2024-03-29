import React from 'react';
import BackNav from '../components/BackNav';
import { GiFern } from 'react-icons/gi';

const teaching = () => {
  return (
    <section className='min-h-screen bg-zinc-100 px-10 md:px-20 lg:px:40 dark:bg-zinc-800'>
    <BackNav />
    <article>
    <h2 className='text-4xl font-medium py-6 dark:text-green-100'>Teaching assistant</h2>
      <h3 className='py-4 text-green-900 font-semibold text-3xl'>University of the Witwatersrand</h3>
      <h3 className='py-4 text-green-900 font-semibold text-2xl'>Johannesburg, South Africa</h3>
      <p className='text-gray-800 py-4 text-lg'>During my time as a MSc and BSc honours student I worked as a teaching assistant to Bachelor of Science students ranging from year 1 to year 4.</p>
      <p className='text-gray-800 py-4 text-lg'>Responsibilities included running student laboratories, field trips and grading practicals and assignments.</p>
      <h3 className='py-4 text-green-900 font-semibold text-2xl'>Courses included</h3>
      <ul className=''>
        <li className='flex flex-row text-gray-800 py-2 text-lg'><GiFern />&emsp; R programming</li>
        <li className='flex flex-row text-gray-800 py-2 text-lg'><GiFern />&emsp; Biostatistics</li>
        <li className='flex flex-row text-gray-800 py-2 text-lg'><GiFern />&emsp; Introductory life sciences</li>
        <li className='flex flex-row text-gray-800 py-2 text-lg'><GiFern />&emsp; Biotic diversity</li>
        <li className='flex flex-row text-gray-800 py-2 text-lg'><GiFern />&emsp; Biogeography & evolution</li>
      </ul>
    </article>
  </section>
  )
}

export default teaching