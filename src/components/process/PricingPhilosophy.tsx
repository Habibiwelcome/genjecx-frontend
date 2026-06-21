'use client';
import { useEffect, useRef } from 'react';

const PRICING_MODELS = [
  {
    title: 'Build Fee',
    tag: 'One-Time',
    col: '#a78bfa',
    bg: 'rgba(167,139,250,.07)',
    border: 'rgba(167,139,250,.2)',
    icon: '◈',
    price: '₹75K – ₹5L+',
    priceUnit: 'one-time',
    summary: 'A one-time fee for creating a complete AI system. Research, architecture, knowledge engineering, development, testing, and deployment. Ownership transfers fully to you at completion.',
    includes: ['Research & Problem Framing', 'System Architecture', 'Knowledge Engineering', 'Development & Training', 'Testing & Evaluation', 'Deployment'],
    examples: ['AI Assistants', 'Fitness Platforms', 'Internal Tools', 'Knowledge Bases'],
    think: 'Build Once. Own It.',
  },
  {
    title: 'Monthly Retainer',
    tag: 'Ongoing',
    col: '#c9943a',
    bg: 'rgba(201,148,58,.07)',
    border: 'rgba(201,148,58,.2)',
    icon: '◆',
    price: '₹10K – ₹25K+',
    priceUnit: '/month',
    summary: 'You own the system. GenJecX continuously improves it. Used when a client owns the intelligence and wants ongoing evolution — knowledge updates, feature additions, and performance improvements.',
    includes: ['Knowledge Updates', 'Prompt Improvements', 'Workflow Enhancements', 'New Feature Development', 'Monitoring & Support'],
    examples: ['Any owned AI system requiring ongoing improvement'],
    think: 'Build Once → Improve Continuously',
  },
  {
    title: 'Setup Fee',
    tag: 'Infrastructure Entry',
    col: '#2dd4bf',
    bg: 'rgba(45,212,191,.07)',
    border: 'rgba(45,212,191,.2)',
    icon: '◇',
    price: '₹4L – ₹10L+',
    priceUnit: 'one-time',
    summary: 'Used when entering GenJecX infrastructure. Covers full discovery, architecture design, integrations, and initial deployment into a managed intelligence environment.',
    includes: ['Discovery Sessions', 'Architecture Design', 'System Integrations', 'Configuration', 'Initial Deployment'],
    examples: ['Enterprise AI platforms', 'Multi-agent deployments', 'Intelligence infrastructure'],
    think: 'Infrastructure Onboarding',
  },
  {
    title: 'Infrastructure Subscription',
    tag: 'Active Operation',
    col: '#a78bfa',
    bg: 'rgba(167,139,250,.07)',
    border: 'rgba(167,139,250,.2)',
    icon: '⬡',
    price: '₹1L – ₹1.5L+',
    priceUnit: '/month',
    summary: 'GenJecX actively operates your intelligence systems. We run, monitor, engineer knowledge, and continuously evolve capabilities. Used when the intelligence is too critical or complex to hand off.',
    includes: ['Knowledge Engineering', 'Evaluation & Monitoring', 'Optimization', 'Hosting & Infrastructure', 'Vector Retrieval Systems', 'Capability Evolution'],
    examples: ['Executive Intelligence', 'Healthcare Platforms', 'Multi-Agent Systems'],
    think: 'Intelligence-as-Infrastructure',
  },
];

const TIERS = [
  {
    n: '01', tier: 'Tier 1', name: 'AI-Powered Business Systems',
    price: '₹50,000 – ₹2,00,000',
    col: '#2dd4bf', bg: 'rgba(45,212,191,.06)', border: 'rgba(45,212,191,.2)',
    examples: ['AI Chatbots', 'AI Search', 'Internal Assistants', 'Content Systems'],
    desc: 'Intelligence applied to existing business workflows. LLM-powered systems with orchestration layers built on your data, processes, and domain knowledge.',
  },
  {
    n: '02', tier: 'Tier 2', name: 'Domain Intelligence Systems',
    price: '₹2,00,000 – ₹10,00,000',
    col: '#c9943a', bg: 'rgba(201,148,58,.06)', border: 'rgba(201,148,58,.2)',
    examples: ['Industry-Specific AI', 'Knowledge Platforms', 'Decision Support', 'Workflow Automation'],
    desc: 'Deep domain specialization. Adapted models and custom pipelines engineered around the nuances of specific industries and problem types.',
  },
  {
    n: '03', tier: 'Tier 3', name: 'Proprietary Intelligence Platforms',
    price: '₹5,00,000 – ₹20,00,000+',
    col: '#a78bfa', bg: 'rgba(167,139,250,.06)', border: 'rgba(167,139,250,.2)',
    examples: ['Multi-Agent Systems', 'Research Platforms', 'Intelligence Infrastructure', 'Custom Architectures'],
    desc: 'Full research and development. Proprietary models built from scratch on domain-specific data. For organisations solving novel problems that demand custom-trained intelligence.',
  },
];

const FACTORS = [
  { f: 'Problem Complexity',     e: 'Novel domains require more research. Well-understood domains require less. The harder the problem, the deeper the investment.' },
  { f: 'Data Requirements',      e: 'Do you have clean, labelled data? Do we need to build labelling infrastructure or generate synthetic data? This affects cost significantly.' },
  { f: 'Custom Architecture',    e: 'Adapting existing models vs. building from scratch. Custom neural networks require more research, training cycles, and validation.' },
  { f: 'Integration Complexity', e: 'Real-time requirements, edge deployment, existing infrastructure — these all affect implementation scope and ongoing cost.' },
  { f: 'Domain Expertise',       e: 'How much do we need to contribute to problem framing? The less domain knowledge on the client side, the more GenJecX must provide.' },
  { f: 'Timeline Flexibility',   e: 'Urgency has a premium. We do not rush research — but if urgency is required, it is priced accordingly.' },
];

export default function PricingPhilosophy() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-depth,.gx-reveal,.gx-left,.gx-right').forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.07}s`;
          el.classList.add('gx-in');
        });
      });
    }, { threshold: 0.05 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="gx-sec" style={{ background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: '-20%', right: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,33,182,.055) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-15%', left: '-8%', width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,212,191,.035) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <style>{`
        .pp-model-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.1rem; }
        @media (max-width: 820px) { .pp-model-grid { grid-template-columns: 1fr; } }
        .pp-rule-grid  { display: grid; grid-template-columns: 1fr 1fr; gap: 1.1rem; }
        @media (max-width: 640px) { .pp-rule-grid  { grid-template-columns: 1fr; } }
        .pp-factor-grid{ display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>

        {/* ── 1. How GenJecX Pricing Works ── */}
        <div className="gx-reveal" style={{ maxWidth: 600, marginBottom: '3rem' }}>
          <span className="gx-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Pricing Models</span>
          <h2 style={{ marginBottom: '.75rem' }}>How GenJecX <span className="gx-gt2">Pricing Works</span></h2>
          <p>Four distinct engagement models. The right one depends on whether you need to own the system, operate it through GenJecX, or both — and whether ongoing evolution is part of the requirement.</p>
        </div>

        <div className="pp-model-grid" style={{ marginBottom: '1.1rem' }}>
          {PRICING_MODELS.map((m, i) => (
            <div key={i} className="gx-depth gx-card" style={{ padding: '2rem', cursor: 'default', position: 'relative', overflow: 'hidden', transition: 'border-color .3s, transform .3s, box-shadow .3s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${m.col}35`; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = `0 24px 60px rgba(0,0,0,.5), 0 0 30px ${m.col}0d`; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--b)'; el.style.transform = ''; el.style.boxShadow = ''; }}
            >
              <div aria-hidden style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 1, background: `linear-gradient(90deg, transparent, ${m.col}45, transparent)` }} />
              <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 3, borderRadius: '0 2px 2px 0', background: `linear-gradient(to bottom, ${m.col}, transparent)`, opacity: .75 }} />

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span style={{ fontFamily: 'var(--fm)', fontSize: '1.25rem', color: m.col, lineHeight: 1 }}>{m.icon}</span>
                <span style={{ fontSize: '.6rem', fontFamily: 'var(--fm)', letterSpacing: '.08em', padding: '3px 9px', borderRadius: 999, background: m.bg, color: m.col, border: `1px solid ${m.border}` }}>{m.tag}</span>
              </div>

              <h3 style={{ color: 'var(--t1)', marginBottom: '.5rem', fontSize: '1.05rem' }}>{m.title}</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: '.9rem' }}>
                <span style={{ fontFamily: 'var(--fm)', fontSize: '1.3rem', fontWeight: 800, color: m.col, letterSpacing: '-0.01em' }}>{m.price}</span>
                <span style={{ fontFamily: 'var(--fm)', fontSize: '.7rem', color: 'var(--t3)' }}>{m.priceUnit}</span>
              </div>
              <p style={{ fontSize: '.845rem', marginBottom: '1.25rem', lineHeight: 1.75 }}>{m.summary}</p>

              <div style={{ fontSize: '.6rem', fontFamily: 'var(--fm)', color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '.5rem' }}>Includes</div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: '1.5rem' }}>
                {m.includes.map((inc, j) => (
                  <li key={j} style={{ display: 'flex', gap: 8, fontSize: '.8rem' }}>
                    <span style={{ color: m.col, fontWeight: 700, flexShrink: 0, fontSize: '.75rem', marginTop: 1 }}>✓</span>
                    <span style={{ color: 'var(--t2)' }}>{inc}</span>
                  </li>
                ))}
              </ul>

              <div style={{ borderTop: `1px solid ${m.border}`, paddingTop: '.875rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                <div style={{ fontSize: '.67rem', fontFamily: 'var(--fm)', color: m.col, fontStyle: 'italic' }}>{m.think}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'flex-end' }}>
                  {m.examples.slice(0, 2).map((ex, j) => (
                    <span key={j} style={{ fontSize: '.6rem', fontFamily: 'var(--fm)', padding: '2px 7px', borderRadius: 999, background: m.bg, color: m.col, border: `1px solid ${m.border}` }}>{ex}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gx-reveal gx-card" style={{ padding: '1.25rem 1.5rem', marginBottom: '5rem', borderColor: 'rgba(167,139,250,.2)' }}>
          <p style={{ fontSize: '.875rem', margin: 0 }}><span style={{ color: 'var(--pu2)', fontWeight: 600 }}>A note on naming.</span> Not every recurring fee is an Infrastructure Subscription. A retainer for ongoing improvements is different from operating critical knowledge, retrieval, and analytics infrastructure on a continuous basis. We use the term only when that is genuinely what is happening — otherwise it is a Monthly Retainer.</p>
        </div>

        {/* ── 2. The GenJecX Rule ── */}
        <div className="gx-reveal" style={{ maxWidth: 560, marginBottom: '2.25rem' }}>
          <span className="gx-badge" style={{ marginBottom: '1rem', display: 'inline-flex', background: 'rgba(201,148,58,.1)', color: 'var(--gold)', borderColor: 'rgba(201,148,58,.25)' }}>Decision Framework</span>
          <h2 style={{ marginBottom: '.75rem' }}>The GenJecX <span className="gx-gt2">Rule</span></h2>
          <p>One question determines your engagement model. Answer honestly.</p>
        </div>

        <div className="gx-reveal gx-card" style={{ padding: '1.875rem 2.25rem', marginBottom: '1.1rem', borderColor: 'rgba(201,148,58,.25)', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
          <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--t1)', lineHeight: 1.55, margin: 0, letterSpacing: '-0.01em' }}>
            "If GenJecX disappeared tomorrow, would the system mostly keep working?"
          </p>
        </div>

        <div className="pp-rule-grid" style={{ marginBottom: '5rem' }}>
          <div className="gx-left gx-card" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
            <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, var(--sage2), transparent)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.1rem' }}>
              <div style={{ width: 34, height: 34, borderRadius: 999, background: 'rgba(45,212,191,.12)', border: '1px solid rgba(45,212,191,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--sage2)', fontWeight: 700 }}>✓</div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--sage2)', fontSize: '1.05rem' }}>YES</div>
                <div style={{ fontSize: '.7rem', fontFamily: 'var(--fm)', color: 'var(--t3)' }}>System is self-sufficient</div>
              </div>
            </div>
            <div style={{ fontFamily: 'var(--fm)', fontSize: '.72rem', color: 'var(--sage2)', fontWeight: 600, marginBottom: '.875rem', padding: '.35rem .75rem', background: 'rgba(45,212,191,.06)', borderRadius: 6, border: '1px solid rgba(45,212,191,.15)' }}>→ Build Fee + Monthly Retainer</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['Fitness AI Platforms', 'AI Chatbots & Assistants', 'Internal Knowledge Bases', 'CRM AI Assistants'].map((ex, i) => (
                <li key={i} style={{ display: 'flex', gap: 8, fontSize: '.845rem' }}>
                  <span style={{ color: 'var(--sage2)', flexShrink: 0 }}>›</span>
                  <span style={{ color: 'var(--t2)' }}>{ex}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="gx-right gx-card" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
            <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, var(--pu2), transparent)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.1rem' }}>
              <div style={{ width: 34, height: 34, borderRadius: 999, background: 'rgba(124,58,237,.12)', border: '1px solid rgba(124,58,237,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pu3)', fontWeight: 700 }}>✗</div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--pu3)', fontSize: '1.05rem' }}>NO</div>
                <div style={{ fontSize: '.7rem', fontFamily: 'var(--fm)', color: 'var(--t3)' }}>GenJecX is the infrastructure</div>
              </div>
            </div>
            <div style={{ fontFamily: 'var(--fm)', fontSize: '.72rem', color: 'var(--pu3)', fontWeight: 600, marginBottom: '.875rem', padding: '.35rem .75rem', background: 'rgba(124,58,237,.06)', borderRadius: 6, border: '1px solid rgba(124,58,237,.15)' }}>→ Setup Fee + Infrastructure Subscription</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['Executive Intelligence Systems', 'Healthcare Intelligence Platforms', 'Enterprise Intelligence Networks', 'Multi-Agent AI Systems'].map((ex, i) => (
                <li key={i} style={{ display: 'flex', gap: 8, fontSize: '.845rem' }}>
                  <span style={{ color: 'var(--pu3)', flexShrink: 0 }}>›</span>
                  <span style={{ color: 'var(--t2)' }}>{ex}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── 3. Technical Complexity Tiers ── */}
        <div className="gx-reveal" style={{ maxWidth: 640, marginBottom: '3rem' }}>
          <span className="gx-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Complexity</span>
          <h2 style={{ marginBottom: '.75rem' }}>Technical Complexity <span className="gx-gt">Tiers</span></h2>
          <p>These tiers describe the technical depth of a system and influence project cost. They do <em style={{ fontStyle: 'normal', color: 'var(--t1)', fontWeight: 600 }}>not</em> automatically determine the pricing model — a Tier 2 system can operate under either model depending on requirements.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.25rem' }}>
          {TIERS.map((t, i) => (
            <div key={i} className="gx-reveal gx-card" style={{ padding: '1.875rem', position: 'relative', overflow: 'hidden', cursor: 'default', transition: 'border-color .3s, transform .3s, box-shadow .3s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${t.col}35`; el.style.transform = 'translateX(4px)'; el.style.boxShadow = '0 12px 40px rgba(0,0,0,.4)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--b)'; el.style.transform = ''; el.style.boxShadow = ''; }}
            >
              <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 3, background: `linear-gradient(to bottom, ${t.col}, transparent)` }} />
              <div aria-hidden style={{ position: 'absolute', top: -8, right: 16, fontFamily: 'var(--f)', fontWeight: 800, fontSize: '5.5rem', opacity: .03, color: t.col, lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>{t.n}</div>

              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '.4rem' }}>
                    <span style={{ fontSize: '.6rem', fontFamily: 'var(--fm)', fontWeight: 700, padding: '3px 10px', borderRadius: 999, background: t.bg, color: t.col, border: `1px solid ${t.border}`, letterSpacing: '.08em', textTransform: 'uppercase', flexShrink: 0 }}>{t.tier}</span>
                    <h3 style={{ color: 'var(--t1)', margin: 0, fontSize: '1.05rem' }}>{t.name}</h3>
                  </div>
                  <p style={{ fontSize: '.875rem', margin: 0 }}>{t.desc}</p>
                </div>
                <span style={{ fontFamily: 'var(--fm)', fontSize: '.78rem', color: t.col, background: t.bg, border: `1px solid ${t.border}`, padding: '4px 12px', borderRadius: 999, flexShrink: 0, whiteSpace: 'nowrap' }}>{t.price}</span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, paddingTop: '.875rem', borderTop: '1px solid var(--b)' }}>
                {t.examples.map((ex, j) => (
                  <span key={j} style={{ fontSize: '.67rem', fontFamily: 'var(--fm)', padding: '3px 9px', borderRadius: 999, background: t.bg, color: t.col, border: `1px solid ${t.border}` }}>{ex}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="gx-reveal gx-card" style={{ padding: '1.25rem 1.5rem', marginBottom: '4rem', borderColor: 'rgba(201,148,58,.2)' }}>
          <p style={{ fontSize: '.875rem', margin: 0 }}><span style={{ color: 'var(--gold)', fontWeight: 600 }}>Tier ≠ Pricing Model.</span> Tier describes the depth of the engineering work. The GenJecX Rule determines whether you engage through Build + Retainer or Setup + Subscription. These are independent decisions.</p>
        </div>

        {/* ── 4. What Influences Cost ── */}
        <div className="gx-reveal" style={{ maxWidth: 540, marginBottom: '3rem' }}>
          <span className="gx-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Cost Factors</span>
          <h2 style={{ marginBottom: '.75rem' }}>What <span className="gx-gt">Influences</span> Cost</h2>
          <p>No fixed price lists. Each project is unique. These six factors shape every estimate.</p>
        </div>

        <div className="pp-factor-grid" style={{ marginBottom: '1.5rem' }}>
          {FACTORS.map((it, i) => (
            <div key={i} className="gx-depth gx-card" style={{ padding: '1.4rem', cursor: 'default', transition: 'border-color .3s, transform .3s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(124,58,237,.3)'; el.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--b)'; el.style.transform = ''; }}
            >
              <h4 style={{ color: 'var(--t1)', marginBottom: '.4rem', fontSize: '.95rem' }}>{it.f}</h4>
              <p style={{ fontSize: '.845rem', margin: 0 }}>{it.e}</p>
            </div>
          ))}
        </div>

        <div className="gx-reveal gx-card" style={{ padding: '1.25rem 1.5rem', borderColor: 'rgba(201,148,58,.2)' }}>
          <p style={{ fontSize: '.875rem', margin: 0 }}><span style={{ color: 'var(--gold)', fontWeight: 600 }}>No Discounts. No Surprises.</span> These ranges reflect real costs. Custom intelligence is expensive because it is real work. We do not compete on price. We compete on depth, capability, and long-term value.</p>
        </div>
      </div>
    </section>
  );
}
