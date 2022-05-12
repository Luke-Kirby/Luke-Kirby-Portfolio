import "./Project.scss";

interface Props {
  project: string;
}

function Project(props: Props) {
   let style={backgroundImage: `url(/images/projects/${props.project}.png)`}
  return (
    <div className="project-closed">
        <h2 className="view"><em>View Project</em></h2>
      <div 
      style={style}
      className="project-img"></div>
    </div>
  );
}

export default Project;
