import { useState, useEffect } from "react";
import myImage from "../images/Tejjan-hero.png";

export default function Hero() {

  const roles = [
    "Aspiring Data Scientist",
    "AI/ML Enthusiast"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const speed = 120; // fixed

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {

    const current = roles[roleIndex];
    let typingSpeed = isDeleting ? 60 : speed;

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? current.substring(0, text.length - 1)
          : current.substring(0, text.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);

  }, [text, isDeleting, roleIndex]);
  

  return (
    <section id="hero" className="hero">
      <div className="floating-particles"></div>
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

          <button className="resume-btn">
            <a href="https://linkedin.com/in/tejjan-arora-97011428b" target="_blank" rel="noreferrer">
              Visit LinkedIn Profile
            </a>
          </button>
        </div>

      </div>
    </section>
  );
}
