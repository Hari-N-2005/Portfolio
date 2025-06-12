import React from 'react';
import "./About.css"
//import AboutBox from './AboutBox';

const About = () => {
  return (
    <section
  className="about container section"
  id="about"
  data-aos="fade-up"
  data-aos-delay="100"
>
  <h2 className="section__title" data-aos="fade-up" data-aos-delay="200">
    About Me
  </h2>

  <div className="about__container grid" data-aos="fade-up" data-aos-delay="300">
    <img
      src="https://cdn3d.iconscout.com/3d/premium/thumb/male-programmer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--developer-coder-software-metaverse-pack-science-technology-icons-4846824.png"
      alt=""
      className="about__img"
      data-aos="zoom-in"
      data-aos-delay="400"
    />

    <div className="about__data" data-aos="fade-left" data-aos-delay="500">
      <div className="about__info">
        <p className="about__description">
          I&apos;m a passionate Front-End Developer with a keen eye for design and a love for crafting seamless user experiences. Currently studying at Model Engineering College, Thrikakkara, I specialize in building responsive, intuitive, and visually appealing web applications. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React, I thrive on bringing creative ideas to life through clean and efficient code. I&apos;m always eager to learn, experiment, and push the boundaries of front-end development.
        </p>
        <a
          href="https://drive.google.com/file/d/1vIui1GrRJE1mfueLM3C-dJzxzsGNw0Oo/view?usp=sharing"
          className="btn"
          download={"Hari's Resume"}
        >
          Download Resume
        </a>
      </div>
    </div>
  </div>
</section>

  )
}

export default About