'use client';
import { useEffect, useRef } from 'react';
const APPROACH = [
  { label:'Human-Centred Design',   detail:'Every decision validated with mental health professionals.', c:'var(--pu2)' },
  { label:'Interpretability First', detail:'Models must be explainable. Black boxes have no place in mental health.', c:'var(--gold)' },
  { label:'Failure Mode Focus',     detail:'We document where the system fails and what happens when it does.', c:'var(--sage)' },
  { label:'Data Ethics',            detail:'Privacy, consent, and data ownership are non-negotiable.', c:'var(--pu)' },
];
export default function MentalHealthInitiative() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-reveal,.gx-depth').forEach((el,i) => { el.style.transitionDelay=`${i*.1}s`; el.classList.add('gx-in'); }); });
    }, { threshold:.08 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  },[]);
  return (
    <section ref={ref} className="gx-sec">
      <div style={{ maxWidth:900, margin:'0 auto' }}>
        <div className="gx-reveal" style={{ marginBottom:'2.5rem' }}>
          <span className="gx-badge" style={{ marginBottom:'1rem', display:'inline-flex' }}>Long-term R&D</span>
          <h2 style={{ marginBottom:'.75rem' }}>Mental Health <span className="gx-gt2">Neural Networks</span></h2>
          <p>Mental health is a domain where AI can provide meaningful impact — but only if built with deep domain understanding and human alignment. Off-the-shelf solutions are inadequate.</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))', gap:'1rem', marginBottom:'1.5rem' }}>
          {APPROACH.map((a,i) => (
            <div key={i} className="gx-depth gx-card" style={{ padding:'1.5rem', cursor:'default' }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor=`${a.c}40`; el.style.transform='translateY(-3px)'; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor='var(--b)'; el.style.transform=''; }}
            >
              <div style={{ width:20, height:3, borderRadius:2, background:a.c, marginBottom:'.875rem' }}/>
              <h4 style={{ color:a.c, marginBottom:'.4rem', fontSize:'.95rem' }}>{a.label}</h4>
              <p style={{ fontSize:'.845rem' }}>{a.detail}</p>
            </div>
          ))}
        </div>
        <div className="gx-reveal gx-card" style={{ padding:'1.625rem', borderColor:'rgba(124,58,237,.2)' }}>
          <h3 style={{ marginBottom:'.6rem', fontSize:'1rem' }}>Current Status</h3>
          <p style={{ fontSize:'.875rem', marginBottom:'.75rem' }}>This is active R&D. We are building systems in collaboration with mental health researchers and practitioners. This work is not yet deployed commercially.</p>
          <h3 style={{ marginBottom:'.6rem', fontSize:'1rem', marginTop:'1.25rem' }}>Why This Matters</h3>
          <p style={{ fontSize:'.875rem' }}>This work signals our values. We build AI for impact. We invest in hard problems. We do not cut corners on ethics. If you are working on mental health or other high-impact domains, this is the kind of partner you want.</p>
        </div>
      </div>
    </section>
  );
}
