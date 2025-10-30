'use client';

import { useState } from 'react';

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mdkpzzke';

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'sent'|'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', body: formData, headers: { Accept: 'application/json' } });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="mt-20">
      <h2 className="text-2xl font-display">Contact</h2>
      <p className="mt-2 text-muted">Feel free to contact me!</p>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4 max-w-xl">
        <input required name="name" placeholder="Your name" className="glass rounded px-4 py-3" />
        <input required type="email" name="email" placeholder="Email" className="glass rounded px-4 py-3" />
        <textarea required name="message" placeholder="Message" rows={5} className="glass rounded px-4 py-3" />
        <button className="justify-self-start px-6 py-3 rounded glass hover:bg-white/10 transition" type="submit">Send</button>
        {status === 'sent' && <p className="text-green-400 text-sm">Thanks! I’ll get back to you.</p>}
        {status === 'error' && <p className="text-red-400 text-sm">Something went wrong. Try again.</p>}
      </form>
    </section>
  );
}


