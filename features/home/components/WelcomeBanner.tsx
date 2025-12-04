import { useHomeTranslations, HomeLang } from '../hooks/useHomeTranslations';

export default function WelcomeBanner({ lang = 'en' }: { lang?: HomeLang }) {
    const t = useHomeTranslations(lang).welcomeBanner;
    return (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
            <h2 className="text-lg font-bold">{t.title}</h2>
            <p>{t.subtitle}</p>
        </div>
    );
}