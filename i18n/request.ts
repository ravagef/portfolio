import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const messages = (await import(`../i18n/${locale}.json`).catch(async () => ({default: (await import('../i18n/en.json')).default}))).default;
  return {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    messages
  };
});


