import PageFullImg from "../components/PageFullImg";
import About from "./About";
import "./Home.scss";

function Home() {
  return (
    <>
      <PageFullImg
        backgroundPath={"/images/LukeLondon.jpg"}
        title={"Luke Kirby"}
        subTitle={"Front-End Software Developer"}
      />
      <div className="page-division"></div>
      <About />
    </>
  );
}

export default Home;
