import OutlineHeading from '@/components/OutlineHeading';

export default function Socials() {
  return (
    <section id="socials" className="mt-20">
      <OutlineHeading text="Socials" />
      <div className="mt-6 flex gap-4">
        <a href="https://www.linkedin.com/in/alan-hernandez-6b9518335" target="_blank" rel="noreferrer" className="glass rounded px-4 py-3 flex items-center gap-2 hover:bg-white/10 transition">
          <img src="/logos/linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/ravagef" target="_blank" rel="noreferrer" className="glass rounded px-4 py-3 flex items-center gap-2 hover:bg-white/10 transition">
          <img src="/logos/github.svg" alt="GitHub" className="h-5 w-5" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}


