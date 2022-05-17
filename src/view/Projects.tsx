import "./Projects.scss";
import Project from "../components/Project";

function Projects() {
  return (
    <div className="page-container-projects">
      <div className="projects">
        <h1>
          <em>
            <u>Projects</u>
          </em>
        </h1>
      </div>
      <div className="box-container">
        <div className="project-container">
        <Project project="ticTacToe" path="https://shiny-naiad-125924.netlify.app/"/>
        <Project project="physics" path="https://stately-seahorse-ebd0ac.netlify.app/" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
