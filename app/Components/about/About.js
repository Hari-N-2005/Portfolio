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
          I&apos;m a dedicated developer with a passion for building complete and efficient web applications. Currently studying at Model Engineering College, Thrikakkara, I work across both front-end and back-end technologies to create responsive, functional, and user-friendly solutions.

          With a solid foundation in HTML, CSS, JavaScript, and frameworks like React, I&apos;ve also explored backend tools such as Node.js and MongoDB to develop full-stack applications. I enjoy learning new technologies, solving real-world problems, and also continuously improving my skills to deliver clean and maintainable code.

          I&apos;m always excited to take on new challenges, collaborate on projects, and grow as a developer in the fast evolving tech industry.
        </p>
        <a
          href="https://drive.google.com/file/d/1vu8z1UB3ADTkmJL1HDl-KLLk5EmOF2-1/view"
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
