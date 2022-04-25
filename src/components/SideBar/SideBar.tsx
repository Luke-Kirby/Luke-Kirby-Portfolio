import ProfileDisplay from "./ProfileDisplay";
import MenuList from "./MenuList";
import "./SideBar.scss";

const items = [
  { label: "Home", icon: "home", path: "/" },
  { label: "About", icon: "about", path: "about" },
  { label: "CV", icon: "CV", path: "cv" },
  { label: "Portfolio", icon: "portfolio", path: "portfolio" },
  { label: "Contact", icon: "contact", path: "contact" },
];

function SideBar() {
  return (
    <div className="SideBar_main">
      <ProfileDisplay
        sizePx={200}
        profileName={"Luke Kirby"}
        profilePicturePath={"/images/LukeLad.jpeg"}
      />
      <MenuList items={items} />
    </div>
  );
}

export default SideBar;
