export const locales = ['en', 'pt-br', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeMeta: Record<Locale, { label: string; short: string; htmlLang: string; ogLocale: string }> = {
  en: { label: 'English', short: 'en', htmlLang: 'en', ogLocale: 'en_US' },
  'pt-br': { label: 'Português', short: 'pt', htmlLang: 'pt-BR', ogLocale: 'pt_BR' },
  es: { label: 'Español', short: 'es', htmlLang: 'es', ogLocale: 'es_ES' },
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function toLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}

const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/** Caminho da home de um idioma, respeitando o `base` do Astro. */
export function homePath(locale: Locale): string {
  return locale === defaultLocale ? base : `${base}${locale}/`;
}

/** Texto por idioma vindo dos arquivos de conteúdo. */
export type Localized<T> = Record<Locale, T>;
