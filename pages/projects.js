import Image from 'next/image'
import project1 from '../public/project1.png';
import project2 from '../public/project2.png';
import project3 from '../public/project3.png';
import project4 from '../public/project4.png';
import project5 from '../public/project5.png';
import project6 from '../public/project6.png';
import project7 from '../public/project7.png';
import project8 from '../public/project8.png';
import project9 from '../public/project9.png';
import project10 from '../public/project10.png';
import Nav from './components/Nav';
import { ScrollToTop } from './components/ScrollToTop';

const Projects = () => {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <main className='min-h-screen bg-zinc-100 md:px-20 lg:px:40 dark:bg-zinc-800'>
      <Nav />
      <ScrollToTop />
      <div className='flex flex-col gap-10 lg:flex-row lg:flex-wrap'>
        <article className='text-center my-10 shadow-xl rounded-xl bg-zinc-300 basis-1/3 flex-1 dark:bg-zinc-300'>
          <Image className='relative mx-auto rounded-t-xl object-cover mt-3' src={project1} alt='project-ecom' width={600} height={400} />
          <h4 className='py-4 text-emerald-900 font-semibold text-2xl'>Full-stack e-commerce site</h4>
          <p className='text-gray-800 py-4'>ReactJS • React-Bootstrap • NodeJS • MongoDB • Mongoose • Express</p>
          <p className='text-gray-800 py-4 text-lg'><a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://baltic-store.netlify.app/' target='blank'>Site</a> <a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://github.com/TamlynSpringer/eCommerce_Client' target='blank'>FE code</a> <a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://github.com/TamlynSpringer/eCommerce_Server' target='blank'>BE code</a></p>
        </article>
        <article className='text-center my-10 shadow-xl rounded-xl bg-zinc-300 basis-1/3 flex-1 dark:bg-zinc-300'>
          <Image className='relative mx-auto rounded-t-xl object-cover mt-3' src={project2} alt='project-blog' width={600} height={400} />
          <h4 className='py-4 text-emerald-900 font-semibold text-2xl'>Facts sites</h4>
          <p className='text-gray-800 py-4'>ReactJS • Typescript • Vite • TailwindCSS</p>
          <p className='text-gray-800 py-4 text-lg'><a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://planetary-facts-1337.netlify.app/' target='blank'>Site</a> <a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://github.com/TamlynSpringer/planetary-facts-vite' target='blank'>Code</a></p>
        </article>
        <article className='text-center my-10 shadow-xl rounded-xl bg-zinc-300 basis-1/3 flex-1 dark:bg-zinc-300'>
          <Image className='relative mx-auto rounded-t-xl object-cover mt-3' src={project3} alt='project-blog' width={600} height={400} />
          <h4 className='py-4 text-emerald-900 font-semibold text-2xl'>Full-stack to-do app</h4>
          <p className='text-gray-800 py-4'>ReactJS • Typescript • NodeJS • Express • MongoDB • Mongoose</p>
          <p className='text-gray-800 py-4 text-lg'><a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://planetary-facts-1337.netlify.app/' target='blank'>Site</a> <a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://github.com/TamlynSpringer/to-do-app-typescript-client' target='blank'>FE Code</a> <a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://github.com/TamlynSpringer/to-do-app-typescript-server' target='blank'>BE Code</a></p>
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
          <p className='text-gray-800 py-4 text-lg'><a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://ts-react-simple-blog.netlify.app/' target='blank'>Site</a> <a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://github.com/TamlynSpringer/blog-typescript-react' target='blank'>Code</a></p>
        </article>
        <article className='text-center my-10 shadow-xl rounded-xl bg-zinc-300 basis-1/3 flex-1 dark:bg-zinc-300'>
          <Image className='relative mx-auto rounded-t-xl mt-3' src={project6} alt='project-uno' width={600} height={400} />
          <h4 className='py-4 text-emerald-900 font-semibold text-2xl'>Multi-player card game</h4>
          <p className='text-gray-800 py-4'>ReactJS • SocketIO • NodeJS • Express  • Firebase</p>
          <p className='text-gray-800 py-4 text-lg'> <a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://youtu.be/c_A_ctavXEY' target='blank'>Walk-through</a> <a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://github.com/TamlynSpringer/SOUTH-UNO'>Code</a></p>
        </article>
        <article className='text-center my-10 shadow-xl rounded-xl bg-zinc-300 basis-1/3 flex-1 dark:bg-zinc-300'>
          <Image className='relative mx-auto rounded-t-xl object-cover' src={project7} alt='project-blog' width={600} height={400} />
          <h4 className='py-4 text-emerald-900 font-semibold text-2xl'>Blog</h4>
          <p className='text-gray-800 py-4'>ReactJS • Typescript • Bootstrap</p>
          <p className='text-gray-800 py-4 text-lg'><a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://ts-react-simple-blog.netlify.app/' target='blank'>Site</a> <a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://github.com/TamlynSpringer/blog-typescript-react' target='blank'>Code</a></p>
        </article>
        <article className='text-center my-10 shadow-xl rounded-xl bg-zinc-300 basis-1/3 flex-1 dark:bg-zinc-300'>
          <Image className='relative mx-auto rounded-t-xl object-cover mt-3' src={project8} alt='project-pets' width={600} height={400} />
          <h4 className='py-4 text-emerald-900 font-semibold text-2xl'>Full-stack pets profile app</h4>
          <p className='text-gray-800 py-4'>ReactJS • Typescript • NodeJS • Express • MongoDB • Mongoose • Tailwind</p>
          <p className='text-gray-800 py-4 text-lg'><a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://github.com/TamlynSpringer/typescript-react-puppies' target='blank'>FE Code</a> <a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://github.com/TamlynSpringer/typescript-puppies-api' target='blank'>BE Code</a></p>
        </article>
        <article className=' text-center my-10 shadow-xl rounded-xl bg-zinc-300 basis-1/3 flex-1 dark:bg-zinc-300'>
          <Image className='relative mx-auto rounded-t-xl mt-3' src={project9} alt='project-blog' width={600} height={400}/>
          <h4 className='py-4 text-emerald-900 font-semibold text-2xl basis-1/3 flex-1'>Landing page</h4>
          <p className='text-gray-800 py-4'>HTML5 • CSS3 • Bootstrap</p>
          <p className='text-gray-800 py-4 text-lg'><a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='#' target='blank'>Site</a> <a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://github.com/TamlynSpringer/Landing-page-TinDog' target='blank'>Code</a></p>
        </article>
        <article className=' text-center my-10 shadow-xl rounded-xl bg-zinc-300 basis-1/3 flex-1 dark:bg-zinc-300'>
          <Image className='relative mx-auto rounded-t-xl' src={project10} alt='project-blog' width={600} height={400}/>
          <h4 className='py-4 text-emerald-900 font-semibold text-2xl basis-1/3 flex-1'>Pricing panel</h4>
          <p className='text-gray-800 py-4'>HTML5 • CSS3 • Mobile first</p>
          <p className='text-gray-800 py-4 text-lg'><a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='#' target='blank'>Site</a> <a className='ml-8  bg-gradient-to-r from-emerald-900 to-emerald-600 text-white px-4 py-2 font-medium rounded-3xl' href='https://github.com/TamlynSpringer/Pricing-panel' target='blank'>Code</a></p>
        </article>
      </div>          
    </main>

  )
};

export default Projects;