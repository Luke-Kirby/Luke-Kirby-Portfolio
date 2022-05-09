import "./Contact.scss";
import classnames from "classnames";

function Contact() {
  return (
    <div className="page-container-contact">
      <div className={classnames("contact", "contact-text")}>
        <h1>
          <em>
            <u>Contact</u>
          </em>
        </h1>
        <div className="details-container"></div>
      </div>
    </div>
  );
}

export default Contact;
