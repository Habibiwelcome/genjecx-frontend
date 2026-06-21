'use client';
import { useEffect, useRef } from 'react';
const MODES = [
  { mode:'Hallucinations',         desc:"LLMs generate plausible but false information. Our approach: Constrain outputs, verify against structured data, use verification layers.", c:'var(--pu2)' },
  { mode:'Data Drift',             desc:"Real-world data changes. Models trained on yesterday's data may fail today. Our approach: Continuous monitoring, regular retraining cycles, robust validation.", c:'var(--gold)' },
  { mode:'Latency Constraints',    desc:"Some problems require sub-millisecond responses. Large models are impossible. Our approach: Right-size architectures, optimise for your latency budget.", c:'var(--sage)' },
  { mode:'Infrastructure Limits',  desc:"GPUs are expensive. Some systems require edge deployment. Our approach: Design architectures that fit real infrastructure constraints.", c:'var(--pu)' },
  { mode:'Interpretability Loss',  desc:"Black-box models harm trust in high-stakes domains. Our approach: Build interpretable systems where it matters. Accept opacity only when necessary.", c:'var(--pu2)' },
  { mode:'Cold-Start Problems',    desc:"New domains with limited data. Our approach: Leverage domain knowledge, synthetic data carefully, human-in-the-loop validation.", c:'var(--gold)' },
];
export default function FailureModesAndLimits() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-depth,.gx-reveal').forEach((el,i) => { el.style.transitionDelay=`${i*.09}s`; el.classList.add('gx-in'); }); });
    }, { threshold:.07 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  },[]);
  return (
    <section ref={ref} className="gx-sec" style={{ background:'var(--bg2)' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <div className="gx-reveal" style={{ maxWidth:540, marginBottom:'3rem' }}>
          <span className="gx-badge" style={{ marginBottom:'1rem', display:'inline-flex' }}>Honest Research</span>
          <h2 style={{ marginBottom:'.75rem' }}>Failure Modes <span className="gx-gt">& Limits</span></h2>
          <p>We document where AI fails, and what we do about it. This is rare and valuable.</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(270px,1fr))', gap:'1.1rem', marginBottom:'1.5rem' }}>
          {MODES.map((m,i) => (
            <div key={i} className="gx-depth gx-card" style={{ padding:'1.5rem', cursor:'default', position:'relative', overflow:'hidden' }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor=`${m.c}40`; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 18px 44px rgba(0,0,0,.45)'; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor='var(--b)'; el.style.transform=''; el.style.boxShadow=''; }}
            >
              <div aria-hidden style={{ position:'absolute', left:0, top:'15%', bottom:'15%', width:3, borderRadius:'0 2px 2px 0', background:m.c, opacity:.7 }}/>
              <h3 style={{ color:m.c, marginBottom:'.5rem', fontSize:'1rem' }}>{m.mode}</h3>
              <p style={{ fontSize:'.855rem' }}>{m.desc}</p>
            </div>
          ))}
        </div>
        <div className="gx-reveal gx-card" style={{ padding:'1.25rem 1.5rem', borderColor:'rgba(201,169,110,.25)' }}>
          <p style={{ fontSize:'.875rem' }}><span style={{ color:'var(--gold)', fontWeight:600 }}>Important:</span> The fact that we document these failures signals real research behaviour. We are not selling hype. We are solving problems rigorously.</p>
        </div>
      </div>
    </section>
  );
}
