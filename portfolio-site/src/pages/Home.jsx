import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Hi, I'm Niket 👋</h1>
      <h2>Software Developer | AI Enthusiast</h2>
      <p>I build clean, scalable, and impactful applications.</p>

      <div className="home-buttons">
        <Link to="/about">Learn More</Link>
        <Link to="/about" className="secondary">Contact Me</Link>
      </div>
    </div>
  );
}

export default Home;