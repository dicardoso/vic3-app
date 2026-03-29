"use client";

import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { locales } from '@/i18n';
import { useDictionary } from './DictionaryContext';

const localeLabels = {
  'pt-BR': { label: 'Português (BR)', flag: '🇧🇷' },
  'en': { label: 'English', flag: '🇺🇸' },
};

export default function LanguageSwitcher() {
  const { lang } = useDictionary();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function getLocalePath(targetLocale) {
    // Replace current locale prefix with target
    const segments = pathname.split('/');
    if (locales.includes(segments[1])) {
      segments[1] = targetLocale;
    } else {
      segments.splice(1, 0, targetLocale);
    }
    return segments.join('/') || '/';
  }

  const current = localeLabels[lang] || localeLabels['pt-BR'];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-amber-500/50 text-sm text-slate-300 hover:text-white transition-all duration-200"
        aria-label="Select language"
        id="language-switcher"
      >
        <Globe className="w-4 h-4 text-amber-500" />
        <span>{current.flag} {lang.toUpperCase()}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {locales.map((locale) => {
            const info = localeLabels[locale];
            const isActive = locale === lang;
            return (
              <a
                key={locale}
                href={getLocalePath(locale)}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-150 ${
                  isActive
                    ? 'bg-amber-500/10 text-amber-400 font-medium'
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                <span className="text-lg">{info.flag}</span>
                <span>{info.label}</span>
                {isActive && (
                  <span className="ml-auto w-2 h-2 rounded-full bg-amber-500"></span>
                )}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
