'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WelcomeBanner from './components/WelcomeBanner';
import { HomeLang } from './hooks/useHomeTranslations';
import RandomCard from './components/RandomCard';
import UserForm from './components/UserForm';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useState } from 'react';

export default function HomePage() {
  const [lang, setLang] = useState<HomeLang>('en');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-8">
        <LanguageSwitcher onChange={(lang: string) => setLang(lang as HomeLang)} />
        <WelcomeBanner lang={lang} />
        <div className="mt-8">
          <RandomCard lang={lang} />
        </div>
        <UserForm lang={lang} />
      </main>
      <Footer />
    </div>
  );
}
