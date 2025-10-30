'use client';

import { motion } from 'framer-motion';

export default function OutlineHeading({ text }: { text: string }) {
  return (
    <div>
      <motion.h2
        className="text-5xl md:text-7xl font-display font-extrabold heading-outline tracking-widest"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.h2>
    </div>
  );
}


