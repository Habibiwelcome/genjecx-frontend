'use client';

import { useState } from 'react';
import Image from 'next/image';

interface DiagramSection {
  sectionTitle: string;
  sectionDescription: string;
  diagrams: {
    id: string;
    number: number;
    title: string;
    purpose: string;
    keyPoints: string[];
    imagePaths: string[]; // ✅ CHANGED from imagePath
  }[];
}

interface Project {
  id: string;
  name: string;
  shortName: string;
  intelligence: string;
  tier: 'Tier-1' | 'Tier-2' | 'Tier-3' | 'Non-LLM';
  description: string;
  diagramSections: DiagramSection[];
}

interface TierConfig {
  id: string;
  name: string;
  philosophy: string;
  projects: Project[];
}

export default function ModelTaxonomy() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeDiagram, setActiveDiagram] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // 8 Portfolio Projects organized by Tier
  const tiers: TierConfig[] = [
    {
      id: 'tier-3',
      name: 'Tier 3: Custom-Trained Models',
      philosophy:
        'Built entirely from scratch on domain-specific data. Use when the problem is novel or existing models are fundamentally misaligned.',
      projects: 
      [
        {
          id: 'Nova',
          name: 'Generic Intelligence Model',
          shortName: 'NOVA',
          intelligence: 'RNN-CNN hybrid for generic answers, deterministic programming reasoning',
          tier: 'Tier-3',
          description: 'Custom neural network trained on generic & programming datasets',
          diagramSections: [
            {
              sectionTitle: 'System Overview',
              sectionDescription: 'Complete system architecture from input to output',
              diagrams: [
                {
                  id: 'nova-sys-1',
                  number: 1,
                  title: 'High-Level System Map',
                  purpose: 'Shows complete system flow and component relationships',
                  keyPoints: [
                    'Dual-path architecture separating generic vs code queries',
                    'Unified embedding layer before model split',
                    'Response aggregation with confidence scoring',
                  ],
                  imagePaths: ['/diagrams/research/tier-3/nova/system-overview-n.png'],
                },
                {
                  id: 'nova-sys-2',
                  number: 2,
                  title: 'Intelligence Placement',
                  purpose: 'Where learning resides in the architecture',
                  keyPoints: [
                    'RNN handles sequential token dependencies',
                    'CNN extracts local syntactic patterns',
                    'Fusion layer combines temporal and spatial features',
                  ],
                  imagePaths: ['/diagrams/research/tier-3/nova/RNN-CNN.png'],
                },
              ],
            },
            {
              sectionTitle: 'Intelligence Placement',
              sectionDescription: 'Where custom training and learning occurs',
              diagrams: [
                {
                  id: 'nova-intel-1',
                  number: 3,
                  title: 'RNN-CNN Architecture',
                  purpose: 'Hybrid neural structure for reasoning',
                  keyPoints: [
                    'Bidirectional LSTM for context understanding',
                    '1D convolutions with varying kernel sizes',
                    'Attention mechanism over CNN feature maps',
                  ],
                  imagePaths: ['/diagrams/research/tier-3/nova/training-pipeline.png'],
                },
                {
                  id: 'nova-intel-2',
                  number: 4,
                  title: 'Training Pipeline',
                  purpose: 'How deterministic reasoning is encoded',
                  keyPoints: [
                    'Cross-entropy loss for classification tasks',
                    'Teacher forcing during sequence generation',
                    'Gradient clipping to prevent explosion',
                  ],
                  imagePaths: ['/diagrams/research/tier-3/nova/image-generation-pipeline.png'],
                },
              ],
            },
            {
              sectionTitle: 'Data & Signal Flow',
              sectionDescription: 'How problems flow through the system',
              diagrams: [
                {
                  id: 'nova-data-1',
                  number: 5,
                  title: 'Input Normalization',
                  purpose: 'Standardizing problem representation',
                  keyPoints: [
                    'Tokenization with custom vocabulary',
                    'Padding and truncation to fixed length',
                    'Special tokens for code vs natural language',
                  ],
                  imagePaths: ['/diagrams/research/tier-3/nova/inference-pipeline.png'],
                },
                {
                  id: 'nova-data-2',
                  number: 6,
                  title: 'Memory & Context',
                  purpose: 'Problem to solution processing',
                  keyPoints: [
                    'Hidden state carries conversation context',
                    'Attention weights highlight relevant tokens',
                    'Output projection to vocabulary space',
                  ],
                  imagePaths: ['/diagrams/research/tier-3/nova/context-reasoning.png'],
                },
                {
                  id: 'nova-data-3',
                  number: 7,
                  title: 'Failure Handling',
                  purpose: 'Maintaining reasoning state',
                  keyPoints: [
                    'Confidence threshold triggers fallback',
                    'Graceful degradation to simpler responses',
                    'Error logging for model retraining',
                  ],
                  imagePaths: ['/diagrams/research/tier-3/nova/failure-handling.png'],
                },
              ],
            },
            {
              sectionTitle: 'Latency & Optimization',
              sectionDescription: 'How reasoning produces solutions',
              diagrams: [
                {
                  id: 'nova-model-1',
                  number: 8,
                  title: 'Reasoning Path',
                  purpose: 'Step-by-step solution generation',
                  keyPoints: [
                    'Batch inference for throughput optimization',
                    'Model quantization for faster inference',
                    'Response caching for repeated queries',
                  ],
                  imagePaths: ['/diagrams/research/tier-3/nova/latency&optimization.png'],
                },
              ],
            },
            
          ],
          
        },
        
////////////////////////////////////////////
        // Additional Tier-1 projects would follow same structure
        ///////////////////////////////////////////////////



////////////////ALEX MODEL ////////////////////
        {
          id: 'Alexa',
          name: 'Generic Intelligence Model',
          shortName: 'ALEXA',
          intelligence: 'RNN-CNN hybrid for saasier personality modeling',
          tier: 'Tier-3',
          description: 'Custom neural network trained on personality datasets',
          diagramSections: [
            {
              sectionTitle: 'System Overview',
              sectionDescription: 'Complete system architecture from input to output',
              diagrams: [
                {
                  id: 'Alexa-sys-1',
                  number: 1,
                  title: 'System-Overview',
                  purpose: 'Shows complete system flow and component relationships',
                  keyPoints: [
                    'Personality embedding layer at input stage',
                    'Emotion classification branch for tone control',
                    'Response generation with persona constraints',
                  ],
                  imagePaths: ['/diagrams/research/tier-3/alexa/system-overview.png'],
                },
              ],
            },
            {
              sectionTitle: 'Intelligence Placement',
              sectionDescription: 'Where custom training and learning occurs',
              diagrams: [
                {
                  id: 'Alexa-intel-1',
                  number: 3,
                  title: 'RNN-CNN Architecture',
                  purpose: 'Hybrid neural structure for reasoning',
                  keyPoints: [
                    'GRU cells for efficient sequential modeling',
                    'Dilated convolutions for wider receptive field',
                    'Skip connections to preserve personality signals',
                  ],
                  imagePaths: ['/diagrams/research/tier-3/alexa/RNN-CNN.png'],
                },
                {
                  id: 'Alexa-intel-2',
                  number: 4,
                  title: 'Training Pipeline',
                  purpose: 'How deterministic reasoning is encoded',
                  keyPoints: [
                    'Personality-conditioned loss weighting',
                    'Contrastive learning for tone differentiation',
                    'Curriculum learning from simple to complex dialogues',
                  ],
                  imagePaths: ['/diagrams/research/tier-3/alexa/training-pipeline.png'],
                },
              ],
            },
            {
              sectionTitle: 'Failure & Optimization',
              sectionDescription: 'Production deployment considerations',
              diagrams: [
                {
                  id: 'Alexa-scale-1',
                  number: 10,
                  title: 'Failure Handling',
                  purpose: 'Graceful degradation under error conditions',
                  keyPoints: [
                    'Out-of-character detection and recovery',
                    'Fallback to safe personality defaults',
                    'Conversation reset triggers and thresholds',
                  ],
                  imagePaths: ['/diagrams/research/tier-3/alexa/failure&optimization.png'],
                },
              ],
            },
            
          ],
          
        },
        ///////////////// SARA MODEL ////////////////////
        {
          id: 'Sara',
          name: 'Personality Model Sara',
          shortName: 'Sara',
          intelligence: 'Personality-Conditioned Conversational Intelligence',
          tier: 'Tier-3',
          description: 'A custom-trained neural network that encodes personality, tone, and behavioral boundaries to generate consistent, emotionally coherent conversational responses.',
          diagramSections: [
            {
              sectionTitle: 'System Overview',
              sectionDescription: 'Complete system architecture from input to output',
              diagrams: [
                {
                  id: 'sara-sys-1',
                  number: 1,
                  title: 'High-Level System Map',
                  purpose: 'Shows complete system flow and component relationships',
                  keyPoints: [
                    'Emotional state tracker at conversation entry',
                    'Personality boundary enforcement layer',
                    'Multi-turn context aggregation module',
                  ],
                  imagePaths: ['/diagrams/research/tier-3/sara/system-overview.png'],
                  
                },
              ],
            },
            {
              sectionTitle: 'Intelligence Components',
              sectionDescription: 'Where custom training and learning occurs',
              diagrams: [
                {
                  id: 'sara-intel-1',
                  number: 3,
                  title: 'RNN-CNN Architecture',
                  purpose: 'Hybrid neural structure for reasoning',
                  keyPoints: [
                    'LSTM with peephole connections for memory',
                    'Multi-scale CNNs for phrase-level patterns',
                    'Gated fusion for combining modalities',
                  ],
                  imagePaths: ['/diagrams/research/tier-3/sara/RNN-CNN.png'],
                },
                {
                  id: 'sara-intel-2',
                  number: 4,
                  title: 'Training Pipeline',
                  purpose: 'How deterministic reasoning is encoded',
                  keyPoints: [
                    'Triplet loss for emotional consistency',
                    'Behavioral clipping to enforce boundaries',
                    'Data augmentation with paraphrased dialogues',
                  ],
                  imagePaths: ['/diagrams/research/tier-3/sara/training-pipeline.png'],
                },
              ],
            },
            {
              sectionTitle: 'Inference & Reasoning Flow',
              sectionDescription: 'How problems flow through the system',
              diagrams: [
                {
                  id: 'sara-data',
                  number: 6,
                  title: 'Inference Data Flow',
                  purpose: 'Problem to solution processing',
                  keyPoints: [
                    'User input with conversation history encoding',
                    'Personality vector injection before decoding',
                    'Response filtering for boundary compliance',
                  ],
                  imagePaths: ['/diagrams/research/tier-3/sara/inference-reasoning.png'],
                },
              ],
            },
            {
              sectionTitle: 'Scale & Reliability',
              sectionDescription: 'Production deployment considerations',
              diagrams: [
                {
                  id: 'sara-scale-1',
                  number: 10,
                  title: 'Failure & Optimization',
                  purpose: 'Graceful degradation under error conditions',
                  keyPoints: [
                    'Error detection',
                    'Fallback mechanisms',
                    'Recovery strategies',
                  ],
                  imagePaths: ['/diagrams/research/tier-3/sara/failure&optimization.png'],
                },
              ],
            },

          ],

        },
        {
          id: 'obsidian',
          name: 'Obsidian',
          shortName: 'Obsidian',
          intelligence: 'Personal cognitive infrastructure combining ontology engineering, knowledge graphs, and temporal reasoning',
          tier: 'Tier-3',
          description: 'Transforms fragmented personal notes and experiences into a structured semantic knowledge network capable of reasoning over human knowledge',
          diagramSections: [
            {
              sectionTitle: 'System Architecture',
              sectionDescription: 'High-level view of how frontend, API, and storage layers connect into the intelligence system',
              diagrams: [
                { id: 'obs-r-1', number: 1, title: 'Full Stack Architecture Map', purpose: 'Shows the complete system from user-facing frontend through API gateway to the knowledge infrastructure powering it', keyPoints: ['Graph database paired with a dedicated vector store', 'Reasoning agent orchestrates retrieval, synthesis, contradiction, and reflection engines', 'Four frontend surfaces share one API gateway'], imagePaths: ['/diagrams/research/tier-3/obsidien/O1.jpeg'] },
                { id: 'obs-r-2', number: 2, title: 'Canonical Knowledge Model', purpose: 'Demonstrates how memory and interpretive knowledge feed into the stable canonical entity layer', keyPoints: ['Concepts link upward into frameworks, principles, and domains', 'Tools and people attach directly as concept sources', 'Interpretive entities (insight, observation, hypothesis) all converge on concept nodes'], imagePaths: ['/diagrams/research/tier-3/obsidien/O2.jpeg'] },
              ],
            },
            {
              sectionTitle: 'Knowledge Ingestion Pipeline',
              sectionDescription: 'How raw notes are transformed into structured, queryable knowledge',
              diagrams: [
                { id: 'obs-r-3', number: 3, title: 'Vault Ingestion Flow', purpose: 'Demonstrates how raw notes are parsed and normalized into graph and vector representations', keyPoints: ['Ontology normalization splits output into deduplication and embedding paths', 'Deduplication engine feeds relationship detection before graph storage', 'Embedding generator writes directly into a dedicated vector store'], imagePaths: ['/diagrams/research/tier-3/obsidien/O3.jpeg'] },
              ],
            },
            {
              sectionTitle: 'Intelligence & Reasoning Layer',
              sectionDescription: 'The synthesis and reasoning mechanisms that turn stored knowledge into active insight',
              diagrams: [
                { id: 'obs-r-4', number: 4, title: 'Multi-Mode Synthesis Engine', purpose: 'Shows how retrieved context fans out into four distinct synthesis modes feeding meta-intelligence outputs', keyPoints: ['Context ranking merges semantic retrieval and graph traversal results', 'Four parallel synthesis types: associative, analytical, temporal, contradiction', 'Meta-intelligence layer derives pattern discovery and knowledge gap detection'], imagePaths: ['/diagrams/research/tier-3/obsidien/O4.jpeg'] },
                { id: 'obs-r-5', number: 5, title: 'Query-to-Response Reasoning Chain', purpose: 'Demonstrates the full reasoning pipeline a user query passes through to produce an attributed response', keyPoints: ['Sequential stages from intent analysis through context assembly to the reasoning model', 'Reasoning model output splits into response and source attribution branches', 'Intelligence engines sit between context assembly and the final reasoning step'], imagePaths: ['/diagrams/research/tier-3/obsidien/O5.jpeg'] },
                { id: 'obs-r-6', number: 6, title: 'Cognitive Evolution Tracking', purpose: 'Shows how historical notes are transformed into a longitudinal model of belief change over time', keyPoints: ['Knowledge snapshots derive explicit belief states at each point in time', 'Change detection and trend analysis precede the evolution model', 'Output splits into growth insights versus belief contradictions'], imagePaths: ['/diagrams/research/tier-3/obsidien/O6.jpeg'] },
              ],
            },
          ],
        },
        {
          id: 'brandwriter-tier3',
          name: 'BrandWriter Intelligence Infrastructure',
          shortName: 'BrandWriter (Tier-3)',
          intelligence: 'Personal Brand Operating System with knowledge graphs, nine-agent orchestration, and a Digital Twin layer',
          tier: 'Tier-3',
          description: 'A far deeper evolution beyond the Tier-2 BrandWriter content pipeline — builds a persistent, reasoning understanding of a founder’s brand before writing anything',
          diagramSections: [
            {
              sectionTitle: 'Knowledge & Memory Architecture',
              sectionDescription: 'How founder data is ingested and structured into a persistent brand knowledge base',
              diagrams: [
                { id: 'bw3-r-1', number: 1, title: 'System Architecture Map', purpose: 'Shows the full technical stack connecting the dashboard, backend, and underlying storage engines', keyPoints: ['FastAPI backend fans out to six distinct subsystems', 'Vector store, graph database, and relational store each serve a dedicated data domain', 'Publishing engine routes through an LLM layer to five social platforms'], imagePaths: ['/diagrams/research/tier-3/brandwriter/B1.jpeg'] },
                { id: 'bw3-r-2', number: 2, title: 'Multi-Source Knowledge Pipeline', purpose: 'Demonstrates how brand sources are ingested, chunked, and extracted into beliefs, topics, audience, and positioning entities', keyPoints: ['Five source types funnel through a single ingestion engine', 'Knowledge extraction splits into four parallel entity categories', 'Separate feedback loop builds candidate memory pending approval before activation'], imagePaths: ['/diagrams/research/tier-3/brandwriter/B2.jpeg'] },
                { id: 'bw3-r-3', number: 3, title: 'Memory & Graph Construction Detail', purpose: 'Shows the dual-track flow of embeddings into a vector store alongside structured entities into a knowledge graph builder', keyPoints: ['Chunking layer branches into embedding engine and knowledge extraction paths', 'Knowledge graph builder consolidates four entity types into the graph store', 'Parallel memory learning track stores approved memories relationally'], imagePaths: ['/diagrams/research/tier-3/brandwriter/B3.jpeg'] },
              ],
            },
            {
              sectionTitle: 'Multi-Agent Intelligence & Generation',
              sectionDescription: 'The agent orchestration and reasoning sequence that produces brand-aligned content',
              diagrams: [
                { id: 'bw3-r-4', number: 4, title: 'Agent Orchestration Graph', purpose: 'Shows how an orchestrator dispatches parallel specialist agents that converge before sequential writing, editing, and compliance stages', keyPoints: ['Five parallel agents (brand, audience, research, memory, strategy) feed one context builder', 'Sentiment, writer, editor, and compliance agents run strictly sequentially', 'Performance prediction runs after editing and compliance, before final output'], imagePaths: ['/diagrams/research/tier-3/brandwriter/B4.jpeg'] },
              ],
            },
            {
              sectionTitle: 'Feedback & Brand Twin Intelligence',
              sectionDescription: 'How the system learns from edits and consolidates into a living brand representation',
              diagrams: [
                { id: 'bw3-r-5', number: 5, title: 'Feedback Learning Loop', purpose: 'Shows how user edits to generated content are converted into approved, reusable behavioral memory', keyPoints: ['Difference analysis isolates what the user changed from generated output', 'Pattern detection converts diffs into suggested memory candidates', 'User approval gate required before memory becomes active for future generation'], imagePaths: ['/diagrams/research/tier-3/brandwriter/B5.jpeg'] },
                { id: 'bw3-r-6', number: 6, title: 'Digital Brand Twin Synthesis', purpose: 'Demonstrates how six distinct intelligence sources converge into one founder representation that drives downstream insight outputs', keyPoints: ['Knowledge layer, memory layer, knowledge graph, and content history all feed the twin', 'Analytics and feedback signals incorporated alongside structural knowledge', 'Twin outputs five distinct insight types including opportunity and topic discovery'], imagePaths: ['/diagrams/research/tier-3/brandwriter/B6.jpeg'] },
              ],
            },
          ],
        },
      ],
    },
  ////////////
  ////////////////
  //////////////////////
  /////////TIER2//////////////
  /////////////////////////////////
    {
      id: 'tier-2',
      name: 'Tier 2: Adapted Models',
      philosophy:
        'Pre-trained models fine-tuned for specific problems. Use when a foundation model exists but needs domain specialization.',
      projects: [
        {
          id: 'brandwriter',
          name: 'BrandWriter',
          shortName: 'BrandWriter',
          intelligence: 'Fine-tuned models with custom content pipeline',
          tier: 'Tier-2',
          description: 'Hybrid system combining transfer learning with custom orchestration',
          diagramSections: [
            {
              sectionTitle: 'System Overview',
              sectionDescription: 'Brand content generation architecture',
              diagrams: [
                {
                  id: 'bw-sys-1',
                  number: 1,
                  title: 'Platform Architecture',
                  purpose: 'Multi-layer content generation system',
                  keyPoints: [
                    'Brand context ingestion and parsing pipeline',
                    'Multi-model orchestration for different content types',
                    'Quality scoring before output delivery',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/brandwriter/system-architecture.png'],
                },
              ],
            },
            {
              sectionTitle: 'Intelligence Placement',
              sectionDescription: 'Where adaptation happens',
              diagrams: [
                {
                  id: 'bw-intel-1',
                  number: 2,
                  title: 'Model Adaptation',
                  purpose: 'Fine-tuning strategy for brand voice',
                  keyPoints: [
                    'LoRA adapters for efficient fine-tuning',
                    'Brand voice calibration with sample content',
                    'A/B testing framework for model selection',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/brandwriter/training-pipeline.png'],
                },
              ],
            },
            {
              sectionTitle: 'Data & Signal Flow',
              sectionDescription: 'Content processing pipeline',
              diagrams: [
                {
                  id: 'bw-context-1',
                  number: 3,
                  title: 'Brand Context Extraction',
                  purpose: 'Understanding brand guidelines',
                  keyPoints: [
                    'Style guide parsing and embedding',
                    'Tone vocabulary extraction from samples',
                    'Forbidden phrase and pattern encoding',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/brandwriter/memory&context.png'],
                },
              ],
            },
            {
              sectionTitle: 'Inference & Reasoning Flow',
              sectionDescription: 'How problems flow through the system',
              diagrams: [
                {
                  id: 'bw-data-1',
                  number: 4,
                  title: 'Inference Data Flow',
                  purpose: 'Problem to solution processing',
                  keyPoints: [
                    'Content request parsing and intent classification',
                    'Brand context injection into prompt template',
                    'Multi-stage generation with refinement loops',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/brandwriter/inference-data-flow.png'],
                },
                {
                  id: 'bw-data-2',
                  number: 5,
                  title: 'Reasoning Path',
                  purpose: 'Problem to solution processing',
                  keyPoints: [
                    'Chain-of-thought prompting for complex content',
                    'Iterative refinement with brand compliance checks',
                    'Human feedback integration for quality control',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/brandwriter/reasoning-path.png'],
                },
              ],
            },
            {
              sectionTitle: 'Scale & Reliability',
              sectionDescription: 'Production deployment considerations',
              diagrams: [
                {
                  id: 'bw-scale-1',
                  number: 6,
                  title: 'Ranking',
                  purpose: 'Graceful degradation under error conditions',
                  keyPoints: [
                    'Multi-candidate generation with diversity sampling',
                    'Brand alignment scoring for each candidate',
                    'Top-k selection with human override option',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/brandwriter/ranking&selection.png'],
                },
                {
                  id: 'bw-scale-2',
                  number: 7,
                  title: 'Normalization',
                  purpose: 'Graceful degradation under error conditions',
                  keyPoints: [
                    'Input length standardization across platforms',
                    'Format conversion for different channels',
                    'Emoji and special character handling rules',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/brandwriter/inference-data-flow.png'],
                },
              ],
            },
             {
              sectionTitle: 'Failure & Optimization',
              sectionDescription: 'Production deployment considerations',
              diagrams: [
                              {
                  id: 'bw-scale-3',
                  number: 8,
                  title: 'Failure & Optimization',
                  purpose: 'Graceful degradation under error conditions',
                  keyPoints: [
                    'Off-brand content detection and rejection',
                    'Automatic regeneration with adjusted parameters',
                    'Escalation to human review queue',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/brandwriter/failure-handling.png'],
                },
                                {
                  id: 'bw-scale-4',
                  number: 9,
                  title: 'Latency & Optimization',
                  purpose: 'Graceful degradation under error conditions',
                  keyPoints: [
                    'Parallel generation for batch requests',
                    'Caching frequent brand context embeddings',
                    'Streaming output for real-time preview',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/brandwriter/latency&optimization.png'],
                },
              ],
            }



          ],
        },


        ////////////////////////VSAI//////////////////

        {
          id: 'Vsai',
          name: 'Programming AI Model',
          shortName: 'VSAI',
          intelligence: 'RNN-CNN hybrid for generic answers, deterministic programming reasoning',
          tier: 'Tier-2',
          description: 'Custom neural network trained on generic & programming datasets',
          diagramSections: [
            {
              sectionTitle: 'System Overview',
              sectionDescription: 'Complete system architecture from input to output',
              diagrams: [
                {
                  id: 'vsai-sys-1',
                  number: 1,
                  title: 'High-Level System Map',
                  purpose: 'Shows complete system flow and component relationships',
                  keyPoints: [
                    'Natural language to code translation pipeline',
                    'Multi-language syntax validation layer',
                    'IDE integration via LSP protocol',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/vsai/system-architecture.png'],
                },
              ],
            },
            {
              sectionTitle: 'Intelligence Placement',
              sectionDescription: 'Where custom training and learning occurs',
              diagrams: [
                                {
                  id: 'vsai-sys-2',
                  number: 2,
                  title: 'Intelligence Placement',
                  purpose: 'Where learning resides in the architecture',
                  keyPoints: [
                    'Code understanding encoder module',
                    'Syntax-aware attention mechanisms',
                    'Language-specific output decoder heads',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/vsai/model-architecture.png'],
                },
                {
                  id: 'vsai-intel-1',
                  number: 3,
                  title: 'RNN-CNN Architecture',
                  purpose: 'Hybrid neural structure for reasoning',
                  keyPoints: [
                    'LSTM captures code structure dependencies',
                    'CNNs detect local syntax patterns and idioms',
                    'Hybrid fusion for semantic understanding',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/vsai/training-pipeline.png'],
                },
                {
                  id: 'vsai-intel-2',
                  number: 3,
                  title: 'RNN-CNN Architecture',
                  purpose: 'Hybrid neural structure for reasoning',
                  keyPoints: [
                    'Token-level data flow through encoder',
                    'AST-aware positional encodings',
                    'Gradient checkpointing for long sequences',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/vsai/data-flow.png'],
                },
                {
                  id: 'vsai-intel-3',
                  number: 4,
                  title: 'Training Pipeline',
                  purpose: 'How deterministic reasoning is encoded',
                  keyPoints: [
                    'Conversation history window management',
                    'Variable scope tracking across turns',
                    'Code context accumulation strategy',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/vsai/memory&context.png'],
                },
              ],
            },
            {
              sectionTitle: 'Data & Signal Flow',
              sectionDescription: 'How problems flow through the system',
              diagrams: [
                {
                  id: 'vsai-data-1',
                  number: 5,
                  title: 'Input Normalization',
                  purpose: 'Standardizing problem representation',
                  keyPoints: [
                    'Code snippet extraction from user prompts',
                    'Language detection and syntax tagging',
                    'Whitespace and indentation normalization',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/vsai/input-normalization.png'],
                },
                {
                  id: 'vsai-data-2',
                  number: 6,
                  title: 'Memory & Context',
                  purpose: 'Problem to solution processing',
                  keyPoints: [
                    'Step-by-step code generation reasoning',
                    'Intermediate variable and type tracking',
                    'Output validation before response',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/vsai/reasoning-path.png'],
                },
                {
                  id: 'vsai-data-3',
                  number: 7,
                  title: 'Failure Handling',
                  purpose: 'Maintaining reasoning state',
                  keyPoints: [
                    'Syntax error recovery strategies',
                    'Partial code completion fallbacks',
                    'Confidence threshold gating',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/vsai/failure-handling.png'],
                },
              ],
            },
            {
              sectionTitle: 'Latency & Optimization',
              sectionDescription: 'How reasoning produces solutions',
              diagrams: [
                {
                  id: 'vsai-model-1',
                  number: 8,
                  title: 'Reasoning Path',
                  purpose: 'Step-by-step solution generation',
                  keyPoints: [
                    'Token streaming for real-time display',
                    'KV-cache optimization for long contexts',
                    'Request batching for concurrent users',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/vsai/latency&optimization.png'],
                },
              ],
            },
            
          ],
          
        },

        /////////////////////////////// Recommender System ////////////////////////

                {
          id: 'TopicRecommender',
          name: 'Podcast Topic Recommender',
          shortName: 'Recommender',
          intelligence: 'RNN-CNN hybrid for generic answers, deterministic programming reasoning',
          tier: 'Tier-2',
          description: 'Custom neural network trained on generic & programming datasets',
          diagramSections: [
            {
              sectionTitle: 'System Overview',
              sectionDescription: 'Complete system architecture from input to output',
              diagrams: [
                {
                  id: 'recommender-sys-1',
                  number: 1,
                  title: 'High-Level System Map',
                  purpose: 'Shows complete system flow and component relationships',
                  keyPoints: [
                    'User preference ingestion and profiling',
                    'Content-based and collaborative filtering fusion',
                    'Ranked topic suggestions with explanations',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/recommender/system-overview.png'],
                },
              ],
            },
            {
              sectionTitle: 'Intelligence Placement',
              sectionDescription: 'Where custom training and learning occurs',
              diagrams: [
                                {
                  id: 'recommender-sys-2',
                  number: 2,
                  title: 'Intelligence Placement',
                  purpose: 'Where learning resides in the architecture',
                  keyPoints: [
                    'Topic embedding model for semantic similarity',
                    'User behavior sequence modeling',
                    'Cold-start handling with content features',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/recommender/model-architecture.png'],
                },
                {
                  id: 'recommender-intel-1',
                  number: 3,
                  title: 'RNN-CNN Architecture',
                  purpose: 'Hybrid neural structure for reasoning',
                  keyPoints: [
                    'RNN captures listening history patterns',
                    'CNN extracts topic features from metadata',
                    'Attention over historical preferences',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/recommender/training-pipeline.png'],
                },
                {
                  id: 'recommender-intel-2',
                  number: 4,
                  title: 'RNN-CNN Architecture',
                  purpose: 'Hybrid neural structure for reasoning',
                  keyPoints: [
                    'User preference embedding storage',
                    'Session-based context window',
                    'Preference decay for stale interests',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/recommender/memory&context.png'],
                },
              ],
            },
            {
              sectionTitle: 'Data & Signal Flow',
              sectionDescription: 'How problems flow through the system',
              diagrams: [
                {
                  id: 'recommender-data-1',
                  number: 5,
                  title: 'Input Normalization',
                  purpose: 'Standardizing problem representation',
                  keyPoints: [
                    'Topic text cleaning and tokenization',
                    'User signal weighting and normalization',
                    'Feature extraction from podcast metadata',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/recommender/input-normalization-flow.png'],
                },
                {
                  id: 'recommender-data-2',
                  number: 6,
                  title: 'Memory & Context',
                  purpose: 'Problem to solution processing',
                  keyPoints: [
                    'Multi-hop reasoning through topic graph',
                    'Score aggregation across candidates',
                    'Diversity injection for variety',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/recommender/reasoning-path.png'],
                },
                {
                  id: 'recommender-data-3',
                  number: 7,
                  title: 'Failure Handling',
                  purpose: 'Maintaining reasoning state',
                  keyPoints: [
                    'Fallback to popularity-based ranking',
                    'Degraded mode with cached suggestions',
                    'Error logging for model improvement',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/recommender/failure-handling.png'],
                },
              ],
            },
            {
              sectionTitle: 'Latency & Optimization',
              sectionDescription: 'How reasoning produces solutions',
              diagrams: [
                {
                  id: 'recommender-model-1',
                  number: 8,
                  title: 'Reasoning Path',
                  purpose: 'Step-by-step solution generation',
                  keyPoints: [
                    'Approximate nearest neighbor for speed',
                    'Embedding cache for frequent queries',
                    'Batch vs real-time inference trade-offs',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/recommender/latency-optimization.png'],
                },

              ],
            },
            {sectionTitle: 'Inference & Reasoning Flow',
              sectionDescription: 'How problems flow through the system',
              diagrams: [
                {
                  id: 'recommender-data',
                  number: 9,
                  title: 'Inference Data Flow',
                  purpose: 'Problem to solution processing',
                  keyPoints: [
                    'Query embedding generation from user input',
                    'Candidate retrieval from topic index',
                    'Re-ranking with user context features',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/brandwriter/inference-data-flow.png'],
                },
              
              ],
            },
            {
              sectionTitle: 'Failure Handling',
              sectionDescription: 'Production deployment considerations',
              diagrams: [
                {
                  id: 'recommender-scale-1',
                  number: 10,
                  title: 'Failure & Optimization',
                  purpose: 'Graceful degradation under error conditions',
                  keyPoints: [
                    'Circuit breaker for model timeouts',
                    'A/B testing framework for updates',
                    'Continuous feedback loop integration',
                  ],
                  imagePaths: ['/diagrams/research/tier-2/recommender/failure-handling.png'],
                },
              ],
            },

          ],

        },
        {
          id: 'rag-ceo',
          name: 'Kimbal CEO Personal Brain',
          shortName: 'RAG CEO',
          intelligence: 'Hybrid GraphRAG executive memory system that turns fragmented enterprise data into commitment and risk intelligence',
          tier: 'Tier-2',
          description: 'A self-hosted Executive Operating System that ingests email, documents, and meetings into persistent organizational memory',
          diagramSections: [
            {
              sectionTitle: 'System Overview',
              sectionDescription: 'Complete system flow from data sources through ingestion, storage, retrieval, AI, and executive interface layers',
              diagrams: [
                { id: 'rag-r-1', number: 1, title: 'Full Stack Architecture Map', purpose: 'Shows the complete system flow from data sources through ingestion, storage, retrieval, AI, and executive interface layers', keyPoints: ['Six-layer pipeline from sources to executive interface', 'Parallel storage across PostgreSQL, Qdrant, and MinIO', 'Intelligence layer surfaces commitments, risks, escalations, and briefings'], imagePaths: ['/diagrams/research/tier-2/Rag_Ceo/R1.jpeg'] },
              ],
            },
            {
              sectionTitle: 'Knowledge Pipeline',
              sectionDescription: 'Data ingestion and organizational memory construction from raw enterprise sources',
              diagrams: [
                { id: 'rag-r-2', number: 2, title: 'Data Ingestion Pipeline', purpose: 'Demonstrates how raw data from six enterprise sources is connected, processed, queued, and persisted into storage', keyPoints: ['Connector framework unifies Outlook, Notion, Drive, Teams, Slack, and local files', 'Five-stage processing chain: extraction, normalization, validation, enrichment, deduplication', 'Redis-backed Celery workers queue writes to MinIO and PostgreSQL'], imagePaths: ['/diagrams/research/tier-2/Rag_Ceo/R2.jpeg'] },
                { id: 'rag-r-3', number: 3, title: 'Memory Construction Flow', purpose: 'Shows how normalized documents are transformed into structured organizational memory through entity and relationship extraction', keyPoints: ['Entity extraction feeds entity resolution and relationship building', 'Timeline builder distributes into four memory types', 'Separate embedding pipeline chunks documents into Qdrant via BGE-M3'], imagePaths: ['/diagrams/research/tier-2/Rag_Ceo/R3.jpeg'] },
              ],
            },
            {
              sectionTitle: 'Reasoning & Retrieval',
              sectionDescription: 'Query-time hybrid search and executive intelligence generation',
              diagrams: [
                { id: 'rag-r-4', number: 4, title: 'Hybrid Query Flow', purpose: 'Demonstrates the retrieval path from user query through reranking and context assembly to a grounded LLM response', keyPoints: ['Hybrid search spans semantic and structured stores in parallel', 'BGE Reranker refines results before context assembly', 'Qwen 3 generates the final grounded response'], imagePaths: ['/diagrams/research/tier-2/Rag_Ceo/R4.jpeg'] },
                { id: 'rag-r-5', number: 5, title: 'Executive Intelligence Engine', purpose: 'Shows how organizational memory entities feed detection engines that produce prioritized executive outputs', keyPoints: ['Commitment detection and escalation detection run in parallel', 'Priority engine aggregates signals before brief generation', 'Outputs route to five distinct executive-facing surfaces'], imagePaths: ['/diagrams/research/tier-2/Rag_Ceo/R5.jpeg'] },
              ],
            },
          ],
        },
        {
          id: 'ditto-ai',
          name: 'Ditto AI',
          shortName: 'Ditto AI',
          intelligence: 'Ontology-driven neuro-symbolic platform combining knowledge graphs, GraphRAG, and explainable reasoning',
          tier: 'Tier-2',
          description: 'Transforms unstructured organizational knowledge into a structured, explainable, machine-understandable intelligence layer',
          diagramSections: [
            {
              sectionTitle: 'System Architecture',
              sectionDescription: 'Complete backend service topology and platform infrastructure supporting the intelligence platform',
              diagrams: [
                { id: 'ditto-r-1', number: 1, title: 'Platform Service Map', purpose: 'Shows the full backend architecture from user interface through FastAPI to specialized engines, storage, and observability', keyPoints: ['FastAPI backend fans out to six specialized reasoning engines', 'Dedicated Neo4j and Qdrant stores for graph and vector data', 'Grafana and Prometheus observability layer monitors the stack'], imagePaths: ['/diagrams/research/tier-2/ditto_ai/D1.jpeg'] },
                { id: 'ditto-r-2', number: 2, title: 'Production Infrastructure Stack', purpose: 'Demonstrates the authenticated request path through API gateway to services, governance, and monitoring layers', keyPoints: ['API gateway sits behind authentication before FastAPI services', 'Agent layer runs Qwen, DeepSeek, and Llama models', 'Governance layer enforces RBAC, versioning, and audit compliance'], imagePaths: ['/diagrams/research/tier-2/ditto_ai/D2.jpeg'] },
              ],
            },
            {
              sectionTitle: 'Knowledge Pipeline',
              sectionDescription: 'Extraction and structuring of unstructured documents into ontology and knowledge graph form',
              diagrams: [
                { id: 'ditto-r-3', number: 3, title: 'Document Extraction Pipeline', purpose: 'Shows how raw PDFs and research documents are OCR-processed and split into ontology and knowledge graph construction paths', keyPoints: ['OCR engine precedes entity and concept extraction', 'Concept extraction branches into parallel ontology and graph builders', 'Validation layer gates entry into the intelligence repository'], imagePaths: ['/diagrams/research/tier-2/ditto_ai/D3.jpeg'] },
                { id: 'ditto-r-4', number: 4, title: 'Ontology To Knowledge Graph', purpose: 'Demonstrates how an ontology class with properties, constraints, and relationships instantiates entities into a queryable knowledge graph', keyPoints: ['Relationships connect paired entities into the graph', 'Knowledge graph feeds claims, evidence, and an inference layer', 'Inference layer outputs new knowledge back into the system'], imagePaths: ['/diagrams/research/tier-2/ditto_ai/D4.jpeg'] },
              ],
            },
            {
              sectionTitle: 'Reasoning & Retrieval',
              sectionDescription: 'Query-time neuro-symbolic reasoning and layered cognitive architecture',
              diagrams: [
                { id: 'ditto-r-5', number: 5, title: 'Query Reasoning Chain', purpose: 'Shows the ten-step sequential path a user query takes from semantic understanding to a final explained response', keyPoints: ['Vector retrieval and graph expansion run before ontology expansion', 'Symbolic reasoning follows evidence collection', 'Confidence and explanation engines precede the final response'], imagePaths: ['/diagrams/research/tier-2/ditto_ai/D5.jpeg'] },
                { id: 'ditto-r-6', number: 6, title: 'Neural-Symbolic Layer Split', purpose: 'Demonstrates the explicit separation between neural components and symbolic components feeding a shared inference engine', keyPoints: ['Neural layer handles LLM, entity extraction, and embeddings', 'Symbolic layer enforces ontology, rules, and constraints', 'Inference engine output drives explainable AI and decision support'], imagePaths: ['/diagrams/research/tier-2/ditto_ai/D6.jpeg'] },
              ],
            },
            {
              sectionTitle: 'Agent & Workspace Layer',
              sectionDescription: 'Multi-agent orchestration and the user-facing intelligence workspace',
              diagrams: [
                { id: 'ditto-r-7', number: 7, title: 'Agent Orchestration Detail', purpose: 'Shows how a central orchestrator delegates to five agents that each write into a dedicated data store feeding a shared memory layer', keyPoints: ['Five specialized agents map one-to-one to data stores', 'Validation and reasoning agents write to rule and inference engines', 'All agent outputs converge into a unified memory layer'], imagePaths: ['/diagrams/research/tier-2/ditto_ai/D7.jpeg'] },
                { id: 'ditto-r-8', number: 8, title: 'Intelligence Workspace Modules', purpose: 'Demonstrates the seven user-facing modules accessible from a central command center', keyPoints: ['Knowledge Graph Explorer and Ontology Studio back onto dedicated stores', 'Research Canvas connects directly to the reasoning engine', 'Insight Discovery Center routes through a dedicated analytics engine'], imagePaths: ['/diagrams/research/tier-2/ditto_ai/D8.jpeg'] },
              ],
            },
          ],
        },
      ],
    },
    //////////////////////////////////////////////////
//////////////////////////////////
////////////////////////////////
/////////////////////TIER 1//////////////////////
    {
      id: 'tier-1',
      name: 'Tier 1: LLM-Assisted Systems',
      philosophy:
        'Systems where LLMs provide specific capabilities within broader architectures. Use when language understanding is one component of a larger solution.',
      projects: [
        {
          id: 'hiring-ai',
          name: 'TalentForge AI',
          shortName: 'Hiring AI',
          intelligence: 'Multi-agent Talent Intelligence Operating System for end-to-end hiring automation',
          tier: 'Tier-1',
          description: 'Seven specialized AI agents collaborate across resume screening, candidate matching, interview generation, and offer recommendations',
          diagramSections: [
            {
              sectionTitle: 'System Overview',
              sectionDescription: 'High-level architecture connecting frontend, backend, AI agents, and data layers',
              diagrams: [
                { id: 'hire-r-1', number: 1, title: 'Full Stack Architecture Map', purpose: 'Shows the complete system from recruiter input through Mission Control UI, FastAPI logic, AI agent logic, and data layers', keyPoints: ['Mission Control frontend with eight dedicated command centers', 'FastAPI backend split into auth, jobs, candidate, workflow, interview, and offer services', 'Ollama runtime serving nous-hermes2-mistral, qwen2.5, and bge-base models'], imagePaths: ['/diagrams/research/tier-1/hiring_ai/H1.jpeg'] },
                { id: 'hire-r-2', number: 2, title: 'Seven-Agent Pipeline', purpose: 'Demonstrates the sequential handoff between the seven specialized agents that power the hiring lifecycle', keyPoints: ['Linear chain from Job Description Agent to Offer Agent', 'Each agent passes structured output to the next stage', 'Only the Job Description Agent is currently production-ready'], imagePaths: ['/diagrams/research/tier-1/hiring_ai/H2.jpeg'] },
                { id: 'hire-r-3', number: 3, title: 'Pipeline Data Transformations', purpose: 'Traces how each agent transforms its input artifact into a new structured output as it moves through the pipeline', keyPoints: ['Job requirements become structured specifications via the JD Agent', 'Resume screening and skill extraction narrow candidates into skill intelligence', 'Final stage produces a hiring recommendation and offer package'], imagePaths: ['/diagrams/research/tier-1/hiring_ai/H3.jpeg'] },
              ],
            },
            {
              sectionTitle: 'Data & Retrieval Flow',
              sectionDescription: 'Database schema and resume-to-match processing pipeline',
              diagrams: [
                { id: 'hire-r-4', number: 4, title: 'Relational Data Model', purpose: 'Shows the entity-relationship schema underpinning organizations, jobs, candidates, and audit data', keyPoints: ['Organizations own jobs and contain users in a multi-tenant structure', 'Candidates link to resumes, interviews, evaluations, offers, and skills', 'Separate workflow schema tracks agent logs and queue independently'], imagePaths: ['/diagrams/research/tier-1/hiring_ai/H4.jpeg'] },
                { id: 'hire-r-5', number: 5, title: 'Resume Matching Pipeline', purpose: 'Details the technical steps from resume upload to candidate evaluation using embeddings and vector search', keyPoints: ['PDF parsing feeds resume screening and skill extraction stages', 'Embedding generation feeds vector storage ahead of matching', 'Matching engine output flows into candidate ranking and evaluation'], imagePaths: ['/diagrams/research/tier-1/hiring_ai/H5.jpeg'] },
                { id: 'hire-r-6', number: 6, title: 'Workflow Execution Trace', purpose: 'Shows the operational path of a single job posting through the agent workflow queue to persisted logs', keyPoints: ['Workflow queue mediates between job creation and the agent chain', 'All seven agents execute in a fixed linear sequence', 'Workflow completion writes to both agent logs and PostgreSQL'], imagePaths: ['/diagrams/research/tier-1/hiring_ai/H6.jpeg'] },
              ],
            },
            {
              sectionTitle: 'Frontend Modules',
              sectionDescription: 'Mission Control UI structure and cross-entity relationships',
              diagrams: [
                { id: 'hire-r-7', number: 7, title: 'Mission Control App Shell', purpose: 'Shows how the React frontend is structured into navigation chrome and routed feature views', keyPoints: ['App shell composes a command palette, floating dock, and HUD cluster', 'React Router drives eight distinct views including Workflow and Agent Console', 'HUD cluster and router both expose Jobs and Candidates views'], imagePaths: ['/diagrams/research/tier-1/hiring_ai/H7.jpeg'] },
                { id: 'hire-r-8', number: 8, title: 'Agent-to-Entity Relationships', purpose: 'Illustrates how the AI Agents layer touches and updates each core hiring entity as candidates progress', keyPoints: ['AI Agents node connects directly into Jobs, Skills, Candidates, and Evaluations', 'Linear progression from Candidates through Interviews to Evaluations to Offers', 'Single agent layer orchestrates multiple parallel entity updates'], imagePaths: ['/diagrams/research/tier-1/hiring_ai/H8.jpeg'] },
              ],
            },
            {
              sectionTitle: 'Technical Stack',
              sectionDescription: 'Sequence-level detail and infrastructure summary',
              diagrams: [
                { id: 'hire-r-9', number: 9, title: 'Job Description Agent Sequence', purpose: 'Shows the request/response sequence for the one production-ready agent, from recruiter action to saved job', keyPoints: ['Frontend posts to API which delegates prompt generation to the JD Agent', 'Agent calls Ollama and receives structured JSON back', 'Validated response is persisted to DB before UI confirms job creation'], imagePaths: ['/diagrams/research/tier-1/hiring_ai/H9.jpeg'] },
                { id: 'hire-r-10', number: 10, title: 'Infrastructure Summary', purpose: 'Summarizes the three core layers recruiters interact with and how hiring intelligence loops back to them', keyPoints: ['AI layer runs seven agents on local Ollama-served LLMs and embeddings', 'Data layer splits structured storage in PostgreSQL from vectors in ChromaDB', 'Analytics layer feeds hiring intelligence back to recruiters in a closed loop'], imagePaths: ['/diagrams/research/tier-1/hiring_ai/H10.jpeg'] },
              ],
            },
          ],
        },
        {
          id: 'linkedin-copilot',
          name: 'Audience Engagement Copilot',
          shortName: 'LinkedIn Copilot',
          intelligence: 'Engagement intelligence layer that augments founder thinking instead of generating generic comments',
          tier: 'Tier-1',
          description: 'Seven agents analyze posts for hidden claims, select an engagement strategy, and rewrite output to match the founder’s authentic voice',
          diagramSections: [
            {
              sectionTitle: 'System Overview',
              sectionDescription: 'End-to-end architecture from founder input to ranked comment output',
              diagrams: [
                { id: 'li-r-1', number: 1, title: 'Full Agent-to-Storage Map', purpose: 'Shows the complete seven-agent chain alongside the exact storage system each stage reads from or writes to', keyPoints: ['Context Understanding Agent writes structured analysis to PostgreSQL', 'Voice Consistency Agent reads and writes Voice Memory for tone matching', 'Comment Ranking Agent outputs feed both Comment Workspace and Analytics'], imagePaths: ['/diagrams/research/tier-1/Linkedin_copilot/L1.jpeg'] },
                { id: 'li-r-2', number: 2, title: 'Seven-Agent Linear Pipeline', purpose: 'Demonstrates the sequential flow from raw content input to ranked, analytics-logged comment output', keyPoints: ['Multi-format input (URL, screenshot, text, PDF) enters Content Intake Agent', 'Qdrant vector store sits between Quality Filter and Comment Ranking stages', 'Pipeline terminates in both top-ranked comments and an analytics store'], imagePaths: ['/diagrams/research/tier-1/Linkedin_copilot/L2.jpeg'] },
                { id: 'li-r-3', number: 3, title: 'Multi-Format Content Ingestion', purpose: 'Shows how four distinct input types are normalized into one structured post record', keyPoints: ['LinkedIn URLs are scraped via Playwright extraction', 'Screenshots are processed through OCR for text recovery', 'All four paths converge into a single structured post record'], imagePaths: ['/diagrams/research/tier-1/Linkedin_copilot/L3.jpeg'] },
              ],
            },
            {
              sectionTitle: 'Agent Pipeline',
              sectionDescription: 'Core reasoning agents that analyze content and select an engagement strategy',
              diagrams: [
                { id: 'li-r-4', number: 4, title: 'Context Analysis Breakdown', purpose: 'Shows the six parallel analytical passes the Context Understanding Agent runs on a structured post', keyPoints: ['Topic and audience detection run alongside main and hidden claim extraction', 'Intent and sentiment analysis run as independent parallel branches', 'All six analyses converge into one consolidated context report'], imagePaths: ['/diagrams/research/tier-1/Linkedin_copilot/L4.jpeg'] },
                { id: 'li-r-5', number: 5, title: 'Strategy Selection Engine', purpose: 'Demonstrates how post analysis is scored against six named engagement frameworks to pick one recommended strategy', keyPoints: ['Six competing strategies include Reality Compression, Hidden Layer, and Pattern Recognition', 'Bottleneck Reversal and Constructive Contrarian round out the six options', 'Engine outputs a single recommended strategy per post'], imagePaths: ['/diagrams/research/tier-1/Linkedin_copilot/L5.jpeg'] },
                { id: 'li-r-6', number: 6, title: 'Multi-Perspective Comment Generation', purpose: 'Shows how the Comment Generator produces five distinct comment variants from one post analysis and chosen strategy', keyPoints: ['Single generator branches into five named comment types', 'Contrarian and Reality Compression comments generated as parallel alternatives', 'Generator takes both post analysis and selected strategy as joint input'], imagePaths: ['/diagrams/research/tier-1/Linkedin_copilot/L6.jpeg'] },
              ],
            },
            {
              sectionTitle: 'Voice & Quality Control',
              sectionDescription: 'Tone matching and filtering logic that keeps output authentic',
              diagrams: [
                { id: 'li-r-7', number: 7, title: 'Voice Profile Construction', purpose: "Shows how a founder's historical writing is converted into a reusable voice profile for rewriting comments", keyPoints: ['Past LinkedIn posts, comments, and newsletters feed the Voice Profile Builder', 'Voice profile embeddings are persisted in Qdrant for retrieval', 'Voice Rewrite Engine consumes the stored profile to output founder-style comments'], imagePaths: ['/diagrams/research/tier-1/Linkedin_copilot/L7.jpeg'] },
                { id: 'li-r-8', number: 8, title: 'Quality Filter Scoring Logic', purpose: 'Demonstrates the five-factor scoring rubric used to approve or reject a generated comment', keyPoints: ['Score combines information value, originality, voice match, depth, and shareability', 'An explicit approval threshold gates which comments proceed', 'Rejected comments are discarded before reaching the ranking stage'], imagePaths: ['/diagrams/research/tier-1/Linkedin_copilot/L8.jpeg'] },
                { id: 'li-r-9', number: 9, title: 'Comment Ranking Logic', purpose: 'Shows the four-factor scoring model that ranks surviving comments into a final recommendation set', keyPoints: ['Ranking blends quality score, engagement potential, voice match, and novelty', 'Output resolves into recommended, alternative, and contrarian tiers', 'Builds directly on output already passed through the Quality Filter Agent'], imagePaths: ['/diagrams/research/tier-1/Linkedin_copilot/L9.jpeg'] },
              ],
            },
            {
              sectionTitle: 'Data & Platform Architecture',
              sectionDescription: 'Knowledge graph, technical stack, and dashboard navigation',
              diagrams: [
                { id: 'li-r-10', number: 10, title: 'Knowledge Graph Schema', purpose: 'Shows how user activity (comments, posts) is organized into topics linked to authors and strategies in Neo4j', keyPoints: ['Comments and posts both roll up into a shared topics node', 'Topics branch into author intelligence and strategy performance tracks', 'Author and strategy branches resolve to industries and performance metrics'], imagePaths: ['/diagrams/research/tier-1/Linkedin_copilot/L10.jpeg'] },
                { id: 'li-r-11', number: 11, title: 'Product Taxonomy', purpose: 'Positions the Engagement Copilot within the broader product categories and target markets it serves', keyPoints: ['AI Infrastructure and AI Agents are categorized separately from Founder Content', 'Founder Content track maps to a SaaS go-to-market motion', 'Knowledge Systems track is distinct, feeding knowledge management use cases'], imagePaths: ['/diagrams/research/tier-1/Linkedin_copilot/L11.jpeg'] },
                { id: 'li-r-12', number: 12, title: 'Production Technical Stack', purpose: 'Shows the full production architecture including LangGraph orchestration and the backing data and AI services', keyPoints: ['FastAPI backend fans out to PostgreSQL, Qdrant, Neo4j, AWS S3, and PostHog', 'LangGraph Orchestrator coordinates OCR, the LLM layer, and four dedicated engines', 'Ranking Engine output routes to Comment Workspace before returning to the frontend'], imagePaths: ['/diagrams/research/tier-1/Linkedin_copilot/L12.jpeg'] },
                { id: 'li-r-13', number: 13, title: 'Dashboard Navigation Flow', purpose: 'Shows the user-facing navigation path from login through analysis tools to the comment editor', keyPoints: ['Single dashboard branches into five modules including Voice Profile and Author Intelligence', 'Analyze Post flows linearly into Strategy Center then Comment Workspace', 'Comment Editor is the terminal screen after the Comment Workspace stage'], imagePaths: ['/diagrams/research/tier-1/Linkedin_copilot/L13.jpeg'] },
              ],
            },
          ],
        },
      ],
    },
  ];
///////////////////////////////////
// End of Tier Definitions
////////////////////////////////////
  const currentTier = tiers.find((t) => t.id === selectedTier);
  const currentProjectData =
    selectedProject && currentTier
      ? currentTier.projects.find((p) => p.id === selectedProject)
      : null;

  const allDiagrams = currentProjectData
    ? currentProjectData.diagramSections.flatMap((section) => section.diagrams)
    : [];
  const currentDiagram = activeDiagram
    ? allDiagrams.find((d) => d.id === activeDiagram)
    : null;

  const TIER_META: Record<string, { accent: string; bg: string; border: string; n: string }> = {
    'tier-1': { accent: '#2dd4bf', bg: 'rgba(45,212,191,.08)',  border: 'rgba(45,212,191,.2)',  n: '01' },
    'tier-2': { accent: '#c9943a', bg: 'rgba(201,148,58,.08)',  border: 'rgba(201,148,58,.2)',  n: '02' },
    'tier-3': { accent: '#a78bfa', bg: 'rgba(167,139,250,.08)', border: 'rgba(167,139,250,.2)', n: '03' },
  };
  const meta = selectedTier ? TIER_META[selectedTier] : null;

  return (
    <section style={{ padding: '7rem 1.5rem', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position:'absolute', top:'-15%', right:'-8%', width:560, height:560, borderRadius:'50%', background:'radial-gradient(circle,rgba(91,33,182,.06) 0%,transparent 70%)', pointerEvents:'none' }} />
      <style>{`
        .mt-grid { display:grid; grid-template-columns:240px 1fr; gap:0; }
        @media(max-width:900px){ .mt-grid { grid-template-columns:1fr; } }
        .mt-hidden-lg { display:none; }
        @media(max-width:900px){ .mt-hidden-lg { display:block; } }
        .mt-show-lg { display:block; }
        @media(max-width:900px){ .mt-show-lg { display:none; } }
      `}</style>
      <div style={{ maxWidth:1200, margin:'0 auto', position:'relative' }}>
        {!selectedTier ? (
          <>
            {/* Tier Selection */}
            <div style={{ maxWidth:560, marginBottom:'4rem' }}>
              <span className="gx-badge" style={{ marginBottom:'1rem', display:'inline-flex' }}>Model Taxonomy</span>
              <h2 style={{ marginBottom:'0.9rem' }}>How We <span className="gx-gt">Classify</span> Models</h2>
              <p style={{ fontSize:'0.97rem' }}>Three clear tiers. Select one to explore projects and their architectural diagrams.</p>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:'0.9rem', marginBottom:'3rem' }}>
              {[...tiers].sort((a,b) => a.id.localeCompare(b.id)).map(tier => {
                const tm = TIER_META[tier.id];
                return (
                  <button key={tier.id} onClick={() => { setSelectedTier(tier.id); setSelectedProject(null); setActiveDiagram(null); }}
                    style={{ all:'unset', display:'block', cursor:'pointer' }}>
                    <div className="gx-card" style={{ padding:'1.75rem 2rem', position:'relative', overflow:'hidden', transition:'border-color .3s, transform .3s, box-shadow .3s', cursor:'pointer' }}
                      onMouseEnter={e => { const t=e.currentTarget as HTMLElement; t.style.borderColor=`${tm.accent}40`; t.style.transform='translateX(4px)'; t.style.boxShadow=`0 12px 40px rgba(0,0,0,.4), 0 0 0 1px ${tm.accent}20`; }}
                      onMouseLeave={e => { const t=e.currentTarget as HTMLElement; t.style.borderColor=''; t.style.transform=''; t.style.boxShadow=''; }}
                    >
                      <div aria-hidden style={{ position:'absolute', left:0, top:'15%', bottom:'15%', width:3, borderRadius:'0 2px 2px 0', background:`linear-gradient(to bottom, ${tm.accent}, transparent)` }} />
                      <div aria-hidden style={{ position:'absolute', top:-8, right:16, fontFamily:'var(--f)', fontWeight:800, fontSize:'5rem', opacity:0.04, color:tm.accent, lineHeight:1, userSelect:'none', pointerEvents:'none' }}>{tm.n}</div>
                      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1rem' }}>
                        <div style={{ flex:1 }}>
                          <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'0.5rem' }}>
                            <span style={{ display:'inline-flex', padding:'3px 10px', borderRadius:999, fontSize:'0.6rem', fontFamily:'var(--fm)', fontWeight:600, background:tm.bg, color:tm.accent, border:`1px solid ${tm.border}`, letterSpacing:'0.08em', textTransform:'uppercase' }}>{tier.id.replace('-',' ')}</span>
                            <h3 style={{ margin:0, fontSize:'1rem', color:'var(--t1)', fontWeight:700 }}>{tier.name}</h3>
                          </div>
                          <p style={{ margin:0, fontSize:'0.875rem', lineHeight:1.7 }}>{tier.philosophy}</p>
                        </div>
                        <div style={{ display:'flex', alignItems:'center', gap:'1.25rem', flexShrink:0 }}>
                          <span style={{ fontSize:'0.72rem', fontFamily:'var(--fm)', color:'var(--t3)' }}>{tier.projects.length} project{tier.projects.length!==1?'s':''}</span>
                          <div style={{ width:32, height:32, borderRadius:999, border:`1px solid ${tm.border}`, display:'flex', alignItems:'center', justifyContent:'center', color:tm.accent }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </>

        ) : !selectedProject ? (
          <>
            {/* Projects list */}
            <div style={{ marginBottom:'3rem' }}>
              <button onClick={() => { setSelectedTier(null); setSelectedProject(null); setActiveDiagram(null); }}
                className="gx-btn gx-btn-ghost" style={{ padding:'0.5rem 1rem', fontSize:'0.8rem', marginBottom:'1.5rem' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Back to Tiers
              </button>
              <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'0.75rem' }}>
                <span style={{ display:'inline-flex', padding:'4px 12px', borderRadius:999, fontSize:'0.6rem', fontFamily:'var(--fm)', fontWeight:600, background:meta?.bg, color:meta?.accent, border:`1px solid ${meta?.border}`, letterSpacing:'0.08em', textTransform:'uppercase' }}>{selectedTier?.replace('-',' ')}</span>
                <h2 style={{ margin:0 }}>{currentTier?.name}</h2>
              </div>
              <p style={{ fontSize:'0.97rem' }}>{currentTier?.philosophy}</p>
            </div>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'1rem' }}>
              {currentTier?.projects.map(project => (
                <button key={project.id} onClick={() => { setSelectedProject(project.id); setActiveDiagram(null); }}
                  style={{ all:'unset', display:'block', cursor:'pointer' }}>
                  <div className="gx-card" style={{ padding:'1.625rem', height:'100%', cursor:'pointer', transition:'border-color .3s, transform .3s' }}
                    onMouseEnter={e => { const t=e.currentTarget as HTMLElement; t.style.borderColor=`${meta?.accent}40`; t.style.transform='translateY(-4px)'; }}
                    onMouseLeave={e => { const t=e.currentTarget as HTMLElement; t.style.borderColor=''; t.style.transform=''; }}
                  >
                    <div aria-hidden style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${meta?.accent}60,transparent)` }} />
                    <div style={{ fontWeight:700, fontSize:'1rem', color:'var(--t1)', marginBottom:'0.4rem' }}>{project.name}</div>
                    <div style={{ fontSize:'0.75rem', fontFamily:'var(--fm)', color:meta?.accent, marginBottom:'0.75rem' }}>{project.shortName}</div>
                    <p style={{ fontSize:'0.845rem', marginBottom:'1.25rem', lineHeight:1.7 }}>{project.intelligence}</p>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:'1rem', borderTop:'1px solid var(--b)' }}>
                      <span style={{ fontSize:'0.7rem', fontFamily:'var(--fm)', color:'var(--t3)' }}>
                        {project.diagramSections.reduce((s,sec) => s+sec.diagrams.length, 0)} diagrams
                      </span>
                      <span style={{ fontSize:'0.9rem', color:meta?.accent }}>→</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </>

        ) : (
          <>
            {/* Diagram Explorer */}
            <div style={{ marginBottom:'2.5rem' }}>
              <button onClick={() => { setSelectedProject(null); setActiveDiagram(null); }}
                className="gx-btn gx-btn-ghost" style={{ padding:'0.5rem 1rem', fontSize:'0.8rem', marginBottom:'1.5rem' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Back to Projects
              </button>
              <h2 style={{ marginBottom:'0.4rem' }}>{currentProjectData?.name}</h2>
              <p style={{ fontSize:'0.875rem', color:'var(--t3)', fontFamily:'var(--fm)' }}>
                {currentProjectData?.tier} — Architecture &amp; System Diagrams
              </p>
            </div>

            <div className="mt-grid">
              {/* Left sidebar */}
              <div style={{ borderRight:'1px solid var(--b)', paddingRight:'0', position:'sticky', top:88, height:'calc(100vh - 100px)', overflowY:'auto' }}>
                <div style={{ padding:'1.25rem' }}>
                  <div style={{ fontSize:'0.58rem', fontFamily:'var(--fm)', color:'var(--t3)', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:'1rem' }}>Diagram Sections</div>
                  <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>
                    {currentProjectData?.diagramSections.map((section, sIdx) => (
                      <div key={`${section.sectionTitle}-${sIdx}`}>
                        <div style={{ fontSize:'0.58rem', fontFamily:'var(--fm)', color:meta?.accent, textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:600, marginBottom:'0.5rem', paddingLeft:'0.5rem' }}>{section.sectionTitle}</div>
                        <div style={{ display:'flex', flexDirection:'column', gap:'0.25rem' }}>
                          {section.diagrams.map(diagram => {
                            const active = activeDiagram === diagram.id;
                            return (
                              <div key={diagram.id}>
                                <button onClick={() => setActiveDiagram(active ? null : diagram.id)}
                                  style={{ all:'unset', display:'flex', alignItems:'center', gap:'0.6rem', width:'100%', padding:'0.55rem 0.75rem', borderRadius:8, cursor:'pointer', fontSize:'0.8rem', fontWeight:active?600:400, background:active?meta?.bg:'transparent', color:active?meta?.accent:'var(--t2)', borderLeft:`2px solid ${active?meta?.accent:'transparent'}`, transition:'all .18s', boxSizing:'border-box' }}>
                                  <span style={{ fontFamily:'var(--fm)', fontSize:'0.58rem', flexShrink:0, color:active?meta?.accent:'var(--t3)' }}>{String(diagram.number).padStart(2,'0')}</span>
                                  {diagram.title}
                                </button>
                                {/* Mobile inline viewer */}
                                {active && currentDiagram && (
                                  <div className="mt-hidden-lg" style={{ margin:'0.75rem 0 1rem' }}>
                                    <div style={{ background:'var(--card)', border:'1px solid var(--b)', borderRadius:'var(--r2)', overflow:'hidden' }}>
                                      <div style={{ padding:'0.75rem', display:'flex', flexDirection:'column', gap:'0.75rem' }}>
                                        {currentDiagram.imagePaths.map((src, i) => (
                                          <div key={i} style={{ position:'relative', width:'100%', minHeight:220, background:'var(--card2)', borderRadius:8, border:'1px solid var(--b)' }}>
                                            <Image src={src} alt={`${currentDiagram.title} — view ${i+1}`} fill style={{ objectFit:'contain', padding:'0.5rem' }} priority/>
                                          </div>
                                        ))}
                                      </div>
                                      <div style={{ padding:'1rem', borderTop:'1px solid var(--b)' }}>
                                        <div style={{ fontWeight:600, fontSize:'0.82rem', color:'var(--t1)', marginBottom:'0.5rem' }}>What to notice</div>
                                        <ul style={{ display:'flex', flexDirection:'column', gap:6 }}>
                                          {currentDiagram.keyPoints.map((pt,i) => (
                                            <li key={i} style={{ display:'flex', gap:8, fontSize:'0.8rem' }}>
                                              <span style={{ color:meta?.accent, fontWeight:700, flexShrink:0 }}>–</span>
                                              <span style={{ color:'var(--t2)' }}>{pt}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right diagram viewer */}
              <div className="mt-show-lg" style={{ padding:'1.5rem' }}>
                {activeDiagram && currentDiagram ? (
                  <>
                    {/* Header */}
                    <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'1rem', marginBottom:'1.25rem' }}>
                      <div>
                        <h3 style={{ margin:0, marginBottom:'0.3rem', fontSize:'1.1rem' }}>{currentDiagram.number}. {currentDiagram.title}</h3>
                        <p style={{ margin:0, fontSize:'0.845rem' }}>{currentDiagram.purpose}</p>
                      </div>
                      <button onClick={() => setIsZoomed(true)} className="gx-btn gx-btn-ghost" style={{ padding:'0.45rem 0.9rem', fontSize:'0.78rem', flexShrink:0 }}>
                        ⤢ Zoom
                      </button>
                    </div>

                    {/* Canvas — always inline, never toggles to fixed */}
                    <div style={{ background:'var(--card)', border:'1px solid var(--b)', borderRadius:'var(--r2)', overflow:'hidden', marginBottom:'1rem', position:'relative' }}>
                      <div style={{ minHeight:480, padding:'1.25rem', overflowY:'auto', background:'var(--bg2)', display:'grid', gridTemplateColumns:currentDiagram.imagePaths.length>1?'1fr 1fr':'1fr', gap:'1rem', alignItems:'start' }}>
                        {currentDiagram.imagePaths.map((src,i) => (
                          <div key={i} style={{ position:'relative', minHeight:320, background:'var(--card)', borderRadius:10, border:'1px solid var(--b)', overflow:'hidden' }}>
                            <Image src={src} alt={`${currentDiagram.title} — view ${i+1}`} fill style={{ objectFit:'contain', padding:'1rem', transform: src.includes('sara/inference-reasoning')?'rotate(90deg)':undefined }} priority/>
                            <span style={{ position:'absolute', bottom:6, right:10, fontSize:'0.65rem', fontFamily:'var(--fm)', color:'var(--t3)' }}>View {i+1}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Fullscreen zoom modal — separate overlay so nothing clips the close button */}
                    {isZoomed && (
                      <div
                        onClick={() => setIsZoomed(false)}
                        style={{ position:'fixed', inset:0, zIndex:400, background:'rgba(0,0,0,0.94)', backdropFilter:'blur(22px)', WebkitBackdropFilter:'blur(22px)', display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem' }}
                      >
                        {/* Close — fixed so it's always in viewport regardless of image scroll */}
                        <button
                          onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
                          style={{ position:'fixed', top:20, right:20, width:46, height:46, borderRadius:'50%', background:'rgba(12,12,26,.92)', border:'1px solid rgba(255,255,255,.15)', color:'#ededf8', cursor:'pointer', fontSize:'1.5rem', display:'flex', alignItems:'center', justifyContent:'center', zIndex:401, lineHeight:1, transition:'background .2s, border-color .2s, box-shadow .2s' }}
                          onMouseEnter={e => { const t=e.currentTarget as HTMLElement; t.style.background='rgba(91,33,182,.4)'; t.style.borderColor='rgba(167,139,250,.55)'; t.style.boxShadow='0 0 20px rgba(91,33,182,.3)'; }}
                          onMouseLeave={e => { const t=e.currentTarget as HTMLElement; t.style.background='rgba(12,12,26,.92)'; t.style.borderColor='rgba(255,255,255,.15)'; t.style.boxShadow=''; }}
                        >×</button>
                        {/* Image grid — scroll within the modal, not the page */}
                        <div
                          onClick={(e) => e.stopPropagation()}
                          style={{ overflow:'auto', maxWidth:'92vw', maxHeight:'88vh', background:'var(--bg2)', borderRadius:'var(--r2)', border:`1px solid ${meta?.border || 'var(--b2)'}`, padding:'1.25rem', display:'grid', gridTemplateColumns:currentDiagram.imagePaths.length>1?'1fr 1fr':'1fr', gap:'1rem', alignItems:'start' }}
                        >
                          {currentDiagram.imagePaths.map((src,i) => (
                            <div key={i} style={{ position:'relative', minHeight:460, background:'var(--card)', borderRadius:10, border:'1px solid var(--b)', overflow:'hidden' }}>
                              <Image src={src} alt={`${currentDiagram.title} — view ${i+1}`} fill style={{ objectFit:'contain', padding:'1.25rem' }} priority/>
                            </div>
                          ))}
                        </div>
                        {/* ESC hint */}
                        <div style={{ position:'fixed', bottom:24, left:'50%', transform:'translateX(-50%)', fontFamily:'var(--fm)', fontSize:'0.6rem', color:'rgba(255,255,255,.3)', letterSpacing:'0.1em' }}>
                          CLICK OUTSIDE TO CLOSE
                        </div>
                      </div>
                    )}

                    {/* Key points */}
                    <div style={{ background:'var(--card)', border:`1px solid ${meta?.border}`, borderRadius:'var(--r2)', padding:'1.25rem 1.5rem' }}>
                      <div style={{ fontWeight:700, fontSize:'0.875rem', color:'var(--t1)', marginBottom:'0.75rem' }}>What to notice</div>
                      <ul style={{ display:'flex', flexDirection:'column', gap:8 }}>
                        {currentDiagram.keyPoints.map((pt,i) => (
                          <li key={i} style={{ display:'flex', gap:10, fontSize:'0.855rem' }}>
                            <span style={{ color:meta?.accent, fontWeight:700, flexShrink:0 }}>–</span>
                            <span style={{ color:'var(--t2)' }}>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop:'1rem', textAlign:'center', fontSize:'0.7rem', fontFamily:'var(--fm)', color:'var(--t3)' }}>
                      Diagram {currentDiagram.number} of {allDiagrams.length}
                    </div>
                  </>
                ) : (
                  <div style={{ minHeight:400, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'0.75rem', border:'1px dashed var(--b2)', borderRadius:'var(--r2)' }}>
                    <div style={{ width:44, height:44, borderRadius:'50%', background:'var(--card)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--t3)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21" strokeLinecap="round"/></svg>
                    </div>
                    <span style={{ fontSize:'0.8rem', color:'var(--t3)', fontFamily:'var(--fm)' }}>Select a diagram to explore</span>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
