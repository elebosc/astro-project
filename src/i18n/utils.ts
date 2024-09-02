import { strings, defaultLang } from './strings';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in strings) return lang as keyof typeof strings;
  return defaultLang;
}

export function getSectionFromUrl(url: URL) {
  const [, , section] = url.pathname.split('/');
  return section;
}

export function useTranslations(lang: keyof typeof strings) {
  return function t(key: keyof typeof strings[typeof defaultLang]) {
    return strings[lang][key] || strings[defaultLang][key];
  }
}