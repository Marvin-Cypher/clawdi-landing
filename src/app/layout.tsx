import './globals.css';

import { RootProvider } from 'fumadocs-ui/provider';
import type { Metadata } from 'next';
import { Azeret_Mono, Inter } from 'next/font/google';

import Banner from '@/components/layout/banner';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { StyleGlideProvider } from '@/components/styleglide-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const azeretMono = Azeret_Mono({
  variable: '--font-azeret-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Clawdi — OpenClaw as a Service',
    template: '%s | Clawdi',
  },
  description:
    'The turnkey OpenClaw solution. Zero-config app integration, included AI models, and enterprise-grade privacy. Go from signup to working AI assistant in 15 minutes.',
  keywords: [
    'OpenClaw',
    'AI Assistant',
    'Managed OpenClaw',
    'AI Automation',
    'OpenClaw Hosting',
    'AI Service',
    'Zero Config',
    'Secure AI',
  ],
  authors: [{ name: 'Clawdi' }],
  creator: 'Clawdi',
  publisher: 'Clawdi',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: 'Clawdi — OpenClaw as a Service',
    description:
      'The turnkey OpenClaw solution. Zero-config app integration, included AI models, and enterprise-grade privacy. Your AI assistant in 15 minutes.',
    siteName: 'Clawdi',
    images: [
      {
        url: '/images/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Clawdi — OpenClaw as a Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clawdi — OpenClaw as a Service',
    description:
      'The turnkey OpenClaw solution. Zero-config app integration, included AI models, and enterprise-grade privacy. Your AI assistant in 15 minutes.',
    images: ['/images/og-image.jpeg'],
    creator: '@clawdi_ai',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'relative flex min-h-screen flex-col antialiased [--header-height:calc(var(--spacing)*17)]',
          inter.variable,
          azeretMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <RootProvider
            search={{
              options: {
                type: 'static',
              },
            }}
          >
            {/* Background Blur */}
            <div className="bg-background/10 absolute inset-0 z-[-2] backdrop-blur-[85px] will-change-transform md:backdrop-blur-[170px]" />
            {/* Noise Background */}
            <div
              className="absolute inset-0 z-[-1] size-full opacity-70 mix-blend-overlay"
              style={{
                background: `url(/images/noise.webp) lightgray 0% 0% / 83.69069695472717px 83.69069695472717px repeat`,
              }}
            />
            <StyleGlideProvider />
            <Banner url="/download" />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
