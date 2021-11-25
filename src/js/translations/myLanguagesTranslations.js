import ukrFlag from '../../images/ukr.png';
import rusFlag from '../../images/rus.png';
import engFlag from '../../images/eng.png';

const ua = {
  title: 'Мої мови',
  languages: [
    {
      flag: ukrFlag,
      language: 'Українська (Рідна)',
    },
    {
      flag: rusFlag,
      language: 'Російська (Рідна)',
    },
    {
      flag: engFlag,
      language: 'Англійська (B1)',
    },
  ],
};
const ru = {
  title: 'Мои языки',
  languages: [
    {
      flag: ukrFlag,
      language: 'Украинский (Родной)',
    },
    {
      flag: rusFlag,
      language: 'Русский (Родной)',
    },
    {
      flag: engFlag,
      language: 'Английский (B1)',
    },
  ],
};
const en = {
  title: 'Language skills',
  languages: [
    {
      flag: ukrFlag,
      language: 'Ukrainian (Native)',
    },
    {
      flag: rusFlag,
      language: 'Russian (Native)',
    },
    {
      flag: engFlag,
      language: 'English (B1)',
    },
  ],
};

const myLanguagesTranslations = {
  ua,
  en,
  ru,
};

export default myLanguagesTranslations;
