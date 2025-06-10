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
            src="https://i.ibb.co/zS38BWV/9434621.png"
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
