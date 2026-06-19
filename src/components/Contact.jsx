import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact-glow contact-glow--left"></div>
      <div className="contact-glow contact-glow--right"></div>

      <div className="contact-header" ref={headingRef}>
        <span className="contact-label">GET IN TOUCH</span>

        <h2 className="contact-heading">
          Let's <span>Connect</span>
        </h2>

        <p className="contact-subtitle">
          Open to internships, entry-level software roles, and exciting
          projects. Feel free to reach out.
        </p>
      </div>

      <div className="contact-grid">
        <div
          className="contact-card"
          ref={(el) => (cardsRef.current[0] = el)}
        >
          <h3>Email</h3>
          <p>prathyusha290105@gmail.com</p>
        </div>

        <div
          className="contact-card"
          ref={(el) => (cardsRef.current[1] = el)}
        >
          <h3>LinkedIn</h3>
          <p>linkedin.com/in/prathyusha-morthala</p>
        </div>

        <div
          className="contact-card"
          ref={(el) => (cardsRef.current[2] = el)}
        >
          <h3>GitHub</h3>
          <p>github.com/Prathyusha-290105</p>
        </div>

        <div
          className="contact-card"
          ref={(el) => (cardsRef.current[3] = el)}
        >
          <h3>LeetCode</h3>
          <p>leetcode.com/u/prathyushamorthala</p>
        </div>

        <div
          className="contact-card resume-card"
          ref={(el) => (cardsRef.current[4] = el)}
        >
          <h3>Resume</h3>

          <a
            href="/resume/Prathyusha_Morthala_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;