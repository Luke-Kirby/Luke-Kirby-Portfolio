import "./Projects.scss";
import Project from "../components/Project";

function Projects() {
  return (
    <div 
    style={{
      background: `url('/images/blueBckrnd1.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
    }}
    className="page-container-projects">
        <h1>
          Projects
        </h1>
      <div className="box-container">
        <Project 
          project="THEIA"
          path="https://www.penspen.com/capabilities/technical-solutions/theia/"
          description="Current role to coordinate the Front-End of Penspen's app, THEIA (Angular)"/>
        <Project 
          project="Planet-Patrol"
          path="https://app.plasticpatrol.co.uk/#/"
          description="Volunteer work to help fix bugs and develop new features (React)"/>
        <Project 
          project="Guillerin"
          path="https://www.guillerin.com/"
          description="Volunteer work to help develop some web-pages (Vue)"/>
        <Project 
          project="ticTacToe"
          path="https://shiny-naiad-125924.netlify.app/"
          description="My first project whilst learning JavaScript, HTML and CSS"/>
        <Project 
          project="physics" 
          path="https://stately-seahorse-ebd0ac.netlify.app/" 
          description="Another fun project to teach myself more advanced JavaScript"/>
      </div>
    </div>
  );
}

export default Projects;
