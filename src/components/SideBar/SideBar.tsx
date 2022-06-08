import ProfileDisplay from "./ProfileDisplay";
import MenuList from "./MenuList";
import "./SideBar.scss";
import SocialLinks from "./SocialLinks";

const socialItems = [
  { icon: "linkedIn", path: "https://uk.linkedin.com/in/luke-kirby-771baa155" },
  { icon: "outlook", path: "mailto:lbkirby96@hotmail.com" },
  { icon: "phone", path: "/contact" },
  { icon: "gitHub", path: "https://github.com/Luke-Kirby" },
  {
    icon: "zoom",
    path: "https://us05web.zoom.us/j/7155003910?pwd=RzREWUpES3lZdWI4M0poTWJ0WW8yZz09",
  },
];

const items = [
  { label: "Home", icon: "home", path: "" },
  { label: "CV", icon: "CV", path: "cv" },
  { label: "Projects", icon: "portfolio", path: "projects" },
  { label: "Contact", icon: "contact", path: "contact" },
];

type Props = { expanded: boolean };

function SideBar(props: Props) {
  let visibility: any;
  props.expanded ? (visibility = "visible") : (visibility = "hidden");
  return (
    <div className="SideBar_main">
      <div
        style={{
          visibility: visibility,
          overflow: "hidden",
          transition: "all 0.5s ease",
        }}
      >
        <ProfileDisplay
          sizePx={180}
          profileName={"Luke Kirby"}
          profilePicturePath={"/images/LukeLad.jpeg"}
        />
        <SocialLinks socialItems={socialItems} />
        <MenuList items={items} />
      </div>
    </div>
  );
}

export default SideBar;
