import "./Home.css";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <>
      <section className="home container" id="home">
        <div className="intro">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/programmer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--development-coding-programming-profession-avatar-pack-people-icons-7675299.png?f=webp"
            height={145}
            width={160}
            alt=""
            className="home__img"
          />
          <h1 className="home__name">Hari Govind N</h1>

          <span className="home__education">
            <Typewriter
              words={[
                'I am a learning Full-Stack Developer',
                'I love building web apps',
                'I craft responsive UIs',
                'I solve problems with code',
              ]}
              loop={0} // infinite
              cursor
              cursorStyle="_"
              typeSpeed={40}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </span>

          <div className="home__contact">
            <span className="contact__label">Contact Me</span>
            <HeaderSocials />
          </div>

          <ScrollDown />
        </div>

        <Shapes />
      </section>
    </>
  );
};

export default Home;
