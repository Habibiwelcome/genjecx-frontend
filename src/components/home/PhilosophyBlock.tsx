'use client';
import { useEffect, useRef } from 'react';

const PRINCIPLES = [
  { text: 'We do not sell generic AI.',                          n: '01', c: '#a78bfa' },
  { text: 'We build intelligence where the problem demands it.', n: '02', c: '#c9943a' },
  { text: 'Architecture comes before tooling.',                  n: '03', c: '#2dd4bf' },
  { text: 'Research precedes scale.',                            n: '04', c: '#a78bfa' },
];

const CODE_LINES = [
  { key: 'approach',  val: '"research-first"',   kc: '#a78bfa', vc: '#2dd4bf' },
  { key: 'output',    val: '"from-scratch"',      kc: '#c9943a', vc: '#2dd4bf' },
  { key: 'target',    val: '"real-problems"',     kc: '#a78bfa', vc: '#2dd4bf' },
  { key: 'speed',     val: '"right > fast"',      kc: '#c9943a', vc: '#2dd4bf' },
];

export default function PhilosophyBlock() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-left,.gx-right,.gx-reveal').forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.1}s`;
          el.classList.add('gx-in');
        });
      });
    }, { threshold: 0.06 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="gx-sec" style={{ background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', right: '-12%', top: '-25%', width: 650, height: 650, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,33,182,.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', left: '-8%', bottom: '-20%', width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,148,58,.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="gx-inner">
        <style>{`
          .phil-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
          @media (max-width: 840px) { .phil-grid { grid-template-columns: 1fr; gap: 3rem; } }
        `}</style>

        <div className="phil-grid">
          {/* Left column */}
          <div className="gx-left">
            <span className="gx-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Our Philosophy</span>
            <h2 style={{ marginBottom: '0.9rem' }}>How We <span className="gx-gt2">Think</span></h2>
            <p style={{ marginBottom: '2rem', fontSize: '0.97rem' }}>
              These principles filter for serious clients solving real problems — and firmly repel misaligned work.
            </p>

            {/* Code block — 3D terminal (subtle float only, no tilt to avoid glitch) */}
            <div className="gx-corner" style={{
              background: 'rgba(4,4,12,0.95)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(167,139,250,.18)',
              borderRadius: 'var(--r2)',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0,0,0,.55), 0 0 30px rgba(91,33,182,.08)',
              animation: 'gxFloat 9s ease-in-out infinite',
            }}>
              {/* Terminal title bar */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '0.65rem 1rem',
                borderBottom: '1px solid rgba(255,255,255,.06)',
                background: 'rgba(255,255,255,.02)',
              }}>
                <div style={{ display: 'flex', gap: 5 }}>
                  {['#ff5f57','#febc2e','#28c840'].map(c => (
                    <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: .8 }} />
                  ))}
                </div>
                <span style={{ fontFamily: 'var(--fm)', fontSize: '0.6rem', color: 'var(--t3)', flex: 1, textAlign: 'center', letterSpacing: '0.06em' }}>genjecx.config.ts</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#a78bfa', boxShadow: '0 0 5px #a78bfa', animation: 'gxPulse 2.5s ease-in-out infinite' }} />
                </div>
              </div>
              {/* Code body */}
              <div className="gx-code" style={{ borderRadius: 0, border: 'none', background: 'transparent', animation: 'gxGlow 6s ease-in-out infinite' }}>
                <span style={{ color: 'var(--t3)' }}>{'// genjecx.config.ts'}</span><br/>
                <span style={{ color: '#a78bfa' }}>export const </span>
                <span style={{ color: 'var(--t1)' }}>config </span>
                <span style={{ color: 'var(--t2)' }}>= {'{'}</span><br/>
                {CODE_LINES.map(({ key, val, kc, vc }, i) => (
                  <span key={i}>
                    &nbsp;&nbsp;<span style={{ color: kc }}>{key}</span>
                    <span style={{ color: 'var(--t3)' }}>: </span>
                    <span style={{ color: vc }}>{val}</span>
                    {i < CODE_LINES.length - 1 ? ',' : ''}
                    <br/>
                  </span>
                ))}
                <span style={{ color: 'var(--t2)' }}>{'}'}</span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {PRINCIPLES.map((p, i) => (
              <div
                key={i}
                className="gx-right gx-card"
                style={{ padding: '1.25rem 1.4rem', display: 'flex', alignItems: 'center', gap: '1.1rem', cursor: 'default', transition: 'border-color .3s, transform .3s' }}
                onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = `${p.c}40`; t.style.transform = 'translateX(6px)'; }}
                onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = ''; t.style.transform = ''; }}
              >
                <div style={{
                  width: 40, height: 40, flexShrink: 0, borderRadius: 10,
                  border: `1px solid ${p.c}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--fm)', fontWeight: 600, fontSize: '0.72rem',
                  color: p.c, background: `${p.c}08`,
                }}>{p.n}</div>
                <p style={{ margin: 0, fontWeight: 600, fontSize: '0.9rem', color: 'var(--t1)', lineHeight: 1.4 }}>{p.text}</p>
                <div style={{ marginLeft: 'auto', width: 3, height: 28, borderRadius: 2, background: `linear-gradient(to bottom, ${p.c}, transparent)`, flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
