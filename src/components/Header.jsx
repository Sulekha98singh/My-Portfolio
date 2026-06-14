import "./Header.css";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope , FaBlog } from "react-icons/fa6";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="Header">

      {/* Logo */}
      <div className="logo">Sulekha Singh</div>

      {/* Navigation */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li>
  
</li>
      </ul>

      {/* Right Section */}
      <div className="right-section">

        

        {/* Social Links */}
        <div className="social-links">

          <a
            href="https://github.com/Sulekha98singh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sulekha-singh-646490338/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

        
          <a href="mailto:sulekha.23271@knit.ac.in">
            <FaEnvelope />
          </a>

        </div>
        {/* Theme Switch */}
        <div className="theme-switch" onClick={toggleTheme}>
          <div className={`switch ${theme}`}>
            <span className="icon">
              {theme === "dark" ? "🌙" : "☀️"}
            </span>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;