import "./About.css";

const aboutText =`Hi, I'm Sulekha Singh, a Computer Science undergraduate at Kamla Nehru Institute of Technology, pursuing my B.Tech.I am passionate about using technology to solve real-world problems and continuously expanding my technical expertise.


My interests lie in full-stack web development, Data Structures & Algorithms, Artificial Intelligence, and Machine Learning. I enjoy building scalable applications with clean, efficient code and creating intuitive user experiences that make technology more accessible and impactful.

I have hands-on experience with C++, Python, JavaScript, React.js, Node.js, Express.js, MongoDB, HTML, CSS, and Git. Through projects involving web applications, REST APIs, authentication systems, and interactive dashboards, I have developed practical skills in designing reliable and user-focused software.

Currently, I am seeking internship opportunities where I can apply my knowledge, learn from experienced professionals, and contribute to meaningful projects. I am committed to continuous learning and aspire to grow into a skilled software engineer capable of building innovative and impactful solutions.`;

const skills = [
  "C++",
  "Python",
  "JavaScript",
  "C",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Redux",
  "TypeScript",
  "Next.js",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "FastAPI",
  "MySQL",
  "Radis",
  "JWT",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Scikit-Learn",
  "Figma",
  "Linux"
];

const About = () => {
  return (
    <section className="about" id="about">
      
      {/* ABOUT TEXT */}
      <div className="about-content">

        <h2>About Me</h2>

        <div className="about-paragraph">
          {aboutText}
        </div>

        {/* SKILLS */}
        <div className="skills-container">
          {skills.map((skill, i) => (
            <span key={i} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>

      </div>

    </section>
  );
};

export default About;