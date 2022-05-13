import SkillIcon from "../components/SkillIcon";
import "./About.scss";
import classnames from "classnames";

const skillItems = [
  { label: "JavaScript", top: false },
  { label: "TypeScript", top: true },
  { label: "React", top: false },
  { label: "CSS", top: true },
  { label: "HTML", top: false },
  { label: "Git", top: true },
];

//const PictureItems = [{ label: "Climbing", imgPath: "" }];

function About() {
  return (
    <div
      style={{
        background: `url('/images/Tenerife.jpg') fixed`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover ",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
      className="page-container"
    >
      <div className={classnames("about", "about-text")}>
        <h1>
          <em>
            <u>About</u>
          </em>
        </h1>
        <p>
          My name is Luke and I come from South Africa (although I'm very much
          English). I'm a Mechanical Engineer that has discovered a love for
          programming. After ~4 years as a Pipeline Integrity Engineer, I
          decided to quit my job and become a Software Developer.
        </p>

        <p>
          After gaining an interest in coding through Matlab and VBA, I decided
          to investigate JavaScript, HTML and CSS. This is where my eyes were
          opened at the truely limitless potential of web development. As such,
          I had no choice but to quit my job and pursue a career as a Front-End
          Web Developer.
        </p>
      </div>
      <div className="about">
        <h2>
          <em>
            <u>Skills</u>
          </em>
        </h2>
        <SkillIcon items={skillItems} />
      </div>
      {/* <div style={{ marginTop: "50px" }} className="about">
        <h2>
          <em>
            <u>Hobbies</u>
          </em>
        </h2>
        <div className="images-container">
          <DynamicPicture items={PictureItems} />
        </div>
      </div> */}
    </div>
  );
}

export default About;
