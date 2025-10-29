'use client';

import { useTranslations } from 'next-intl';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import SimpleList from '@/components/sections/SimpleList';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import * as enContent from '@/content/en';
import * as esContent from '@/content/es';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';

export default function Home() {
  const t = useTranslations('home');
  const params = useParams();
  const locale = params.locale as string;
  const content = locale === 'en' ? enContent : locale === 'es' ? esContent : null;
  if (!content) return notFound();

  return (
    <main id="main" className="mx-auto max-w-6xl px-6 pb-24">
      <Hero title={t('heroTitle')} subtitle={t('heroSubtitle')} />
      <About text={content.about} />
      <SimpleList id="experience" heading="Experience" items={content.experience as any} />
      <Projects projects={content.projects as any} />
      <SimpleList id="education" heading="Education" items={content.education as any} />
      <SimpleList id="skills" heading="Skills" items={content.skills as any} />
      <SimpleList id="languages" heading="Languages" items={content.languages as any} />
      <Contact />
    </main>
  );
}

