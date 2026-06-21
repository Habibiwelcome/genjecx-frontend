'use client';
import { useEffect, useRef } from 'react';
const OWNS = ['Custom models and neural architectures','Training data organisation and labelling','System architecture and design documentation','All inference code and deployment specifications'];
export default function IPOwnershipStatement() {
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
    <section ref={ref} className="gx-sec" style={{ background:'var(--bg2)' }}>
      <div style={{ maxWidth:800, margin:'0 auto' }}>
        <div className="gx-reveal" style={{ marginBottom:'2.5rem' }}>
          <span className="gx-badge" style={{ marginBottom:'1rem', display:'inline-flex' }}>IP Policy</span>
          <h2>Intellectual <span className="gx-gt">Property</span></h2>
        </div>
        <div className="gx-card" style={{ padding:'2.25rem', borderColor:'rgba(124,58,237,.25)', position:'relative', overflow:'hidden', marginBottom:'1rem' }}>
          <div aria-hidden style={{ position:'absolute', top:0, left:0, right:0, height:2, background:'linear-gradient(90deg,var(--pu),var(--gold),transparent)' }}/>
          <h3 style={{ marginBottom:'.75rem' }}>Clear Ownership. No Ambiguity.</h3>
          <p style={{ marginBottom:'1.5rem' }}>Every custom system we build is your property. All models, training methodologies, and architectures developed specifically for your problem are owned entirely by you.</p>
          <div style={{ marginBottom:'1.5rem' }}>
            <div style={{ fontSize:'.7rem', fontFamily:'var(--fm)', color:'var(--t3)', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:'.75rem' }}>What You Own</div>
            <ul style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {OWNS.map((o,i) => (
                <li key={i} className="gx-left" style={{ display:'flex', gap:10, fontSize:'.875rem' }}>
                  <span style={{ color:'var(--sage)', fontWeight:700, flexShrink:0 }}>✓</span>
                  <span style={{ color:'var(--t1)' }}>{o}</span>
                </li>
              ))}
            </ul>
          </div>
          <p style={{ fontSize:'.875rem' }}>We document everything. You receive complete model weights, training procedures, validation results, and architectural decisions. Portability and independence are guaranteed.</p>
        </div>
      </div>
    </section>
  );
}
