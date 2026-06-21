'use client';
import { useEffect, useRef } from 'react';

const CATEGORIES = [
  {
    label: 'Model Frameworks',
    accent: '#a78bfa',
    items: ['PyTorch', 'TensorFlow', 'JAX', 'Hugging Face', 'ONNX'],
  },
  {
    label: 'Infrastructure',
    accent: '#c9943a',
    items: ['CUDA', 'Kubernetes', 'Docker', 'Ray', 'Triton'],
  },
  {
    label: 'MLOps & Data',
    accent: '#2dd4bf',
    items: ['MLflow', 'Weights & Biases', 'FastAPI', 'PostgreSQL', 'Redis'],
  },
];

export default function TechStrip() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-reveal').forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.08}s`;
          el.classList.add('gx-in');
        });
      });
    }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ padding: '4rem 1.5rem', background: 'var(--bg2)', borderTop: '1px solid var(--b)', borderBottom: '1px solid var(--b)', position: 'relative', overflow: 'hidden' }}>
      <div className="gx-line-top" />
      <div aria-hidden style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 200, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(91,33,182,.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="gx-inner">
        <div className="gx-reveal" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ fontSize: '0.62rem', fontFamily: 'var(--fm)', color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Built on battle-tested foundations</span>
        </div>

        <style>{`
          .ts-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
          @media(max-width: 700px) { .ts-grid { grid-template-columns: 1fr; gap: 1rem; } }
        `}</style>

        <div className="ts-grid">
          {CATEGORIES.map((cat, ci) => (
            <div key={ci} className="gx-reveal gx-card" style={{ padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
              <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${cat.accent}70, transparent)` }} />

              <div style={{ fontSize: '0.6rem', fontFamily: 'var(--fm)', fontWeight: 600, color: cat.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                {cat.label}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.items.map(item => (
                  <span
                    key={item}
                    style={{
                      display: 'inline-flex', alignItems: 'center',
                      padding: '0.35rem 0.75rem',
                      background: `${cat.accent}0a`,
                      border: `1px solid ${cat.accent}22`,
                      borderRadius: 999,
                      fontSize: '0.78rem',
                      fontWeight: 500,
                      color: 'var(--t2)',
                      fontFamily: 'var(--f)',
                      transition: 'border-color .2s, color .2s, background .2s',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      const t = e.currentTarget as HTMLElement;
                      t.style.borderColor = `${cat.accent}55`;
                      t.style.color = cat.accent;
                      t.style.background = `${cat.accent}14`;
                    }}
                    onMouseLeave={e => {
                      const t = e.currentTarget as HTMLElement;
                      t.style.borderColor = `${cat.accent}22`;
                      t.style.color = 'var(--t2)';
                      t.style.background = `${cat.accent}0a`;
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
