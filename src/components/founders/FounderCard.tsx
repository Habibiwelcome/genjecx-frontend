'use client';
import Image from 'next/image';
interface Props { name:string; role:string; education:string; background:string; obsessions:string[]; focus:string; imageSrc:string; imageAlt?:string; }
export default function FounderCard({ name, role, education, background, obsessions, focus, imageSrc, imageAlt }: Props) {
  return (
    <div className="gx-card" style={{ padding:'2rem', cursor:'default', transition:'border-color .3s,transform .3s,box-shadow .3s' }}
      onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor='rgba(124,58,237,.35)'; el.style.transform='translateY(-5px)'; el.style.boxShadow='0 24px 60px rgba(0,0,0,.5)'; }}
      onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor='var(--b)'; el.style.transform=''; el.style.boxShadow=''; }}
    >
      <div style={{ position:'relative', width:'100%', height:220, borderRadius:'var(--r)', overflow:'hidden', marginBottom:'1.5rem', background:'var(--card2)' }}>
        <Image src={imageSrc} alt={imageAlt||name} fill style={{ objectFit:'cover' }} priority/>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(7,7,12,.6),transparent)' }}/>
      </div>
      <h3 style={{ fontSize:'1.3rem', marginBottom:'.3rem' }}>{name}</h3>
      <p style={{ fontSize:'.875rem', color:'var(--pu2)', fontWeight:600, marginBottom:'1.25rem' }}>{role}</p>
      <div style={{ marginBottom:'1rem' }}>
        <div style={{ fontSize:'.7rem', fontFamily:'var(--fm)', color:'var(--t3)', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:'.4rem' }}>Education</div>
        <p style={{ fontSize:'.875rem' }}>{education}</p>
      </div>
      <div style={{ marginBottom:'1rem' }}>
        <div style={{ fontSize:'.7rem', fontFamily:'var(--fm)', color:'var(--t3)', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:'.4rem' }}>Background</div>
        <p style={{ fontSize:'.875rem' }}>{background}</p>
      </div>
      <div style={{ marginBottom:'1.25rem' }}>
        <div style={{ fontSize:'.7rem', fontFamily:'var(--fm)', color:'var(--t3)', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:'.6rem' }}>Areas of Focus</div>
        <ul style={{ display:'flex', flexDirection:'column', gap:6 }}>
          {obsessions.map((o,i) => (
            <li key={i} style={{ display:'flex', gap:8, fontSize:'.855rem' }}>
              <span style={{ color:'var(--pu2)', fontWeight:700, flexShrink:0 }}>•</span>
              <span style={{ color:'var(--t2)' }}>{o}</span>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ borderTop:'1px solid var(--b)', paddingTop:'1.25rem' }}>
        <p style={{ fontSize:'.845rem' }}>{focus}</p>
      </div>
    </div>
  );
}
