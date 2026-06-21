'use client';
import { useEffect, useRef } from 'react';
const STRATS = [
  { title:'Data Organisation', c:'var(--pu2)', points:['Hierarchical data structures reflecting domain logic','Systematic labelling with clear intent','Version control for all training data','Continuous quality audits'] },
  { title:'Training Philosophy', c:'var(--gold)', points:['Small, focused datasets beat large unfocused ones','Synthetic data used strategically, never as default','Failure modes identified before production','Models are interpretable, not black boxes'] },
  { title:'Validation Approach', c:'var(--sage)', points:['Domain expert validation is mandatory','Real-world constraint testing','Latency and resource requirements tested early','Feedback loops built into production systems'] },
];
export default function DatasetAndTraining() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-depth,.gx-reveal').forEach((el,i) => { el.style.transitionDelay=`${i*.12}s`; el.classList.add('gx-in'); }); });
    }, { threshold:.08 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  },[]);
  return (
    <section ref={ref} className="gx-sec" style={{ background:'var(--bg2)' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <div className="gx-reveal" style={{ maxWidth:540, marginBottom:'3rem' }}>
          <span className="gx-badge" style={{ marginBottom:'1rem', display:'inline-flex' }}>Dataset & Training</span>
          <h2>Dataset & Training <span className="gx-gt">Capability</span></h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'1.1rem', marginBottom:'1.5rem' }}>
          {STRATS.map((s,i) => (
            <div key={i} className="gx-depth gx-card" style={{ padding:'1.625rem', cursor:'default' }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor=`${s.c}40`; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 18px 44px rgba(0,0,0,.45)'; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor='var(--b)'; el.style.transform=''; el.style.boxShadow=''; }}
            >
              <div style={{ width:24, height:3, borderRadius:2, background:s.c, marginBottom:'1rem' }}/>
              <h3 style={{ color:s.c, marginBottom:'1rem', fontSize:'1rem' }}>{s.title}</h3>
              <ul style={{ display:'flex', flexDirection:'column', gap:7 }}>
                {s.points.map((p,j) => <li key={j} style={{ display:'flex', gap:8, fontSize:'.845rem' }}><span style={{ color:s.c, fontWeight:700, flexShrink:0 }}>•</span><span style={{ color:'var(--t2)' }}>{p}</span></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="gx-reveal gx-card" style={{ padding:'1.625rem', borderColor:'rgba(124,58,237,.2)' }}>
          <h3 style={{ marginBottom:'.75rem', fontSize:'1rem' }}>Draft Brain Concept</h3>
          <p style={{ fontSize:'.875rem', marginBottom:'.6rem' }}>Before training begins, we organise knowledge. The "Draft Brain" is knowledge curation — how data is structured, what relationships matter, what patterns we expect the model to discover.</p>
          <p style={{ fontSize:'.845rem', color:'var(--t3)' }}>This happens before any model touches the data. Because intelligence starts with understanding.</p>
        </div>
      </div>
    </section>
  );
}
