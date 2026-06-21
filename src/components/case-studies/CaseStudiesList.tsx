'use client';
import { useState } from 'react';

interface CS {
  id: number;
  title: string;
  industry: string;
  tier: string;
  description: string;
  problem: string;
  approach: string;
  outcome: string;
  status: string;
  pdfFile: string;
}

const STUDIES: CS[] = [
  {
    id: 1,
    title: 'HookBank Cross-Platform',
    industry: 'Content Intelligence',
    tier: 'Tier-1',
    description: 'LLM-powered hook generation tool trained on real human conversations for platform-specific content creation.',
    problem: 'Content creators spending 4–6 hours per week researching effective hooks across platforms with no systematic intelligence behind the process.',
    approach: 'Multi-platform content ingestion pipeline → hook pattern extraction and classification → LLM fine-tuned on high-engagement conversation datasets → platform-specific output formatting.',
    outcome: 'Hook generation time reduced from hours to seconds. 3× average improvement in engagement rate on generated content across tested platforms.',
    status: 'Portfolio Ready',
    pdfFile: '/pdfs/hookbank.pdf',
  },
  {
    id: 2,
    title: 'Personal Brandwriter',
    industry: 'Brand Brain, Voice AI',
    tier: 'Tier-2',
    description: 'Custom multi-pipeline AI system that encodes founder identity to automate content creation, asset reuse, editing, and long-term scheduling.',
    problem: 'Founder unable to maintain consistent brand voice at scale. Ghostwriters failed to capture authentic personality. Content velocity was the primary business bottleneck.',
    approach: 'Brand voice encoding from existing content library → multi-pipeline architecture separating ideation, drafting, and editing → long-term memory of assets, decisions, and style constraints across sessions.',
    outcome: 'Content production velocity increased 8×. Brand consistency maintained across 6 platforms without manual editing cycles. Founder time spent on content reduced by over 70%.',
    status: 'Portfolio Ready',
    pdfFile: '/pdfs/brand-writer.pdf',
  },
  {
    id: 3,
    title: 'Personality Neural Models',
    industry: 'AI & Personality Systems',
    tier: 'Tier-3',
    description: 'High-EQ personality-specific neural networks including Sara and Alexa — with bounded behavioural systems and emotional coherence across long conversations.',
    problem: 'LLM-based personas drifted from defined personality across extended conversations. No existing mechanism for stable behavioural boundaries or genuine emotional consistency under adversarial conditions.',
    approach: 'Custom RNN-CNN hybrid trained on personality-conditioned dialogue datasets. Triplet loss for emotional consistency enforcement. Behavioural boundary layer with out-of-character detection and recovery.',
    outcome: 'Fully trained neural networks with stable personality maintained across multi-turn conversations. Bounded behaviour that does not drift under adversarial prompting or topic shifts.',
    status: 'Portfolio Ready',
    pdfFile: '/pdfs/custom-neural-networks.pdf',
  },
  {
    id: 4,
    title: 'TalentForge AI',
    industry: 'Recruitment & Talent Intelligence',
    tier: 'Tier-1',
    description: 'A multi-agent Talent Intelligence Operating System designed to automate the hiring lifecycle through seven specialized AI agents.',
    problem: 'Recruiters drown in 500–1000 resumes per opening with inconsistent evaluation criteria across interviewers, stretching hiring cycles to 20–45 days and losing top candidates to slower decisions.',
    approach: 'Seven-agent pipeline (Job Description → Resume Screening → Skill Extraction → Matching → Interview → Evaluation → Offer) coordinated through a Mission Control command center, with local LLM inference via Ollama for data privacy.',
    outcome: 'Job Description Agent is production-ready and generating structured specifications; the remaining six agents and candidate workflow are in active development.',
    status: 'Active Research',
    pdfFile: '/pdfs/hiring-ai.pdf',
  },
  {
    id: 5,
    title: 'Audience Engagement Copilot',
    industry: 'Founder Content & Personal Brand',
    tier: 'Tier-1',
    description: 'An engagement intelligence layer that helps founders think before they comment, rather than generating generic AI-sounding replies.',
    problem: 'Founders know LinkedIn engagement builds visibility, but forming an original, well-reasoned response to every post is cognitively expensive — most engagement collapses into empty agreement or silence.',
    approach: 'Seven-agent pipeline interprets each post for hidden claims and contrarian angles, selects an engagement strategy (Hidden Layer, Pattern Recognition, Reality Compression, and others), generates multiple comment options, then rewrites them to match the founder\'s authentic voice before a quality filter and ranking pass.',
    outcome: 'Architecture and agent pipeline fully designed; voice-matching and strategy-selection layers are the system\'s strongest technical differentiator versus generic comment generators.',
    status: 'Active Research',
    pdfFile: '/pdfs/linkedin-copilot.pdf',
  },
  {
    id: 6,
    title: 'Kimbal CEO Personal Brain',
    industry: 'Executive Intelligence & RAG',
    tier: 'Tier-2',
    description: 'A self-hosted Executive Operating System that turns fragmented enterprise communication into persistent organizational memory.',
    problem: 'Critical business context — commitments, vendor follow-ups, relationship history — sits buried inside years of email, Teams, Notion, and Drive activity, with no way for an executive to ask "what\'s currently pending?" and get a real answer.',
    approach: 'Five-layer architecture: data ingestion from Outlook/Teams/Notion/Drive, knowledge processing into entities, an organizational memory layer (Person, Company, Project, Timeline), hybrid retrieval (semantic + metadata + relationship + timeline), and an executive intelligence layer for commitment tracking, escalation detection, and daily briefings.',
    outcome: 'Establishes a working foundation for commitment lifecycle tracking and evidence-based executive intelligence, built on Qdrant, Qwen 3, and a fully self-hosted stack.',
    status: 'Active Research',
    pdfFile: '/pdfs/rag-ceo.pdf',
  },
  {
    id: 7,
    title: 'Ditto AI',
    industry: 'Knowledge Engineering & Neuro-Symbolic AI',
    tier: 'Tier-2',
    description: 'An ontology-driven neuro-symbolic intelligence platform that converts unstructured organizational knowledge into explainable machine intelligence.',
    problem: 'Research-intensive organizations accumulate knowledge across documents and expert memory that LLMs alone struggle to reason over reliably — answers lack explainability and contradictions go undetected.',
    approach: 'Combines ontology engineering, knowledge graph infrastructure, GraphRAG retrieval, and a neuro-symbolic reasoning framework where a neural layer handles language understanding and a symbolic layer enforces rule validation and contradiction detection.',
    outcome: 'Delivers multi-hop reasoning and fully traceable answers — every conclusion links back to source evidence, graph relationships, and ontology rules.',
    status: 'Active Research',
    pdfFile: '/pdfs/ditto-ai.pdf',
  },
  {
    id: 8,
    title: 'Obsidian',
    industry: 'Personal Intelligence & Cognitive Infrastructure',
    tier: 'Tier-3',
    description: 'A personal cognitive infrastructure that turns fragmented notes and experiences into a structured, reasoning semantic knowledge network.',
    problem: 'Valuable ideas accumulate across thousands of disconnected notes — keyword search misses conceptually related material, and there is no way to see how one\'s own thinking has evolved or where it contradicts itself.',
    approach: 'Four-layer cognitive model (Canonical Knowledge, Interpretive Knowledge, Memory, Relationship Intelligence) using explicit semantic relationship types rather than generic links, plus four synthesis modes: associative, analytical, temporal, and contradiction detection.',
    outcome: 'Establishes a cognitive timeline capable of answering "how has my thinking changed?" — positioning the system as intelligence infrastructure rather than a note-taking app.',
    status: 'Active Research',
    pdfFile: '/pdfs/obsidian-ai.pdf',
  },
  {
    id: 9,
    title: 'BrandWriter — Intelligence Infrastructure',
    industry: 'Personal Brand Intelligence',
    tier: 'Tier-3',
    description: 'A far deeper evolution of GenJecX\'s BrandWriter line — a Personal Brand Operating System that understands a founder\'s brand before it writes a single word.',
    problem: 'Most AI writing tools forget everything after each session, forcing founders to repeat tone instructions endlessly, while years of accumulated content yield no real intelligence about what actually works.',
    approach: 'Thirteen-stage pipeline: knowledge foundation → knowledge graph → memory system (explicit, implicit, platform, style) → content understanding engine → retrieval engine → nine-agent orchestration (Brand, Audience, Research, Memory, Strategy, Sentiment, Writer, Editor, Compliance, Learning) → reasoning engine → multi-platform generation → feedback learning → predictive intelligence → Digital Twin.',
    outcome: 'The Digital Twin layer is the long-term differentiator — a living representation of the founder\'s expertise and voice capable of answering "what would this founder naturally write?" This is distinct from the existing Tier-2 BrandWriter content pipeline, which remains a separate, simpler product.',
    status: 'Active Research',
    pdfFile: '/pdfs/brandwriter-tier3.pdf',
  },
];

const TIER_COLORS: Record<string, string> = {
  'Tier-1': 'var(--sage2)',
  'Tier-2': 'var(--gold)',
  'Tier-3': 'var(--pu2)',
};

const INCLUDES = [
  'Problem Definition & Context',
  'Why Existing Solutions Failed',
  'System Architecture & Components',
  'Data Strategy & Organisation',
  'Custom Intelligence & Training',
  'Engineering Challenges & Solutions',
  'Outcomes & Capabilities',
  'Technical Specifications & Performance',
];

function PDFModal({ url, onClose }: { url: string; onClose: () => void }) {
  return (
    <div
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.8)', zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', backdropFilter: 'blur(12px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="gx-card" style={{ width: '100%', maxWidth: 900, height: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--b)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h3 style={{ fontSize: '1rem', margin: 0 }}>Case Study PDF</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--t2)', padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" /></svg>
          </button>
        </div>
        <div style={{ flex: 1, overflow: 'hidden', background: 'var(--card2)' }}>
          <iframe key={url} src={`${url}#toolbar=1&navpanes=0`} style={{ width: '100%', height: '100%', border: 'none' }} title="Case Study PDF" />
        </div>
        <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid var(--b)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <p style={{ fontSize: '.8rem', color: 'var(--t3)', margin: 0 }}>Use your browser's print function to save as PDF</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <a href={url} download className="gx-btn gx-btn-fill" style={{ padding: '.55rem 1.1rem', fontSize: '.8rem' }}>Download</a>
            <button onClick={onClose} className="gx-btn gx-btn-ghost" style={{ padding: '.55rem 1.1rem', fontSize: '.8rem' }}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesList() {
  const [pdf, setPdf] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  const tilt = (e: React.MouseEvent<HTMLDivElement>, tc: string) => {
    const el = e.currentTarget as HTMLElement, r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - .5) * 12;
    const y = ((e.clientY - r.top) / r.height - .5) * -10;
    el.style.transition      = 'box-shadow .25s, border-color .2s';
    el.style.transitionDelay = '0s';
    el.style.transform   = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) translateY(-10px) translateZ(20px)`;
    el.style.boxShadow   = `0 40px 80px rgba(0,0,0,.65), 0 0 44px ${tc}22`;
    el.style.borderColor = `${tc}45`;
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
    <section className="gx-sec">
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="gx-card" style={{ padding: '1.25rem 1.5rem', marginBottom: '2.5rem', borderColor: 'rgba(124,58,237,.2)', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, var(--pu2), transparent)' }} />
          <p style={{ fontSize: '.875rem', margin: 0 }}>
            <span style={{ color: 'var(--t1)', fontWeight: 600 }}>Portfolio Overview:</span> Each case study documents a real engineering problem, the approach taken, and what the system achieved. Click to read the detailed PDF including architecture diagrams and technical specifications.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {STUDIES.map(s => {
            const tc = TIER_COLORS[s.tier] || 'var(--pu2)';
            const isOpen = expanded === s.id;
            return (
              <div
                key={s.id}
                className="gx-card"
                style={{ position: 'relative', overflow: 'hidden', willChange: 'transform' }}
                onMouseMove={e => tilt(e, tc)}
                onMouseLeave={untilt}
              >
                <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${tc}, transparent)` }} />

                {/* Header row */}
                <div style={{ padding: '1.875rem', paddingBottom: isOpen ? '1rem' : '1.875rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '.875rem' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '.35rem' }}>
                        <h3 style={{ fontSize: '1.15rem', margin: 0 }}>{s.title}</h3>
                        <span style={{ padding: '3px 10px', borderRadius: 999, fontSize: '.65rem', fontWeight: 700, fontFamily: 'var(--fm)', background: `${tc}15`, color: tc, border: `1px solid ${tc}30`, flexShrink: 0 }}>{s.tier}</span>
                      </div>
                      <p style={{ fontSize: '.875rem', margin: 0 }}>{s.description}</p>
                    </div>
                  </div>

                  {/* Meta row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '.78rem', color: 'var(--t3)' }}>
                      <span style={{ color: 'var(--t2)', fontWeight: 600 }}>Industry:</span> {s.industry}
                    </span>
                    <span style={{ fontSize: '.75rem', color: 'var(--sage2)', fontFamily: 'var(--fm)' }}>{s.status}</span>
                  </div>
                </div>

                {/* Expandable detail */}
                {isOpen && (
                  <div style={{ padding: '0 1.875rem 1.875rem', borderTop: '1px solid var(--b)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', paddingTop: '1.25rem' }}>
                      {[
                        { label: 'Problem', text: s.problem, col: '#a78bfa' },
                        { label: 'Approach', text: s.approach, col: '#c9943a' },
                        { label: 'Outcome', text: s.outcome, col: '#2dd4bf' },
                      ].map((block, bi) => (
                        <div key={bi} style={{ padding: '1.1rem', background: 'var(--bg)', borderRadius: 'var(--r)', border: `1px solid ${block.col}18` }}>
                          <div style={{ fontSize: '.62rem', fontFamily: 'var(--fm)', color: block.col, textTransform: 'uppercase', letterSpacing: '.1em', fontWeight: 700, marginBottom: '.5rem' }}>{block.label}</div>
                          <p style={{ fontSize: '.825rem', margin: 0, lineHeight: 1.7 }}>{block.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action row */}
                <div style={{ padding: '1rem 1.875rem', borderTop: '1px solid var(--b)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', background: 'rgba(255,255,255,.012)' }}>
                  <button
                    onClick={() => setExpanded(isOpen ? null : s.id)}
                    className="gx-btn gx-btn-ghost"
                    style={{ padding: '.45rem .9rem', fontSize: '.78rem' }}
                  >
                    {isOpen ? '↑ Collapse' : '↓ Problem · Approach · Outcome'}
                  </button>
                  <button
                    className="gx-btn gx-btn-fill"
                    style={{ padding: '.55rem 1.25rem', fontSize: '.8rem' }}
                    onClick={() => { setPdf(null); setTimeout(() => setPdf(s.pdfFile), 0); }}
                  >
                    View Case Study →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="gx-card" style={{ padding: '1.625rem' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1rem' }}>What Each Case Study Includes</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 8 }}>
            {INCLUDES.map((inc, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, fontSize: '.845rem' }}>
                <span style={{ color: 'var(--pu2)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ color: 'var(--t2)' }}>{inc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {pdf && <PDFModal url={pdf} onClose={() => setPdf(null)} />}
    </section>
  );
}
