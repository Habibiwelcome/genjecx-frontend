'use client';
import { useEffect, useState } from 'react';
import SubpageBg from '../SubpageBg';

const PILLARS = [
  { label: 'Knowledge Engineering', col: '#a78bfa' },
  { label: 'Neural Architecture Design', col: '#c9943a' },
  { label: 'Intelligence Infrastructure', col: '#2dd4bf' },
  { label: 'Memory Systems', col: '#a78bfa' },
];

export default function ResearchIntro() {
  const [on, setOn] = useState(false);
  useEffect(() => setOn(true), []);

  return (
    <section className="gx-subpage-bg" style={{ paddingTop: '9rem', paddingBottom: '2.5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', position: 'relative', overflow: 'hidden' }}>
      <SubpageBg variant={1} />
      <div aria-hidden style={{ position: 'absolute', top: '-20%', right: '-8%', width: 560, height: 560, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,.09) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,212,191,.04) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className={on ? 'gx-u0' : ''} style={{ opacity: on ? undefined : 0 }}>
          <span className="gx-badge" style={{ marginBottom: '1rem', display: 'inline-flex', background: 'rgba(124,58,237,.1)', color: 'var(--pu2)', borderColor: 'rgba(124,58,237,.25)' }}>
            Research Division
          </span>
          <h1 style={{ marginBottom: '.75rem' }}>
            <span style={{ color: 'var(--t1)' }}>Research & </span>
            <span style={{ background: 'linear-gradient(135deg,#a78bfa,#6db89e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Models</span>
          </h1>
          <p style={{ fontSize: '1rem', maxWidth: 560, marginTop: '.75rem', marginBottom: '2rem' }}>
            The theoretical work and architectural systems that power everything we build. This is not a blog — it is the documentation of how we think.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {PILLARS.map((p, i) => (
              <span key={i} style={{ fontSize: '.68rem', fontFamily: 'var(--fm)', padding: '4px 12px', borderRadius: 999, background: `${p.col}0f`, color: p.col, border: `1px solid ${p.col}25`, letterSpacing: '.04em' }}>
                {p.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
