'use client';

import { useEffect, useState } from 'react';
import '@/lib/i18n';
import i18n from '@/lib/i18n';

export default function LanguageToggle() {
  const [lang, setLang] = useState<string>('es');

  useEffect(() => {
    const initial = (i18n.language || (typeof window !== 'undefined' && localStorage.getItem('i18nextLng')) ) || 'es';
    setLang(initial.slice(0,2));
    if (typeof document !== 'undefined') document.documentElement.lang = initial.slice(0,2);
  }, []);

  const switchLang = (next: string) => {
    i18n.changeLanguage(next);
    setLang(next);
    try {
      localStorage.setItem('i18nextLng', next);
      if (typeof document !== 'undefined') document.documentElement.lang = next;
    } catch {}
  };

  return (
    <div className="flex items-center gap-2">
      <button onClick={() => switchLang('es')} className={`px-2 py-1 rounded text-sm ${lang==='es' ? 'bg-primary-500/10 text-primary-500' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>ES</button>
      <button onClick={() => switchLang('en')} className={`px-2 py-1 rounded text-sm ${lang==='en' ? 'bg-primary-500/10 text-primary-500' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>EN</button>
    </div>
  );
}