'use client';
import { useEffect, useRef } from 'react';
const AREAS = [
  { area:'Data Flow',       col:'var(--pu2)', qs:['Where does data come from?','How is it transformed?','What quality checks exist?','What data is lost or filtered?'] },
  { area:'Model Usage',     col:'var(--gold)', qs:['Why this model for this problem?','What training data was used?','How is performance validated?','What happens when the model fails?'] },
  { area:'Failure Modes',   col:'var(--sage)', qs:['What edge cases are untested?','What happens at latency limits?','How does the system degrade?','What is your recovery strategy?'] },
  { area:'Infrastructure',  col:'var(--pu)',  qs:['What is your cost footprint?','How scalable is the system?','What are your monitoring gaps?','How is performance optimized?'] },
  { area:'Cost Efficiency', col:'var(--gold)', qs:['Are you overspending on compute?','Could you use smaller models?','Are there latency-cost tradeoffs?','What optimisations are missed?'] },
  { area:'Risk Assessment', col:'var(--sage)', qs:['What are your data risks?','What are your model risks?','What are your operational risks?','How exposed are you to failure?'] },
];
export default function WhatWeAnalyze() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-depth').forEach((el,i) => { el.style.transitionDelay=`${i*.08}s`; el.classList.add('gx-in'); }); });
    }, { threshold:.07 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  },[]);
  const tilt = (e:React.MouseEvent<HTMLDivElement>) => {
    const el=e.currentTarget, r=el.getBoundingClientRect();
    const x=((e.clientX-r.left)/r.width-.5)*10, y=((e.clientY-r.top)/r.height-.5)*-10;
    el.style.transform=`perspective(700px) rotateX(${y}deg) rotateY(${x}deg) translateY(-5px)`;
    el.style.boxShadow='0 22px 55px rgba(0,0,0,.5)';
  };
  const untilt = (e:React.MouseEvent<HTMLDivElement>) => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; };
  return (
    <section ref={ref} className="gx-sec">
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <div className="gx-reveal" style={{ maxWidth:560, marginBottom:'3rem' }}>
          <span className="gx-badge" style={{ marginBottom:'1rem', display:'inline-flex' }}>Deep Analysis</span>
          <h2 style={{ marginBottom:'.75rem' }}>What We <span className="gx-gt2">Analyze</span></h2>
          <p>We ask hard questions. We look for inefficiencies, risks, and missed opportunities.</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'1.1rem' }}>
          {AREAS.map((a,i) => (
            <div key={i} className="gx-depth gx-card" style={{ padding:'1.625rem', cursor:'default' }} onMouseMove={tilt} onMouseLeave={untilt}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:'1rem' }}>
                <div style={{ width:8, height:8, borderRadius:'50%', background:a.col, boxShadow:`0 0 8px ${a.col}` }}/>
                <h3 style={{ fontSize:'1rem', color:a.col }}>{a.area}</h3>
              </div>
              <ul style={{ display:'flex', flexDirection:'column', gap:7 }}>
                {a.qs.map((q,j) => (
                  <li key={j} style={{ display:'flex', gap:8, fontSize:'.82rem' }}>
                    <span style={{ color:a.col, fontWeight:700, flexShrink:0 }}>Q</span>
                    <span style={{ color:'var(--t2)' }}>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
