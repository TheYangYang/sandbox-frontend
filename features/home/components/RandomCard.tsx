import { useHomeTranslations, HomeLang } from '../hooks/useHomeTranslations';

export default function RandomCard({ lang = 'en' }: { lang?: HomeLang }) {
    const t = useHomeTranslations(lang).randomCard;
    return (
      <div className="bg-white shadow rounded p-6 max-w-sm mx-auto">
        <h2 className="text-xl font-semibold mb-2">{t.title}</h2>
        <p>{t.description}</p>
      </div>
    );
  }
