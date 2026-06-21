'use client';
import { useEffect, useRef } from 'react';
const STAGES = [
  { stage:'Data Ingestion',           desc:'Multiple data sources unified into structured format.', c:'var(--pu2)' },
  { stage:'Draft Brain Curation',     desc:'Knowledge organisation before model training begins.', c:'var(--gold)' },
  { stage:'Model Training',           desc:'Custom architectures learning from organised data.', c:'var(--sage)' },
  { stage:'Validation',               desc:'Rigorous testing against real-world constraints.', c:'var(--pu)' },
  { stage:'Inference & Feedback',     desc:'Continuous learning through production feedback loops.', c:'var(--pu2)' },
];
export default function ArchitecturePipeline() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-depth,.gx-reveal').forEach((el,i) => { el.style.transitionDelay=`${i*.1}s`; el.classList.add('gx-in'); }); });
    }, { threshold:.08 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  },[]);
  return (
    <section ref={ref} className="gx-sec">
      <div style={{ maxWidth:800, margin:'0 auto' }}>
        <div className="gx-reveal" style={{ marginBottom:'2.5rem' }}>
          <span className="gx-badge" style={{ marginBottom:'1rem', display:'inline-flex' }}>Architecture</span>
          <h2>Architecture <span className="gx-gt2">Pipeline</span></h2>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:'1rem', marginBottom:'1.5rem', position:'relative' }}>
          <div aria-hidden style={{ position:'absolute', left:20, top:20, bottom:20, width:1, background:'linear-gradient(to bottom,var(--pu),var(--sage),transparent)', opacity:.2 }}/>
          {STAGES.map((s,i) => (
            <div key={i} className="gx-depth gx-card" style={{ padding:'1.375rem', display:'flex', gap:'1.25rem', alignItems:'center', cursor:'default', position:'relative', zIndex:1 }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor=`${s.c}40`; el.style.transform='translateX(6px)'; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor='var(--b)'; el.style.transform=''; }}
            >
              <div style={{ width:40, height:40, borderRadius:999, background:`${s.c}14`, border:`1px solid ${s.c}30`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontFamily:'var(--fm)', fontWeight:700, fontSize:'.8rem', color:s.c }}>{i+1}</div>
              <div>
                <h3 style={{ color:s.c, marginBottom:'.25rem', fontSize:'.975rem' }}>{s.stage}</h3>
                <p style={{ fontSize:'.855rem' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="gx-reveal gx-card" style={{ padding:'1.25rem 1.5rem', borderColor:'rgba(124,58,237,.2)' }}>
          <p style={{ fontSize:'.875rem' }}><span style={{ color:'var(--t1)', fontWeight:600 }}>Key Principle:</span> Each stage is deliberately sequential. We do not skip problem understanding. Intelligence is designed, not defaulted.</p>
        </div>
      </div>
    </section>
  );
}
