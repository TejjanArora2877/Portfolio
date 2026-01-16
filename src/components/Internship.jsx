import React from "react";
import Reveal from "./Reveal";

const Internships = () => {
  const internships = [
    {
      title: "HPC–QC Research Internship",
      duration: "Ongoing",
      type: "Remote Internship",
      description:
        "Working remotely on High Performance Computing and Quantum Computing fundamentals, including parallel processing, quantum logic, and computational efficiency.",
    },
    {
      title: "Zero Trust Cloud Security Internship – Zscaler",
      duration: "July – September 2024",
      type: "Virtual Internship",
      description:
        "Completed a 10-week virtual internship supported by Zscaler and AICTE. Gained exposure to Zero Trust architecture, cloud security workflows, and network-level access control models.",
    },
    {
      title: "Python Development Internship – Codsoft",
      duration: "June – July 2025",
      type: "Virtual Internship",
      description:
        "Completed multiple Python projects including task automation, GUI programming, and scripting fundamentals with strong performance remarks.",
    },
  ];

  return (
    <section id="internships" className="internship-section section-alt">
      <h2 className="section-title">Internships & Training</h2>

      <div className="internship-grid">
        {internships.map((item, index) => (
          <Reveal key={index}>
            <div className="internship-card">
              <h3 className="internship-title">{item.title}</h3>
              <p className="internship-type">{item.type}</p>
              <p className="internship-duration">{item.duration}</p>
              <p className="internship-desc">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Internships;
