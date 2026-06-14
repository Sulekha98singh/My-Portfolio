import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  // Languages
{ name: "C++", icon: "ri-code-s-slash-line", color: "#00599C" },
{ name: "Python", icon: "ri-code-box-fill", color: "#3776AB" },
{ name: "JavaScript", icon: "ri-javascript-fill", color: "#F7DF1E" },

// Frontend
{ name: "HTML5", icon: "ri-html5-fill", color: "#E34F26" },
{ name: "CSS3", icon: "ri-css3-fill", color: "#1572B6" },
{ name: "React.js", icon: "ri-reactjs-fill", color: "#61DAFB" },
{ name: "Tailwind CSS", icon: "ri-windy-fill", color: "#06B6D4" },
{ name: "Framer Motion", icon: "ri-magic-line", color: "#0055FF" },

// Backend
{ name: "Node.js", icon: "ri-nodejs-fill", color: "#68A063" },
{ name: "Express.js", icon: "ri-server-fill", color: "#444444" },
{ name: "REST API", icon: "ri-links-line", color: "#FF6B35" },

// Database
{ name: "MongoDB", icon: "ri-database-2-fill", color: "#47A248" },
{ name: "MySQL", icon: "ri-database-fill", color: "#4479A1" },
{ name: "Redis", icon: "ri-database-2-line", color: "#DC382D" },

// AI / ML
{ name: "Scikit-learn", icon: "ri-brain-fill", color: "#F7931E" },
{ name: "Pandas", icon: "ri-bar-chart-box-fill", color: "#150458" },
{ name: "NumPy", icon: "ri-function-line", color: "#013243" },
{ name: "Streamlit", icon: "ri-dashboard-fill", color: "#FF4B4B" },
{ name: "Gemini AI", icon: "ri-sparkling-2-fill", color: "#4285F4" },

// Authentication & Payments
{ name: "Firebase", icon: "ri-fire-fill", color: "#FFCA28" },
{ name: "JWT", icon: "ri-key-2-fill", color: "#000000" },
{ name: "Razorpay", icon: "ri-bank-card-fill", color: "#0C61F7" },

// Tools
{ name: "Git", icon: "ri-git-branch-fill", color: "#F05032" },
{ name: "GitHub", icon: "ri-github-fill", color: "#181717" },
{ name: "Postman", icon: "ri-send-plane-fill", color: "#FF6C37" },
{ name: "Render", icon: "ri-cloud-fill", color: "#46E3B7" },
{ name: "VS Code", icon: "ri-code-box-fill", color: "#007ACC" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technical Skills
      </motion.h2>

      <div className="skills-wrapper">
        {skills.map((skill, index) => (
          <motion.div
            className="skill"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{
              boxShadow: `0 0 20px ${skill.color}, 0 0 40px ${skill.color}50`,
              y: -5
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.i
              className={skill.icon}
              style={{ color: skill.color }}
              whileHover={{ scale: 1.3, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            ></motion.i>

            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;