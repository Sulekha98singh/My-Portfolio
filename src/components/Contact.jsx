import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCopy,
} from "react-icons/fa6";

const Contact = () => {
  const email = "sulekha.23271@knit.ac.in";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    alert("Email copied!");
  };

  return (
    <section className="contact-page" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <h1>Get In Touch</h1>

          <p className="contact-description">
            I'm always open to discussing new opportunities, collaborating on
            exciting projects, or simply connecting with fellow developers.
            Feel free to reach out!
          </p>

          <div
            className="email-box"
            onClick={copyEmail}
            title="Click to copy"
          >
            <FaEnvelope className="email-icon" />
            <span className="email-text">{email}</span>
            <FaCopy className="copy-icon" />
          </div>

          <div className="socials">
            <a
              href="https://github.com/Sulekha98singh"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sulekha-singh-646490338/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;