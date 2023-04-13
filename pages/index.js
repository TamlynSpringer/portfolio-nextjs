import Head from 'next/head';
import { Inter } from '@next/font/google';
import { useState } from 'react';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Background from './components/Background';
import Footer from './components/Footer';
import Image from 'next/image';
import project1 from '../public/project1.png';
import project2 from '../public/project2.png';
import project3 from '../public/project3.png';
import project4 from '../public/project4.png';
import project5 from '../public/project5.png';
import project6 from '../public/project6.png';
import floralsDark from '../public/florals-d.png';
import floralsLight from '../public/florals-l.png';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Portfolio Tamlyn Springer</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='min-h-screen bg-zinc-100 md:px-20 lg:px:40 dark:bg-zinc-800'>
        <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
        <Intro darkMode={darkMode} />
        <section id='projects'>
          <h3 className='text-4xl font-medium py-6 text-center dark:text-emerald-100'>Projects</h3>
          <div className='flex flex-col gap-10 lg:flex-row lg:flex-wrap'>
            <article className='text-center my-10 shadow-xl rounded-xl bg-zinc-300 basis-1/3 flex-1 dark:bg-zinc-300'>
              <Image className='relative mx-auto rounded-t-xl object-cover mt-3' src={project1} alt='project-ecom' width={600} height={400} />
              <h4 className='py-4 text-emerald-900 font-semibold text-2xl'>Full-stack e-commerce site</h4>
              <p className='text-gray-800 py-4'>ReactJS • React-Bootstrap • NodeJS • MongoDB • Mongoose • Express</p>
              <p className='text-gray-800 py-4 text-lg'><a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://baltic-store.netlify.app/' target='blank'>Site</a> <a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://github.com/TamlynSpringer/eCommerce_Client' target='blank'>FE code</a> <a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://github.com/TamlynSpringer/eCommerce_Server' target='blank'>BE code</a></p>
            </article>
            <article className='text-center my-10 shadow-xl rounded-xl bg-zinc-300 basis-1/3 flex-1 dark:bg-zinc-300'>
              <Image className='relative mx-auto rounded-t-xl object-cover mt-3' src={project2} alt='project-blog' width={600} height={400} />
              <h4 className='py-4 text-emerald-900 font-semibold text-2xl'>Facts site</h4>
              <p className='text-gray-800 py-4'>ReactJS • TypeScript • Vite • TailwindCSS</p>
              <p className='text-gray-800 py-4 text-lg'><a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://planetary-facts-1337.netlify.app/' target='blank'>Site</a> <a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://github.com/TamlynSpringer/planetary-facts-vite' target='blank'>Code</a></p>
            </article>
            <article className='text-center my-10 shadow-xl rounded-xl bg-zinc-300 basis-1/3 flex-1 dark:bg-zinc-300'>
              <Image className='relative mx-auto rounded-t-xl object-cover mt-3' src={project3} alt='project-blog' width={600} height={400} />
              <h4 className='py-4 text-emerald-900 font-semibold text-2xl'>Full-stack to-do app</h4>
              <p className='text-gray-800 py-4'>ReactJS • TypeScript • NodeJS • Express • MongoDB • Mongoose</p>
              <p className='text-gray-800 py-4 text-lg'><a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://ts-mern-todo.netlify.app/' target='blank'>Site</a> <a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://github.com/TamlynSpringer/to-do-app-typescript-client' target='blank'>FE Code</a> <a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://github.com/TamlynSpringer/to-do-app-typescript-server' target='blank'>BE Code</a></p>
            </article>
            <article className='text-center my-10 shadow-xl rounded-xl bg-zinc-300 basis-1/3 flex-1 dark:bg-zinc-300'>
              <Image className='relative mx-auto rounded-t-xl mt-3' src={project4} alt='project-gallery' width={600} height={400} />
              <h4 className='py-4 text-emerald-900 font-semibold text-2xl'>Image gallery & search</h4>
              <p className='text-gray-800 py-4'>ReactJS • TailwindCSS • Unsplash API • Axios</p>
              <p className='text-gray-800 py-4 text-lg'><a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://react-image-search-gallery.netlify.app/' target='blank'>Site</a> <a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://github.com/TamlynSpringer/image-gallery' target='blank'>Code</a></p>
            </article>
            <article className='text-center my-10 shadow-xl rounded-xl bg-zinc-300 basis-1/3 flex-1 dark:bg-zinc-300'>
              <Image className='relative mx-auto rounded-t-xl object-cover w-3/4 mt-3' src={project5} alt='project-blog' width={600} height={400} />
              <h4 className='py-4 text-emerald-900 font-semibold text-2xl'>Goals mobile app</h4>
              <p className='text-gray-800 py-4'>React Native • Expo</p>
              <p className='text-gray-800 py-4 text-lg'><a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://github.com/TamlynSpringer/blog-typescript-react' target='blank'>Code</a></p>
            </article>
            <article className='text-center my-10 shadow-xl rounded-xl bg-zinc-300 basis-1/3 flex-1 dark:bg-zinc-300'>
              <Image className='relative mx-auto rounded-t-xl mt-3' src={project6} alt='project-uno' width={600} height={400} />
              <h4 className='py-4 text-emerald-900 font-semibold text-2xl'>Multi-player card game</h4>
              <p className='text-gray-800 py-4'>ReactJS • SocketIO • NodeJS • Express  • Firebase</p>
              <p className='text-gray-800 py-4 text-lg'> <a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://youtu.be/c_A_ctavXEY' target='blank'>Walk-through</a> <a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://github.com/TamlynSpringer/SOUTH-UNO'>Code</a></p>
            </article>
          </div>          
          <h4 className='text-2xl underline font-medium py-6 text-center hover:text-emerald-800 dark:text-emerald-100'><Link href='/projects'>All projects</Link></h4>
        </section>
        <h3 className='text-4xl font-medium py-6 text-center dark:text-emerald-100'>Background</h3>
        <div className='flex flex-col lg:flex-row lg:flex-wrap'>
          <div>
          <Background />
          </div>
          <div className='relative basis-2/3 flex-1 content-end mt-20'>
          {darkMode === true ? (
            <Image
              className='mx-auto'
              src={floralsDark}
              alt='Dark florals'
              width={500}
              height='auto'
            />
          ) : (
          <Image
            className='mx-auto'
            src={floralsLight}
            alt='Light florals'
            width={500}
            height='auto'
          />
          )}
        </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}
