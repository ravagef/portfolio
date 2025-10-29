import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;
  const messages = (await import(`./i18n/${locale}.json`).catch(async () => ({default: (await import('./i18n/en.json')).default}))).default;
  return {
    locale,
    messages
  };
});
