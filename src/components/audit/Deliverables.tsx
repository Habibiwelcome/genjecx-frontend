'use client';
import { useEffect, useRef } from 'react';
const ITEMS = [
  { title:'Written Report',    desc:'A comprehensive technical report documenting our findings, analysis, and observations. Clear. Honest. Actionable.' },
  { title:'System Diagrams',   desc:'Visual representations of your architecture. Where data flows. Where models fit. Where risks exist.' },
  { title:'Recommendations',   desc:'Specific, prioritised recommendations. What to fix first. What to monitor. What to optimise.' },
  { title:'Risk Assessment',   desc:'Clear documentation of risks we identified. What could fail. What the impact would be. How to mitigate.' },
  { title:'Cost Analysis',     desc:'Breakdown of your infrastructure costs. Where money is well-spent. Where you are overspending.' },
  { title:'Follow-up Session', desc:'We review the report with your team. Answer questions. Clarify recommendations. Ensure alignment.' },
];
const COLS = ['var(--pu2)','var(--gold)','var(--sage)','var(--pu)','var(--gold)','var(--sage)'];
export default function Deliverables() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-reveal,.gx-depth').forEach((el,i) => { el.style.transitionDelay=`${i*.09}s`; el.classList.add('gx-in'); }); });
    }, { threshold:.07 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  },[]);
  return (
    <section ref={ref} className="gx-sec" style={{ background:'var(--bg2)' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <div className="gx-reveal" style={{ maxWidth:560, marginBottom:'3rem' }}>
          <span className="gx-badge" style={{ marginBottom:'1rem', display:'inline-flex' }}>Deliverables</span>
          <h2>What You <span className="gx-gt">Receive</span></h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(270px,1fr))', gap:'1.1rem', marginBottom:'1.5rem' }}>
          {ITEMS.map((it,i) => (
            <div key={i} className="gx-depth gx-card" style={{ padding:'1.625rem', display:'flex', gap:'1rem', cursor:'default' }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor=`${COLS[i]}40`; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 18px 44px rgba(0,0,0,.45)'; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor='var(--b)'; el.style.transform=''; el.style.boxShadow=''; }}
            >
              <div style={{ width:34, height:34, borderRadius:999, background:`${COLS[i]}18`, border:`1px solid ${COLS[i]}35`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontFamily:'var(--fm)', fontWeight:700, fontSize:'.75rem', color:COLS[i] }}>{String(i+1).padStart(2,'0')}</div>
              <div>
                <h3 style={{ marginBottom:'.4rem', fontSize:'1rem' }}>{it.title}</h3>
                <p style={{ fontSize:'.855rem' }}>{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="gx-reveal gx-card" style={{ padding:'1.25rem 1.5rem', borderColor:'rgba(124,58,237,.2)' }}>
          <p style={{ fontSize:'.875rem' }}><span style={{ color:'var(--t1)', fontWeight:600 }}>Timeline:</span> A typical audit takes 2–4 weeks depending on system complexity. We review your systems, talk to your team, and deliver findings.</p>
        </div>
      </div>
    </section>
  );
}
