import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { AnalyticsProvider } from '@/components/providers/AnalyticsProvider';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'GenJecX | Custom AI Systems & Neural Networks',
  description: 'Proprietary AI systems and custom neural models for organizations requiring intelligence beyond off-the-shelf solutions.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'GenJecX | Custom AI Systems & Neural Networks',
    description: 'Proprietary AI systems and custom neural models for organizations requiring intelligence beyond off-the-shelf solutions.',
    url: 'https://genjecx.com',
    siteName: 'GenJecX',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GenJecX - Custom AI Systems',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GenJecX | Custom AI Systems & Neural Networks',
    description: 'Proprietary AI systems and custom neural models for organizations requiring intelligence beyond off-the-shelf solutions.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAFAFA] text-[#0F172A]">
        <AnalyticsProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
