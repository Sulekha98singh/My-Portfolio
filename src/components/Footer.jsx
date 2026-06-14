import "./Footer.css";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaArrowUp, FaBlog } from "react-icons/fa6";
// Ensure this filename matches your assets folder
import resumeFile from "../assets/Sulekha Singh(Resume).pdf";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="footer-bar">

        {/* Navigation - Linked to your Hashnode */}
        <div className="footer-links">
            
        </div>

        {/* Social Links - Reverted to your specified handles */}
        <div className="footer-social">

          <a href="https://github.com/Sulekha98singh" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/sulekha-singh-646490338/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="mailto:sulekha.23271@knit.ac.in">
            <FaEnvelope />
          </a>

        </div>

        {/* Actions */}
        <div className="footer-actions">

          <a
            href={resumeFile}
            download="Sulekha Singh(Resume).pdf"
            className="btn-resume"
          >
            Download CV
          </a>

          <button className="top-btn" onClick={scrollTop} aria-label="Scroll to top">
            <FaArrowUp />
          </button>

        </div>

      </div>

      {/* Copyright */}
      <p className="copyright">
        © {new Date().getFullYear()} Sulekha Singh || All Rights Reserved.
      </p>

    </footer>
  );
};

export default Footer;