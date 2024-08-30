export const languages = {
    en: 'EN',
    it: 'IT',
};

export const defaultLang = 'en';

export const strings = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.blog': 'Blog',
        'nav.tags': 'Tags',
        'thanks': 'Thank you for visiting!',
        'new_greeting': 'New Greeting',
        'written_by': 'Written by ',
        'published_on': 'Published on'
    },
    it: {
        'nav.about': 'Su di me',
        'thanks': "Grazie per aver visitato il sito!",
        'new_greeting': 'Salutami di nuovo',
        'written_by': 'Scritto da ',
        'published_on': 'Pubblicato in data'
    },
} as const;
