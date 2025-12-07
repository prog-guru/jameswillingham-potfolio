import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { personal } from '@/data/personal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${personal.name} - ${personal.title}`,
  description: `Portfolio of ${personal.name}, ${personal.title} specializing in modern full-stack development, cloud architectures, and scalable web applications.`,
  keywords: [
    'James Willingham',
    'Full Stack Engineer',
    'Software Engineer',
    'React',
    'TypeScript',
    'Node.js',
    'Next.js',
    'Cloud Architecture',
    'LLM',
    'AI',
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jameswillingham.dev',
    title: `${personal.name} - ${personal.title}`,
    description: `Portfolio of ${personal.name}, ${personal.title} specializing in modern full-stack development.`,
    siteName: `${personal.name} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personal.name} - ${personal.title}`,
    description: `Portfolio of ${personal.name}, ${personal.title} specializing in modern full-stack development.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

