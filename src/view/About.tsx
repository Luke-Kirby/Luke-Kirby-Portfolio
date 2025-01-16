import "./About.scss";

// const skillItems = [
//   { label: "JavaScript", top: false },
//   { label: "TypeScript", top: true },
//   { label: "React", top: false },
//   { label: "CSS", top: true },
//   { label: "HTML", top: false },
//   { label: "Git", top: true },
// ];

function About() {
  return (
    <div
      style={{
        background: `url('/images/Tenerife.jpg') fixed`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover ",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        justifyContent: "space-evenly",
        alignItems: "start",
      }}
      className="page-container"
    >
      <div className="about-strip">
        <h1 className="about-h1">Engineer</h1>
        <h1 className="about-h1">Developer</h1>
        <h1 className="about-h1">Designer</h1>
        <h1 className="about-h1">Manager</h1>
      </div>
      
    </div>
  );
}

export default About;
