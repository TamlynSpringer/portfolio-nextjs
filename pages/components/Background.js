import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import profile from '../../public/profile_img.png'
import fern from '../../public/fern.svg';

const Background = () => {
  return (
    <div className='flex flex-col gap-10 lg:flex-row lg:flex-wrap'>
      <section id='background' className='py-4 basis-1/3 flex-1'>
        <ol className='mx-5 lg:mx-0 border-l-2 border-green-900'>
          <li>
            <div className='flex flex-start items-center'>
              <div className='bg-green-900 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2'></div>
              <h4 className='text-neutral-800 dark:text-neutral-200 font-semibold text-xl -mt-2'>Software developer consultant</h4>
            </div>
            <div className='ml-6 mb-6 pb-6'>
              <p className='font-bold text-neutral-700 dark:text-neutral-200 text-base pt-2'>2023</p>
              <p className='text-neutral-700 dark:text-neutral-200 mt-2 mb-4'>Applied Technology</p>
              <button type='button' className='inline-block px-4 py-1.5 bg-green-900 text-white font-medium text-xs leading-tight rounded-3xl shadow-md hover:bg-green-700 hover:shadow-xl focus:bg-green-700 focus:shadow-xl focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-xl transition duration-150 ease-in-out'><Link href='/background/consultant'>Read more</Link></button>
            </div>
          </li>
          <li>
            <div className='flex flex-start items-center'>
              <div className='bg-green-900 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2'></div>
              <h4 className='text-neutral-800 dark:text-neutral-200 font-semibold text-xl -mt-2'>Full-stack JavaScript bootcamp</h4>
            </div>
            <div className='ml-6 mb-6 pb-6'>
              <p className='font-bold text-neutral-700 dark:text-neutral-200 text-base pt-2'>2022</p>
              <p className='text-neutral-700 dark:text-neutral-200 mt-2 mb-4'>School of Applied Technology</p>
              <button type='button' className='inline-block px-4 py-1.5 bg-green-900 text-white font-medium text-xs leading-tight rounded-3xl shadow-md hover:bg-green-700 hover:shadow-xl focus:bg-green-700 focus:shadow-xl focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-xl transition duration-150 ease-in-out'><Link href='/background/bootcamp'>Read more</Link></button>
            </div>
          </li>
          <li>
            <div className='flex flex-start items-center'>
              <div className='bg-green-900 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2'></div>
              <h4 className='text-neutral-800 dark:text-neutral-200 font-semibold text-xl -mt-2'>Store supervisor</h4>
            </div>
            <div className='ml-6 mb-6 pb-6'>
              <p className='font-bold text-neutral-700 dark:text-neutral-200 text-base pt-2'>2020 - 2021</p>
              <p className='text-neutral-700 dark:text-neutral-200 mt-2 mb-4'>Gone Outdoor Supply Co.</p>
              <button type='button' className='inline-block px-4 py-1.5 bg-green-900 text-white font-medium text-xs leading-tight rounded-3xl shadow-md hover:bg-green-700 hover:shadow-xl focus:bg-green-700 focus:shadow-xl focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-xl transition duration-150 ease-in-out'><Link href='/background/retail'>Read more</Link></button>
            </div>
            <div className='flex flex-start items-center'>
              <div className='bg-green-900 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2'></div>
              <h4 className='text-neutral-800 dark:text-neutral-200 font-semibold text-xl -mt-2'>Masters of Science</h4>
            </div>
            <div className='ml-6 mb-6 pb-6'>
              <p className='font-bold text-neutral-700 dark:text-neutral-200 text-base pt-2'>2017 - 2019</p>
              <p className='text-neutral-700 dark:text-neutral-200 mt-2 mb-4'>University of the Witwatersrand</p>
              <button type='button' className='inline-block px-4 py-1.5 bg-green-900 text-white font-medium text-xs leading-tight rounded-3xl shadow-md hover:bg-green-700 hover:shadow-xl focus:bg-green-700 focus:shadow-xl focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-xl transition duration-150 ease-in-out'><Link href='/background/msc'>Read more</Link></button>
            </div>
            <div className='flex flex-start items-center'>
              <div className='bg-green-900 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2'></div>
              <h4 className='text-neutral-800 dark:text-neutral-200 font-semibold text-xl -mt-2'>Teaching assistant</h4>
            </div>
            <div className='ml-6 mb-6 pb-6'>
              <p className='font-bold text-neutral-700 dark:text-neutral-200 text-base pt-2'>2016 - 2019</p>
              <p className='text-neutral-700 dark:text-neutral-200 mt-2 mb-4'>University of the Witwatersrand</p>
              <button type='button' className='inline-block px-4 py-1.5 bg-green-900 text-white font-medium text-xs leading-tight rounded-3xl shadow-md hover:bg-green-800 hover:shadow-xl focus:bg-green-700 focus:shadow-xl focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-xl transition duration-150 ease-in-out'><Link href='/background/teaching'>Read more</Link></button>
            </div>
          </li>
          <li>
          <div className='flex flex-start items-center'>
              <div className='bg-green-900 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2'></div>
              <a 
                className='mb-8  bg-gradient-to-r from-green-900 to-green-700 text-white py-3 px-6 font-medium rounded-3xl'
                download='TamlynSpringerCV.pdf'
                href='/files/TamlynSpringerCV.pdf'
                aria-label='Download CV'>
                  Download CV
              </a>
            </div>
          </li>
        </ol>
      </section>
      <section className='mx-auto py-4 basis-1/3 flex-1'>
        <div className='relative'>
          <Image src={profile} alt='Profile photo' className='mb-10 w-36 h-36 lg:w-52 lg:h-52' />
          <Image src={fern} alt='Fern image' className='h-44 w-24 -bottom-12  left-32 lg:h-60 lg:w-40 absolute lg:-bottom-10 lg:left-60 text-neutral-900' />
        </div>
        <p className='text-neutral-700 dark:text-neutral-200 mt-2 mb-4 leading-8'>Hej! I&apos;m Tamlyn, and front-end enthusiast with a diverse background in biology and technology. After graduating with a BSc in biology and MSc in ecology & evolution in 2019, I dove into the world of retail sales in the sustainable outdoor gear market (think Patagonia & Fjällräven). </p>
        <p className='text-neutral-700 dark:text-neutral-200 mt-2 mb-4 leading-8'>However, my true passion lies in programming and I&apos;ve dedicated my time to mastering JavaScript development. In 2022 I completed an intensive full stack web development program with the focus on TDD, mob programming, and applied learning. Since then I&apos;ve been employed as a software development consultant and continued honing my web development skills. Currently I am focusing my attention on learning Swedish!</p>
      </section>
    </div>
  )
};

export default Background;