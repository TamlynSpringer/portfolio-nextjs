import Link from 'next/link';
import React from 'react'
import SaltConsultant from '../background/consultant';

const Background = () => {
  return (
    <section id='background'>
      <ol className="mx-5 lg:mx-0 border-l-2 border-emerald-600">
        <li>
          <div className="flex flex-start items-center">
            <div className="bg-emerald-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
            <h4 className="text-gray-800 dark:text-gray-200 font-semibold text-xl -mt-2">Software developer consultant</h4>
          </div>
          <div className="ml-6 mb-6 pb-6">
            <p className="font-bold text-emerald-600 hover:text-emerald-700 focus:text-emerald-800 duration-300 transition ease-in-out text-sm">2023</p>
            <p className="text-gray-700 dark:text-gray-400 mt-2 mb-4">School of Applied Technology</p>
            <p className="text-gray-700 dark:text-gray-400 mt-2 mb-4">Stockholm, Sweden</p>
            <button type="button" className="inline-block px-4 py-1.5 bg-emerald-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-emerald-700 hover:shadow-xl focus:bg-emerald-700 focus:shadow-xl focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-xl transition duration-150 ease-in-out"><Link href='/background/consultant'>Read more</Link></button>
          </div>
        </li>
        <li>
          <div className="flex flex-start items-center">
            <div className="bg-emerald-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
            <h4 className="text-gray-800 dark:text-gray-200 font-semibold text-xl -mt-2">Full-stack JavaScript bootcamp</h4>
          </div>
          <div className="ml-6 mb-6 pb-6">
            <p className="font-bold text-emerald-600 hover:text-emerald-700 focus:text-emerald-800 duration-300 transition ease-in-out text-sm">2022</p>
            <p className="text-gray-700 dark:text-gray-400 mt-2 mb-4">School of Applied Technology</p>
            <p className="text-gray-700 dark:text-gray-400 mt-2 mb-4">Stockholm, Sweden</p>
            <button type="button" className="inline-block px-4 py-1.5 bg-emerald-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-emerald-700 hover:shadow-xl focus:bg-emerald-700 focus:shadow-xl focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-xl transition duration-150 ease-in-out"><Link href='/background/bootcamp'>Read more</Link></button>
          </div>
        </li>
        <li>
          <div className="flex flex-start items-center">
            <div className="bg-emerald-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
            <h4 className="text-gray-800 dark:text-gray-200 font-semibold text-xl -mt-2">Store supervisor</h4>
          </div>
          <div className="ml-6 mb-6 pb-6">
            <p className="font-bold text-emerald-600 hover:text-emerald-700 focus:text-emerald-800 duration-300 transition ease-in-out text-sm">2020 - 2021</p>
            <p className="text-gray-700 dark:text-gray-400 mt-2 mb-4">Gone Outdoor Supply Co.</p>
            <p className="text-gray-700 dark:text-gray-400 mt-2 mb-4">Johannesburg, South Africa</p>
            <button type="button" className="inline-block px-4 py-1.5 bg-emerald-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-emerald-700 hover:shadow-xl focus:bg-emerald-700 focus:shadow-xl focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-xl transition duration-150 ease-in-out">Read more</button>
          </div>
          <div className="flex flex-start items-center">
            <div className="bg-emerald-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
            <h4 className="text-gray-800 dark:text-gray-200 font-semibold text-xl -mt-2">Masters of Science</h4>
          </div>
          <div className="ml-6 mb-6 pb-6">
            <p className="font-bold text-emerald-600 hover:text-emerald-700 focus:text-emerald-800 duration-300 transition ease-in-out text-sm">2017 - 2019</p>
            <p className="text-gray-700 dark:text-gray-400 mt-2 mb-4">University of the Witwatersrand</p>
            <p className="text-gray-700 dark:text-gray-400 mt-2 mb-4">Johannesburg, South Africa</p>
            <button type="button" className="inline-block px-4 py-1.5 bg-emerald-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-emerald-700 hover:shadow-xl focus:bg-emerald-700 focus:shadow-xl focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-xl transition duration-150 ease-in-out">Read more</button>
          </div>
          <div className="flex flex-start items-center">
            <div className="bg-emerald-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
            <h4 className="text-gray-800 dark:text-gray-200 font-semibold text-xl -mt-2">Teaching assistant</h4>
          </div>
          <div className="ml-6 mb-6 pb-6">
            <p className="font-bold text-emerald-600 hover:text-emerald-700 focus:text-emerald-800 duration-300 transition ease-in-out text-sm">2016 - 2019</p>
            <p className="text-gray-700 dark:text-gray-400 mt-2 mb-4">University of the Witwatersrand</p>
            <p className="text-gray-700 dark:text-gray-400 mt-2 mb-4">Johannesburg, South Africa</p>
            <button type="button" className="inline-block px-4 py-1.5 bg-emerald-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-emerald-700 hover:shadow-xl focus:bg-emerald-700 focus:shadow-xl focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-xl transition duration-150 ease-in-out">Read more</button>
          </div>
        </li>
        <li>
        <div className="flex flex-start items-center">
            <div className="bg-emerald-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
            <a 
              className='mb-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white py-4 px-6 font-medium rounded'
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