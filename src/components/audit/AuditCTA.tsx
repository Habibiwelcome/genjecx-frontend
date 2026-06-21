'use client';
import { useState } from 'react';
import { useSubmitAuditRequest, useAnalytics } from '@/lib/api';
import type { AuditType } from '@/lib/api';

const LBL: React.CSSProperties = { display:'block', fontSize:'.76rem', fontWeight:600, color:'var(--t2)', marginBottom:6, fontFamily:'var(--fm)', textTransform:'uppercase', letterSpacing:'.05em' };

export default function AuditCTA() {
  const { mutate: submitAudit, loading, error, data } = useSubmitAuditRequest();
  const { trackCtaClick } = useAnalytics();
  const [form, setForm] = useState({ contact_name:'', company_name:'', contact_email:'', contact_phone:'', company_website:'', audit_type:'architecture_review' as AuditType, project_description:'', current_challenges:'', preferred_timeline:'' });
  const ch = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const submit = async (e: React.FormEvent) => { e.preventDefault(); await trackCtaClick('audit_request_submit'); await submitAudit(form); };

  if (data?.success) return (
    <section className="gx-sec" style={{ background:'var(--bg2)' }}>
      <div style={{ maxWidth:680, margin:'0 auto', textAlign:'center' }}>
        <div style={{ width:64, height:64, borderRadius:'50%', background:'rgba(109,184,158,.12)', border:'1px solid rgba(109,184,158,.3)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.5rem' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <h2 style={{ marginBottom:'1rem' }}>Request Submitted</h2>
        <p>{data.message}</p>
        {data.request_id && <p style={{ marginTop:'.75rem', fontSize:'.8rem', fontFamily:'var(--fm)', color:'var(--t3)' }}>Ref #{data.request_id}</p>}
      </div>
    </section>
  );

  return (
    <section className="gx-sec" style={{ background:'var(--bg2)' }}>
      <div style={{ maxWidth:800, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:'3rem' }}>
          <span className="gx-badge" style={{ marginBottom:'1rem', display:'inline-flex' }}>Get Started</span>
          <h2 style={{ marginBottom:'1rem' }}>Request an <span className="gx-gt">Architecture Audit</span></h2>
          <p>Tell us about your systems. We will schedule a call to understand scope and timeline.</p>
        </div>

        <div className="gx-card" style={{ padding:'2.5rem' }}>
          {error && <div style={{ padding:'.875rem 1rem', borderRadius:'var(--r)', marginBottom:'1.5rem', background:'rgba(109,184,158,.08)', border:'1px solid rgba(109,184,158,.25)', color:'var(--sage)', fontSize:'.875rem' }}>{error.message || 'Failed to submit. Please try again.'}</div>}
          <form onSubmit={submit} style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.25rem' }}>
              {([['contact_name','Your Name *','text',true],['company_name','Company *','text',true],['contact_email','Email *','email',true],['contact_phone','Phone','tel',false],['company_website','Website','url',false]] as [string,string,string,boolean][]).map(([n,l,t,r]) => (
                <div key={n} style={{ gridColumn: n==='contact_name'||n==='company_name'||n==='contact_email'||n==='contact_phone' ? undefined : 'span 2' }}>
                  <label style={LBL}>{l}</label>
                  <input type={t} name={n} required={r} value={(form as any)[n]} onChange={ch} placeholder={l.replace(' *','')}/>
                </div>
              ))}
              <div>
                <label style={LBL}>Audit Type *</label>
                <select name="audit_type" value={form.audit_type} onChange={ch} required style={{ width:'100%', background:'var(--card)', border:'1px solid var(--b)', color:'var(--t1)', borderRadius:'var(--r)', padding:'.75rem 1rem', fontFamily:'var(--f)' }}>
                  <option value="architecture_review">Architecture Review</option>
                  <option value="ml_model_review">ML Model Review</option>
                  <option value="code_review">Code Review</option>
                  <option value="performance_audit">Performance Audit</option>
                  <option value="security_audit">Security Audit</option>
                  <option value="custom">Custom Audit</option>
                </select>
              </div>
              <div>
                <label style={LBL}>Preferred Timeline</label>
                <input type="text" name="preferred_timeline" value={form.preferred_timeline} onChange={ch} placeholder="e.g. Within 2 weeks"/>
              </div>
            </div>
            <div>
              <label style={LBL}>Tell us about your systems *</label>
              <textarea name="project_description" required minLength={50} rows={4} value={form.project_description} onChange={ch} placeholder="What AI systems are you running? What technologies are involved? (min 50 characters)" style={{ resize:'none' }}/>
            </div>
            <div>
              <label style={LBL}>Current Challenges</label>
              <textarea name="current_challenges" rows={3} value={form.current_challenges} onChange={ch} placeholder="What issues or concerns do you have with your current systems?" style={{ resize:'none' }}/>
            </div>
            <button type="submit" disabled={loading} className="gx-btn gx-btn-fill" style={{ alignSelf:'flex-start', opacity:loading?.5:1 }}>
              {loading ? 'Submitting…' : 'Request Audit →'}
            </button>
          </form>
        </div>

        <p style={{ textAlign:'center', marginTop:'2rem', fontSize:'.875rem' }}>
          Or email directly at <a href="mailto:genjecx@gmail.com" style={{ color:'var(--pu2)', fontWeight:600 }}>genjecx@gmail.com</a>
        </p>
      </div>
    </section>
  );
}
