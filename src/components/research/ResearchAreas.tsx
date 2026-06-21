'use client';
import { useEffect, useRef } from 'react';

const AREAS = [
  {
    title: 'Knowledge Engineering',
    desc: 'Structuring domain knowledge into learnable representations. How information is organized determines what intelligence is possible. We invest deeply in knowledge architecture before any model is designed.',
    c: 'var(--pu2)',
    tag: 'Foundation',
  },
  {
    title: 'Neural Architecture Design',
    desc: 'Custom network topologies for specific problem classes. Not every problem needs a transformer. We design architectures that fit the problem — RNN-CNN hybrids, attention mechanisms, custom decoders, and novel fusion strategies.',
    c: 'var(--gold)',
    tag: 'Core Research',
  },
  {
    title: 'Intelligence Infrastructure',
    desc: 'Scalable systems for deploying and operating AI at enterprise scale. Inference servers, vector databases, retrieval pipelines, and monitoring architectures — designed for long-term reliability, not just launch.',
    c: 'var(--sage)',
    tag: 'Systems',
  },
  {
    title: 'Memory Systems',
    desc: 'Long-term context, retrieval augmentation, and persistent intelligence. How systems remember, retrieve, and reason over accumulated knowledge across sessions, conversations, and time.',
    c: 'var(--pu)',
    tag: 'Applied Research',
  },
  {
    title: 'Evaluation Frameworks',
    desc: 'Measuring what matters: alignment, reliability, and real-world performance. We build domain-specific evaluation systems that go beyond benchmark accuracy to test genuine intelligence quality under realistic conditions.',
    c: 'var(--pu2)',
    tag: 'Quality Science',
  },
  {
    title: 'Domain Intelligence',
    desc: 'Building models that understand the deep nuances of specific domains. Healthcare, legal, financial, personality, and creative domains each demand fundamentally different approaches to architecture and knowledge encoding.',
    c: 'var(--gold)',
    tag: 'Specialisation',
  },
];

export default function ResearchAreas() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-depth').forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.09}s`;
          el.classList.add('gx-in');
        });
      });
    }, { threshold: 0.07 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const tilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLElement, r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - .5) * 18;
    const y = ((e.clientY - r.top) / r.height - .5) * -18;
    const accent = (el as any)._c || '#a78bfa';
    el.style.transition      = 'box-shadow .25s, border-color .2s';
    el.style.transitionDelay = '0s';
    el.style.transform   = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) translateY(-12px) translateZ(26px)`;
    el.style.boxShadow   = `0 44px 88px rgba(0,0,0,.7), 0 0 48px ${accent}28`;
    el.style.borderColor = `${accent}50`;
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
    <section ref={ref} className="gx-sec gx-top-glow" style={{ background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: '-20%', right: '-8%', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,33,182,.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="gx-reveal" style={{ maxWidth: 560, marginBottom: '3rem' }}>
          <span className="gx-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Research Focus</span>
          <h2 style={{ marginBottom: '.75rem' }}>Research <span className="gx-gt">Areas</span></h2>
          <p>Six domains where we invest the most research time. These are the foundations of every system we build.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.1rem' }}>
          {AREAS.map((a, i) => (
            <div
              key={i}
              className="gx-depth gx-card"
              style={{ padding: '1.875rem', cursor: 'default', position: 'relative', overflow: 'hidden', willChange: 'transform' }}
              ref={(el) => { if (el) (el as any)._c = a.c; }}
              onMouseMove={tilt}
              onMouseLeave={untilt}
            >
              <div aria-hidden style={{ position: 'absolute', left: 0, top: '15%', bottom: '15%', width: 3, borderRadius: '0 2px 2px 0', background: a.c, opacity: .7 }} />
              <div aria-hidden style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 1, background: `linear-gradient(90deg, transparent, ${a.c}35, transparent)` }} />

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.85rem' }}>
                <h3 style={{ color: a.c, fontSize: '1rem', margin: 0 }}>{a.title}</h3>
                <span style={{ fontSize: '.58rem', fontFamily: 'var(--fm)', padding: '2px 8px', borderRadius: 999, background: `${a.c}10`, color: a.c, border: `1px solid ${a.c}20`, letterSpacing: '.06em', flexShrink: 0, marginLeft: 8 }}>{a.tag}</span>
              </div>
              <p style={{ fontSize: '.875rem', margin: 0 }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
