import ProfileDisplay from "./ProfileDisplay";
import MenuList from "./MenuList";
import "./SideBar.scss";

function SideBar() {
  return (
    <div className="SideBar_main">
      <ProfileDisplay sizePx={200} />
      <MenuList items={["label", "path","icon"]} />;
    </div>
  );
}

export default SideBar;
