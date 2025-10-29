'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageGate({ forceShow = false }: { forceShow?: boolean }) {
  const [show, setShow] = useState(forceShow);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (forceShow) {
      setShow(true);
      return;
    }
    // If on a locale page, check localStorage
    if (pathname?.startsWith('/en') || pathname?.startsWith('/es')) {
      const hasChosen = typeof window !== 'undefined' && localStorage.getItem('lang-chosen');
      if (!hasChosen) {
        setShow(true);
      }
    }
  }, [forceShow, pathname]);

  const chooseLang = (locale: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang-chosen', 'true');
      // Set cookie so middleware knows
      document.cookie = `lang-chosen=true; path=/; max-age=31536000`;
    }
    setShow(false);
    router.push(`/${locale}`);
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            className="fixed inset-0 bg-bg z-[100]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center px-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <div className="text-center space-y-8">
              <motion.div
                className="mx-auto size-24 rounded-full grid place-items-center glass"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, type: 'spring' }}
              >
                <img src="/logo.svg" alt="Logo" className="h-12 w-12 invert" />
              </motion.div>
              <motion.h1
                className="text-3xl md:text-4xl font-display tracking-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Choose your language
              </motion.h1>
              <motion.div
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  onClick={() => chooseLang('en')}
                  className="px-8 py-4 rounded-lg glass hover:bg-white/10 transition text-lg font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  English
                </motion.button>
                <motion.button
                  onClick={() => chooseLang('es')}
                  className="px-8 py-4 rounded-lg glass hover:bg-white/10 transition text-lg font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Español
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

