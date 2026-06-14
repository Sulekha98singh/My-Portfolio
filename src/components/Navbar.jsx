import "./navbar.css";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo">
        Nishant Singh
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>

      <div className="socials">
        <a href="https://github.com/Nixantsingh943" target="_blank">
          <FaGithub />
        </a>

        <a href="https://linkedin.com" target="_blank">
          <FaLinkedin />
        </a>

        <a href="https://x.com" target="_blank">
          <FaXTwitter />
        </a>
      </div>

    </nav>
  );
};

export default Navbar;