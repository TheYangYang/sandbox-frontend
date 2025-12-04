import en from '../../../locales/en/home.json';
import fr from '../../../locales/fr/home.json';

export type HomeLang = 'en' | 'fr';
export type HomeTranslations = typeof en;

export function useHomeTranslations(lang: HomeLang): HomeTranslations {
  if (lang === 'fr') return fr;
  return en;
}
