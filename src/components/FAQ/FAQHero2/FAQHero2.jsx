import React, { useState, useEffect, useRef } from 'react';
import { categories, faqs } from './data';

export default function FAQHero2() {
  const [active, setActive] = useState(null);
  const [cat, setCat] = useState('All');
  const refs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    refs.current.forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const filtered = cat === 'All' ? faqs : faqs.filter(f => f.cat === cat);

  return (
    <section className="section" id="faq-main" style={{ background: 'var(--black)' }}>
      <div ref={el => refs.current[0] = el} className="fade-up">
        <span className="section-tag">Frequently Asked</span>
        <h2 className="section-title">EVERYTHING YOU<br /><span className="accent">NEED TO KNOW</span></h2>
        <div className="yellow-line"></div>
        <p className="section-desc">Browse by category or scroll through all questions below.</p>
      </div>
      <div className="faq-cats fade-up" ref={el => refs.current[1] = el}>
        {categories.map(c => (
          <button key={c} className={`faq-cat-btn ${cat === c ? 'active' : ''}`} onClick={() => { setCat(c); setActive(null); }}>{c}</button>
        ))}
      </div>
      <div className="faq-list">
        {filtered.map((f, i) => (
          <div key={i} className={`faq-item fade-up ${active === i ? 'open' : ''}`} ref={el => refs.current[i + 2] = el} style={{ transitionDelay: `${i * 50}ms` }}>
            <button className="faq-question" onClick={() => setActive(active === i ? null : i)}>
              <span>{f.q}</span>
              <span className="faq-chevron">▾</span>
            </button>
            <div className={`faq-answer ${active === i ? 'open' : ''}`}>
              <p className="faq-answer-inner">{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}