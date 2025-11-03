'use client';

import { motion } from 'framer-motion';
import OutlineHeading from '@/components/OutlineHeading';
import { useState } from 'react';
import ProjectModal from '@/components/ProjectModal';
import { useTranslations } from 'next-intl';

type Project = {
  slug: string;
  title: string;
  subtitle: string;
  details: string;
};

export default function Projects({ projects }: { projects: Project[] }) {
  const t = useTranslations('sections');
  const [selected, setSelected] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section id="projects" className="mt-20">
        <OutlineHeading text={t('projects')} />
        <div className="mt-6 grid gap-5">
          {projects.map((it, i) => (
            <motion.button
              key={i}
              onClick={() => {
                setSelected(it);
                setIsOpen(true);
              }}
              className="block glass rounded-lg p-6 hover:bg-white/10 transition text-left w-full"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.03 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="font-medium text-lg md:text-xl">{it.title}</div>
              {it.subtitle && <div className="text-muted text-base">{it.subtitle}</div>}
            </motion.button>
          ))}
        </div>
      </section>
      <ProjectModal project={selected} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}




