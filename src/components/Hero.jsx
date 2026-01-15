import { useState, useEffect } from "react";
import myImage from "../images/Tejjan-hero.png"; // Update filename

export default function Hero() {
  const roles = [
    "Aspiring Data Scientist",
    "AI/ML Enthusiast"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(120);

  useEffect(() => {
    const current = roles[roleIndex];
    let typingSpeed = speed;

    if (isDeleting) typingSpeed = 60;

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? current.substring(0, text.length - 1)
          : current.substring(0, text.length + 1)
      );

      // If complete typing
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      }

      // If deleting complete
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">

        <div className="hero-left">
          <img src={myImage} alt="Profile" className="hero-img" />
        </div>

        <div className="hero-right">
          <h1 className="hero-name">Tejjan Arora</h1>

          <p className="typewriter">
            {text}
            <span className="cursor">|</span>
          </p>

          <button className="resume-btn">Download Resume</button>
        </div>

      </div>
    </section>
  );
}