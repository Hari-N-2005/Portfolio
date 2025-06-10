import React from 'react';
import "./About.css"
//import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section__title'>
        About Me
      </h2>

    <div className='about__container grid'>
    <img src= "https://cdn3d.iconscout.com/3d/premium/thumb/male-programmer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--developer-coder-software-metaverse-pack-science-technology-icons-4846824.png" alt='' className='about__img'/>

    <div className='about__data'>
      <div className='about__info'>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className='about__description'>
        I&apos;m a passionate Front-End Developer with a keen eye for design and a love for crafting seamless user experiences. Currently studying at Model Engineering College, Thrikakkara, I specialize in building responsive, intuitive, and visually appealing web applications. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React, I thrive on bringing creative ideas to life through clean and efficient code. I&apos;m always eager to learn, experiment, and push the boundaries of front-end development.
        </p>
        <a href='https://drive.google.com/file/d/1vIui1GrRJE1mfueLM3C-dJzxzsGNw0Oo/view?usp=sharing' className='btn' download={"Hari's Resume"}>Download Resume</a>
      </div>

      {/*<div className='about__skills grid'>
        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>
            Development
            </h3>
            <span className='skills__number'>90%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage development'></span>
          </div>
        </div>

        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>UI/UX Designing</h3>
            <span className='skills__number'>80%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage ui__design'></span>
          </div>
        </div>

        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>DSA</h3>
            <span className='skills__number'>40%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage DSA'></span>
          </div>
        </div>

      </div>*/}

    </div>
    </div>

    {/*<AboutBox/>*/}

    </section>
  )
}

export default About