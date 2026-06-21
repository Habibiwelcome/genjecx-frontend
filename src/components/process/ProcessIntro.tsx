'use client';
import { useEffect, useState } from 'react';
import SubpageBg from '../SubpageBg';
export default function ProcessIntro() {
  const [on,setOn]=useState(false);
  useEffect(()=>setOn(true),[]);
  return (
    <section className="gx-subpage-bg" style={{ paddingTop:'9rem',paddingBottom:'2.5rem',paddingLeft:'1.5rem',paddingRight:'1.5rem',position:'relative',overflow:'hidden' }}>
      <SubpageBg variant={0} />
      <div aria-hidden style={{ position:'absolute',top:'-20%',right:'-8%',width:520,height:520,borderRadius:'50%',background:`radial-gradient(circle,rgba(201,169,110,.1) 0%,transparent 65%)`,pointerEvents:'none' }}/>
      <div style={{ maxWidth:1200,margin:'0 auto' }}>
        <div className={on?'gx-u0':''} style={{ opacity:on?undefined:0 }}>
          <span className="gx-badge" style={{ marginBottom:'1rem',display:'inline-flex',background:'rgba(201,169,110,.1)',color:'var(--gold)',borderColor:'rgba(201,169,110,.25)' }}>How We Work</span>
          <h1><span style={{ color:'var(--t1)' }}>Process & </span><span style={{ background:'linear-gradient(135deg,#c9a96e,#6db89e)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>Pricing</span></h1>
          <p style={{ fontSize:"1rem",maxWidth:520,marginTop:".75rem" }}>Transparent process. Honest pricing. No surprises.</p>
        </div>
      </div>
    </section>
  );
}
