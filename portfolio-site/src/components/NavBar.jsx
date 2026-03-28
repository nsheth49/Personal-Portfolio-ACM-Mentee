import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link to="/" className="logo-link">Niket Sheth</Link>
      </h1>

      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-item">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-item">About</Link>
        </li>
        <li>
          <Link to="/experience" className="nav-item">Experience</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-item">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;