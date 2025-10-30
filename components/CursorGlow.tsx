'use client';

import { useEffect } from 'react';

export default function CursorGlow() {
  useEffect(() => {
    const root = document.documentElement;
    const handler = (e: MouseEvent) => {
      root.style.setProperty('--cursor-x', `${e.clientX}px`);
      root.style.setProperty('--cursor-y', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', handler, { passive: true });
    return () => window.removeEventListener('pointermove', handler);
  }, []);
  return <div className="pointer-events-none fixed inset-0 z-10 hidden md:block" style={{ background: 'radial-gradient(400px 400px at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(255,59,59,0.12), transparent 60%)' }} />;
}


