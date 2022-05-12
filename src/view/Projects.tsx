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
        <Project project="ticTacToe" />
        <Project project="physics" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
