'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRestore() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on route change (including locale switches)
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}




