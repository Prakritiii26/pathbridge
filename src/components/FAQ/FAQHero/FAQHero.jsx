import React, { useEffect, useRef } from 'react';

export default function FAQHero() {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.classList.add('visible');
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="hero-section faq-hero-bg">
      <div className="section-bg-text">FAQ</div>
      <div className="hero-content fade-up" ref={ref}>
        <div className="hero-badge">💬 We Have Got Answers</div>
        <h1 className="hero-title">
          GOT<br /><span className="accent">QUESTIONS?</span><br />WE HAVE GOT YOU.
        </h1>
        <p className="hero-subtitle">
          Everything you need to know about PathBridge — how it works, what it costs, and how it will actually change your career. No fluff, just clarity.
        </p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => document.getElementById('faq-main')?.scrollIntoView({ behavior: 'smooth' })}>
            Browse Questions ↓
          </button>
          <button className="btn-secondary">Contact Support</button>
        </div>
      </div>
    </section>
  );
}