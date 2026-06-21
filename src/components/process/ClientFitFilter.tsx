'use client';
import { useEffect, useRef } from 'react';
const GOOD = ['You have a complex problem that generic solutions cannot solve','You are willing to invest time in problem understanding','You need proprietary intelligence, not a resold product','You understand that custom research takes time','You value depth and capability over quick deployments','You are looking for a long-term technical partnership'];
const BAD  = ['You need a solution deployed in 2–4 weeks','You want to minimise cost at any expense','You are looking for generic "AI solutions"','You do not have domain expertise on your team','You need an off-the-shelf product, not a system','You are not committed to seeing the project through'];
export default function ClientFitFilter() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-left,.gx-right,.gx-reveal').forEach((el,i) => { el.style.transitionDelay=`${i*.07}s`; el.classList.add('gx-in'); }); });
    }, { threshold:.08 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  },[]);
  return (
    <section ref={ref} className="gx-sec" style={{ background:'var(--bg2)' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <div className="gx-reveal" style={{ maxWidth:540, marginBottom:'3rem' }}>
          <span className="gx-badge" style={{ marginBottom:'1rem', display:'inline-flex' }}>Client Fit</span>
          <h2>Is GenJecX <span className="gx-gt">Right For You?</span></h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem', marginBottom:'1.5rem' }} className="fit-grid">
          <div className="gx-left gx-card" style={{ padding:'2rem' }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:'1.5rem' }}>
              <div style={{ width:28, height:28, borderRadius:999, background:'rgba(109,184,158,.15)', border:'1px solid rgba(109,184,158,.3)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--sage)', fontSize:'1rem' }}>✓</div>
              <h3 style={{ color:'var(--sage)', fontSize:'1.1rem' }}>Perfect Fit</h3>
            </div>
            <ul style={{ display:'flex', flexDirection:'column', gap:10 }}>
              {GOOD.map((g,i) => <li key={i} style={{ display:'flex', gap:10, fontSize:'.875rem' }}><span style={{ color:'var(--sage)', fontWeight:700, flexShrink:0 }}>✓</span><span style={{ color:'var(--t2)' }}>{g}</span></li>)}
            </ul>
          </div>
          <div className="gx-right gx-card" style={{ padding:'2rem' }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:'1.5rem' }}>
              <div style={{ width:28, height:28, borderRadius:999, background:'rgba(124,58,237,.12)', border:'1px solid rgba(124,58,237,.3)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--pu2)', fontSize:'1rem' }}>✗</div>
              <h3 style={{ color:'var(--t2)', fontSize:'1.1rem' }}>Poor Fit</h3>
            </div>
            <ul style={{ display:'flex', flexDirection:'column', gap:10 }}>
              {BAD.map((b,i) => <li key={i} style={{ display:'flex', gap:10, fontSize:'.875rem' }}><span style={{ color:'var(--t3)', fontWeight:700, flexShrink:0 }}>✗</span><span style={{ color:'var(--t3)' }}>{b}</span></li>)}
            </ul>
          </div>
        </div>
        <div className="gx-reveal gx-card" style={{ padding:'1.25rem 1.5rem' }}>
          <p style={{ fontSize:'.875rem' }}><span style={{ color:'var(--t1)', fontWeight:600 }}>Be Honest:</span> If you see yourself in the "Poor Fit" column, we are probably not the right match. There are other vendors who do rapid deployment well. We are built for problems that require research, not speed.</p>
        </div>
      </div>
      <style>{`@media(max-width:680px){.fit-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
