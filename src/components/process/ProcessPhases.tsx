'use client';
import { useEffect, useRef } from 'react';

const PHASES = [
  {
    n: 1,
    title: 'Discovery',
    desc: 'We spend time understanding your problem, its constraints, and what success actually means. Discovery is not a kickoff call — it is structured research into the problem space before any architecture decisions are made.',
    c: 'var(--pu2)',
    detail: 'Problem framing · Constraint mapping · Success definition',
  },
  {
    n: 2,
    title: 'Knowledge Engineering',
    desc: 'We structure domain intelligence into learnable representations. This includes data strategy, labelling methodology, synthetic data requirements, and knowledge architecture — the foundation everything depends on.',
    c: 'var(--gold)',
    detail: 'Data strategy · Knowledge graph design · Labelling infrastructure',
  },
  {
    n: 3,
    title: 'System Architecture',
    desc: 'We design the complete system from first principles. Every component selected for fit — not hype. This phase determines whether we build custom models, adapt existing architectures, or engineer a hybrid approach.',
    c: 'var(--sage)',
    detail: 'Architecture design · Component selection · Integration planning',
  },
  {
    n: 4,
    title: 'Development',
    desc: 'We build and train. We document training dynamics, failure modes, and learning curves. We iterate based on validation results, not marketing timelines. Every decision is traceable and reasoned.',
    c: 'var(--pu)',
    detail: 'Model development · Training pipelines · Iteration cycles',
  },
  {
    n: 5,
    title: 'Evaluation',
    desc: 'We test intelligence quality against real constraints — latency budgets, resource limits, domain expert review, and edge case analysis. Evaluation is a research phase, not a checkbox at the end.',
    c: 'var(--pu2)',
    detail: 'Benchmarking · Domain expert validation · Failure mode analysis',
  },
  {
    n: 6,
    title: 'Deployment',
    desc: 'We deploy production-ready systems with monitoring, alerting, and rollback capability. Integration with your infrastructure is handled carefully — inference servers, data pipelines, and access control are all addressed.',
    c: 'var(--gold)',
    detail: 'Production deployment · Infrastructure integration · Monitoring setup',
  },
  {
    n: 7,
    title: 'Evolution',
    desc: 'Intelligence does not stop improving at launch. We track performance, update knowledge bases, expand capabilities, and redesign components as the problem domain evolves. This is where long-term value compounds.',
    c: 'var(--sage)',
    detail: 'Knowledge updates · Capability expansion · Long-term optimisation',
  },
];

export default function ProcessPhases() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.gx-left').forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.09}s`;
          el.classList.add('gx-in');
        });
      });
    }, { threshold: 0.04 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="gx-sec gx-top-glow" style={{ background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', left: '-8%', top: '-15%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,148,58,.045) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <div className="gx-reveal" style={{ marginBottom: '3.5rem' }}>
          <span className="gx-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Our Process</span>
          <h2 style={{ marginBottom: '.75rem' }}>A Deliberate <span className="gx-gt">Sequence</span></h2>
          <p style={{ maxWidth: 520 }}>Seven phases. Each builds on the previous. No shortcuts — because the quality of intelligence is determined by the quality of the process that creates it.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem', position: 'relative' }}>
          <div aria-hidden style={{ position: 'absolute', left: 20, top: 24, bottom: 24, width: 1, background: 'linear-gradient(to bottom, var(--pu2), var(--gold), var(--sage), var(--pu), var(--pu2), var(--gold), var(--sage))', opacity: .18, zIndex: 0 }} />

          {PHASES.map((p, i) => (
            <div
              key={i}
              className="gx-left gx-card"
              style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start', cursor: 'default', position: 'relative', zIndex: 1, transition: 'border-color .3s, transform .3s, box-shadow .3s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${p.c}40`; el.style.transform = 'translateX(6px)'; el.style.boxShadow = `0 12px 36px rgba(0,0,0,.4), 0 0 20px ${p.c}08`; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--b)'; el.style.transform = ''; el.style.boxShadow = ''; }}
            >
              <div style={{ width: 42, height: 42, borderRadius: 999, background: `${p.c}14`, border: `1px solid ${p.c}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'var(--fm)', fontWeight: 700, fontSize: '.8rem', color: p.c }}>
                {String(p.n).padStart(2, '0')}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: p.c, marginBottom: '.35rem', fontSize: '1rem' }}>{p.title}</h3>
                <p style={{ fontSize: '.875rem', marginBottom: '.65rem' }}>{p.desc}</p>
                <div style={{ fontSize: '.65rem', fontFamily: 'var(--fm)', color: 'var(--t3)', letterSpacing: '.04em' }}>{p.detail}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="gx-reveal gx-card" style={{ padding: '1.25rem 1.5rem', borderColor: 'rgba(124,58,237,.2)' }}>
          <p style={{ fontSize: '.875rem', margin: 0 }}>
            <span style={{ color: 'var(--t1)', fontWeight: 600 }}>Key Principle:</span> We do not promise timelines because custom intelligence cannot be commodified. What matters is that the system works. The Evolution phase is not optional — it is where long-term value is built.
          </p>
        </div>
      </div>
    </section>
  );
}
