'use client';
import { useEffect, useRef } from 'react';
const TYPES = [
  { name:'System Architecture Review', desc:'We review your AI system end-to-end — data pipelines, model choices, inference infrastructure, monitoring. We identify bottlenecks, inefficiencies, and risks.', icon:'🔍' },
  { name:'Model Audit',                desc:'We examine your models — training data, validation approach, failure modes, latency profile. We tell you what works and where it fails.', icon:'🧠' },
  { name:'Data Strategy Review',       desc:"We assess your data. Is it organized effectively? Are labeling practices sound? Can the data support its intended uses?", icon:'📊' },
  { name:'Infrastructure Assessment',  desc:'We review your deployment infrastructure — cost efficiency, scalability, reliability, monitoring. What is working? What needs to change?', icon:'⚙️' },
];
export default function WhatThisIs() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-reveal,.gx-depth').forEach((el,i) => { el.style.transitionDelay=`${i*.09}s`; el.classList.add('gx-in'); }); });
    }, { threshold:.08 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  },[]);
  return (
    <section ref={ref} className="gx-sec" style={{ background:'var(--bg2)' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <div className="gx-reveal" style={{ maxWidth:560, marginBottom:'3rem' }}>
          <span className="gx-badge" style={{ marginBottom:'1rem', display:'inline-flex' }}>Audit Scope</span>
          <h2>What We <span className="gx-gt">Audit</span></h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'1.1rem', marginBottom:'2rem' }}>
          {TYPES.map((t,i) => (
            <div key={i} className="gx-depth gx-card" style={{ padding:'1.75rem', cursor:'default', position:'relative', overflow:'hidden' }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor='rgba(124,58,237,.35)'; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 20px 48px rgba(0,0,0,.45)'; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor='var(--b)'; el.style.transform=''; el.style.boxShadow=''; }}
            >
              <div aria-hidden style={{ position:'absolute',left:0,top:'15%',bottom:'15%',width:3,borderRadius:'0 2px 2px 0',background:'var(--pu)',opacity:.6 }}/>
              <div style={{ fontSize:'1.5rem', marginBottom:'.875rem' }}>{t.icon}</div>
              <h3 style={{ marginBottom:'.5rem', fontSize:'1rem' }}>{t.name}</h3>
              <p style={{ fontSize:'.875rem' }}>{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="gx-reveal gx-card" style={{ padding:'1.25rem 1.5rem', borderColor:'rgba(124,58,237,.2)' }}>
          <p style={{ fontSize:'.875rem' }}><span style={{ color:'var(--t1)', fontWeight:600 }}>What This Is Not:</span> This is not a sales pitch. We will not recommend "solutions" we sell. We give you honest feedback on what we see.</p>
        </div>
      </div>
    </section>
  );
}
