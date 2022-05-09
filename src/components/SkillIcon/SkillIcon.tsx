import "./SkillIcon.scss";

interface SkillItem {
  label: string;
  top: boolean;
}

interface Props {
  items: SkillItem[];
}

function SkillIcon(props: Props) {
  return (
    <div className="hexagon-container">
      {props.items.map((item) => {
        let topMargin: string;
        let bottomMargin: string;
        let hoverColor: string;
        if (item.top) {
          topMargin = "-30px";
          bottomMargin = "30px"
        } else {
          topMargin = "30px";
          bottomMargin = "-30px"
        }

        return (
          <div id="containerDiv"
            style={{
              marginTop: topMargin,
              marginBottom: bottomMargin,
              backgroundImage: "url('/images/icons/skillIcon.png')",
            }}
            className="hexagon"
          >
            <p><em>{item.label}</em></p>
          </div>
        );
      })}
    </div>
  );
}

export default SkillIcon;
