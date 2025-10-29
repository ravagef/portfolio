import { motion } from 'framer-motion';

export default function Hero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="pt-16 md:pt-24">
      <motion.h1
        className="text-4xl md:text-6xl font-display tracking-tight"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="mt-6 max-w-2xl text-muted"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {subtitle}
      </motion.p>
    </section>
  );
}

