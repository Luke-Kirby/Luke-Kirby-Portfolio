import ProfileDisplay from "./ProfileDisplay";
import "./SideBar.scss";

function SideBar() {
  return (
    <div className="SideBar_main">
      <ProfileDisplay
        sizePx={200}
        profileName={"Luke Kirby"}
        profilePicturePath={"/images/LukeLad.jpeg"}
      />
    </div>
  );
}

export default SideBar;
