'use client';
import { useState, useEffect, useRef } from 'react';
const NOTES = [
  { title:'Trade-offs in Architecture Selection', content:'Custom architectures require careful balance between model complexity and training efficiency. We document every decision point where we chose constraint over capability, and why.' },
  { title:'Failure Modes & Constraints',          content:'Real research acknowledges what does not work. We document latency limitations, accuracy boundaries, data scaling constraints, and infrastructure limits for every system.' },
  { title:'Learning Dynamics',                    content:'How models behave during training, convergence patterns, unexpected phenomena, and what those patterns revealed about the underlying problem. This knowledge transfers across projects.' },
  { title:'Data Quality Lessons',                 content:'Insights about how data organisation affected outcomes. What structures surprised us. What labelling approaches failed. These lessons guide future dataset curation.' },
];
export default function ResearchNotes() {
  const [open, setOpen] = useState<number|null>(null);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-reveal').forEach((el,i) => { el.style.transitionDelay=`${i*.09}s`; el.classList.add('gx-in'); }); });
    }, { threshold:.08 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  },[]);
  return (
    <section ref={ref} className="gx-sec">
      <div style={{ maxWidth:800, margin:'0 auto' }}>
        <div className="gx-reveal" style={{ marginBottom:'2.5rem' }}>
          <span className="gx-badge" style={{ marginBottom:'1rem', display:'inline-flex' }}>Research</span>
          <h2 style={{ marginBottom:'.75rem' }}>Research <span className="gx-gt2">Notes</span></h2>
          <p>Technical insights and learning captured from each system.</p>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:'.75rem', marginBottom:'1.5rem' }}>
          {NOTES.map((n,i) => (
            <div key={i} className="gx-reveal gx-card" style={{ overflow:'hidden', cursor:'pointer' }}>
              <button onClick={() => setOpen(open===i?null:i)} style={{ width:'100%', padding:'1.25rem 1.5rem', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1rem', background:'none', border:'none', cursor:'pointer', textAlign:'left' }}>
                <h3 style={{ fontSize:'1rem', color:'var(--t1)' }}>{n.title}</h3>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--pu2)" strokeWidth="2.5" style={{ flexShrink:0, transition:'transform .3s', transform:open===i?'rotate(180deg)':'none' }}>
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {open===i && (
                <div style={{ padding:'0 1.5rem 1.25rem', borderTop:'1px solid var(--b)' }}>
                  <p style={{ fontSize:'.875rem', paddingTop:'1rem' }}>{n.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="gx-reveal gx-card" style={{ padding:'1.25rem 1.5rem', borderColor:'rgba(124,58,237,.2)' }}>
          <p style={{ fontSize:'.875rem' }}><span style={{ color:'var(--t1)', fontWeight:600 }}>Why These Notes Matter:</span> Real research documents failures, constraints, and learning. It signals we are building systems, not assembling components. It signals discipline.</p>
        </div>
      </div>
    </section>
  );
}
