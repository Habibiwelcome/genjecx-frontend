'use client';
import { useState, useEffect, useRef } from 'react';

interface Review { id: number; name: string; role: string | null; company: string | null; content: string; rating: number; }

const API = typeof window !== 'undefined' ? (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000') : '';

const DEMO: Review[] = [
  { id: 1, name: 'Ananya Mehta', role: 'CTO', company: 'Finvault AI', content: 'GenJecX built us a custom classification model that outperformed our previous GPT-4 pipeline by 3.8× at a fraction of the latency. Genuinely impressive research depth.', rating: 5 },
  { id: 2, name: 'Rajan Suri', role: 'Head of Data', company: 'MediCore Systems', content: 'The architecture audit surfaced three critical failure modes we had missed entirely. The report was the most technically rigorous review our team has ever received.', rating: 5 },
  { id: 3, name: 'Priya Nair', role: 'Founder', company: 'Lumos Analytics', content: 'They refused to use off-the-shelf models when a custom approach was clearly superior. That kind of intellectual honesty is rare in any AI firm.', rating: 5 },
];

function Stars({ n, size = 15 }: { n: number; size?: number }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill={i <= n ? '#c9943a' : 'rgba(255,255,255,0.1)'}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [idx, setIdx]         = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState<{ type: 'ok' | 'err'; text: string } | null>(null);
  const [form, setForm] = useState({ name: '', role: '', company: '', content: '', rating: 5, email: '' });
  const ref = useRef<HTMLElement>(null);
  const cur = reviews[idx];

  useEffect(() => {
    const load = async () => {
      try {
        const r = await fetch(`${API}/api/v1/reviews/featured?limit=10`);
        if (!r.ok) throw new Error();
        const data = await r.json();
        setReviews(Array.isArray(data) && data.length ? data : DEMO);
      } catch { setReviews(DEMO); }
      finally { setLoading(false); }
    };
    load();
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-reveal').forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.1}s`;
          el.classList.add('gx-in');
        });
      });
    }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setSubmitting(true); setMsg(null);
    try {
      const r = await fetch(`${API}/api/v1/reviews`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if (!r.ok) throw new Error();
      setMsg({ type: 'ok', text: 'Thank you! Your review has been submitted.' });
      setForm({ name: '', role: '', company: '', content: '', rating: 5, email: '' });
      setTimeout(() => { setShowForm(false); setMsg(null); }, 3000);
    } catch { setMsg({ type: 'err', text: 'Could not submit — please email us directly at genjecx@gmail.com' }); }
    finally { setSubmitting(false); }
  };

  return (
    <section ref={ref} className="gx-sec" style={{ background: 'var(--bg2)' }}>
      <div className="gx-inner">

        {/* Header */}
        <div className="gx-reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="gx-badge" style={{ marginBottom: '0.9rem', display: 'inline-flex' }}>Client Testimonials</span>
            <h2>What Clients <span className="gx-gt">Say</span></h2>
          </div>
          <button className="gx-btn gx-btn-ghost" onClick={() => setShowForm(f => !f)}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 4v16M4 12h16" strokeLinecap="round"/></svg>
            {showForm ? 'Close' : 'Share review'}
          </button>
        </div>

        {/* Inline form */}
        {showForm && (
          <div className="gx-card" style={{ padding: '2rem', marginBottom: '2.5rem', borderColor: 'rgba(91,33,182,.25)' }}>
            <h3 style={{ marginBottom: '1.25rem', fontSize: '1.05rem' }}>Share Your Experience</h3>
            {msg && (
              <div style={{ padding: '0.875rem 1rem', borderRadius: 'var(--r)', marginBottom: '1.25rem', fontSize: '0.875rem', background: msg.type === 'ok' ? 'rgba(45,212,191,.08)' : 'rgba(167,139,250,.08)', border: `1px solid ${msg.type === 'ok' ? 'rgba(45,212,191,.3)' : 'rgba(167,139,250,.3)'}`, color: msg.type === 'ok' ? '#2dd4bf' : '#a78bfa' }}>{msg.text}</div>
            )}
            <form onSubmit={submit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem', marginBottom: '1rem' }}>
                {[['name','Name *','text',true],['email','Email','email',false],['role','Role','text',false],['company','Company','text',false]].map(([n,l,t,req]) => (
                  <div key={String(n)}>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--t2)', marginBottom: 5, fontFamily: 'var(--fm)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{String(l)}</label>
                    <input type={String(t)} required={Boolean(req)} value={(form as any)[String(n)]} onChange={e => setForm(f => ({ ...f, [String(n)]: e.target.value }))} placeholder={String(l).replace(' *', '')}/>
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--t2)', marginBottom: 8, fontFamily: 'var(--fm)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Rating</label>
                <div style={{ display: 'flex', gap: 6 }}>
                  {[1,2,3,4,5].map(s => (
                    <button key={s} type="button" onClick={() => setForm(f => ({ ...f, rating: s }))} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2, transition: 'transform .15s' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.2)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = '')}
                    >
                      <svg width="22" height="22" viewBox="0 0 20 20" fill={s <= form.rating ? '#c9943a' : 'rgba(255,255,255,0.12)'}>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--t2)', marginBottom: 6, fontFamily: 'var(--fm)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Review *</label>
                <textarea rows={4} required minLength={10} value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} placeholder="Share your experience with GenJecX..." style={{ resize: 'none' }}/>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button type="submit" disabled={submitting} className="gx-btn gx-btn-fill">{submitting ? 'Submitting…' : 'Submit Review'}</button>
                <button type="button" className="gx-btn gx-btn-ghost" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        )}

        {loading ? (
          <div className="gx-card" style={{ padding: '3rem', textAlign: 'center' }}><p>Loading reviews…</p></div>
        ) : (
          <>
            {/* Featured review */}
            <div className="gx-reveal gx-card" style={{ marginBottom: '1.25rem', position: 'relative', overflow: 'hidden', borderColor: 'rgba(91,33,182,.2)' }}>
              <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #a78bfa, #c9943a, transparent)' }} />
              <div aria-hidden style={{ position: 'absolute', top: 0, right: 0, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,33,182,.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

              {/* Fixed-height content area prevents layout shift when review changes */}
              <div style={{ padding: '2.5rem', minHeight: 240, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <Stars n={cur?.rating || 5} size={16} />
                  <blockquote style={{ fontSize: 'clamp(0.95rem,1.6vw,1.15rem)', fontWeight: 600, color: 'var(--t1)', lineHeight: 1.65, margin: '1.25rem 0 1.5rem', letterSpacing: '-0.01em', fontStyle: 'normal' }}>
                    &ldquo;{cur?.content}&rdquo;
                  </blockquote>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, #5b21b6, #c9943a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--f)', fontWeight: 800, fontSize: '1rem', color: '#fff', flexShrink: 0 }}>
                      {cur?.name?.[0] || '?'}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--t1)' }}>{cur?.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--t3)', fontFamily: 'var(--fm)' }}>{[cur?.role, cur?.company].filter(Boolean).join(' · ')}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {[['prev', 'M15 19l-7-7 7-7'], ['next', 'M9 5l7 7-7 7']].map(([dir, path]) => (
                      <button key={dir}
                        onClick={() => setIdx(i => dir === 'prev' ? (i - 1 + reviews.length) % reviews.length : (i + 1) % reviews.length)}
                        style={{ width: 44, height: 44, borderRadius: 999, border: '1px solid var(--b2)', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--t2)', transition: 'all .2s', flexShrink: 0 }}
                        onMouseEnter={e => { const t = e.currentTarget; t.style.borderColor = '#a78bfa'; t.style.color = '#a78bfa'; t.style.background = 'rgba(167,139,250,.1)'; }}
                        onMouseLeave={e => { const t = e.currentTarget; t.style.borderColor = 'var(--b2)'; t.style.color = 'var(--t2)'; t.style.background = 'transparent'; }}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d={path as string} strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dot nav */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginBottom: '2rem' }}>
              {reviews.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} aria-label={`Review ${i + 1}`}
                  style={{ WebkitAppearance: 'none', appearance: 'none', display: 'block', lineHeight: 0, margin: 0, outline: 'none', width: i === idx ? 28 : 9, height: 9, minHeight: 9, maxHeight: 9, borderRadius: 999, border: 'none', cursor: 'pointer', transition: 'all .35s cubic-bezier(.16,1,.3,1)', background: i === idx ? '#a78bfa' : 'rgba(167,139,250,.35)', padding: 0, boxShadow: i === idx ? '0 0 14px rgba(167,139,250,.75)' : 'none', flexShrink: 0, minWidth: 9 }}/>
              ))}
            </div>

            {/* Mini cards — stable layout, same cards always shown, just hide current */}
            <style>{`
              .rv-mini-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1rem; }
              @media (max-width: 480px) { .rv-mini-grid { grid-template-columns: 1fr; } }
            `}</style>
            <div className="rv-mini-grid" style={{ minHeight: 160 }}>
              {reviews.slice(0, 3).map((rv, i) => {
                const isCurrent = i === idx;
                return (
                  <div key={rv.id} className="gx-card"
                    style={{ padding: '1.4rem', cursor: isCurrent ? 'default' : 'pointer', transition: 'border-color .25s, transform .25s, opacity .25s', opacity: isCurrent ? 0.35 : 1, borderColor: isCurrent ? 'rgba(167,139,250,.35)' : 'var(--b)' }}
                    onClick={() => !isCurrent && setIdx(reviews.findIndex(r => r.id === rv.id))}
                    onMouseEnter={e => { if (!isCurrent) { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(167,139,250,.35)'; t.style.transform = 'translateY(-4px)'; } }}
                    onMouseLeave={e => { if (!isCurrent) { const t = e.currentTarget as HTMLElement; t.style.borderColor = ''; t.style.transform = ''; } }}
                  >
                    <Stars n={rv.rating || 5} size={12} />
                    <p style={{ fontSize: '0.82rem', marginTop: '0.75rem', marginBottom: '0.75rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', color: 'var(--t2)' }}>
                      &ldquo;{rv.content}&rdquo;
                    </p>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--t1)' }}>{rv.name}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--t3)', fontFamily: 'var(--fm)' }}>{rv.company}</div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
