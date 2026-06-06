import React, { useEffect, useRef } from 'react';

const features = [
  { icon: '🎯', title: 'Goal-Oriented Mentorship', text: 'Work with industry veterans who have walked your path and know exactly what it takes to break through.' },
  { icon: '🌐', title: 'Global Network Access', text: 'Connect with professionals across 50+ industries and 30+ countries. Your next opportunity is one conversation away.' },
  { icon: '⚡', title: 'Accelerated Learning', text: 'Curated learning paths designed to compress years of experience into focused, actionable growth sprints.' },
  { icon: '🔒', title: 'Verified Community', text: 'Every member is vetted. No noise, no bots — just real professionals committed to growth and giving back.' },
  { icon: '📊', title: 'Progress Tracking', text: 'Visual dashboards that show your career trajectory, skill gaps, and milestones in real time.' },
  { icon: '💡', title: 'Skill Matching Engine', text: 'Our AI matches you with the right mentor and opportunities based on your unique career DNA.' },
];

export default function AboutHero2() {
  const refs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    refs.current.forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" style={{ background: 'var(--deep)' }}>
      <div ref={el => refs.current[0] = el} className="fade-up">
        <span className="section-tag">What We Do</span>
        <h2 className="section-title">EVERYTHING YOU NEED TO<br /><span className="accent">LEVEL UP</span></h2>
        <div className="yellow-line"></div>
        <p className="section-desc">PathBridge is not a single tool — it is a full career ecosystem built for professionals who are serious about growth.</p>
      </div>
      <div className="cards-grid">
        {features.map((f, i) => (
          <div className="card fade-up" key={i} ref={el => refs.current[i + 1] = el} style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="card-icon">{f.icon}</div>
            <div className="card-title">{f.title}</div>
            <p className="card-text">{f.text}</p>
          </div>
        ))}
      </div>
      <div className="stats-row" style={{ marginTop: '4rem' }}>
        {[['50K+', 'Active Members'], ['120+', 'Mentor Experts'], ['92%', 'Success Rate'], ['4.9★', 'User Rating']].map(([n, l], i) => (
          <div className="stat-item fade-up" key={i} ref={el => refs.current[i + 7] = el} style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="stat-number">{n}</div>
            <div className="stat-label">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}