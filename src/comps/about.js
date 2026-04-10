import React from "react";
import "./../styles/about.css";

const About = () => {
  const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Angular",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Machine Learning",
  "Deep Learning",
  "TensorFlow",
  "Scikit-learn",
  "LangChain",
  "OpenAI",
  "Git",
  "HTML/CSS",
  "Material-UI",
  "Tailwind CSS"
  ];

  const basics = [
    "C/C++",
    "C#",
    "SQL",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "BERT",
    "LSTM",
    "CNN",
    "Flutter",
    "ASP.NET",
    "Power BI",
    "Jupyter Notebook"
  ];
  return (
    <section id="about" className="aboutSection sectionHead">
      <div className="aboutContainer">
        <h1>About Me</h1>
        <div className="aboutContent">
          <div className="aboutMe">
          <p>
            I'm an Associate Software Engineer passionate about AI/ML and full-stack development. My journey began during my B.Tech in Computer Engineering at CHARUSAT, where I discovered my love for building intelligent systems that solve real-world problems. From developing CNN-based lip-reading models to creating AI-powered chatbots, I thrive on turning complex ideas into functional solutions.
            <br />
            <br />
            Currently at Digiflux Technologies, I focus on developing and integrating AI models while building responsive user interfaces with React.js. I enjoy working on diverse projects - from machine learning research that gets published in conferences to creating full-stack applications that streamline business processes. My goal is to continue pushing the boundaries of what's possible with AI while delivering high-quality software solutions.
          </p>
          </div>

          <div className="skillsContent">
            <div>
              <h3>My Skills</h3>
              <div className="allSkill">
                {skills.map((skill, index) => {
                  return (
                    <li key={index} className="skill">
                      {skill}
                    </li>
                  );
                })}
              </div>
            </div>
            <div>
              <h3>Fundamentals in,</h3>
              <div className="allSkill">
                {basics.map((basic, index) => {
                  return (
                    <li key={index} className="skill">
                      {basic}
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
