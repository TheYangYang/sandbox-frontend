'use client'
import { useState } from 'react';

export default function LanguageSwitcher({ onChange }: { onChange: (lang: string) => void }) {
  const [lang, setLang] = useState('en');

  const handleSwitch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="mb-4 flex items-center gap-2">
      <label htmlFor="lang-switch" className="font-medium">Language:</label>
      <select id="lang-switch" value={lang} onChange={handleSwitch} className="border rounded px-2 py-1">
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}
