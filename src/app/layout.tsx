import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'GenJecX — Proprietary AI Systems & Custom Neural Networks',
  description: 'GenJecX designs, trains, and deploys custom intelligence systems — not API wrappers. Research-grade AI engineering for organisations that need real intelligence.',
  keywords: 'custom AI, neural networks, machine learning, AI engineering, proprietary models, deep learning',
  authors: [{ name: 'GenJecX' }],
  openGraph: {
    title: 'GenJecX — Proprietary AI Systems',
    description: 'Custom neural networks and AI systems engineered from the ground up.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navigation />
        <ScrollReveal />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
