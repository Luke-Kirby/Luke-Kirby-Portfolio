import "./ExpandButton.scss";

interface Props {
  onClick: any;
  expand: boolean;
};

function ExpandButton(props: Props) {
  const style = {
    backgroundImage: `url("/images/icons/${props.expand? 'buttonExpand':'hamburger'}Icon.png")`,
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
