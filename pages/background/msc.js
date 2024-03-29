import React from 'react'
import BackNav from '../components/BackNav'
import { GiFern } from 'react-icons/gi';

const msc = () => {
  return (
    <section className='min-h-screen bg-zinc-100 px-10 md:px-20 lg:px:40 dark:bg-zinc-800'>
      <BackNav />
      <article>
      <h2 className='text-4xl font-medium py-6 dark:text-green-100'>Masters of Science</h2>
        <h3 className='py-4 text-green-900 font-semibold text-3xl'>University of the Witwatersrand</h3>
        <h3 className='py-4 text-green-900 font-semibold text-2xl'>Johannesburg, South Africa</h3>
        <p className='text-gray-800 py-4 text-lg'>MSc by research dissertation in the School of Animal, Plant & Environmental Sciences in the Faculty of Science.</p>
        <p className='text-gray-800 py-4 text-lg'>Research dissertation studied the pollination ecology and evolution of <span className='italic'>Glumicalyx</span>, a genus endemic to the Drakensberg Mountain Region, a floral biodiversity hotspot in South Africa & Lesotho.</p>
        <h3 className='py-4 text-green-900 font-semibold text-2xl'>Research skills</h3>
        <ul className=''>
          <li className='flex flex-row text-gray-800 py-2 text-lg'><GiFern />&emsp; Scientific writing and editing</li>
          <li className='flex flex-row text-gray-800 py-2 text-lg'><GiFern />&emsp; Presentation of research at scientific conferences</li>
          <li className='flex flex-row text-gray-800 py-2 text-lg'><GiFern />&emsp; Statitical analysis (R, SPSS, Excel) and graphical representation (R, SigmaPlot)</li>
          <li className='flex flex-row text-gray-800 py-2 text-lg'><GiFern />&emsp; DNA extraction, PCR analysis & interpretation</li>
          <li className='flex flex-row text-gray-800 py-2 text-lg'><GiFern />&emsp; Floral scent collection & gas-chromatography-mass spectrometry analysis</li>
          <li className='flex flex-row text-gray-800 py-2 text-lg'><GiFern />&emsp; Pollinator observation, collection, pollen analysis & identification</li>
        </ul>
      </article>
    </section>
  )
};

export default msc;