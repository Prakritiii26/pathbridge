import React, { useEffect, useRef } from 'react';

const team = [
  { initials: 'AR', name: 'Aarav Rajan', role: 'Co-Founder & CEO', bio: 'Ex-Google. Built 3 startups. Passionate about democratizing access to career success for every Indian professional.' },
  { initials: 'PK', name: 'Priya Kapoor', role: 'Co-Founder & CTO', bio: 'IIT Bombay alumna. Led engineering at Zerodha. Obsessed with building systems that scale and matter.' },
  { initials: 'VS', name: 'Vikram Sharma', role: 'Head of Community', bio: 'Former McKinsey. Built communities of 100K+ professionals. Believes your network is your net worth.' },
  { initials: 'MA', name: 'Meera Anand', role: 'Head of Mentorship', bio: '10 years in L&D. Designed learning programs for Fortune 500 companies across Asia-Pacific.' },
];

const values = [
  { title: 'Radical Transparency', desc: 'We show you exactly how we work, what we charge, and what results to expect.' },
  { title: 'Results First', desc: 'Every feature we build must create measurable career impact. No fluff.' },
  { title: 'Community Over Competition', desc: 'We believe helping each other is the fastest path to individual success.' },
  { title: 'Constant Growth', desc: 'We learn, iterate, and improve every single day — just like we ask our members to.' },
];

export default function AboutHero3() {
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
      <section className="section" style={{ background: 'var(--black)' }}>
        <div ref={el => refs.current[0] = el} className="fade-up">
          <span className="section-tag">The People</span>
          <h2 className="section-title">MEET THE<br /><span className="accent">TEAM</span></h2>
          <div className="yellow-line"></div>
          <p className="section-desc">We are builders, mentors, and professionals who have been where you are — and built this bridge so you do not have to walk alone.</p>
        </div>
        <div className="team-grid">
          {team.map((m, i) => (
            <div className="team-card fade-up" key={i} ref={el => refs.current[i + 1] = el} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="team-avatar">{m.initials}</div>
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
              <p className="team-bio">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: 'var(--deep)', position: 'relative', overflow: 'hidden' }}>
        <div className="section-bg-text">VALUES</div>
        <div ref={el => refs.current[5] = el} className="fade-up">
          <span className="section-tag">Our Foundation</span>
          <h2 className="section-title">WHAT WE<br /><span className="accent">STAND FOR</span></h2>
          <div className="yellow-line"></div>
        </div>
        <div className="values-grid">
          {values.map((v, i) => (
            <div className="value-item fade-up" key={i} ref={el => refs.current[i + 6] = el} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="value-dot"></div>
              <div className="value-text">
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="contact-strip">
        <div>
          <h2>READY TO CROSS YOUR BRIDGE?</h2>
          <p>Join 50,000+ professionals already on the path to their dream career.</p>
        </div>
        <button className="btn-dark">Join PathBridge Free →</button>
      </div>
    </>
  );
}