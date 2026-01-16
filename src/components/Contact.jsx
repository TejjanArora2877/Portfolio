import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section-alt">
      <h2>Contact</h2>

      <Reveal>
        <div className="contact-icons">
          <a href="https://www.instagram.com/tejjan_arora" target="_blank"><FaInstagram /></a>
          <a href="https://linkedin.com/in/tejjan-arora-97011428b" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/TejjanArora2877" target="_blank"><FaGithub /></a>
          <a href="mailto:aroratejjan7@gmail.com"><MdEmail /></a>
        </div>
      </Reveal>
    </section>
  );
}
