'use client';

import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLang = (newLocale: string) => {
    // Jump to top first to avoid stale scroll position
    window.scrollTo(0, 0);
    // Replace current path with new locale
    const newPath = (pathname?.replace(`/${currentLocale}`, `/${newLocale}`) || `/${newLocale}`) as any;
    router.push(newPath);
    // Ensure at top after navigation finishes
    setTimeout(() => window.scrollTo(0, 0), 0);
  };

  return (
    <motion.button
      onClick={() => switchLang(currentLocale === 'en' ? 'es' : 'en')}
      className="px-3 py-1 rounded glass hover:bg-white/10 transition text-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {currentLocale === 'en' ? 'ES' : 'EN'}
    </motion.button>
  );
}

