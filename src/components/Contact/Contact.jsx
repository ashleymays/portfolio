import contactLinks from "../../constants/contactLinks";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact flex-row flex-align-center flex-justify-space-btwn">
      <h3>Let's make something great together.</h3>
      <ul className="anchor-link-container">
        {contactLinks.map((link) => (
          <li>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
