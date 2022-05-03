import "./ExpandButton.scss";

type Props = {
  onClick: any;
  expand: boolean;
};

function ExpandButton(props: Props) {
  const style = {
    backgroundImage: `url("/images/icons/buttonExpandIcon.png")`,
    transform: `scaleX(${props.expand ? 1 : -1})`,
  };

  return (
    <button
      style={style}
      className="expand-button"
      onClick={() => !props.onClick(!props.expand)}
      data-expanded={props.expand}
    />
  );
}

export default ExpandButton;
