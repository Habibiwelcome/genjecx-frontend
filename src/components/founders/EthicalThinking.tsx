'use client';
import { useEffect, useRef } from 'react';
const STANCES = [
  { domain:'Mental Health & Medical Systems', stance:"We build these systems with exceptional care. Domain expertise is mandatory. Human validation is non-negotiable. We do not cut corners on interpretability.", c:'var(--sage)' },
  { domain:'Data Privacy & Ownership',        stance:"Your data is yours. We do not use it for other purposes. We do not resell insights. Clear, binding agreements on data handling.", c:'var(--pu2)' },
  { domain:'Transparency & Documentation',    stance:"We document everything. You own the models, the training data, the architecture. Portability is guaranteed. No vendor lock-in.", c:'var(--gold)' },
  { domain:'Impact Alignment',               stance:"We choose work that matters. We do not build systems for harm. If the intended use conflicts with our values, we will decline.", c:'var(--pu)' },
];
export default function EthicalThinking() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-left').forEach((el,i) => { el.style.transitionDelay=`${i*.1}s`; el.classList.add('gx-in'); }); });
    }, { threshold:.08 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  },[]);
  return (
    <section ref={ref} className="gx-sec">
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <div className="gx-reveal" style={{ maxWidth:540, marginBottom:'3rem' }}>
          <span className="gx-badge" style={{ marginBottom:'1rem', display:'inline-flex' }}>Ethics</span>
          <h2 style={{ marginBottom:'.75rem' }}>Ethical & Long-Term <span className="gx-gt2">Thinking</span></h2>
          <p>We are guided by long-term values, not short-term incentives. This shapes how we work.</p>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:'1rem', marginBottom:'1.5rem' }}>
          {STANCES.map((it,i) => (
            <div key={i} className="gx-left gx-card" style={{ padding:'1.5rem', display:'flex', gap:'1.25rem', alignItems:'flex-start', cursor:'default', transition:'border-color .3s,transform .3s,box-shadow .3s' }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor=`${it.c}40`; el.style.transform='translateX(6px)'; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor='var(--b)'; el.style.transform=''; }}
            >
              <div style={{ width:10, height:10, borderRadius:'50%', background:it.c, boxShadow:`0 0 10px ${it.c}`, marginTop:6, flexShrink:0 }}/>
              <div>
                <h3 style={{ color:it.c, marginBottom:'.4rem', fontSize:'1rem' }}>{it.domain}</h3>
                <p style={{ fontSize:'.875rem' }}>{it.stance}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="gx-reveal gx-card" style={{ padding:'1.25rem 1.5rem', borderColor:'rgba(124,58,237,.2)' }}>
          <p style={{ fontSize:'.875rem' }}><span style={{ color:'var(--t1)', fontWeight:600 }}>Why This Matters:</span> Long-term thinking means we invest in relationships, not transactions. We build systems designed to work for years.</p>
        </div>
      </div>
    </section>
  );
}
