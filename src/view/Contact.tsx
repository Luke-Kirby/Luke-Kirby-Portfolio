import "./Contact.scss";
import classnames from "classnames";
import ContactPoint from "../components/Cv/BulletPoint/ContactPoint";

const items = [
  {
    label: "Newcastle upon Tyne",
    icon: "location",
    path: "https://goo.gl/maps/B7ruTsFdHhrYMEKT9",
  },
  {
    label: "lbkirby96@hotmail.com",
    icon: "bigMail",
    path: "mailto:lbkirby96@hotmail.com",
  },
  { label: "07719 155 448", icon: "mobile", path: "" },
];

function Contact() {
  return (
    <div
      style={{ backgroundImage: "url('/images/Laptop.jpg')" }}
      className="page-container-contact"
    >
      <div className={classnames("contact", "contact-text")}>
        <h1>
          <em>
            <u>Contact</u>
          </em>
        </h1>
        <div className="details-container">
          <ContactPoint items={items} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
