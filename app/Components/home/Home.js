import "./Home.css";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
//import PortfolioModal from "../modal/PortfolioModal";

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
          <span className="home__education">I am a growing Full-Stack developer</span>

          <HeaderSocials />

          <ScrollDown />
        </div>

        <Shapes />
      </section>
    </>
  );
};

export default Home;
