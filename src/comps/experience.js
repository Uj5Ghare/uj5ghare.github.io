import React from "react";
import "./../styles/experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experienceSection sectionHead">
      <div className="experienceContainer">
        <h1>Experience</h1>
        <div className="expContainer">

          {/* Digiflux */}
          <div className="expBox">
            <div className="expAlign">
              <h4>Associate Software Engineer</h4>
              <h5>
                <a
                  href="https://www.linkedin.com/company/digiflux-technologies-pvt-ltd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @Digiflux Technologies Pvt Ltd
                </a>
              </h5>
            </div>
            <div className="dateLocation">
              <p className="jobLocation">Vadodara, India</p>
              <p>January 2024 - Present</p>
            </div>
            <ul>
              <li>
                Developing and integrating AI models using modern machine learning frameworks and cloud technologies.
              </li>
              <li>
                Built responsive user interfaces using <b>React.js</b>, ensuring seamless user experience across applications.
              </li>
              <li>
                Collaborating with cross-functional teams to deliver high-quality software solutions.
              </li>
              <li>
                Deployed and managed ML applications with <b>LangChain</b>, <b>OpenAI</b>, and <b>AWS Sagemaker</b>.
              </li>
              <li>
                <b>Tech Stack:</b> React.js, Python, JavaScript, LangChain, OpenAI, AWS Sagemaker, Docker, Machine Learning
              </li>
            </ul>
          </div>

          {/* L&T */}
          <div className="expBox">
            <div className="expAlign">
              <h4>Machine Learning & Web Development Intern</h4>
              <h5>
                <a
                  href="https://www.linkedin.com/company/larsen-&-toubro-ltd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @Larsen & Toubro
                </a>
              </h5>
            </div>
            <div className="dateLocation">
              <p className="jobLocation">Vadodara, India</p>
              <p>May 2022 - July 2023</p>
            </div>
            <ul>
              <li>
                <b>Web Development Intern (May-July 2023):</b> Designed and implemented web request forms using <b>ASP.NET MVC</b> and <b>ASP.NET Core</b>.
              </li>
              <li>
                Streamlined client interactions and data collection using <b>C#</b> and <b>JavaScript</b>.
              </li>
              <li>
                <b>Machine Learning Intern (May-June 2022):</b> Developed AI Chatbots using <b>RASA</b> framework for automated customer support.
              </li>
              <li>
                Worked on natural language processing and conversational AI implementations.
              </li>
              <li>
                <b>Tech Stack:</b> C#, JavaScript, ASP.NET MVC, ASP.NET Core, RASA, NLP, Machine Learning
              </li>
            </ul>
          </div>

          {/* Motorola */}
          <div className="expBox">
            <div className="expAlign">
              <h4>MEAN Stack Developer Intern</h4>
              <h5>
                <a
                  href="https://www.linkedin.com/company/motorola-solutions/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @Motorola Solutions
                </a>
              </h5>
            </div>
            <div className="dateLocation">
              <p className="jobLocation">Bangalore, India</p>
              <p>May 2022 - November 2022</p>
            </div>
            <ul>
              <li>
                Specialized in <b>MEAN Stack</b> development with focus on <b>Node.js</b>, <b>Express.js</b>, <b>Angular</b>, and <b>MongoDB</b>.
              </li>
              <li>
                Gained proficiency in full-stack web development and database management.
              </li>
              <li>
                Completed elective courses in modern web technologies and best practices.
              </li>
              <li>
                Worked on building scalable web applications with RESTful APIs.
              </li>
              <li>
                <b>Tech Stack:</b> MongoDB, Express.js, Angular, Node.js, SQL, JavaScript, RESTful APIs
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
