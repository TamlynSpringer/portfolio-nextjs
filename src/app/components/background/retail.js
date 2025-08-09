import React from 'react'
import BackNav from '../components/BackNav'
import Image from 'next/image'
import rec from '../../public/files/gone.png'

const gone = () => {
  return (
    <section className='min-h-screen bg-zinc-100 px-10 md:px-20 lg:px-80 dark:bg-zinc-800'>
      <BackNav />
      <article>
        <h2 className='text-4xl font-medium py-6 dark:text-green-100'>Retail store supervisor</h2>
        <h3 className='py-4 text-green-900 font-semibold text-3xl'>Gone Outdoor Supply Co.</h3>
        <h3 className='py-4 text-green-900 font-semibold text-2xl'>Johannesburg, South Africa</h3>
        <p className='text-gray-800 py-4 text-lg'>Started as the store assistant in November 2019, and was promoted to store supervisor in Auguest 2020.</p>
        <p className='text-gray-800 py-4 text-lg'>Managing daily operations and sales for the store, whilst supervising the store assistants.</p>
        <p className='text-gray-800 py-4 text-lg'>Ensure customers receive excellent service, including having exemplary product knowledge, and a genuine understanding of product design and its intended use.</p>
        <p className='text-gray-800 py-4 text-lg'>Handled administrative duties as assigned, as well as hired and trained store assistants.</p>
        <p className='text-gray-800 py-4 text-lg'>Execution of accurate receipt and control of stock in store through regular inventory counts and transfers of stock.</p>
      </article>
      <Image className='relative rounded-t-xl shadow-lg object-cover py-2' src={rec} alt='gone-rec' width='auto' height={600} /> 
    </section>
  )
}

export default gone