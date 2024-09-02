import { useState } from 'preact/hooks';
import { useTranslations } from '../i18n/utils';

export default function Greeting({messages}) {

  const lang = useState(messages[0])[0]
  const t = useTranslations(lang)

  const randomMessage = () => messages[(Math.floor(Math.random() * (messages.length-1))) + 1];
  const [greeting, setGreeting] = useState(messages[1]);

  return (
    <div>
      <h3 class="text-lg mb-4">{greeting}! {t('thanks')}</h3>
      <button class="bg-gray-200 border border-black rounded-md px-3 py-1" onClick={() => setGreeting(randomMessage())}>
        {t('new_greeting')}
      </button>
    </div>
  );
}
