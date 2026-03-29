export const locales = ['pt-BR', 'en'];
export const defaultLocale = 'pt-BR';

export function hasLocale(locale) {
  return locales.includes(locale);
}
