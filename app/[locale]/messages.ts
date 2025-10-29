import en from '@/i18n/en.json';
import es from '@/i18n/es.json';

export function getMessagesForLocale(locale: string) {
  return locale === 'es' ? es : en;
}

