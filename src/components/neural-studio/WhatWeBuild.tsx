'use client';
import { useState } from 'react';
import Image from 'next/image';

interface DiagramStep { id: string; title: string; description: string; imagePath: string; }
interface Project { id: number; name: string; shortName: string; tier: 'Tier-1' | 'Tier-2' | 'Tier-3'; description: string; status: string; diagrams: DiagramStep[]; }

const TIERS = [
  { id: 'tier-1', label: 'Applied Intelligence Systems', subtitle: 'Production-Deployed', description: 'Systems built using adapted models, orchestration layers, and applied intelligence patterns to solve real-world business problems.', accent: '#2dd4bf', accentBg: 'rgba(45,212,191,.08)', accentBorder: 'rgba(45,212,191,.2)', n: '01', tier: 'Tier-1' as const },
  { id: 'tier-2', label: 'Hybrid Research Systems',      subtitle: 'Active Development',  description: 'Systems combining research-driven design with adapted models, custom pipelines, and experimental intelligence layers.',                      accent: '#c9943a', accentBg: 'rgba(201,148,58,.08)',  accentBorder: 'rgba(201,148,58,.2)',  n: '02', tier: 'Tier-2' as const },
  { id: 'tier-3', label: 'Foundational Intelligence',    subtitle: 'Research & Production',description: 'Purpose-built neural systems where intelligence is trained from first principles, without dependence on general-purpose LLMs.',               accent: '#a78bfa', accentBg: 'rgba(167,139,250,.08)', accentBorder: 'rgba(167,139,250,.2)', n: '03', tier: 'Tier-3' as const },
];

const STATUS_COLORS: Record<string, string> = { Production: '#2dd4bf', Deployed: '#2dd4bf', 'Active Research': '#c9943a' };

const ALL_PROJECTS: Project[] = [
  { id:1, name:'Nova', shortName:'Nova', tier:'Tier-3', description:'Custom RNN-CNN hybrid neural network for deterministic mathematical reasoning and programming support.', status:'Production',
    diagrams:[
      { id:'nova-1', title:'System Overview',      description:'Black-box view showing how mathematical problems are converted into structured reasoning paths.', imagePath:'/diagrams/tier-3/nova/System-overview.png' },
      { id:'nova-2', title:'Intelligence Placement',description:'Custom RNN-CNN hybrid where logical reasoning is encoded directly in learned weights.',            imagePath:'/diagrams/tier-3/nova/Intelligence-placement.png' },
      { id:'nova-3', title:'Data Flow',             description:'Input tokenization through deterministic inference with bounded output space.',                   imagePath:'/diagrams/tier-3/nova/data-flow.png' },
      { id:'nova-4', title:'Reasoning Path',        description:'How the model decomposes problems and generates step-by-step solutions.',                         imagePath:'/diagrams/tier-3/nova/reasoning-path.png' },
      { id:'nova-5', title:'Training Pipeline',     description:'Custom loss functions and gradient control for precise reasoning behavior.',                       imagePath:'/diagrams/tier-3/nova/training-pipeline.png' },
    ] },
  { id:2, name:'Sara Personality Neural Model', shortName:'Sara', tier:'Tier-3', description:'High-EQ personality-specific neural network with sarcastic, flirtatious, and emotionally intelligent behavior.', status:'Deployed',
    diagrams:[
      { id:'sara-1', title:'Personality Architecture',description:'Standalone neural network with personality constraints embedded at training time.',             imagePath:'/diagrams/tier-3/sara/personality-architecture.png' },
      { id:'sara-2', title:'Trait Encoding',          description:'How sarcasm, flirtation, and emotional intelligence are structurally embedded in weights.',     imagePath:'/diagrams/tier-3/sara/trait-encoding.png' },
      { id:'sara-3', title:'Memory System',           description:'Per-user isolated memory tracking relationship progression and emotional state.',               imagePath:'/diagrams/tier-3/sara/memory-system.png' },
      { id:'sara-4', title:'Response Generation',     description:'How personality constraints guide response synthesis and behavior boundaries.',                 imagePath:'/diagrams/tier-3/sara/response-generation.png' },
    ] },
  { id:3, name:'Alexa Personality Neural Model', shortName:'Alexa', tier:'Tier-3', description:'Empathetic, trust-based personality neural model with emotional consistency and boundary respect.', status:'Deployed',
    diagrams:[
      { id:'alexa-1', title:'Empathy Framework',    description:'Neural architecture optimized for emotional understanding and supportive responses.',            imagePath:'/diagrams/tier-3/alexa/Empathy-Framework.png' },
      { id:'alexa-2', title:'Emotional State',      description:'How emotional consistency is maintained across conversations and interactions.',                 imagePath:'/diagrams/tier-3/alexa/Emotional-State.png' },
      { id:'alexa-3', title:'Boundary Enforcement', description:'Structural constraints preventing emotional over-extension or policy violations.',              imagePath:'/diagrams/tier-3/alexa/Boundary-enforcement.png' },
      { id:'alexa-4', title:'Response Routing',     description:'How user input is routed through empathy and trust layers before generation.',                  imagePath:'/diagrams/tier-3/alexa/Response-Routing.png' },
    ] },
  { id:4, name:'BrandWriter Platform', shortName:'BrandWriter', tier:'Tier-2', description:'Hybrid system combining fine-tuned models with custom content intelligence pipelines.', status:'Active Research',
    diagrams:[
      { id:'bw-1', title:'Platform Overview',   description:'Multi-layer system integrating brand understanding with content generation.',                       imagePath:'/diagrams/tier-2/brandwriter/platform-overview.png' },
      { id:'bw-2', title:'Brand Context Layer', description:'Custom pipeline for encoding brand voice, values, and messaging patterns.',                        imagePath:'/diagrams/tier-2/brandwriter/brand-context-1.png' },
      { id:'bw-3', title:'Brand Context II',    description:'Second-pass encoding refinement for brand voice consistency at scale.',                            imagePath:'/diagrams/tier-2/brandwriter/brand-context-2.png' },
      { id:'bw-4', title:'Content Generation',  description:'Fine-tuned models with custom orchestration for platform-specific outputs.',                       imagePath:'/diagrams/tier-2/brandwriter/content-generration.png' },
      { id:'bw-5', title:'Quality Control',     description:'Validation layers ensuring consistency with brand guidelines and constraints.',                    imagePath:'/diagrams/tier-2/brandwriter/quality-control.png' },
    ] },
  { id:5, name:'Vsai', shortName:'Code Editor', tier:'Tier-2', description:'An intelligent development environment that understands code context, developer intent, and project structure to generate, refactor, and reason about code in real time.', status:'Active Research',
    diagrams:[
      { id:'ce-1', title:'AI Code Editor',    description:'A context-aware code editor that assists developers with intelligent generation, refactoring, debugging, and architectural reasoning.',  imagePath:'/diagrams/tier-2/code-editor/analysis-pipeline.png' },
      { id:'ce-2', title:'Data Ingestion',    description:'Multiple data source integration with real-time processing pipelines.',                                                                  imagePath:'/diagrams/tier-2/code-editor/Data-Pipeline.png' },
      { id:'ce-3', title:'Ranking & Selection',description:'Custom models for evaluating hook performance across platforms.',                                                                      imagePath:'/diagrams/tier-2/code-editor/optimization-engine.png' },
      { id:'ce-4', title:'System Overview',   description:'High-level view of the integrated AI-powered editor pipeline.',                                                                         imagePath:'/diagrams/tier-2/code-editor/System-Overview.png' },
      { id:'ce-5', title:'Editor Pipeline',   description:'End-to-end editor inference pipeline from keystroke to intelligent output.',                                                            imagePath:'/diagrams/tier-2/code-editor/editor-pipeline.png' },
    ] },
  { id:6, name:'Podcast Topic Recommender', shortName:'Topic Recommender', tier:'Tier-2', description:'A calm, brand-aware content brain that helps a Gen Z mental health podcast discover, refine, and speak ideas that feel like home.', status:'Production',
    diagrams:[
      { id:'tr-1', title:'System Architecture',   description:'A pastel-soft recommender that generates thoughtful mental health topics guided by psychology, relatability, and emotional safety.', imagePath:'/diagrams/tier-2/topic-recommender/system-overview.png' },
      { id:'tr-2', title:'Analysis Pipeline',     description:'Real-time data collection from Reddit, YouTube, and Instagram sources.',                                                             imagePath:'/diagrams/tier-2/topic-recommender/analysis-pipeline.png' },
      { id:'tr-3', title:'Generation Engine',     description:'LLM orchestration with platform-specific prompt conditioning.',                                                                     imagePath:'/diagrams/tier-2/topic-recommender/topic-generator-pipeline.png' },
      { id:'tr-4', title:'Hook Delivery',         description:'User interface flow for hook search, selection, and copy functionality.',                                                           imagePath:'/diagrams/tier-2/topic-recommender/hook-pipeline.png' },
      { id:'tr-5', title:'Data Flow',             description:'Complete data pipeline from ingestion through scoring to delivery.',                                                                imagePath:'/diagrams/tier-2/topic-recommender/data-pipeline.png' },
    ] },
  { id:8, name:'Booking Automation System', shortName:'BAS', tier:'Tier-1', description:'A modular, automation-ready booking platform designed for scalable scheduling, payments, and operational workflows.', status:'Production',
    diagrams:[
      { id:'bas-1', title:'Platform Overview',    description:'Complete booking automation workflow from planning to analytics.',               imagePath:'/diagrams/tier-1/bas/platform-overview.png' },
      { id:'bas-2', title:'Main Pipeline',        description:'Booking and scheduling with platform-specific optimization.',                   imagePath:'/diagrams/tier-1/bas/booking-pipeline.png' },
      { id:'bas-3', title:'Collection Engine',    description:'Intelligent scheduling with optimal timing and audience targeting.',            imagePath:'/diagrams/tier-1/bas/guest-collection-pipeline.png' },
      { id:'bas-4', title:'Subscription Pipeline',description:'Real-time performance tracking with actionable insights.',                     imagePath:'/diagrams/tier-1/bas/subscription-pipeline.png' },
    ] },
  { id:9, name:'TalentForge AI', shortName:'Hiring AI', tier:'Tier-1', description:'A multi-agent Talent Intelligence Operating System that automates resume screening, candidate matching, interview generation, and hiring decisions through seven specialized AI agents.', status:'Active Research',
    diagrams:[
      { id:'hire-1', title:'End-to-End Hiring Flow',    description:"Shows the recruiter journey from job creation through TalentForge's five-stage pipeline to a final hiring decision.", imagePath:'/diagrams/tier-1/hiring_ai/HA1.jpeg' },
      { id:'hire-2', title:'System Layer Architecture', description:'Maps the Mission Control frontend, API layer, workflow engine, seven sequential AI agents, and the Postgres/ChromaDB/Ollama backing layers.', imagePath:'/diagrams/tier-1/hiring_ai/HA2.jpeg' },
      { id:'hire-3', title:'Agent Pipeline Stages',     description:'Lists the nine-step hiring workflow from job requirement intake through structured agents to final hire.', imagePath:'/diagrams/tier-1/hiring_ai/HA3.jpeg' },
    ] },
  { id:10, name:'Audience Engagement Copilot', shortName:'LinkedIn Copilot', tier:'Tier-1', description:'An engagement intelligence layer that helps founders think before they comment — analyzing posts for hidden claims and generating voice-matched, non-generic engagement strategies.', status:'Active Research',
    diagrams:[
      { id:'li-1', title:'Founder Engagement Pipeline',  description:"Traces a founder's content through seven specialized agents to produce top-ranked, voice-matched comment recommendations.", imagePath:'/diagrams/tier-1/linkedin_copilot/LC1.jpeg' },
      { id:'li-2', title:'Agent-to-Storage Architecture',description:'Maps the seven-agent sequence against the PostgreSQL, voice memory, and analytics storage each stage reads from.', imagePath:'/diagrams/tier-1/linkedin_copilot/LC2.jpeg' },
      { id:'li-3', title:'Platform Stack Diagram',       description:'Shows the Next.js frontend, FastAPI backend, LangGraph orchestrator, and specialized engines backed by Postgres, Qdrant, and S3.', imagePath:'/diagrams/tier-1/linkedin_copilot/LC3.jpeg' },
    ] },
  { id:11, name:'Kimbal CEO Personal Brain', shortName:'RAG CEO', tier:'Tier-2', description:'A self-hosted Executive Operating System that ingests email, documents, and meetings into organizational memory — tracking commitments, relationships, and risk before they become problems.', status:'Active Research',
    diagrams:[
      { id:'rag-1', title:'System Pipeline',       description:'Shows the end-to-end flow from enterprise data sources through ingestion, memory, retrieval, and executive intelligence to the operating system.', imagePath:'/diagrams/tier-2/Rag_Ceo/RC1.jpeg' },
      { id:'rag-2', title:'Memory To Intelligence',description:'Illustrates how emails, documents, and meetings consolidate into organizational memory before feeding executive intelligence.', imagePath:'/diagrams/tier-2/Rag_Ceo/RC2.jpeg' },
      { id:'rag-3', title:'Query Retrieval Flow',  description:'Depicts a CEO query routed through hybrid search across vector and relational stores, then grounded into a response.', imagePath:'/diagrams/tier-2/Rag_Ceo/RC3.jpeg' },
      { id:'rag-4', title:'Executive Value Chain', description:'A four-stage summary showing enterprise data becoming organizational memory, executive intelligence, then executive decisions.', imagePath:'/diagrams/tier-2/Rag_Ceo/RC4.jpeg' },
    ] },
  { id:12, name:'Ditto AI', shortName:'Ditto AI', tier:'Tier-2', description:'An ontology-driven neuro-symbolic intelligence platform that transforms unstructured organizational knowledge into a structured, explainable, machine-understandable intelligence layer.', status:'Active Research',
    diagrams:[
      { id:'ditto-1', title:'Intelligence Pipeline',          description:'Shows unstructured knowledge transformed through ontology, knowledge graph, GraphRAG, and neuro-symbolic reasoning into executive outputs.', imagePath:'/diagrams/tier-2/Ditto_Ai/DA1.jpeg' },
      { id:'ditto-2', title:'Neuro-Symbolic Reasoning Flow',  description:'Illustrates a query passing through neural semantic understanding and symbolic ontology reasoning before producing an evidence-based response.', imagePath:'/diagrams/tier-2/Ditto_Ai/DA2.jpeg' },
      { id:'ditto-3', title:'Multi-Agent Orchestration',      description:'Depicts an orchestrator dispatching specialized agents into their respective engines feeding a shared intelligence workspace.', imagePath:'/diagrams/tier-2/Ditto_Ai/DA3.jpeg' },
      { id:'ditto-4', title:'End-To-End Value Chain',         description:'A simplified summary from documents and research through extraction, graphs, and reasoning to strategic advantage.', imagePath:'/diagrams/tier-2/Ditto_Ai/DA4.jpeg' },
    ] },
  { id:13, name:'Medical AI', shortName:'Medical AI', tier:'Tier-2', description:"A women's health intelligence assistant that combines medical profile, cycle history, and wearable data into context-aware, safety-checked guidance.", status:'Active Research',
    diagrams:[
      { id:'med-1', title:'Platform Service Architecture', description:'Shows a frontend application connecting to authentication, document upload, medical AI assistant, and wearable integration services.', imagePath:'/diagrams/tier-2/medical_ai/M1.jpeg' },
      { id:'med-2', title:'Cycle Intelligence Engine',     description:"Illustrates women's health intake data flowing through a cycle intelligence engine into pattern detection for hormonal conditions.", imagePath:'/diagrams/tier-2/medical_ai/M2.jpeg' },
      { id:'med-3', title:'Context-Aware Response Flow',  description:'Depicts user questions combined with medical profile, history, and wearable data through a memory layer into a safety-checked response.', imagePath:'/diagrams/tier-2/medical_ai/M3.jpeg' },
    ] },
  { id:14, name:'Obsidian', shortName:'Obsidian', tier:'Tier-3', description:'A personal cognitive infrastructure that transforms fragmented notes, experiences, and frameworks into a structured semantic knowledge network capable of reasoning over human knowledge.', status:'Active Research',
    diagrams:[
      { id:'obs-1', title:'End-to-End Pipeline',     description:'Shows the full flow from raw personal knowledge through ontology classification and graph storage into the intelligence engine.', imagePath:'/diagrams/tier-3/obsidian/OA1.jpeg' },
      { id:'obs-2', title:'Four-Layer Knowledge Model',description:'Maps how memory, interpretive context, canonical knowledge, and intelligence synthesis layers interconnect.', imagePath:'/diagrams/tier-3/obsidian/OA2.jpeg' },
      { id:'obs-3', title:'Query Reasoning Flow',     description:'Traces a query through intent detection, semantic retrieval, and graph traversal into synthesized insight generation.', imagePath:'/diagrams/tier-3/obsidian/OA3.jpeg' },
    ] },
  { id:15, name:'BrandWriter Intelligence Infrastructure', shortName:'BrandWriter (Tier-3)', tier:'Tier-3', description:'A Personal Brand Operating System with knowledge graphs, nine-agent orchestration, and a Digital Twin layer — a far deeper evolution beyond the Tier-2 BrandWriter content pipeline.', status:'Active Research',
    diagrams:[
      { id:'bw3-1', title:'Brand OS Pipeline',          description:'Illustrates the full pipeline from multi-platform data ingestion through multi-agent reasoning and content generation to a digital brand twin.', imagePath:'/diagrams/tier-3/Brandwriter/BW1.jpeg' },
      { id:'bw3-2', title:'Knowledge Extraction Flow',  description:'Shows imported content analyzed to extract beliefs, topics, and positioning into a unified knowledge graph and memory store.', imagePath:'/diagrams/tier-3/Brandwriter/BW2.jpeg' },
      { id:'bw3-3', title:'Multi-Agent Content Pipeline',description:'Depicts an orchestrator coordinating brand, audience, research, and strategy agents into a sequential writing and compliance pipeline.', imagePath:'/diagrams/tier-3/Brandwriter/BW3.jpeg' },
    ] },
];

function tiltHandler(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget, r = el.getBoundingClientRect();
  const x = ((e.clientX - r.left) / r.width  - .5) * 12;
  const y = ((e.clientY - r.top)  / r.height - .5) * -12;
  el.style.transform  = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px)`;
  el.style.boxShadow  = '0 36px 80px rgba(0,0,0,.65)';
}
function untiltHandler(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transform = '';
  e.currentTarget.style.boxShadow = '';
}

export default function WhatWeBuild() {
  const [selectedTier, setSelectedTier]     = useState<string | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [activeDiagram, setActiveDiagram]   = useState<string | null>(null);

  const selectedTierInfo = TIERS.find(t => t.id === selectedTier);
  const tierProjects = selectedTier
    ? ALL_PROJECTS.filter(p => p.tier === TIERS.find(t => t.id === selectedTier)?.tier)
    : [];

  return (
    <section style={{ padding: '7rem 1.5rem', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div aria-hidden style={{ position: 'absolute', top: '-15%', right: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,33,182,.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-10%', left: '-8%',  width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,148,58,.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>

        {!selectedTier ? (
          /* ── Tier Selection ── */
          <>
            {/* Header */}
            <div style={{ maxWidth: 560, marginBottom: '4rem' }}>
              <span className="gx-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>R&D Portfolio</span>
              <h2 style={{ marginBottom: '0.9rem' }}>What We <span className="gx-gt">Build</span></h2>
              <p style={{ fontSize: '0.97rem' }}>Three tiers of AI system complexity. Choose any tier to explore functional diagrams and working systems.</p>
            </div>

            {/* Tier cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
              {TIERS.map(tier => (
                <button
                  key={tier.id}
                  onClick={() => { setSelectedTier(tier.id); setExpandedProject(null); setActiveDiagram(null); }}
                  onMouseMove={tiltHandler}
                  onMouseLeave={untiltHandler}
                  style={{ all: 'unset', display: 'block', cursor: 'pointer' }}
                >
                  <div className="gx-card" style={{ padding: '2rem', height: '100%', position: 'relative', overflow: 'hidden', transition: 'border-color .3s, box-shadow .3s, transform .3s', cursor: 'pointer' }}>
                    {/* Top accent */}
                    <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${tier.accent}80, ${tier.accent}20, transparent)` }} />

                    {/* Number watermark */}
                    <div aria-hidden style={{ position: 'absolute', bottom: -10, right: 12, fontFamily: 'var(--f)', fontWeight: 800, fontSize: '6rem', opacity: 0.04, color: tier.accent, lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>{tier.n}</div>

                    {/* Badge */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', borderRadius: 999, fontSize: '0.62rem', fontFamily: 'var(--fm)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', background: tier.accentBg, color: tier.accent, border: `1px solid ${tier.accentBorder}`, marginBottom: '1.25rem' }}>
                      {tier.subtitle}
                    </div>

                    <h3 style={{ fontSize: '1.1rem', color: 'var(--t1)', marginBottom: '0.75rem', lineHeight: 1.3 }}>{tier.label}</h3>
                    <p style={{ fontSize: '0.855rem', lineHeight: 1.75, marginBottom: '2rem' }}>{tier.description}</p>

                    {/* Bottom row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--b)' }}>
                      <span style={{ fontSize: '0.72rem', fontFamily: 'var(--fm)', color: 'var(--t3)' }}>
                        {ALL_PROJECTS.filter(p => p.tier === tier.tier).length} systems
                      </span>
                      <span style={{ fontSize: '1.1rem', color: tier.accent, transition: 'transform .2s' }}>→</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Info note */}
            <div className="gx-card" style={{ padding: '1.25rem 1.5rem', borderColor: 'rgba(91,33,182,.15)' }}>
              <p style={{ fontSize: '0.845rem', color: 'var(--t3)' }}>
                <span style={{ color: 'var(--t1)', fontWeight: 600 }}>Note — </span>
                Each system includes functional diagrams showing intelligence flow, data handling, and decision making. Select any tier to explore detailed system architectures.
              </p>
            </div>
          </>
        ) : (
          /* ── Portfolio / Project View ── */
          <>
            {/* Back + header */}
            <div style={{ marginBottom: '3rem' }}>
              <button
                onClick={() => { setSelectedTier(null); setExpandedProject(null); setActiveDiagram(null); }}
                className="gx-btn gx-btn-ghost"
                style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', marginBottom: '1.5rem' }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Back to Tiers
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 14px', borderRadius: 999, fontSize: '0.62rem', fontFamily: 'var(--fm)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', background: selectedTierInfo?.accentBg, color: selectedTierInfo?.accent, border: `1px solid ${selectedTierInfo?.accentBorder}` }}>
                  {selectedTierInfo?.subtitle}
                </span>
                <h2 style={{ margin: 0 }}>{selectedTierInfo?.label}</h2>
              </div>
            </div>

            {/* Project accordion */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {tierProjects.map(project => {
                const isOpen      = expandedProject === project.id;
                const statusColor = STATUS_COLORS[project.status] || 'var(--t3)';
                const activeDiagramData = project.diagrams.find(d => d.id === activeDiagram);

                return (
                  <div key={project.id} className="gx-card" style={{ overflow: 'hidden', transition: 'border-color .3s', borderColor: isOpen ? `${selectedTierInfo?.accent}30` : '' }}>
                    {/* Accordion header */}
                    <button
                      onClick={() => { setExpandedProject(isOpen ? null : project.id); setActiveDiagram(null); }}
                      style={{ all: 'unset', display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 1.75rem', cursor: 'pointer', gap: '1rem', boxSizing: 'border-box' }}
                    >
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.35rem' }}>
                          <h3 style={{ margin: 0, fontSize: '1rem', color: 'var(--t1)' }}>{project.name}</h3>
                          <span style={{ fontSize: '0.6rem', padding: '2px 9px', borderRadius: 999, fontFamily: 'var(--fm)', fontWeight: 600, background: `${statusColor}14`, color: statusColor, border: `1px solid ${statusColor}30`, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                            {project.status}
                          </span>
                        </div>
                        <p style={{ margin: 0, fontSize: '0.845rem', color: 'var(--t3)', lineHeight: 1.6 }}>{project.description}</p>
                      </div>
                      <div style={{ width: 34, height: 34, borderRadius: 999, border: '1px solid var(--b2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'transform .3s, border-color .3s, background .3s', transform: isOpen ? 'rotate(90deg)' : '', borderColor: isOpen ? `${selectedTierInfo?.accent}40` : '', background: isOpen ? selectedTierInfo?.accentBg : 'transparent', color: isOpen ? selectedTierInfo?.accent : 'var(--t3)' }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </button>

                    {/* Expanded content */}
                    {isOpen && (
                      <div style={{ borderTop: '1px solid var(--b)', background: 'var(--bg2)' }}>
                        <style>{`
                          .wb-grid { display: grid; grid-template-columns: 220px 1fr; gap: 0; }
                          @media (max-width: 768px) { .wb-grid { grid-template-columns: 1fr; } }
                        `}</style>
                        <div className="wb-grid">
                          {/* Diagram list */}
                          <div style={{ padding: '1.5rem 1.25rem', borderRight: '1px solid var(--b)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            <div style={{ fontSize: '0.62rem', fontFamily: 'var(--fm)', color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem', paddingLeft: '0.5rem' }}>Diagrams</div>
                            {project.diagrams.map((d, idx) => {
                              const active = activeDiagram === d.id;
                              return (
                                <button
                                  key={d.id}
                                  onClick={() => setActiveDiagram(active ? null : d.id)}
                                  style={{ all: 'unset', display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem 0.75rem', borderRadius: 8, cursor: 'pointer', fontSize: '0.82rem', fontWeight: active ? 600 : 400, transition: 'background .2s, color .2s', background: active ? selectedTierInfo?.accentBg : 'transparent', color: active ? selectedTierInfo?.accent : 'var(--t2)', borderLeft: active ? `2px solid ${selectedTierInfo?.accent}` : '2px solid transparent', boxSizing: 'border-box' }}
                                >
                                  <span style={{ fontFamily: 'var(--fm)', fontSize: '0.6rem', color: active ? selectedTierInfo?.accent : 'var(--t3)', flexShrink: 0 }}>{String(idx + 1).padStart(2, '0')}</span>
                                  {d.title}
                                </button>
                              );
                            })}
                          </div>

                          {/* Diagram viewer */}
                          <div style={{ padding: '1.5rem' }}>
                            {activeDiagramData ? (
                              <>
                                {/* Image */}
                                <div style={{ background: 'var(--card)', border: '1px solid var(--b)', borderRadius: 'var(--r2)', overflow: 'hidden', marginBottom: '1rem', position: 'relative', minHeight: 320 }}>
                                  <Image
                                    src={activeDiagramData.imagePath}
                                    alt={activeDiagramData.title}
                                    fill
                                    style={{ objectFit: 'contain', padding: '1rem' }}
                                    sizes="(max-width: 768px) 100vw, 700px"
                                  />
                                </div>
                                {/* Description */}
                                <div style={{ padding: '1rem 1.25rem', background: 'var(--card)', border: '1px solid var(--b)', borderRadius: 'var(--r2)' }}>
                                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--t1)', marginBottom: '0.4rem' }}>{activeDiagramData.title}</div>
                                  <p style={{ margin: 0, fontSize: '0.845rem', lineHeight: 1.7 }}>{activeDiagramData.description}</p>
                                </div>
                              </>
                            ) : (
                              <div style={{ height: '100%', minHeight: 260, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', border: '1px dashed var(--b2)', borderRadius: 'var(--r2)' }}>
                                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--t3)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21" strokeLinecap="round"/></svg>
                                </div>
                                <span style={{ fontSize: '0.78rem', color: 'var(--t3)', fontFamily: 'var(--fm)' }}>Select a diagram to view</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
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
