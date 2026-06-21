'use client';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { useAnalytics } from '@/lib/api';

const ThreeBg = dynamic(() => import('./ThreeBg'), { ssr: false });

const WORDS = ['Custom Intelligence', 'Neural Architecture', 'Proprietary Models', 'Deep Research'];

function WordFlip() {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      setFade(false);
      timer = setTimeout(() => {
        setIdx(i => (i + 1) % WORDS.length);
        setFade(true);
      }, 420);
    }, 3400);
    return () => { clearInterval(id); clearTimeout(timer); };
  }, []);

  return (
    <span style={{ display: 'inline-grid', gridTemplateColumns: '1fr', verticalAlign: 'middle', paddingBottom: '0.12em', overflow: 'visible' }}>
      {WORDS.map((w, i) => (
        <span key={i} style={{
          gridArea: '1 / 1',
          background: 'linear-gradient(135deg, #a78bfa 0%, #c9943a 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          transition: 'opacity .42s ease',
          opacity: i === idx ? (fade ? 1 : 0) : 0,
          pointerEvents: i === idx ? 'auto' : 'none',
          userSelect: i === idx ? 'auto' : 'none',
          whiteSpace: 'nowrap',
          paddingBottom: '0.08em',
          display: 'block',
        }}>
          {w}
        </span>
      ))}
    </span>
  );
}

function StatPill({ val, label, accent }: { val: string; label: string; accent: string }) {
  return (
    <div style={{
      flex: '1 1 100px',
      padding: '1rem 1.25rem',
      textAlign: 'center',
      background: 'rgba(12,12,26,0.82)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: `1px solid ${accent}22`,
      borderRadius: 12,
      position: 'relative',
      overflow: 'hidden',
      transition: 'border-color .3s, transform .3s',
    }}
      onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = `${accent}55`; t.style.transform = 'translateY(-3px)'; }}
      onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = `${accent}22`; t.style.transform = ''; }}
    >
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 0%, ${accent}18 0%, transparent 70%)`, pointerEvents: 'none' }} />
      <div style={{ fontFamily: 'var(--f)', fontWeight: 800, fontSize: '1.55rem', letterSpacing: '-0.05em', color: accent, lineHeight: 1, marginBottom: 4, position: 'relative' }}>{val}</div>
      <div style={{ fontSize: '0.67rem', fontFamily: 'var(--fm)', color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '0.08em', position: 'relative' }}>{label}</div>
    </div>
  );
}

/* Original floating badge (glass pill style) */
function FloatingBadge({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="gx-float-panel gx-hide-mob" style={{
      position: 'absolute',
      padding: '0.65rem 1rem',
      fontSize: '0.78rem',
      fontFamily: 'var(--fm)',
      color: 'var(--t2)',
      whiteSpace: 'nowrap',
      animation: 'gxFloat 8s ease-in-out infinite',
      pointerEvents: 'none',
      zIndex: 3,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* Richer 3D card widget — shown only on desktop */
function FloatingCard({ children, style, accentColor = '#a78bfa' }: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  accentColor?: string;
}) {
  return (
    <div className="gx-hide-mob" style={{
      position: 'absolute',
      background: 'rgba(6,6,14,0.9)',
      backdropFilter: 'blur(26px)',
      WebkitBackdropFilter: 'blur(26px)',
      border: `1px solid ${accentColor}20`,
      borderRadius: 16,
      boxShadow: `0 24px 60px rgba(0,0,0,.65), 0 0 30px ${accentColor}0a, inset 0 1px 0 rgba(255,255,255,.06)`,
      pointerEvents: 'none',
      zIndex: 3,
      overflow: 'hidden',
      ...style,
    }}>
      {/* Top accent shimmer */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${accentColor}60, transparent)` }} />
      {children}
    </div>
  );
}

export default function HeroSection() {
  const { trackCtaClick } = useAnalytics();
  const [on, setOn]       = useState(false);
  const contentRef        = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOn(true);
    const el = contentRef.current;
    if (!el) return;
    const fn = () => {
      const y = window.scrollY;
      el.style.transform = `translateY(${y * 0.16}px)`;
      el.style.opacity   = String(Math.max(0, 1 - y / 680));
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 80, background: 'var(--bg)' }}>

      {/* WebGL 3D background */}
      <ThreeBg />

      {/* 3D Perspective grid */}
      <div className="gx-pg-wrap" style={{ zIndex: 1 }}>
        <div className="gx-pg" />
      </div>

      {/* Dot grid overlay */}
      <div className="gx-dots" aria-hidden style={{ zIndex: 1, opacity: .55 }} />

      {/* Layered ambient glows */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-25%', right: '-10%', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,33,182,.18) 0%, rgba(91,33,182,.05) 40%, transparent 65%)', animation: 'gxFloat 16s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '-30%', left: '-12%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,148,58,.09) 0%, transparent 65%)', animation: 'gxFloat 22s ease-in-out infinite reverse' }} />
        <div style={{ position: 'absolute', top: '25%', right: '18%', width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,212,191,.08) 0%, transparent 65%)', animation: 'gxFloat 19s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '40%', left: '30%', width: 500, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(91,33,182,.07) 0%, transparent 70%)', animation: 'gxPulse 12s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(3,3,8,.97) 22%, rgba(3,3,8,.65) 55%, rgba(3,3,8,.12) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 220, background: 'linear-gradient(to top, var(--bg), transparent)' }} />
      </div>

      {/* Orbital rings + ripples */}
      {on && (
        <div aria-hidden style={{ position: 'absolute', top: '50%', right: '9%', transform: 'translate(0,-50%)', zIndex: 1, pointerEvents: 'none', opacity: 0.55 }}>
          <div style={{ width: 480, height: 480, borderRadius: '50%', border: '1px solid rgba(91,33,182,.09)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
          <div style={{ width: 320, height: 320, borderRadius: '50%', border: '1px solid rgba(167,139,250,.07)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
          <div style={{ width: 170, height: 170, borderRadius: '50%', border: '1px dashed rgba(45,212,191,.07)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
          {/* Orbiting dot on outer ring */}
          <div style={{ width: 480, height: 480, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', animation: 'gxSpin 18s linear infinite' }}>
            <div style={{ position: 'absolute', top: 0, left: '50%', marginLeft: -3, width: 6, height: 6, borderRadius: '50%', background: '#a78bfa', boxShadow: '0 0 10px rgba(167,139,250,.8)', marginTop: -3 }} />
          </div>
          {/* Orbiting dot on middle ring */}
          <div style={{ width: 320, height: 320, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', animation: 'gxSpin 12s linear infinite reverse' }}>
            <div style={{ position: 'absolute', top: 0, left: '50%', marginLeft: -2.5, width: 5, height: 5, borderRadius: '50%', background: '#2dd4bf', boxShadow: '0 0 8px rgba(45,212,191,.8)', marginTop: -2.5 }} />
          </div>
          {/* Ripple rings */}
          <div className="gx-ripple-ring" style={{ width: 70, height: 70, top: '50%', left: '50%', marginTop: -35, marginLeft: -35 }} />
          <div className="gx-ripple-ring" style={{ width: 70, height: 70, top: '50%', left: '50%', marginTop: -35, marginLeft: -35 }} />
          <div className="gx-ripple-ring" style={{ width: 70, height: 70, top: '50%', left: '50%', marginTop: -35, marginLeft: -35 }} />
        </div>
      )}

      {/* ── ORIGINAL 4 FLOATING BADGES (user confirmed they liked these) ── */}
      {on && (
        <>
          <FloatingBadge style={{ top: '22%', right: '8%', animationDelay: '0s' }}>
            <span style={{ color: 'var(--pu3)' }}>▸</span> model.train(proprietary_data)
          </FloatingBadge>
          <FloatingBadge style={{ top: '42%', right: '14%', animationDelay: '3s', fontSize: '0.73rem' }}>
            <span style={{ color: 'var(--sage2)' }}>✓</span> accuracy: <span style={{ color: 'var(--gold2)' }}>98.3%</span>
          </FloatingBadge>
          <FloatingBadge style={{ top: '62%', right: '6%', animationDelay: '6s' }}>
            <span style={{ color: 'var(--gold2)' }}>◆</span> latency: <span style={{ color: 'var(--pu3)' }}>12ms</span>
          </FloatingBadge>
          <FloatingBadge style={{ top: '28%', right: '26%', animationDelay: '9s', fontSize: '0.7rem' }}>
            <span style={{ color: 'var(--sage2)' }}>⬡</span> params: <span style={{ color: 'var(--t1)' }}>847M</span>
          </FloatingBadge>
        </>
      )}

      {/* ── NEW 3D FLOATING WIDGETS ── */}
      {on && (
        <>
          {/* Widget A: Live training progress card */}
          <FloatingCard
            accentColor="#a78bfa"
            style={{ top: '14%', right: '19%', width: 210, padding: '0.9rem 1rem', animation: 'gxFloat 11s ease-in-out infinite', animationDelay: '1.5s' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: '0.65rem' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#a78bfa', boxShadow: '0 0 7px #a78bfa', animation: 'gxPulse 2s ease-in-out infinite', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--fm)', fontSize: '0.57rem', color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Live Training</span>
              <span style={{ marginLeft: 'auto', fontFamily: 'var(--fm)', fontSize: '0.56rem', color: '#a78bfa', fontWeight: 600 }}>47 / 50</span>
            </div>
            {/* Progress bar */}
            <div style={{ height: 3, background: 'rgba(255,255,255,.06)', borderRadius: 2, marginBottom: '0.7rem', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '94%', background: 'linear-gradient(90deg, #5b21b6, #a78bfa)', borderRadius: 2, boxShadow: '0 0 8px rgba(167,139,250,.6)', animation: 'gxBarGrow 1.8s cubic-bezier(.16,1,.3,1) both' }} />
            </div>
            {/* Mini metrics */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[{ k: 'loss', v: '0.021', c: '#a78bfa' }, { k: 'val_acc', v: '98.3%', c: '#2dd4bf' }].map(({ k, v, c }) => (
                <div key={k} style={{ flex: 1, background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.05)', borderRadius: 7, padding: '0.35rem 0.5rem' }}>
                  <div style={{ fontFamily: 'var(--fm)', fontSize: '0.5rem', color: 'var(--t3)', marginBottom: 2 }}>{k}</div>
                  <div style={{ fontFamily: 'var(--fm)', fontSize: '0.72rem', fontWeight: 700, color: c }}>{v}</div>
                </div>
              ))}
            </div>
          </FloatingCard>

          {/* Widget B: Deployment status notification */}
          <FloatingCard
            accentColor="#2dd4bf"
            style={{ top: '72%', right: '20%', padding: '0.75rem 1rem', animation: 'gxFloat 13s ease-in-out infinite reverse', animationDelay: '4s' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(45,212,191,.12)', border: '1px solid rgba(45,212,191,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--fm)', fontSize: '0.56rem', color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Production Deploy</div>
                <div style={{ fontFamily: 'var(--fm)', fontSize: '0.73rem', fontWeight: 700, color: '#2dd4bf', marginTop: 2 }}>nova_v3 — live</div>
              </div>
              <div style={{ marginLeft: '0.75rem', width: 6, height: 6, borderRadius: '50%', background: '#2dd4bf', boxShadow: '0 0 8px #2dd4bf', animation: 'gxPulse 2s ease-in-out infinite', flexShrink: 0 }} />
            </div>
          </FloatingCard>

          {/* Widget C: Architecture type badge */}
          <FloatingCard
            accentColor="#c9943a"
            style={{ top: '52%', right: '29%', padding: '0.6rem 0.9rem', animation: 'gxFloat 9s ease-in-out infinite', animationDelay: '7s', fontSize: '0.7rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'var(--fm)' }}>
              <span style={{ color: '#c9943a', fontSize: '0.85rem' }}>◈</span>
              <span style={{ color: 'var(--t3)', fontSize: '0.56rem' }}>arch:</span>
              <span style={{ color: '#c9943a', fontWeight: 700, fontSize: '0.66rem' }}>RNN-CNN hybrid</span>
            </div>
          </FloatingCard>
        </>
      )}

      {/* Main content */}
      <div ref={contentRef} style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '5rem 1.5rem', width: '100%' }}>

        <style>{`
          .hero-stats { display: flex; gap: 8px; flex-wrap: wrap; }
          @media (max-width: 480px) { .hero-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; } }
          .hero-ctas  { display: flex; flex-wrap: wrap; gap: 12px; }
        `}</style>

        <div style={{ maxWidth: 700 }}>
          {on && (
            <>
              {/* Eyebrow */}
              <div className="gx-u0" style={{ marginBottom: '1.5rem' }}>
                <span className="gx-badge">
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--pu3)', display: 'inline-block', animation: 'gxPulse 2s ease-in-out infinite' }} />
                  AI Research &amp; Engineering Lab
                </span>
              </div>

              {/* Headline */}
              <h1 className="gx-u1" style={{ marginBottom: '1.1rem', lineHeight: 1.1 }}>
                We build<br />
                <WordFlip /><br />
                <span style={{ color: 'var(--t3)', fontWeight: 500, fontSize: 'clamp(1.2rem, 2.4vw, 1.75rem)', WebkitTextFillColor: 'var(--t3)', display: 'inline-block', marginTop: '0.2rem', letterSpacing: '-0.01em' }}>
                  not API wrappers.
                </span>
              </h1>

              {/* Sub-copy */}
              <p className="gx-u2" style={{ fontSize: '1.02rem', maxWidth: 520, marginBottom: '2.25rem', lineHeight: 1.78 }}>
                GenJecX designs, trains, and deploys proprietary neural systems grounded in deep research — for organisations that need intelligence engineered from the ground up.
              </p>

              {/* CTAs */}
              <div className="gx-u3 hero-ctas" style={{ marginBottom: '3.5rem' }}>
                <Link href="/NeuralStudio" className="gx-btn gx-btn-fill" onClick={() => trackCtaClick('hero_neural')}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Explore Neural Studio
                </Link>
                <Link href="/ArchitectureAudit" className="gx-btn gx-btn-ghost" onClick={() => trackCtaClick('hero_audit')}>
                  Architecture Audit
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

              {/* Stats */}
              <div className="gx-u4 hero-stats">
                <StatPill val="30+"  label="Models deployed"    accent="#a78bfa" />
                <StatPill val="4.2×" label="Accuracy gain"      accent="#c9943a" />
                <StatPill val="12+"  label="Research papers"    accent="#2dd4bf" />
                <StatPill val="50+"  label="Enterprise clients" accent="#a78bfa" />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Scroll cue */}
      {on && (
        <div className="gx-u5" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.25, zIndex: 2, pointerEvents: 'none' }}>
          <span style={{ fontSize: '0.58rem', fontFamily: 'var(--fm)', color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>scroll</span>
          <div style={{ width: 1, height: 44, background: 'linear-gradient(to bottom, var(--pu3), transparent)', animation: 'gxPulse 2s ease-in-out infinite' }} />
        </div>
      )}
    </section>
  );
}
