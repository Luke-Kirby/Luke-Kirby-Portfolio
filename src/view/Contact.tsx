import "./Contact.scss";
import classnames from "classnames";
import ContactPoint from "../components/Cv/BulletPoint/ContactPoint";

const items = [
  {
    label: "lbkirby96@hotmail.com",
    icon: "bigMail",
    path: "mailto:lbkirby96@hotmail.com",
  },
  {
    label: "Newcastle upon Tyne",
    icon: "location",
    path: "https://goo.gl/maps/B7ruTsFdHhrYMEKT9",
  },
  { label: "07719 155 448", icon: "mobile", path: "" },
  { label: "GitHub", icon: "bigGitHub", path: "https://github.com/Luke-Kirby" },
];

function Contact() {
  return (
    <div
      style={{ backgroundImage: "url('/images/Laptop.jpg')" }}
      className="page-container-contact"
    >
      <div className={classnames("contact", "contact-text")}>
        <h1>
            Contact
        </h1>
          <ContactPoint items={items} />
        {/* <div className="details-container">
        </div> */}
      </div>
    </div>
  );
}

export default Contact;
