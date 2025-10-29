import LanguageGate from '@/components/LanguageGate';

export default function RootPage() {
  return (
    <main className="min-h-screen">
      <LanguageGate forceShow={true} />
    </main>
  );
}

