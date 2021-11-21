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
      language: 'Англійська (А2)',
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
      language: 'Английский (A2)',
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
      language: 'English (A2)',
    },
  ],
};

const myLanguagesTranslations = {
  ua,
  en,
  ru,
};

export default myLanguagesTranslations;
