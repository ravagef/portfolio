import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessagesForLocale } from './messages';
import Link from 'next/link';
import Preloader from '@/components/Preloader';
import LanguageGate from '@/components/LanguageGate';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ScrollRestore from '@/components/ScrollRestore';
import type { Metadata } from 'next';
import { headers } from 'next/headers';

export default async function LocaleLayout({ children, params }: any) {
  const { locale } = await params;
  const messages = getMessagesForLocale(locale);

  return (
    <NextIntlClientProvider messages={messages} locale={locale} timeZone="UTC">
      <ScrollRestore />
      <LanguageGate />
      <a href="#main" className="skip-link">Skip to content</a>
      <Preloader />
      <header className="sticky top-0 z-20 bg-bg/80 backdrop-blur border-b border-white/10">
        <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="h-6 w-6 invert" />
          </Link>
          <div className="flex gap-2 text-sm">
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </nav>
      </header>
      {children}
      <footer className="mt-20 border-t border-white/10 py-10 text-center text-sm text-muted">© {new Date().getFullYear()} Alan Hernandez</footer>
    </NextIntlClientProvider>
  );
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { locale } = await params;
  const messages = getMessagesForLocale(locale) as any;
  const title = messages?.home?.title || 'Portfolio';
  const description = messages?.home?.description || 'Portfolio website';
  
  // Get the base URL from headers
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const baseUrl = `${protocol}://${host}`;
  
  const ogImageUrl = `${baseUrl}/og`;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: 'Click to access my portfolio! / ¡Haz clic para acceder a mi portafolio!',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

