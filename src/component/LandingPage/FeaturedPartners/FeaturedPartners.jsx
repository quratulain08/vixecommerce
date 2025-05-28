import React, { useEffect } from 'react';
import './FeaturedPartners.css';
import NPA from "../../../assets/NPA.png";
import Estancia from "../../../assets/Estancia.png";
import cello from "../../../assets/cello.png";
import stonelight from "../../../assets/stonelight.png";
import goodman from "../../../assets/goodman.png"
import brandfetch from "../../../assets/brandfetch.png"
import realtime from "../../../assets/realtime.jpg"
import TV from "../../../assets/TVvillage.png"
import digitaltec from "../../../assets/digitaltec.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const partners = [
  { src: NPA, alt: "Buhler" },
  { src: Estancia, alt: "KPMG" },
  { src: cello, alt: "LDC" },
  { src: stonelight, alt: "MassMutual" },
  { src: goodman, alt: "128 Technologies" },
  { src: realtime, alt: "real time" },
  { src: TV, alt: "TV village" },
  { src: digitaltec, alt: "digitaltec" },
  
  { src: brandfetch, alt: "cyberleap" },

];

export default function FeaturedPartners() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <section className="featured-partners-section">
      <h2>Significant partners</h2>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div
            className="partner-card"
            key={index}
            data-aos="fade-left"
            data-aos-delay={index * 200} 
          >
            <img src={partner.src} alt={partner.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
