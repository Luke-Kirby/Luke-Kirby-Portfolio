import "./SocialLinks.scss";

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
        return (
          <a href={item.path}>
            <img
              className="social-icons"
              src={`/images/icons/${item.icon}Icon.png`}
            ></img>
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
