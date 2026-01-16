import Reveal from "./Reveal";

export default function Projects() {
  const projectData = [
    {
      title: "Tic-Tac-Toe AI (Python - Minimax)",
      desc: "Built a competitive Tic-Tac-Toe AI using the Minimax algorithm without GUI."
    },
    {
      title: "Tkinter GUI Pack",
      desc: "Includes three Python applications: a To-Do List, Calculator, and Rock-Paper-Scissors game using Tkinter GUI."
    },
    {
      title: "CNN Model - Brain Tumor Detection",
      desc: "Trained a CNN model for brain tumor classification from MRI scans using supervised deep learning."
    },
    {
      title: "CNN Model - Cattle Breed Identification",
      desc: "Developed a CNN model to classify cattle breeds from images using custom dataset and training pipeline."
    },
    {
      title: "Hotel Management System (Java + MySQL)",
      desc: "Developed a hotel management system supporting bookings, customer records and room management using Java and MySQL."
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="floating-particles"></div>

      <div className="projects-left">
        <h2>Projects</h2>
        <a href="https://github.com/TejjanArora2877"
           target="_blank"
           className="github-main-btn">
          View GitHub →
        </a>
      </div>

      <div className="projects-right">
        {projectData.map((p, i) => (
          <Reveal key={i}>
            <div className="project-card">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
