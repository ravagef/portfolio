'use client';

import { useEffect, useRef, useState } from 'react';

export default function ParallaxBG() {
  const [y, setY] = useState(0);
  const target = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      target.current = window.scrollY || 0;
      if (rafId.current == null) tick();
    };

    const tick = () => {
      // ease current y towards target (smooth inertia)
      setY(prev => {
        const next = prev + (target.current - prev) * 0.12;
        return Math.abs(next - target.current) < 0.1 ? target.current : next;
      });
      rafId.current = requestAnimationFrame(tick);
    };

    target.current = window.scrollY || 0;
    window.addEventListener('scroll', onScroll, { passive: true });
    tick();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const layer1Y = -(y * 0.05);
  const layer2Y = -(y * 0.025);

  return (
    <div
      className="fixed inset-0 bg-topo-layer will-change-[background-position]"
      style={{ backgroundPosition: `0% ${layer1Y}px, 60% ${layer2Y}px` }}
    />
  );
}


