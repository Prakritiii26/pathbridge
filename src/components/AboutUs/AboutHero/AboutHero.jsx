import React, { useEffect, useRef } from 'react';

export default function AboutHero() {
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
    <section className="hero-section" style={{ background: 'linear-gradient(135deg, #000 60%, #0d0d0d 100%)' }}>
      <div className="section-bg-text">PATHBRIDGE</div>
      <div className="hero-content fade-up" ref={ref}>
        <div className="hero-badge">🚀 India's Career Acceleration Platform</div>
        <h1 className="hero-title">
          BUILD YOUR<br /><span className="accent">BRIDGE</span><br />TO SUCCESS
        </h1>
        <p className="hero-subtitle">
          PathBridge connects ambitious professionals with the right mentors, resources, and communities to fast-track their career growth — not just referrals, but real transformation.
        </p>
        <div className="hero-btns">
          <button className="btn-primary">Start Your Journey</button>
          <button className="btn-secondary">Learn More ↓</button>
        </div>
      </div>
    </section>
  );
}