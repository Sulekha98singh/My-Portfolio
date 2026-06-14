import { motion } from "framer-motion";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import "./Education.css";

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

const Education = () => {
  return (
    <section className="education" id="education">

      {/* SECTION HEADING */}
      <motion.div
        className="education-header"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Education <span>& Experience</span>
        </h2>
        <div className="underline"></div>
      </motion.div>

      {/* TIMELINE */}
      <motion.div
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/* Item 1: B.Tech */}
        <motion.div className="timeline-item" variants={itemVariants}>
          <span className="timeline-dot"></span>
          <div className="timeline-content">
            <h3>B.Tech, Computer Science And Engineering</h3>
            <h4>Kamla Nehru Institute of Technology</h4>
            <span className="timeline-date">Oct 2023 – Present</span>
            <p>
              Maintaining a GPA of 7.78  with a focus on Advanced Data Structures And Algorithms,
              Object Oriented Programming, and Database Management Systems, Computer Network, Operating System.  
            </p>
          </div>
        </motion.div>

        {/* Item 2: AI & ML Focus */}
        <motion.div className="timeline-item" variants={itemVariants}>
          <span className="timeline-dot"></span>
          <div className="timeline-content">
            <h3>Artificial Intelligence & Machine Learning</h3>
            <h4>Collage Coursework & Projects</h4>
            <span className="timeline-date">2024 – Present</span>
            <p>
              Building a strong foundation in Artificial Intelligence and Machine Learning through coursework and hands-on projects. Experienced in using Python along with Pandas, NumPy, and Scikit-learn for data preprocessing, analysis, and predictive modeling. Continuously expanding my knowledge of machine learning algorithms, data-driven problem solving, and model evaluation by applying concepts to real-world datasets and academic projects.

            </p>
          </div>
        </motion.div>

        {/* Item 3: Web App Development */}
        <motion.div className="timeline-item" variants={itemVariants}>
          <span className="timeline-dot"></span>
          <div className="timeline-content">
            <h3>Full Stack Web Development</h3>
            <h4>KNIT Curriculum</h4>
            <span className="timeline-date">2025 – Present</span>
            <p>
               Developing full-stack applications using the MERN stack with a focus on
              responsive design, RESTful API development, MongoDB integration, and secure
              authentication. Applying these technologies to build scalable, real-world
              projects that solve practical problems.
            </p>
          </div>
        </motion.div>

        {/* Item 4: DSA Section */}
        <motion.div className="timeline-item" variants={itemVariants}>
          <span className="timeline-dot"></span>
          <div className="timeline-content">
            <h3>Data Structures & Algorithms</h3>
            <h4>Technical Proficiency</h4>
            <p>
               Solved 900+ Data Structures & Algorithms problems across competitive coding
              platforms, demonstrating strong analytical thinking and problem-solving
              abilities. Actively participate in Competitive Programming using C++ while
              focusing on algorithm optimization, time complexity analysis, and efficient
              coding practices.
            </p>

            <div className="coding-links">
              <a href="https://www.geeksforgeeks.org/profile/sulekhar9yo?tab=activity" target="_blank" rel="noopener noreferrer">
                <SiGeeksforgeeks />
                <span>GeeksforGeeks</span>
              </a>

              <a href="https://leetcode.com/u/sum_63singh/" target="_blank" rel="noopener noreferrer">
                <SiLeetcode />
                <span>LeetCode</span>
              </a>
              {/* <a href="https://www.codechef.com/users/singh_9580" target="_blank" rel="noopener noreferrer">
                <SiCodeChef />
                <span>CodeChef</span>
              </a>
               */}
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Education;