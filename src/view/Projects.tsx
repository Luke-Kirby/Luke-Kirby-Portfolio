import "./Projects.scss";
import Project from "../components/Project";

function Projects() {
  return (
    <div className="page-container-projects">
        <h1>
          Projects
        </h1>
      <div className="box-container">
        <Project project="ticTacToe" path="https://shiny-naiad-125924.netlify.app/"/>
        <Project project="physics" path="https://stately-seahorse-ebd0ac.netlify.app/" />
      </div>
    </div>
  );
}

export default Projects;
