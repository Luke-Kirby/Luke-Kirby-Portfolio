import "./BulletPoint.scss";

interface Props {
  time: string;
  label: string;
  onClick: any;
  expand: boolean;
}

function BulletPoint(props: Props) {
  const style = {
    backgroundImage: `url("/images/icons/dropArrowIcon.png")`,
    transform: `scaleY(${props.expand ? -1 : 1})`,
  };
  return (
    <div>
      <div>
        <div className="bullet"></div>
        <h2>
          <em>{props.time}</em>
        </h2>
      </div>
      <div className="subheading">
          <h3>{props.label}</h3>
    <button
      style={style}
      className="drop-arrow"
      onClick={() => !props.onClick(!props.expand)}
      data-expanded={props.expand}
    />
    </div>
    </div>
  );
}

export default BulletPoint;
