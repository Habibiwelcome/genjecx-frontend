'use client';
import { useEffect, useRef } from 'react';

const CAPS = [
  {
    n: '01',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,.08)',
    border: 'rgba(167,139,250,.2)',
    title: 'Custom Model Development',
    desc: 'Neural networks from first principles — not adapted models, not LLM wrappers. Proprietary systems trained on your data, solving your exact problem with research-grade rigour.',
    tags: ['Transformer Architectures', 'Custom Datasets', 'Domain Training'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="12" r="3"/>
        <circle cx="4"  cy="12" r="1.5" fill="currentColor" opacity=".5"/>
        <circle cx="20" cy="12" r="1.5" fill="currentColor" opacity=".5"/>
        <circle cx="12" cy="4"  r="1.5" fill="currentColor" opacity=".5"/>
        <circle cx="12" cy="20" r="1.5" fill="currentColor" opacity=".5"/>
        <path d="M5.5 12H9M15 12h3.5M12 5.5V9M12 15v3.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    n: '02',
    color: '#c9943a',
    bg: 'rgba(201,148,58,.08)',
    border: 'rgba(201,148,58,.2)',
    title: 'AI System Architecture',
    desc: 'Enterprise-grade systems designed for scale, reliability, and control. Every component architected for long-term performance — no vendor lock-in, no black boxes.',
    tags: ['Distributed Inference', 'MLOps Pipelines', 'Fault-tolerant Design'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="2"  y="2"  width="8" height="8" rx="2"/>
        <rect x="14" y="2"  width="8" height="8" rx="2"/>
        <rect x="2"  y="14" width="8" height="8" rx="2"/>
        <rect x="14" y="14" width="8" height="8" rx="2"/>
        <path d="M10 6h4M6 10v4M18 10v4M10 18h4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    n: '03',
    color: '#2dd4bf',
    bg: 'rgba(45,212,191,.08)',
    border: 'rgba(45,212,191,.2)',
    title: 'Research-Driven Automation',
    desc: 'Intelligence that emerges from deep research into your domain. We understand the problem before writing a line of code — the only path to lasting competitive advantage.',
    tags: ['Domain Analysis', 'First-Principles Design', 'Longitudinal R&D'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M2 20l8-8 4 4 8-10" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="4" r="2" fill="currentColor" opacity=".4"/>
      </svg>
    ),
  },
];

export default function WhatWeDo() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-depth').forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.15}s`;
          el.classList.add('gx-in');
        });
        e.target.querySelectorAll<HTMLElement>('.gx-reveal').forEach(el => el.classList.add('gx-in'));
      });
    }, { threshold: 0.06 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const tilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - .5) * 20;
    const y = ((e.clientY - r.top)  / r.height - .5) * -20;
    const accent = (el as any)._accent || '#a78bfa';
    el.style.transition      = 'box-shadow .25s, border-color .2s';
    el.style.transitionDelay = '0s';
    el.style.transform   = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) translateY(-14px) translateZ(32px)`;
    el.style.boxShadow   = `0 50px 100px rgba(0,0,0,.75), 0 0 60px ${accent}28, 0 0 20px ${accent}15`;
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
    <section ref={ref} className="gx-sec gx-hex-bg gx-top-glow" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Depth ambient glows */}
      <div aria-hidden style={{ position: 'absolute', top: '-20%', right: '-8%', width: 560, height: 560, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,33,182,.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-15%', left: '-5%', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,212,191,.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="gx-inner">

        {/* Header */}
        <div className="gx-reveal" style={{ maxWidth: 560, marginBottom: '4.5rem' }}>
          <span className="gx-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Core Capabilities</span>
          <h2 style={{ marginBottom: '0.9rem' }}>What We <span className="gx-gt">Build</span></h2>
          <p style={{ fontSize: '0.97rem' }}>Three competencies that separate us from every AI agency you've already dismissed.</p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.25rem' }}>
          {CAPS.map((c, i) => (
            <div
              key={i}
              className="gx-depth gx-card gx-corner"
              style={{ padding: '2rem', cursor: 'default', position: 'relative', overflow: 'hidden', willChange: 'transform' }}
              onMouseMove={tilt}
              onMouseLeave={untilt}
              ref={(el) => { if (el) (el as any)._accent = c.color; }}
            >
              {/* Left accent bar */}
              <div aria-hidden style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: 3, borderRadius: '0 3px 3px 0', background: `linear-gradient(to bottom, ${c.color}, transparent)` }} />

              {/* Number watermark */}
              <div aria-hidden style={{ position: 'absolute', top: -4, right: 16, fontFamily: 'var(--f)', fontWeight: 800, fontSize: '5.5rem', opacity: 0.035, color: c.color, lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>{c.n}</div>

              {/* Top accent line */}
              <div aria-hidden style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 1, background: `linear-gradient(90deg, transparent, ${c.color}40, transparent)` }} />

              {/* Icon */}
              <div style={{
                width: 48, height: 48, borderRadius: 12, marginBottom: '1.4rem',
                background: c.bg, color: c.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `1px solid ${c.border}`,
                transition: 'transform .3s',
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)')}
                onMouseLeave={e => (e.currentTarget.style.transform = '')}
              >
                {c.icon}
              </div>

              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.05rem' }}>{c.title}</h3>
              <p style={{ fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: 1.75 }}>{c.desc}</p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {c.tags.map(t => (
                  <span key={t} style={{
                    fontSize: '0.67rem', padding: '3px 10px', borderRadius: 999,
                    background: c.bg, color: c.color,
                    border: `1px solid ${c.border}`,
                    fontFamily: 'var(--fm)', letterSpacing: '0.03em',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
