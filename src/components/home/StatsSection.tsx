'use client';
import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 30,  suffix: '+',  label: 'Custom models deployed',         desc: 'Across healthcare, finance, and tech', accent: '#a78bfa' },
  { value: 4.2, suffix: '×',  label: 'Average accuracy improvement',   desc: 'vs. off-the-shelf solutions',         accent: '#c9943a', decimals: 1 },
  { value: 12,  suffix: '+',  label: 'Research papers published',       desc: 'Peer-reviewed AI/ML research',       accent: '#2dd4bf' },
  { value: 50,  suffix: '+',  label: 'Enterprise clients served',       desc: 'From startups to Fortune 500',       accent: '#a78bfa' },
];

function Counter({ target, suffix, accent, decimals = 0 }: { target: number; suffix: string; accent: string; decimals?: number }) {
  const [val, setVal]   = useState(0);
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setActive(true); io.disconnect(); }
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const start    = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setVal(parseFloat((ease * target).toFixed(decimals)));
      if (t < 1) requestAnimationFrame(step);
      else setVal(target);
    };
    requestAnimationFrame(step);
  }, [active, target, decimals]);

  return <div ref={ref} style={{ fontFamily: 'var(--f)', fontWeight: 800, fontSize: 'clamp(2.8rem,4.5vw,4.5rem)', letterSpacing: '-0.05em', color: accent, lineHeight: 1 }}>{val.toFixed(decimals)}{suffix}</div>;
}

export default function StatsSection() {
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
    }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const tilt = (e: React.MouseEvent<HTMLDivElement>, accent: string) => {
    const el = e.currentTarget as HTMLElement, r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - .5) * 18;
    const y = ((e.clientY - r.top)  / r.height - .5) * -18;
    el.style.transition      = 'box-shadow .25s, border-color .2s';
    el.style.transitionDelay = '0s';
    el.style.transform   = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) translateY(-12px) translateZ(26px)`;
    el.style.boxShadow   = `0 44px 90px rgba(0,0,0,.72), 0 0 50px ${accent}30, 0 0 18px ${accent}18`;
    el.style.borderColor = `${accent}55`;
  };
  const untilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.transition      = 'transform .55s cubic-bezier(.16,1,.3,1), box-shadow .4s, border-color .35s';
    el.style.transitionDelay = '0s';
    el.style.transform   = 'none';
    el.style.boxShadow   = '';
    el.style.borderColor = '';
  };

  return (
    <section ref={ref} className="gx-sec" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Background grid lines */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(var(--b) 1px, transparent 1px), linear-gradient(90deg, var(--b) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 80%)',
      }} />
      <div aria-hidden style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(91,33,182,.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="gx-inner">
        <div className="gx-reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="gx-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>By the numbers</span>
          <h2>Measurable <span className="gx-gt">Results</span></h2>
          <p style={{ maxWidth: 480, margin: '0.9rem auto 0', fontSize: '0.95rem' }}>
            Every engagement is benchmarked. Here's what research-grade AI engineering delivers.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
          {STATS.map((s, i) => (
            <div
              key={i}
              className="gx-reveal gx-card gx-corner"
              style={{ padding: '2rem', position: 'relative', overflow: 'hidden', cursor: 'default', willChange: 'transform' }}
              onMouseMove={e => tilt(e, s.accent)}
              onMouseLeave={untilt}
            >
              {/* Top accent line */}
              <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${s.accent}70, transparent)`, boxShadow: `0 0 12px ${s.accent}40` }} />
              {/* Number watermark */}
              <div aria-hidden style={{ position: 'absolute', bottom: -8, right: 12, fontFamily: 'var(--f)', fontWeight: 800, fontSize: '6rem', opacity: .03, color: s.accent, lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>{i + 1}</div>
              {/* Background corner glow */}
              <div aria-hidden style={{ position: 'absolute', bottom: 0, right: 0, width: 120, height: 120, borderRadius: '50%', background: `radial-gradient(circle, ${s.accent}0a 0%, transparent 70%)`, pointerEvents: 'none' }} />
              <Counter target={s.value} suffix={s.suffix} accent={s.accent} decimals={s.decimals} />
              <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--t1)', marginTop: '0.75rem', marginBottom: '0.35rem' }}>{s.label}</div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--fm)', color: 'var(--t3)' }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
