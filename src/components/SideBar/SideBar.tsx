import ProfileDisplay from "./ProfileDisplay";
import MenuList from "./MenuList";
import "./SideBar.scss";
import SocialLinks from "./SocialLinks";

const socialItems = [
  { icon: "linkedIn", path: "https://uk.linkedin.com/in/luke-kirby-771baa155" },
  { icon: "outlook", path: "mailto:lbkirby96@hotmail.com" },
  { icon: "phone", path: "" },
  {
    icon: "zoom",
    path: "https://us05web.zoom.us/j/7155003910?pwd=RzREWUpES3lZdWI4M0poTWJ0WW8yZz09",
  },
];

const items = [
  { label: "Home", icon: "home", path: "" },
  { label: "About", icon: "about", path: "about" },
  { label: "CV", icon: "CV", path: "cv" },
  { label: "Portfolio", icon: "portfolio", path: "portfolio" },
  { label: "Contact", icon: "contact", path: "contact" },
];

function SideBar() {
  return (
    <div className="SideBar_main">
      <ProfileDisplay
        sizePx={180}
        profileName={"Luke Kirby"}
        profilePicturePath={"/images/LukeLad.jpeg"}
      />
      <SocialLinks socialItems={socialItems} />
      <MenuList items={items} />
    </div>
  );
}

export default SideBar;
