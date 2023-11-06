import "./Project.scss";

interface Props {
  project: string;
  path: string;
}

function Project(props: Props) {
  let style = { backgroundImage: `url(/images/projects/${props.project}.png)` };
  return (
    <div style={{height: 'fit-content'}}>
      <a href={props.path}>
        <div className="project-closed">
          <h2 className="view">
            <em>View Project</em>
          </h2>
          <div style={style} className="project-img"></div>
        </div>
      </a>
      <p className="proj-desc">Short description Short description Short description Short description</p>
    </div>
  );
}

export default Project;
