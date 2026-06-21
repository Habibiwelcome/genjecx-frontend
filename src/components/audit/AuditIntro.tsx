'use client';
import { useEffect, useState } from 'react';
import SubpageBg from '../SubpageBg';
export default function AuditIntro() {
  const [on,setOn]=useState(false);
  useEffect(()=>setOn(true),[]);
  return (
    <section className="gx-subpage-bg" style={{ paddingTop:'9rem',paddingBottom:'2.5rem',paddingLeft:'1.5rem',paddingRight:'1.5rem',position:'relative',overflow:'hidden' }}>
      <SubpageBg variant={5} />
      <div aria-hidden style={{ position:'absolute',top:'-20%',right:'-8%',width:520,height:520,borderRadius:'50%',background:`radial-gradient(circle,rgba(124,58,237,.1) 0%,transparent 65%)`,pointerEvents:'none' }}/>
      <div style={{ maxWidth:1200,margin:'0 auto' }}>
        <div className={on?'gx-u0':''} style={{ opacity:on?undefined:0 }}>
          <span className="gx-badge" style={{ marginBottom:'1rem',display:'inline-flex',background:'rgba(124,58,237,.1)',color:'var(--pu2)',borderColor:'rgba(124,58,237,.25)' }}>Architecture Analysis</span>
          <h1><span style={{ color:'var(--t1)' }}>Architecture </span><span style={{ background:'linear-gradient(135deg,#a78bfa,#c9a96e)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>Audit</span></h1>
          <p style={{ fontSize:"1rem",maxWidth:520,marginTop:".75rem" }}>A deep-dive technical review of your AI infrastructure — we find what is broken, wasted, and holding back your systems.</p>
        </div>
      </div>
    </section>
  );
}
