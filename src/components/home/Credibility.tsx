'use client';
import { useEffect, useRef } from 'react';

const ITEMS = [
  { label: 'BITS Pilani',          sub: 'Founders & alumni',           accent: '#a78bfa', icon: '🎓' },
  { label: 'CS + AI/ML Honors',    sub: 'Advanced technical training', accent: '#c9943a', icon: '🏆' },
  { label: 'Custom Neural Models', sub: 'Built from scratch',          accent: '#2dd4bf', icon: '🧠' },
  { label: 'Long-term R&D Lab',    sub: 'Research-first approach',     accent: '#a78bfa', icon: '🔬' },
];

export default function Credibility() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-reveal').forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.1}s`;
          el.classList.add('gx-in');
        });
      });
    }, { threshold: 0.2 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ padding: '2.5rem 1.5rem', background: 'var(--bg2)', borderTop: '1px solid var(--b)', borderBottom: '1px solid var(--b)', position: 'relative', overflow: 'hidden' }}>
      <div className="gx-line-top" />
      <div aria-hidden style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 200, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(91,33,182,.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="gx-inner">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {ITEMS.map((it, i) => (
            <div
              key={i}
              className="gx-reveal gx-card"
              style={{ padding: '1.4rem 1.6rem', cursor: 'default', transition: 'border-color .3s, transform .3s', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={e => {
                const t = e.currentTarget as HTMLElement;
                t.style.borderColor = `${it.accent}40`;
                t.style.transform   = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                const t = e.currentTarget as HTMLElement;
                t.style.borderColor = '';
                t.style.transform   = '';
              }}
            >
              <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${it.accent}60, transparent)` }} />
              <div style={{ fontSize: '1.4rem', marginBottom: '0.75rem', lineHeight: 1 }}>{it.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--t1)', marginBottom: 4 }}>{it.label}</div>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--fm)', color: 'var(--t3)' }}>{it.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
