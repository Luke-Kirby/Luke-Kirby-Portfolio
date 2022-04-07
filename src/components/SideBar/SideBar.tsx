import ProfileDisplay from "./ProfileDisplay";
import "./SideBar.scss";

function SideBar() {
  return (
    <div className="SideBar_main">
      <ProfileDisplay sizePx={200} />
    </div>
  );
}

export default SideBar;
