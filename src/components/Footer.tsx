'use client';
import Link from 'next/link';

const PRODUCT = [
  { label: 'Neural Studio',   href: '/NeuralStudio' },
  { label: 'Research',        href: '/Research&Models' },
  { label: 'Case Studies',    href: '/CaseStudies' },
];
const COMPANY = [
  { label: 'Process & Pricing', href: '/Procees&Pricing' },
  { label: 'Founders',          href: '/Founders' },
  { label: 'Architecture Audit',href: '/ArchitectureAudit' },
];

function FooterLink({ label, href, accent = '#a78bfa' }: { label: string; href: string; accent?: string }) {
  return (
    <Link href={href}
      style={{ fontSize: '0.875rem', color: 'var(--t3)', textDecoration: 'none', transition: 'color .2s, padding-left .2s', display: 'block' }}
      onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.color = accent; t.style.paddingLeft = '6px'; }}
      onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.color = 'var(--t3)'; t.style.paddingLeft = '0'; }}
    >{label}</Link>
  );
}

export default function Footer() {
  const yr = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--b)', position: 'relative', overflow: 'hidden' }}>
      <div className="gx-line-top" />

      {/* Background glow */}
      <div aria-hidden style={{ position: 'absolute', bottom: '-30%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(91,33,182,.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="gx-inner" style={{ padding: '4.5rem 1.5rem 0', position: 'relative' }}>
        <style>{`
          .ft-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.7fr; gap: 3rem; margin-bottom: 3rem; }
          @media (max-width: 900px) { .ft-grid { grid-template-columns: 1fr 1fr; gap: 2.5rem; } }
          @media (max-width: 560px) { .ft-grid { grid-template-columns: 1fr; gap: 2rem; } }
        `}</style>

        <div className="ft-grid">
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: '1.1rem' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #5b21b6, #c9943a)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 18px rgba(91,33,182,.3)' }}>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2.5L16.5 6.25v7.5L10 17.5 3.5 13.75V6.25L10 2.5Z" stroke="white" strokeWidth="1.4" fill="rgba(255,255,255,0.15)"/>
                  <circle cx="10" cy="10" r="2.5" fill="white" opacity="0.9"/>
                </svg>
              </div>
              <span style={{ fontFamily: 'var(--f)', fontWeight: 800, fontSize: '1rem', color: 'var(--t1)', letterSpacing: '-0.03em' }}>GenJecX</span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.8, maxWidth: 240, marginBottom: '1.5rem' }}>
              Building proprietary AI systems and custom neural models for organisations requiring intelligence beyond off-the-shelf solutions.
            </p>
            <a href="mailto:genjecx@gmail.com" className="gx-btn gx-btn-ghost" style={{ padding: '0.5rem 1rem', fontSize: '0.78rem', borderRadius: 999, textDecoration: 'none', display: 'inline-flex' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              genjecx@gmail.com
            </a>
          </div>

          {/* Product links */}
          <div>
            <div style={{ fontSize: '0.65rem', fontFamily: 'var(--fm)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--t3)', marginBottom: '1rem' }}>Product</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {PRODUCT.map(l => <FooterLink key={l.href} {...l} />)}
            </div>
          </div>

          {/* Company links */}
          <div>
            <div style={{ fontSize: '0.65rem', fontFamily: 'var(--fm)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--t3)', marginBottom: '1rem' }}>Company</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {COMPANY.map(l => <FooterLink key={l.href} {...l} accent="#c9943a" />)}
            </div>
          </div>

          {/* CTA card */}
          <div className="gx-card" style={{ padding: '1.5rem', animation: 'gxGlow 6s ease-in-out infinite', borderColor: 'rgba(91,33,182,.2)' }}>
            <div aria-hidden style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(91,33,182,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.9rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--t1)', marginBottom: '0.5rem' }}>Ready to build?</div>
            <p style={{ fontSize: '0.82rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>Skip the discovery call. Request a direct architecture audit — delivered in 72 hours.</p>
            <Link href="/ArchitectureAudit" className="gx-btn gx-btn-fill" style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem', padding: '0.65rem' }}>
              Get Architecture Audit →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--b)', padding: '1.5rem 0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--fm)', color: 'var(--t3)' }}>© {yr} GenJecX. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy', 'Terms', 'Contact'].map(l => (
              <a key={l} href="#" style={{ fontSize: '0.75rem', color: 'var(--t3)', textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--t2)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--t3)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
