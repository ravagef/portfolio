'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';
import OutlineHeading from '@/components/OutlineHeading';
import { useTranslations } from 'next-intl';

type ExperienceItem = {
  slug: string;
  title: string;
  subtitle?: string;
  details?: string;
  problem?: string;
  role?: string;
  languages?: string[];
  tools?: string[];
  outcomes?: string[];
};

function ExperienceModal({ item, isOpen, onClose }: { item: ExperienceItem | null; isOpen: boolean; onClose: () => void }) {
  const t = useTranslations('modal');
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && item && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center px-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass rounded-lg p-10 max-w-3xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-display">{item.title}</h3>
                <button onClick={onClose} className="text-muted hover:text-white text-2xl leading-none">×</button>
              </div>
              {item.subtitle && <p className="text-muted mb-4 text-lg">{item.subtitle}</p>}
              {item.details && <p className="leading-relaxed mb-6 text-base md:text-lg">{item.details}</p>}
              <div className="grid gap-4">
                {item.problem && (<div><div className="text-sm text-muted">{t('problem')}</div><p className="text-base md:text-lg">{item.problem}</p></div>)}
                {item.role && (<div><div className="text-sm text-muted">{t('role')}</div><p className="text-base md:text-lg">{item.role}</p></div>)}
                {(item.languages?.length || item.tools?.length) ? (
                  <div className="flex flex-wrap gap-3">
                    {item.languages?.map((key, i) => (
                      <span key={`lang-${i}`} className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-sm flex items-center gap-2">
                        <img src={`/logos/${key}.svg`} alt={key} className="h-5 w-5" />
                        {key}
                      </span>
                    ))}
                    {item.tools?.map((key, i) => (
                      <span key={`tool-${i}`} className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-sm flex items-center gap-2">
                        <img src={`/logos/${key}.svg`} alt={key} className="h-5 w-5" />
                        {key}
                      </span>
                    ))}
                  </div>
                ) : null}
                {item.outcomes?.length ? (
                  <ul className="list-disc pl-6 text-base text-muted">
                    {item.outcomes.map((o, i) => (<li key={i}>{o}</li>))}
                  </ul>
                ) : null}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Experience({ items }: { items: ExperienceItem[] }) {
  const t = useTranslations('sections');
  const [selected, setSelected] = useState<ExperienceItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section id="experience" className="mt-20">
        <OutlineHeading text={t('experience')} />
        <div className="mt-6 grid gap-4">
          {items.map((it, i) => (
            <motion.button
              key={i}
              onClick={() => { setSelected(it); setIsOpen(true); }}
              className="block glass rounded p-4 hover:bg-white/10 transition text-left w-full"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.03 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="font-medium">{it.title}</div>
              {it.subtitle && <div className="text-muted text-sm">{it.subtitle}</div>}
            </motion.button>
          ))}
        </div>
      </section>
      <ExperienceModal item={selected} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}


