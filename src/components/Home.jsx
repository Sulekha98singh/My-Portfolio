import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Home.css";
// Update these to your actual asset filenames when ready
import profile from "../assets/pp.jpeg"; 
import resumeFile from "../assets/Sulekha Singh(Resume).pdf";

import { FaGithub, FaLinkedin, FaXTwitter, FaHashnode } from "react-icons/fa6";

const roles = [
  "Full Stack Web Developer",
  "AI & Machine Learning Enthusiast",
  "Problem Solver",
  "Data Visualization Expert"
];

const Home = () => {

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[wordIndex];
    let timeout;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % roles.length);
        }
      }, 60);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section className="home" id="home">
      <div className="home-glass">

        {/* PROFILE IMAGE */}
        <motion.div
          className="home-img"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={profile} alt="Sulekha Singh" />
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1>Hi, I'm Sulekha Singh</h1> 

          <h3>
            I am a <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h3>

          <p>
             I am a Computer Science and Engineering student at Kamla Nehru Institute of
             Technology passionate about building intelligent software that combines
             Artificial Intelligence, Machine Learning, and Full-Stack Web Development.
              With a strong foundation in Data Structures & Algorithms and experience
             solving 900+ coding problems, I enjoy creating efficient, scalable, and
              impactful solutions to real-world challenges.
          </p>

          {/* SOCIAL LINKS - Reverted to your original handles */}
          <div className="home-socials">
            <a href="https://github.com/Sulekha98singh">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/sulekha-singh-646490338/">
              <FaLinkedin />
            </a>

            
            
          </div>

          {/* BUTTONS */}
          <div className="btn-group">
            <a
              href={resumeFile}
              download="Sulekha Singh(Resume).pdf"
              className="btn-resume"
            >
              Download CV
            </a>

            <a
              href={resumeFile}
              target="_blank"
              rel="noreferrer"
              className="btn-view"
            >
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;