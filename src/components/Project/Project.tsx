import "./Project.scss";
import { Link } from "react-router-dom";

interface Props {
  project: string;
  path: string;
}

function Project(props: Props) {
  let style = { backgroundImage: `url(/images/projects/${props.project}.png)` };
  return (
    <a href={props.path}>
      <div className="project-closed">
        <div className="project-fade"></div>
        <h2 className="view">
          <em>View Project</em>
        </h2>
        <div style={style} className="project-img"></div>
      </div>
    </a>
  );
}

export default Project;
