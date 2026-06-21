'use client';
import { useEffect, useState } from 'react';
export default function StudioIntroInner() {
  const [m, setM] = useState(false);
  useEffect(() => setM(true), []);
  return (
    <section style={{ paddingTop:'160px', paddingBottom:'60px', paddingLeft:'1.5rem', paddingRight:'1.5rem', background:'var(--bg)' }}>
      <div style={{ maxWidth:1280, margin:'0 auto' }}>
        <div className={m ? 'up0' : ''} style={{ opacity: m ? undefined : 0 }}>
          <span className="pill" style={{ marginBottom:'1.2rem', display:'inline-flex' }}>R&D Portfolio</span>
          <h1><span className="g-text">Neural </span><span style={{ color:'var(--ink)' }}>Studio</span></h1>
          <p style={{ marginTop:'1rem', fontSize:'1.1rem', maxWidth:540, color:'var(--ink2)' }}>Our R&D portfolio. Custom neural networks, proprietary intelligence systems, and the research that powers them.</p>
        </div>
      </div>
    </section>
  );
}
