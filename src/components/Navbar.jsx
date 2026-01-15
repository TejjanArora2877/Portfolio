import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav>
      <h1>TEJJAN ARORA</h1>

      <div>
        <Link to="hero" smooth={true} duration={600} offset={-80}>
          Home
        </Link>

        <Link to="about" smooth={true} duration={600} offset={-80}>
          About
        </Link>

        <Link to="skills" smooth={true} duration={600} offset={-80}>
          Skills
        </Link>

        <Link to="projects" smooth={true} duration={600} offset={-80}>
          Projects
        </Link>

        <Link to="certifications" smooth={true} duration={600} offset={-80}>
          Certifications
        </Link>
        
        <Link to="internships" smooth={true} duration={600} offset={-80}>
          Internships
        </Link>

        <Link to="contact" smooth={true} duration={600} offset={-80}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
