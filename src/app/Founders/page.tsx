import FoundersIntro from '@/components/founders/FoundersIntro';
import FounderCard from '@/components/founders/FounderCard';
import PhilosophySection from '@/components/founders/PhilosophySection';
import EthicalThinking from '@/components/founders/EthicalThinking';

export default function FoundersPage() {
  return (
    <div style={{ width: '100%' }}>
      <FoundersIntro />

      <section style={{ padding: '5rem 1.5rem', background: 'var(--bg2)', borderTop: '1px solid var(--b)', borderBottom: '1px solid var(--b)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(201,148,58,.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', justifyItems: 'center' }}>
            <FounderCard
              name="Garima Kalra"
              role="Founder & Lead Researcher"
              education="BITS Pilani — Computer Science with AI/ML Honours"
              background="CS researcher with a focus on intelligence that emerges from deep understanding, not from adapting whatever model is trending. Led research into representation learning, custom neural architectures, and domain-specific AI across healthcare and media applications. Builds systems designed to understand problems, not pattern-match against them."
              obsessions={[
                'Representation learning and knowledge organisation',
                'Custom neural architectures for domain-specific problems',
                'Building intelligence from first principles, not from shortcuts',
              ]}
              focus="Garima leads research and model development at GenJecX. She designed the knowledge engineering methodology applied across every engagement and architected the frameworks underlying our Tier 3 systems. Her core belief: genuinely domain-aware AI requires a fundamentally different design philosophy than fine-tuned general models."
              imageSrc="founders/garimaf.png"
              imageAlt="Garima Kalra"
            />
            <FounderCard
              name="Aurin Desai"
              role="Founder & System Architect"
              education="BITS Pilani — Computer Science, Advanced ML"
              background="Engineer turned AI systems architect. Spent years understanding why AI products fail in production — not at the model level, but at the system level. Built the infrastructure frameworks that make GenJecX systems reliable, scalable, and genuinely production-ready across complex deployment environments."
              obsessions={[
                'AI system architecture and production infrastructure',
                'Scaling custom intelligence without reliability trade-offs',
                'Long-term research-driven product engineering',
              ]}
              focus="Aurin leads system architecture and infrastructure at GenJecX. He designs the end-to-end systems that house our intelligence — from data pipelines and inference servers to monitoring and reliability engineering. His principle: intelligence that cannot survive production conditions is not real intelligence."
              imageSrc="founders/aurinf.png"
              imageAlt="Aurin Desai"
            />
          </div>
        </div>
      </section>

      <PhilosophySection />
      <EthicalThinking />
    </div>
  );
}
