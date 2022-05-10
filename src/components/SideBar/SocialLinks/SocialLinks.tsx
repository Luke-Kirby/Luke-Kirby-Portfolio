import "./SocialLinks.scss";
import { Link } from "react-router-dom";

interface ListItem {
  icon: string;
  path: string;
}

interface Props {
  socialItems: ListItem[];
}

function SocialLinks(props: Props) {
  return (
    <div className="social-container">
      {props.socialItems.map((item) => {
        let image = (
          <img
            alt={item.icon}
            className="social-icons"
            src={`/images/icons/${item.icon}Icon.png`}
          />
        );
        return (
          <div>
            {item.path === "/contact" ? (
              <Link to={item.path} key={item.icon}>
                {image}
              </Link>
            ) : (
              <a href={item.path}>{image}</a>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SocialLinks;
