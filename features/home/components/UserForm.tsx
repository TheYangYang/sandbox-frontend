'use client'
import { useState } from 'react';
import { userSchema } from '@/lib/validation/userValidation';
import { useUserFormStore } from '../store/userFormStore';

import { useHomeTranslations, HomeLang } from '../hooks/useHomeTranslations';

export default function UserForm({ lang = 'en' }: { lang?: HomeLang }) {
  const { user, setUser } = useUserFormStore();
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const t = useHomeTranslations(lang).userForm;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = userSchema.safeParse({ name, email });
    if (!result.success && result.error && Array.isArray(result.error.issues)) {
      const fieldErrors: { name?: string; email?: string } = {};
      result.error.issues.forEach(err => {
        if (err.path[0] === 'name') fieldErrors.name = err.message;
        if (err.path[0] === 'email') fieldErrors.email = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setUser({ name, email });
  };

  return (
    <form className="bg-white shadow rounded p-6 max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">{t.title}</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">{t.nameLabel}</label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">{t.emailLabel}</label>
        <input
          type="email"
          className="w-full border px-3 py-2 rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{t.submit}</button>
      {user.name && user.email && !errors.name && !errors.email && (
        <div className="mt-4 text-green-700">
          <p>{t.submittedName} {user.name}</p>
          <p>{t.submittedEmail} {user.email}</p>
        </div>
      )}
      {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
      {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
    </form>
  );
}
