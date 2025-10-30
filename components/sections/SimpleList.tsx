import { motion } from 'framer-motion';
import OutlineHeading from '@/components/OutlineHeading';

type Item = { title: string; subtitle?: string; meta?: string; href?: string };

export default function SimpleList({ id, heading, items }: { id: string; heading: string; items: Item[] }) {
  return (
    <section id={id} className="mt-20">
      <OutlineHeading text={heading} />
      <div className="mt-6 grid gap-5">
        {items.map((it, i) => (
          <motion.a
            key={i}
            href={it.href}
            className="block glass rounded-lg p-6 hover:bg-white/10 transition"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.03 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="font-medium text-lg md:text-xl">{it.title}</div>
            {it.subtitle && <div className="text-muted text-base">{it.subtitle}</div>}
            {it.meta && <div className="text-muted text-sm mt-1">{it.meta}</div>}
          </motion.a>
        ))}
      </div>
    </section>
  );
}

