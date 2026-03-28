import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <h1>Hi, I'm Niket 👋</h1>
      <h2>Software Developer | AI Enthusiast</h2>
      <p>I build clean, scalable, and impactful applications.</p>

      {/* About Preview */}
      <section className="home-section-about">
        <h2>About Me</h2>
        <p>
          I'm an aspiring AI developer focused on building intelligent and scalable applications.
        </p>
        <Link to="/about" className="section-link">Read More →</Link>
      </section>
      

      {/* Featured Projects */}
      <section className="home-section-projects">
        <h2>Featured Projects</h2>
        <div className="project-preview">
          <div className="project-card">Moneyball Academics</div>
          <div className="project-card">Wizard Typing</div>
          <div className="project-card">Agora AI App</div>
        </div>
      </section>

      {/* Skills */}
      <section className="home-section-about">
        <h2>Tech Stack</h2>
        <div className="skills">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
      </section>

      {/* Contact */}
      <section className="home-section-projects">
        <h2>Let's Work Together</h2>
        <Link to="/contact" className="contact-button">Contact Me</Link>
      </section>
    </div>
  );
}

export default Home;


// import "./Home.css";
// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div className="home">
//       <h1>Hi, I'm Niket 👋</h1>
//       <h2>Software Developer | AI Enthusiast</h2>
//       <p>I build clean, scalable, and impactful applications.</p>

//       <div className="home-buttons">
//         <Link to="/about">Learn More</Link>
//         <Link to="/about" className="secondary">Contact Me</Link>
//       </div>
//     </div>
//   );
// }

// export default Home;