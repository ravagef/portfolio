'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

type Project = {
  slug: string;
  title: string;
  subtitle: string;
  details?: string;
  problem?: string;
  role?: string;
  languages?: string[]; // e.g., ['python','cpp']
  tools?: string[]; // e.g., ['aws','powerbi']
  outcomes?: string[];
};

export default function ProjectModal({ project, isOpen, onClose }: { project: Project | null; isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
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
                <h2 className="text-3xl font-display">{project.title}</h2>
                <button
                  onClick={onClose}
                  className="text-muted hover:text-white transition text-2xl leading-none"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <p className="text-muted mb-4 text-lg">{project.subtitle}</p>
              {project.details && <p className="leading-relaxed mb-6 text-base md:text-lg">{project.details}</p>}
              <div className="grid gap-4">
                {project.problem && (
                  <div>
                    <div className="text-sm text-muted">Problem</div>
                    <p className="text-base md:text-lg">{project.problem}</p>
                  </div>
                )}
                {project.role && (
                  <div>
                    <div className="text-sm text-muted">Role</div>
                    <p className="text-base md:text-lg">{project.role}</p>
                  </div>
                )}
                {(project.languages?.length || project.tools?.length) ? (
                  <div className="flex flex-wrap gap-3">
                    {project.languages?.map((key, i) => (
                      <span key={`lang-${i}`} className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-sm flex items-center gap-2">
                        <img src={`/logos/${key}.svg`} alt={key} className="h-5 w-5" />
                        {key}
                      </span>
                    ))}
                    {project.tools?.map((key, i) => (
                      <span key={`tool-${i}`} className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-sm flex items-center gap-2">
                        <img src={`/logos/${key}.svg`} alt={key} className="h-5 w-5" />
                        {key}
                      </span>
                    ))}
                  </div>
                ) : null}
                {project.outcomes?.length ? (
                  <ul className="list-disc pl-6 text-base text-muted">
                    {project.outcomes.map((o, i) => (
                      <li key={i}>{o}</li>
                    ))}
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

