import React, { useRef, useState } from "react";

import c1 from "../images/Certi1.jpeg";
import c2 from "../images/Certi2.jpeg";
import c3 from "../images/Certi3.jpeg";
import c4 from "../images/Certi4.jpeg";
import c5 from "../images/Certi5.jpeg";
import c6 from "../images/Certi6.jpeg";
import c7 from "../images/Certi7.jpeg";

export default function Certificates() {
  const sliderRef = useRef(null);
  const [modalImage, setModalImage] = useState(null);

  const certificateImages = [c1, c2, c3, c4, c5, c6, c7];

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  const openModal = (img) => {
    setModalImage(img);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section id="certifications" className="cert-section section-alt">
      <h2 className="cert-title">Certifications</h2>

      <div className="cert-container">
        <button className="cert-arrow left" onClick={scrollLeft}>‹</button>

        <div className="cert-slider" ref={sliderRef}>
          {certificateImages.map((img, index) => (
            <div className="cert-card" key={index} onClick={() => openModal(img)}>
              <img src={img} alt={`Certificate ${index + 1}`} />
            </div>
          ))}
        </div>

        <button className="cert-arrow right" onClick={scrollRight}>›</button>
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="cert-modal" onClick={closeModal}>
          <div className="cert-modal-content">
            <img src={modalImage} alt="Certificate Zoomed" />
          </div>
        </div>
      )}
    </section>
  );
}
