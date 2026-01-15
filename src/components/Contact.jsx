import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section-alt">
      <h2>Contact</h2>

      <Reveal>
        <div className="contact-icons">
          <a href="https://instagram.com/yourprofile" target="_blank"><FaInstagram /></a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/yourgithub" target="_blank"><FaGithub /></a>
          <a href="mailto:your@email"><MdEmail /></a>
        </div>
      </Reveal>
    </section>
  );
}
