import Image from "next/image"
import React from "react"

const TechStack = ({ darkMode }) => {
  return (
    <div className="w-full px-2 pb-4">
      <h3 className="text-4xl font-medium py-6 text-left text-green-900 dark:text-green-100">Techstack</h3>
      <ul className="flex flex-wrap gap-4 text-sm md:text-base">
        <li className="w-28 md:w-36 lg:w-44 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-1 md:gap-2 ">
            <Image className="h-4 w-4 md:w-6 md:h-6" src="/icons/javascript-colored.svg" alt="JavaScript icon" width={100} height={100} />
            <label className="justify-self-end text-center font-medium ">
            JavaScript
            </label>
          </div>
        </li>
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700  dark:bg-neutral-700 dark:text-white">
            <div className="mx-auto flex items-center justify-center gap-1 md:gap-2">
              <Image className="h-4 w-4 md:w-6 md:h-6" src="/icons/typescript-colored.svg" alt="TypeScript icon" width={100} height={100} />
              <label className=" justify-self-end text-center font-medium ">
              TypeScript
              </label>
            </div>
        </li>  
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/react-colored.svg" alt="React icon" width={100} height={100} />
            <label className=" justify-self-end text-center font-medium ">
            React   
            </label>
          </div>
        </li>   
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/nextjs.svg" alt="Next.js icon" width={100} height={100} />
            <label className=" justify-self-end text-center font-medium ">Next.js</label>
          </div>
        </li>        
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/vite-colored.svg" alt="Vite icon" width={100} height={100} />
            <label className=" justify-self-end text-center font-medium ">
            Vite
            </label>
          </div>
        </li>  
        <li className="w-28 md:w-36 px-3 md:px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/tailwindcss-colored.svg" alt="tailwindcss icon" width={100} height={100} />
            <label className="justify-self-end text-center font-medium ">Tailwind</label>
          </div>
        </li>
        <li className="w-28 md:w-40 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/shadcn-ui.svg" alt="Shadcn icon" width={100} height={100} />
            <label className=" justify-self-end text-center font-medium ">Shadcn/UI</label>
          </div>
        </li>
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/bootstrap-5.svg" alt="Bootstrap5 icon" width={100} height={100} />
            <label className=" justify-self-end text-center font-medium ">Bootstrap</label>
          </div>
        </li>
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/materialui-colored.svg" alt="MUI icon" width={100} height={100} />
            <label className=" justify-self-end text-center font-medium ">MUI</label>
          </div>
        </li>
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/radix-ui.svg" alt="Radix icon" width={100} height={100} />
            <label className=" justify-self-end text-center font-medium ">Radix/UI</label>
          </div>
        </li>
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/figma-colored.svg" alt="Figma icon" width={100} height={100} />
            <label className=" justify-self-end text-center font-medium ">Figma</label>
          </div>
        </li>
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/css3-colored.svg" alt="CSS icon" width={100} height={100} />
            <label className=" justify-self-end text-center font-medium ">CSS</label>
          </div>
        </li> 
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/html5-colored.svg" alt="HTML icon" width={100} height={100} />
            <label className="font-medium ">HTML</label>
          </div>
        </li>
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 md:h-7" src="/icons/nodejs.svg" alt="NodeJS icon" width={200} height={100} />
            <label className=" justify-self-end text-center font-medium ">Node</label>
          </div>
        </li>
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/nestJS.svg" alt="NestJS icon" width={100} height={100} />
            <label className=" justify-self-end text-center font-medium ">NestJS</label>
          </div>
        </li>
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/expressjs.svg" alt="ExpressJS icon" width={100} height={100} />
            <label className=" justify-self-end text-center font-medium ">Express</label>
          </div>
        </li>
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/prisma.svg" alt="Prisma icon" width={100} height={100} />
            <label className=" justify-self-end text-center font-medium ">Prisma</label>
          </div>
        </li>
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/postgresql.svg" alt="Postgres icon" width={100} height={100} />
            <label className=" justify-self-end text-center font-medium ">PostgresSQL</label>
          </div>
        </li>
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/firebase-colored.svg" alt="Firebase icon" width={100} height={100} />
            <label className=" justify-self-end text-center font-medium ">Firebase</label>
          </div>
        </li>
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/mongodb.svg" alt="MongoDB icon" width={100} height={100} />
            <label className=" justify-self-end text-center font-medium ">MongoDB</label>
          </div>
        </li>
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/vercel.svg" alt="Vercel icon" width={100} height={100} />
            <label className=" justify-self-end text-center font-medium ">Vercel</label>
          </div>
        </li>
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/netlify.svg" alt="Netlify icon" width={100} height={100} />
            <label className=" justify-self-end text-center font-medium ">Netlify</label>
          </div>
        </li>
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/github.svg" alt="Github icon" width={100} height={100} />
            <label className=" justify-self-end text-center font-medium ">Github</label>
          </div>
        </li>
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700 dark:bg-neutral-700 dark:text-white">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image className="h-5 w-5 md:w-7 md:h-7" src="/icons/git-colored.svg" alt="Git icon" width={100} height={100} />
            <label className=" justify-self-end text-center font-medium ">Git</label>
          </div>
        </li>


      </ul>
    </div>
  )
}

export default TechStack