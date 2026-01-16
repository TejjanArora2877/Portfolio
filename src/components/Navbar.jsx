import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <h1 className="nav-logo">TEJJAN ARORA</h1>

      {/* Hamburger Icon */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Desktop Links */}
      <div className="nav-links">
        <Link to="hero" smooth duration={600} offset={-80}>Home</Link>
        <Link to="about" smooth duration={600} offset={-80}>About</Link>
        <Link to="skills" smooth duration={600} offset={-80}>Skills</Link>
        <Link to="projects" smooth duration={600} offset={-80}>Projects</Link>
        <Link to="certifications" smooth duration={600} offset={-80}>Certifications</Link>
        <Link to="internships" smooth duration={600} offset={-80}>Internships</Link>
        <Link to="contact" smooth duration={600} offset={-80}>Contact</Link>
      </div>

      {/* Mobile Links */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link onClick={() => setMenuOpen(false)} to="hero" smooth duration={600} offset={-80}>Home</Link>
        <Link onClick={() => setMenuOpen(false)} to="about" smooth duration={600} offset={-80}>About</Link>
        <Link onClick={() => setMenuOpen(false)} to="skills" smooth duration={600} offset={-80}>Skills</Link>
        <Link onClick={() => setMenuOpen(false)} to="projects" smooth duration={600} offset={-80}>Projects</Link>
        <Link onClick={() => setMenuOpen(false)} to="certifications" smooth duration={600} offset={-80}>Certifications</Link>
        <Link onClick={() => setMenuOpen(false)} to="internships" smooth duration={600} offset={-80}>Internships</Link>
        <Link onClick={() => setMenuOpen(false)} to="contact" smooth duration={600} offset={-80}>Contact</Link>
      </div>
    </nav>
  );
}
