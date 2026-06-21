'use client';
import { useEffect, useRef } from 'react';
const ITEMS = [
  { title:'Research Before Scale',   desc:"We do not move fast and break things. We move deliberately and understand things. This is how you build systems that last.", c:'var(--pu2)' },
  { title:'Problems Come First',     desc:"We are obsessed with understanding problems deeply. The solution emerges from that understanding. Tools are secondary.", c:'var(--gold)' },
  { title:'Depth Over Speed',        desc:"We choose depth and capability over quick deployments. This attracts clients who value the same.", c:'var(--sage)' },
  { title:'Long-Term Thinking',      desc:"We build for systems that matter over years. That shapes every decision. Not about next quarter — about next decade.", c:'var(--pu)' },
  { title:'Intellectual Honesty',    desc:"We document failures. We acknowledge constraints. We do not oversell. Real credibility comes from being right, not from being loud.", c:'var(--pu2)' },
  { title:'Impact Matters',          desc:"We care about the problems we solve. If it does not matter, we do not do it. That filters for meaningful work.", c:'var(--gold)' },
];
export default function PhilosophySection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-depth').forEach((el,i) => { el.style.transitionDelay=`${i*.09}s`; el.classList.add('gx-in'); }); });
    }, { threshold:.07 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  },[]);

  const tilt = (e: React.MouseEvent<HTMLDivElement>, c: string) => {
    const el = e.currentTarget as HTMLElement, r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - .5) * 18;
    const y = ((e.clientY - r.top) / r.height - .5) * -18;
    el.style.transition      = 'box-shadow .25s, border-color .2s';
    el.style.transitionDelay = '0s';
    el.style.transform   = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) translateY(-12px) translateZ(26px)`;
    el.style.boxShadow   = `0 44px 88px rgba(0,0,0,.7), 0 0 48px ${c}28`;
    el.style.borderColor = `${c}50`;
  };
  const untilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.transition      = 'transform .55s cubic-bezier(.16,1,.3,1), box-shadow .4s, border-color .35s';
    el.style.transitionDelay = '0s';
    el.style.transform   = 'none';
    el.style.boxShadow   = '';
    el.style.borderColor = '';
  };

  return (
    <section ref={ref} className="gx-sec" style={{ background:'var(--bg2)' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <div className="gx-reveal" style={{ maxWidth:540, marginBottom:'3rem' }}>
          <span className="gx-badge" style={{ marginBottom:'1rem', display:'inline-flex' }}>Philosophy</span>
          <h2 style={{ marginBottom:'.75rem' }}>How We <span className="gx-gt">Think</span></h2>
          <p>These principles are not marketing copy. They drive everyday decisions.</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'1.1rem' }}>
          {ITEMS.map((it,i) => (
            <div key={i} className="gx-depth gx-card" style={{ padding:'1.625rem', cursor:'default', position:'relative', overflow:'hidden', willChange:'transform' }}
              onMouseMove={e => tilt(e, it.c)}
              onMouseLeave={untilt}
            >
              <div aria-hidden style={{ position:'absolute', left:0, top:'15%', bottom:'15%', width:3, borderRadius:'0 2px 2px 0', background:it.c, opacity:.7 }}/>
              <h3 style={{ color:it.c, marginBottom:'.5rem', fontSize:'1rem' }}>{it.title}</h3>
              <p style={{ fontSize:'.875rem' }}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
