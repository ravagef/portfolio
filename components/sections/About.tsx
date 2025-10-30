import { motion } from 'framer-motion';
import OutlineHeading from '@/components/OutlineHeading';

export default function About({ text }: { text: string }) {
  return (
    <section id="about" className="mt-20">
      <OutlineHeading text="About" />
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

