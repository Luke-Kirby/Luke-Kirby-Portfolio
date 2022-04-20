import ProfileDisplay from "./ProfileDisplay";
import MenuList from "./MenuList";
import "./SideBar.scss";

function SideBar() {
  return (
    <div className="SideBar_main">
      <ProfileDisplay sizePx={200} />
      <MenuList
        items={[
          { label: "Home", icon: "home", path: "/" },
          { label: "About", icon: "about", path: "about" },
          { label: "CV", icon: "CV", path: "" },
          { label: "Portfolio", icon: "portfolio", path: "" },
          { label: "Contact", icon: "contact", path: "" },
        ]}
      />
    </div>
  );
}

export default SideBar;
