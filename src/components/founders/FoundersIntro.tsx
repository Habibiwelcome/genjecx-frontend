'use client';
import { useEffect, useState } from 'react';
import SubpageBg from '../SubpageBg';

export default function FoundersIntro() {
  const [on, setOn] = useState(false);
  useEffect(() => setOn(true), []);

  return (
    <section className="gx-subpage-bg" style={{ paddingTop: '9rem', paddingBottom: '2.5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', position: 'relative', overflow: 'hidden' }}>
      <SubpageBg variant={2} />
      <div aria-hidden style={{ position: 'absolute', top: '-20%', right: '-8%', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,148,58,.09) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-10%', left: '-6%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,33,182,.05) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className={on ? 'gx-u0' : ''} style={{ opacity: on ? undefined : 0 }}>
          <span className="gx-badge" style={{ marginBottom: '1rem', display: 'inline-flex', background: 'rgba(201,148,58,.1)', color: 'var(--gold)', borderColor: 'rgba(201,148,58,.25)' }}>
            The Team
          </span>
          <h1 style={{ marginBottom: '.75rem' }}>
            <span style={{ color: 'var(--t1)' }}>The </span>
            <span style={{ background: 'linear-gradient(135deg,#c9a96e,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Founders</span>
          </h1>
          <p style={{ fontSize: '1rem', maxWidth: 540, marginTop: '.75rem' }}>
            Two engineers who built GenJecX because they kept encountering the same gap: organisations buying AI products when what they needed was intelligence infrastructure built for their specific problem.
          </p>
        </div>
      </div>
    </section>
  );
}
