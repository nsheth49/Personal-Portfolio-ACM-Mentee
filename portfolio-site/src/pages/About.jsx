import "./About.css";
import resumePDF from "../assets/resumePDF.pdf";

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        Hi, I'm Niket, an aspiring AI developer based in Dallas. I love building clean, scalable web applications and exploring new technologies in AI and web development.
      </p>

      <h2>Skills</h2>
      <ul>
        <li><strong>Frontend:</strong> React, HTML, CSS, Tailwind</li>
        <li><strong>Backend:</strong> Python, Java, SQL</li>
        <li><strong>Tools & Frameworks:</strong> Flask, Bootstrap, FastAPIs</li>
      </ul>

      <h2>Education</h2>
      <p>B.S. in Computer Science, University of Texas at Dallas (Fall 2025-Present)</p>
      <p>Awards: Dean's List (Fall 2025)</p>
      <p>GPA: 4.0/4.0</p>

      <h2>Fun Facts</h2>
      <p>Some of my hobbies include watching cricket and soccer, playing video games, and travelling.</p>
      <p>I am passionate about Calculus in Mathematics and Electromagnetism & Modern Physics in Physics.</p>

      <div className="resume-button-container">
        <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="resume-button">
          View My Resume
        </a>
      </div>
    </div>
  );
}

export default About;