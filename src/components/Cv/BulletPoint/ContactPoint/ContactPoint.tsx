import "./ContactPoint.scss";

interface ContactItem {
  label: string;
  icon: string;
  path: string;
}

interface Props {
  items: ContactItem[];
}

function ContactPoint(props: Props) {
  return (
    <div className="icon-label-container">
      {props.items.map((item) => {
        let image = (
          <img
            className="contact-icon"
            src={`/images/icons/${item.icon}Icon.png`}
            alt={item.label}
          />
        );
        return (
          <div className="icon-label">
            {item.path === "" ? (
              <div>{image} </div>
            ) : (
              <a href={item.path}>{image}</a>
            )}
            <p>
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ContactPoint;
