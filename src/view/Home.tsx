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

      <div
        style={{
          background: `url('/images/blueBckrnd1.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundAttachment: "local",
        }}
        className="page-container blue-back"
      >
        <div className="text-bubble">
          <p>
            My name is Luke Kirby and welcome to my website. I'm a Front-End
            Software Developer, UI / UX Designer and Mechanical Engineer. I am
            proficient in the popular TypeScript frameworks of React, Angular
            and Vue. I am the go-to UI / UX designer in my team and proficient
            at creating Wireframes, User-Flows and API Flows. Additionally, I
            have a background in Mechanical Engineering and thrive in problem
            solving environments.
          </p>
        </div>

        <div className="text-bubble">
          <p>
            I believe the key to maintaining a great website is clear planning,
            close collaboration and supportive teamwork of developers, designers
            and product managers. Every design drafted, and line of code typed,
            should always first consider the client’s needs, implement the best
            practices and consider the team’s capabilities.
          </p>
        </div>
      </div>

      <div className="page-division"></div>

      <About />

      <div className="page-division"></div>

      <div className="end-section">
        <p>lbkirby96@hotmail.com</p>
        <p>+44 7719 155448</p>
        <p>
          <a>https://uk.linkedin.com/in/luke-kirby-771baa155</a>
        </p>
        <p>Newcastle Upon Tyne</p>

        <div
          className="end-logo"
          style={{
            background: `url('/images/logo.png')`,
          }}
        ></div>
      </div>
    </>
  );
}

export default Home;
