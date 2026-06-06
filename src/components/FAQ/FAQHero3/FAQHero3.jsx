import React, { useEffect, useRef } from 'react';
import { quickLinks, supportStats } from './data';

export default function FAQHero3() {
  const refs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    refs.current.forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section className="section" style={{ background: 'var(--deep)' }}>
        <div ref={el => refs.current[0] = el} className="fade-up">
          <span className="section-tag">Still Need Help?</span>
          <h2 className="section-title">HELPFUL<br /><span className="accent">RESOURCES</span></h2>
          <div className="yellow-line"></div>
          <p className="section-desc">Cannot find what you are looking for? Browse our resource library or reach out directly.</p>
        </div>
        <div className="cards-grid">
          {quickLinks.map((l, i) => (
            <div className="card fade-up" key={i} ref={el => refs.current[i + 1] = el} style={{ transitionDelay: `${i * 80}ms`, cursor: 'pointer' }}>
              <div className="card-icon">{l.icon}</div>
              <div className="card-title">{l.title}</div>
              <p className="card-text">{l.desc}</p>
              <p style={{ color: 'var(--yellow)', fontSize: '0.85rem', marginTop: '1rem', fontWeight: 600 }}>Read more →</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: 'var(--black)' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }} ref={el => refs.current[5] = el} className="fade-up">
          <span className="section-tag">Direct Help</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>DID NOT FIND YOUR<br /><span className="accent">ANSWER?</span></h2>
          <div className="yellow-line" style={{ margin: '1.2rem auto 1.8rem' }}></div>
          <p className="section-desc" style={{ margin: '0 auto 2rem', textAlign: 'center' }}>
            Our support team is made up of real PathBridge members who understand your journey. Expect a thoughtful, human reply within 4 hours.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary">✉️ Email Support</button>
            <button className="btn-secondary">💬 Live Chat</button>
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', marginTop: '3rem', flexWrap: 'wrap' }}>
            {supportStats.map(({ number, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2.4rem', color: 'var(--yellow)' }}>{number}</div>
                <div style={{ color: 'var(--gray)', fontSize: '0.85rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="contact-strip">
        <div>
          <h2>STOP WAITING. START GROWING.</h2>
          <p>PathBridge is free to start. Your future career cannot wait.</p>
        </div>
        <button className="btn-dark">Join Free Today →</button>
      </div>
    </>
  );
}