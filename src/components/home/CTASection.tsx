'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-reveal,.gx-left,.gx-right').forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.12}s`;
          el.classList.add('gx-in');
        });
      });
    }, { threshold: 0.15 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="gx-sec" style={{ background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      <div className="gx-line-top" />

      {/* Glow orbs */}
      <div aria-hidden style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 500, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(91,33,182,.09) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', top: '20%', right: '10%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,148,58,.06) 0%, transparent 70%)', pointerEvents: 'none', animation: 'gxFloat 14s ease-in-out infinite' }} />

      <div className="gx-inner">
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <div className="gx-reveal" style={{ marginBottom: '1.25rem' }}>
            <span className="gx-badge">Skip the discovery call</span>
          </div>
          <h2 className="gx-reveal d1" style={{ marginBottom: '1.1rem', lineHeight: 1.06 }}>
            Ready to build <span className="gx-gt">real intelligence</span>?
          </h2>
          <p className="gx-reveal d2" style={{ fontSize: '1.02rem', maxWidth: 520, margin: '0 auto 2.5rem', lineHeight: 1.78 }}>
            Don't waste time in generic discovery calls. Request a direct architecture audit and get a technical report within 72 hours.
          </p>
          <div className="gx-reveal d3" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/ArchitectureAudit" className="gx-btn gx-btn-fill" style={{ fontSize: '0.92rem', padding: '0.875rem 2rem' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Request Architecture Audit
            </Link>
            <Link href="/NeuralStudio" className="gx-btn gx-btn-ghost" style={{ fontSize: '0.92rem', padding: '0.875rem 2rem' }}>
              Explore Neural Studio
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="gx-reveal d4" style={{ marginTop: '3rem', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              ['72h', 'Report delivery'],
              ['100%', 'IP ownership'],
              ['No lock-in', 'contracts'],
            ].map(([val, label]) => (
              <div key={val} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--f)', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.04em', color: 'var(--t1)' }}>{val}</div>
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--fm)', color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
