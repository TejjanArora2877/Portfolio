import { useEffect } from "react";
import Reveal from "./Reveal";
import VanillaTilt from "vanilla-tilt";

import { FaPython, FaJava, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiC, SiTensorflow, SiNumpy, SiPandas, SiMysql } from "react-icons/si";

export default function Skills() {

  useEffect(() => {
    const cards = document.querySelectorAll(".skill-card");
    VanillaTilt.init(cards, {
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.15,
    });
  }, []);

  return (
    <section id="skills" className="section-alt skills-section">
      <h2>Skills</h2>

      {/* Flowline Animation */}
      <div className="flowline"></div>

      <div className="skills-grid">

        {/* Programming Languages */}
        <Reveal>
          <div className="skill-card">
            <h3>Programming Languages</h3>
            <ul className="skill-list">
              <li><FaPython /> Python</li>
              <li><FaJava /> Java</li>
              <li><SiC /> C</li>
            </ul>
          </div>
        </Reveal>

        {/* Data Science & ML */}
        <Reveal>
          <div className="skill-card">
            <h3>Data Science & ML</h3>
            <ul className="skill-list">
              <li><SiTensorflow /> TensorFlow</li>
              <li><SiNumpy /> NumPy</li>
              <li><SiPandas /> Pandas</li>
            </ul>
          </div>
        </Reveal>

        {/* Software Development */}
        <Reveal>
          <div className="skill-card">
            <h3>Software Development</h3>
            <ul className="skill-list">
              <li><FaPython /> Tkinter GUI</li>
              <li><FaJava /> Java Systems</li>
              <li><FaPython /> Algorithms</li>
            </ul>
          </div>
        </Reveal>

        {/* Tools & Technologies */}
        <Reveal>
          <div className="skill-card">
            <h3>Tools & Technologies</h3>
            <ul className="skill-list">
              <li><SiMysql /> MySQL</li>
              <li><FaGitAlt /> Git</li>
              <li><FaDatabase /> DB Concepts</li>
            </ul>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
