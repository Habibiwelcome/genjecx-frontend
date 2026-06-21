'use client';
import { useEffect, useRef } from 'react';
const PTS = [
  { p:'We do not default to APIs',       e:'Off-the-shelf models are a starting point, not an ending point. We choose them thoughtfully, not by default.', c:'var(--pu2)' },
  { p:'LLMs are powerful for some problems', e:'Language understanding, reasoning, generation. LLMs excel here. We use them where they shine.', c:'var(--gold)' },
  { p:'LLMs are harmful for others',     e:'Structured prediction, real-time constraints, interpretability requirements. LLMs often overcomplicate and introduce brittleness.', c:'var(--sage)' },
  { p:'Control matters',                 e:'Custom systems give us control over latency, cost, failure modes, and intellectual property. This matters for serious work.', c:'var(--pu)' },
  { p:'Fit drives architecture',         e:'We choose the right tool for each problem. Sometimes that is a large model. Sometimes it is a carefully tuned classifier.', c:'var(--pu2)' },
];
export default function ModelUsagePhilosophy() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-left,.gx-reveal').forEach((el,i) => { el.style.transitionDelay=`${i*.1}s`; el.classList.add('gx-in'); }); });
    }, { threshold:.08 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  },[]);
  return (
    <section ref={ref} className="gx-sec">
      <div style={{ maxWidth:800, margin:'0 auto' }}>
        <div className="gx-reveal" style={{ marginBottom:'2.5rem' }}>
          <span className="gx-badge" style={{ marginBottom:'1rem', display:'inline-flex' }}>Model Selection</span>
          <h2 style={{ marginBottom:'.75rem' }}>Model Usage <span className="gx-gt2">Philosophy</span></h2>
          <p>How we think about model selection and deployment.</p>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:'1rem', marginBottom:'1.5rem' }}>
          {PTS.map((p,i) => (
            <div key={i} className="gx-left gx-card" style={{ padding:'1.5rem', cursor:'default', borderLeft:`3px solid ${p.c}`, transition:'transform .3s,box-shadow .3s' }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.transform='translateX(6px)'; el.style.boxShadow='0 12px 36px rgba(0,0,0,.4)'; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.transform=''; el.style.boxShadow=''; }}
            >
              <h3 style={{ color:p.c, marginBottom:'.4rem', fontSize:'1rem' }}>{p.p}</h3>
              <p style={{ fontSize:'.875rem' }}>{p.e}</p>
            </div>
          ))}
        </div>
        <div className="gx-reveal gx-card" style={{ padding:'1.25rem 1.5rem', borderColor:'rgba(124,58,237,.2)' }}>
          <p style={{ fontSize:'.875rem' }}><span style={{ color:'var(--t1)', fontWeight:600 }}>Bottom Line:</span> We think deeply about model selection. We do not use a hammer because it is shiny. We use it because the problem requires it.</p>
        </div>
      </div>
    </section>
  );
}
