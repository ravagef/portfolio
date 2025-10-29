'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <motion.img
            src="/logo.svg"
            alt="Loading"
            className="h-28 w-28 invert"
            initial={{ scale: 0.85, opacity: 0.6 }}
            animate={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}


