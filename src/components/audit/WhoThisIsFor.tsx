'use client';
import { useEffect, useRef } from 'react';
const AUD = [
  { a:'Funded Startups',           r:'You have built something. You want expert feedback before scaling. You need confidence in your architecture.', c:'var(--pu2)' },
  { a:'Scaling Teams',             r:'Your system is growing. You want to identify bottlenecks and risks before they become crises.', c:'var(--gold)' },
  { a:'CTO-Led Organisations',     r:'You are responsible for technical risk. You want independent assessment of your AI systems.', c:'var(--sage)' },
  { a:'Enterprises Adopting AI',   r:'You are deploying AI at scale. You need validation that your architecture is sound and secure.', c:'var(--pu)' },
];
export default function WhoThisIsFor() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-reveal,.gx-left').forEach((el,i) => { el.style.transitionDelay=`${i*.1}s`; el.classList.add('gx-in'); }); });
    }, { threshold:.08 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  },[]);
  return (
    <section ref={ref} className="gx-sec">
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <div className="gx-reveal" style={{ maxWidth:560, marginBottom:'3rem' }}>
          <span className="gx-badge" style={{ marginBottom:'1rem', display:'inline-flex' }}>Ideal Clients</span>
          <h2>Who This <span className="gx-gt2">Is For</span></h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:'1rem', marginBottom:'1.5rem' }}>
          {AUD.map((it,i) => (
            <div key={i} className="gx-left gx-card" style={{ padding:'1.5rem', cursor:'default', borderLeft:`3px solid ${it.c}`, transition:'transform .3s,box-shadow .3s,border-color .3s' }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 40px rgba(0,0,0,.45)'; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.transform=''; el.style.boxShadow=''; }}
            >
              <h3 style={{ color:it.c, marginBottom:'.5rem', fontSize:'1rem' }}>{it.a}</h3>
              <p style={{ fontSize:'.875rem' }}>{it.r}</p>
            </div>
          ))}
        </div>
        <div className="gx-reveal gx-card" style={{ padding:'1.25rem 1.5rem', borderColor:'rgba(109,184,158,.25)' }}>
          <p style={{ fontSize:'.875rem' }}><span style={{ color:'var(--t1)', fontWeight:600 }}>Not For:</span> If you do not yet have an AI system, this audit is premature. Contact us when you have systems to review.</p>
        </div>
      </div>
    </section>
  );
}
