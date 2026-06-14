import { motion } from "framer-motion";
import "./Projects.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const projects = [
  {
    title: "Student Dropout Risk Prediction using Machine Learning",
    description:
      "Developed a machine learning model to predict student dropout risks based on various factors. Implemented data preprocessing, feature engineering, and model training using Python and scikit-learn.",
    tech: ["Python" , "Scikit-learn" , "Pandas" , "Streamlit" , "NumPy" , "Machine Learning"],
    link: "https://github.com/Sulekha98singh/Student-Dropout-Prediction",
    link: "https://student-dropout-risk.streamlit.app/",
  },

  
   {
  title: "AI Interview Preparation Platform",
  description: `Built a scalable AI-powered interview preparation platform that leverages
  Gemini AI to generate personalized interview questions and feedback from uploaded
  resumes. Developed the application using the MERN stack with secure Firebase
  Authentication, Razorpay-powered credit management, and a responsive user
  experience powered by Framer Motion.`,
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Gemini AI",
    "Firebase Authentication",
    "Razorpay",
    "Framer Motion",
    "Render",
  ],
  link: "https://github.com/Sulekha98singh/AI-Interview-Preparation-Platform",
},

  {
  title: "Virtual Courses HUB",
  description: "Built and enhanced a full-stack Learning Management System that allows users to discover, purchase, and access virtual courses. Leveraged the MERN stack, Gemini AI for intelligent course search, Razorpay for secure payments, and implemented authentication, role-based access control, and an admin dashboard while ensuring a responsive and scalable user experience.",
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Gemini AI",
    "Razorpay",
    "JWT",
    "REST API",
    "Render"
  ],
  link: "https://github.com/Sulekha98singh/Virtual-Courses-HUB-AI",
},
 {
  title: "Simon Game",
  description: "Created a responsive Simon Game that tests users' memory by generating progressively challenging color patterns. Developed the complete game logic, animations, sound effects, and score management using JavaScript and jQuery, delivering an engaging browser-based gaming experience.",
  tech: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "jQuery"
  ],
  link: "https://github.com/Sulekha98singh/Simon-Game",
},
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      {/* HEADER */}
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Projects <span>& Work</span>
        </h2>
        <div className="underline"></div>
      </motion.div>

      {/* PROJECT TIMELINE */}
      <motion.div
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((p, i) => (
          <motion.div
            className="timeline-item"
            key={i}
            variants={itemVariants}
          >
            <span className="timeline-dot"></span>

            <div className="timeline-content">
              <h3>{p.title}</h3>

              <p>{p.description}</p>

              <div className="tech-stack">
                {p.tech.map((t, j) => (
                  <span key={j} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Code →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;