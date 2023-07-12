import Link from 'next/link';
import React from 'react'

const Background = () => {
  return (
    <section id='background'>
      <ol className="mx-5 lg:mx-0 border-l-2 border-emerald-900">
        <li>
          <div className="flex flex-start items-center">
            <div className="bg-emerald-900 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
            <h4 className="text-neutral-800 dark:text-neutral-200 font-semibold text-xl -mt-2">Software developer consultant</h4>
          </div>
          <div className="ml-6 mb-6 pb-6">
            <p className="font-bold text-neutral-700 dark:text-neutral-200 text-base pt-2">2023</p>
            <p className="text-neutral-700 dark:text-neutral-200 mt-2 mb-4">Applied Technology</p>
            <button type="button" className="inline-block px-4 py-1.5 bg-emerald-900 text-white font-medium text-xs leading-tight rounded-3xl shadow-md hover:bg-emerald-700 hover:shadow-xl focus:bg-emerald-700 focus:shadow-xl focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-xl transition duration-150 ease-in-out"><Link href='/background/consultant'>Read more</Link></button>
          </div>
        </li>
        <li>
          <div className="flex flex-start items-center">
            <div className="bg-emerald-900 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
            <h4 className="text-neutral-800 dark:text-neutral-200 font-semibold text-xl -mt-2">Full-stack JavaScript bootcamp</h4>
          </div>
          <div className="ml-6 mb-6 pb-6">
            <p className="font-bold text-neutral-700 dark:text-neutral-200 text-base pt-2">2022</p>
            <p className="text-neutral-700 dark:text-neutral-200 mt-2 mb-4">School of Applied Technology</p>
            <button type="button" className="inline-block px-4 py-1.5 bg-emerald-900 text-white font-medium text-xs leading-tight rounded-3xl shadow-md hover:bg-emerald-700 hover:shadow-xl focus:bg-emerald-700 focus:shadow-xl focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-xl transition duration-150 ease-in-out"><Link href='/background/bootcamp'>Read more</Link></button>
          </div>
        </li>
        <li>
          <div className="flex flex-start items-center">
            <div className="bg-emerald-900 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
            <h4 className="text-neutral-800 dark:text-neutral-200 font-semibold text-xl -mt-2">Store supervisor</h4>
          </div>
          <div className="ml-6 mb-6 pb-6">
            <p className="font-bold text-neutral-700 dark:text-neutral-200 text-base pt-2">2020 - 2021</p>
            <p className="text-neutral-700 dark:text-neutral-200 mt-2 mb-4">Gone Outdoor Supply Co.</p>
            <button type="button" className="inline-block px-4 py-1.5 bg-emerald-900 text-white font-medium text-xs leading-tight rounded-3xl shadow-md hover:bg-emerald-700 hover:shadow-xl focus:bg-emerald-700 focus:shadow-xl focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-xl transition duration-150 ease-in-out"><Link href='/background/retail'>Read more</Link></button>
          </div>
          <div className="flex flex-start items-center">
            <div className="bg-emerald-900 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
            <h4 className="text-neutral-800 dark:text-neutral-200 font-semibold text-xl -mt-2">Masters of Science</h4>
          </div>
          <div className="ml-6 mb-6 pb-6">
            <p className="font-bold text-neutral-700 dark:text-neutral-200 text-base pt-2">2017 - 2019</p>
            <p className="text-neutral-700 dark:text-neutral-200 mt-2 mb-4">University of the Witwatersrand</p>
            <button type="button" className="inline-block px-4 py-1.5 bg-emerald-900 text-white font-medium text-xs leading-tight rounded-3xl shadow-md hover:bg-emerald-700 hover:shadow-xl focus:bg-emerald-700 focus:shadow-xl focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-xl transition duration-150 ease-in-out"><Link href='/background/msc'>Read more</Link></button>
          </div>
          <div className="flex flex-start items-center">
            <div className="bg-emerald-900 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
            <h4 className="text-neutral-800 dark:text-neutral-200 font-semibold text-xl -mt-2">Teaching assistant</h4>
          </div>
          <div className="ml-6 mb-6 pb-6">
            <p className="font-bold text-neutral-700 dark:text-neutral-200 text-base pt-2">2016 - 2019</p>
            <p className="text-neutral-700 dark:text-neutral-200 mt-2 mb-4">University of the Witwatersrand</p>
            <button type="button" className="inline-block px-4 py-1.5 bg-emerald-900 text-white font-medium text-xs leading-tight rounded-3xl shadow-md hover:bg-emerald-800 hover:shadow-xl focus:bg-emerald-700 focus:shadow-xl focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-xl transition duration-150 ease-in-out"><Link href='/background/teaching'>Read more</Link></button>
          </div>
        </li>
        <li>
        <div className="flex flex-start items-center">
            <div className="bg-emerald-900 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
            <a 
              className='mb-8  bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-3 px-6 font-medium rounded-3xl'
              download="TamlynSpringerCV.pdf"
              href="/files/TamlynSpringerCV.pdf"
              aria-label="Download CV">
                Download CV
            </a>
          </div>
        </li>
      </ol>
    </section>
  )
}

export default Background;