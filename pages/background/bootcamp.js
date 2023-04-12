import React from 'react';
import { SiTypescript, SiJavascript, SiMongodb, SiHtml5, SiCss3, SiNetlify, SiContentful, SiPostgresql, SiGraphql, SiExpress, SiFirebase, SiSocketdotio, SiRedux } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import {  } from 'react-icons/';
import {  } from 'react-icons/';
import {  } from 'react-icons/';

const SaltBootcamp = () => {
  return (
    <section className='min-h-screen bg-zinc-100 md:px-20 lg:px:40 dark:bg-zinc-800'>
      <article>
        <h2>Full-stack JavaScript development</h2>
        <h3>School of Applied Technology</h3>
        <h3>Stockholm, Sweden</h3>
        <p>Of the approximately 1,000 candidates who applied, I was 1 of 40 people selected to partake in an intensive JavaScript developer training program</p>
        <p>Over a three-month period, with weekly practical tests and over 500 development hours I graduated with a diploma in software development</p>
      </article>
      <article>
        <h3>Skills</h3>
        <ul>
          <li><SiJavascript/> JavaScript</li>
          <li><SiTypescript /> TypeScript</li>
          <li><FaReact /> React</li>
          <li><FaNodeJs /> NodeJS</li>
          <li><TbBrandNextjs /> NextJS</li>
          <li><SiMongodb /> MongoDB</li>
          <li><SiHtml5 /> HTML5</li>
          <li><SiCss3 /> CSS3</li>
          <li><SiRedux /> Redux</li>
          <li><SiNetlify /> Netlify</li>
          <li><SiContentful /> Contentful</li>
          <li><SiPostgresql /> Postgres SQL</li>
          <li><SiGraphql /> GraphQL</li>
          <li><SiExpress /> ExpressJS</li>
          <li><SiFirebase /> Firebase</li>
          <li><SiSocketdotio /> SocketIO</li>
        </ul>
      </article>
    </section>
  )
}

export default SaltBootcamp