import { motion } from 'framer-motion';

export default function About({ text }: { text: string }) {
  return (
    <section id="about" className="mt-20">
      <motion.h2
        className="text-2xl font-display"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.h2>
      <motion.p
        className="mt-4 text-muted max-w-3xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        {text}
      </motion.p>
    </section>
  );
}

