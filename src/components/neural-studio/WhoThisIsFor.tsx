'use client';
import { useEffect, useRef } from 'react';
const AUD = [
  { role:'CTOs & Technical Leaders', desc:'Engineers and architects who need to understand whether a vendor has real technical depth.', c:'var(--pu2)' },
  { role:'Research Teams',           desc:'Organisations building proprietary intelligence and needing reference points for custom model development.', c:'var(--gold)' },
  { role:'Serious Founders',         desc:'Teams that have invested in understanding their problem deeply and need systems that match that rigour.', c:'var(--sage)' },
];
export default function WhoThisIsFor() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-left').forEach((el,i) => { el.style.transitionDelay=`${i*.12}s`; el.classList.add('gx-in'); }); });
    }, { threshold:.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  },[]);
  return (
    <section ref={ref} className="gx-sec" style={{ background:'var(--bg2)' }}>
      <div style={{ maxWidth:800, margin:'0 auto' }}>
        <div className="gx-reveal" style={{ marginBottom:'2.5rem' }}>
          <span className="gx-badge" style={{ marginBottom:'1rem', display:'inline-flex' }}>Audience</span>
          <h2>Who This <span className="gx-gt">Is For</span></h2>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
          {AUD.map((a,i) => (
            <div key={i} className="gx-left gx-card" style={{ padding:'1.5rem', display:'flex', gap:'1.25rem', alignItems:'center', cursor:'default', borderLeft:`3px solid ${a.c}`, transition:'transform .3s,box-shadow .3s' }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.transform='translateX(6px)'; el.style.boxShadow='0 12px 36px rgba(0,0,0,.4)'; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.transform=''; el.style.boxShadow=''; }}
            >
              <div>
                <h3 style={{ color:a.c, marginBottom:'.35rem', fontSize:'1rem' }}>{a.role}</h3>
                <p style={{ fontSize:'.875rem' }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
