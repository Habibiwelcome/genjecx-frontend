'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const NAV = [
  { label: 'Neural Studio',   href: '/NeuralStudio' },
  { label: 'Research',        href: '/Research&Models' },
  { label: 'Case Studies',    href: '/CaseStudies' },
  { label: 'Process',         href: '/Procees&Pricing' },
  { label: 'Founders',        href: '/Founders' },
];

export default function Navigation() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname              = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <style>{`
        .nav-desktop { display: none; }
        @media (min-width: 768px) { .nav-desktop { display: flex; align-items: center; gap: 2px; } }
        .nav-cta     { display: none; }
        @media (min-width: 768px) { .nav-cta { display: inline-flex; } }
        .nav-burger  { display: flex; }
        @media (min-width: 768px) { .nav-burger { display: none; } }
        .nav-drawer  {
          max-height: 0; overflow: hidden;
          transition: max-height .4s cubic-bezier(.16,1,.3,1), opacity .35s;
          opacity: 0; pointer-events: none;
        }
        .nav-drawer.open {
          max-height: 400px; opacity: 1; pointer-events: all;
        }
        .nav-link-item {
          padding: 5px 13px; border-radius: 999px; font-size: 0.855rem;
          font-weight: 500; color: var(--t2); text-decoration: none;
          transition: color .2s, background .2s; white-space: nowrap;
        }
        .nav-link-item:hover, .nav-link-item.active {
          color: var(--t1); background: rgba(255,255,255,.05);
        }
        .nav-link-item.active { color: var(--pu3); }
        .burger-line {
          display: block; height: 1.5px; border-radius: 1px;
          background: var(--t2); transition: transform .3s, opacity .3s, width .3s;
        }
        .gx-nav-indicator {
          position: absolute; bottom: -2px; left: 50%; transform: translateX(-50%);
          width: 4px; height: 4px; border-radius: 50%; background: var(--pu3);
        }
      `}</style>

      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 300,
        transition: 'background .4s, backdrop-filter .4s, border-color .4s',
        background: scrolled ? 'rgba(3,3,8,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(28px) saturate(150%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(28px) saturate(150%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 9,
              background: 'linear-gradient(135deg, #5b21b6, #c9943a)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, boxShadow: '0 0 24px rgba(91,33,182,.35)',
              position: 'relative',
            }}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M10 2.5L16.5 6.25v7.5L10 17.5 3.5 13.75V6.25L10 2.5Z" stroke="white" strokeWidth="1.4" fill="rgba(255,255,255,0.15)"/>
                <circle cx="10" cy="10" r="2.5" fill="white" opacity="0.9"/>
                <circle cx="10" cy="5"  r="1" fill="white" opacity="0.4"/>
                <circle cx="10" cy="15" r="1" fill="white" opacity="0.4"/>
                <circle cx="5"  cy="7.5" r="1" fill="white" opacity="0.4"/>
                <circle cx="15" cy="7.5" r="1" fill="white" opacity="0.4"/>
              </svg>
            </div>
            <span style={{ fontFamily: 'var(--f)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--t1)', letterSpacing: '-0.03em' }}>
              GenJecX
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="nav-desktop">
            {NAV.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link-item${pathname === l.href ? ' active' : ''}`}
                style={{ position: 'relative' }}
              >
                {l.label}
                {pathname === l.href && <span className="gx-nav-indicator" />}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link href="/ArchitectureAudit" className="gx-btn gx-btn-fill nav-cta" style={{ padding: '0.6rem 1.3rem', fontSize: '0.82rem' }}>
            Get Audit
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* Burger */}
          <button
            className="nav-burger"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, gap: 5, flexDirection: 'column', borderRadius: 6 }}
          >
            <span className="burger-line" style={{ width: 22, transform: open ? 'rotate(45deg) translate(4.5px,4.5px)' : 'none' }} />
            <span className="burger-line" style={{ width: 16, opacity: open ? 0 : 1, transform: open ? 'scaleX(0)' : 'none' }} />
            <span className="burger-line" style={{ width: 22, transform: open ? 'rotate(-45deg) translate(4.5px,-4.5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`nav-drawer${open ? ' open' : ''}`}
          style={{ background: 'rgba(3,3,8,.96)', borderBottom: open ? '1px solid rgba(255,255,255,.06)' : 'none' }}
        >
          <div style={{ padding: '0.5rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {NAV.map(l => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  padding: '0.7rem 1rem', borderRadius: 8, fontSize: '0.9rem',
                  fontWeight: 500, color: pathname === l.href ? 'var(--pu3)' : 'var(--t2)',
                  textDecoration: 'none', transition: 'all .2s',
                  background: pathname === l.href ? 'var(--pu4)' : 'transparent',
                  borderLeft: pathname === l.href ? '2px solid var(--pu2)' : '2px solid transparent',
                  display: 'block',
                }}
              >
                {l.label}
              </Link>
            ))}
            <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,.06)' }}>
              <Link
                href="/ArchitectureAudit"
                className="gx-btn gx-btn-fill"
                style={{ width: '100%', justifyContent: 'center', padding: '0.78rem' }}
              >
                Get Architecture Audit
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
