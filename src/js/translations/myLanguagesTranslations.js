import ukrFlag from '../../images/ukr.png';
import rusFlag from '../../images/rus.png';
import engFlag from '../../images/eng.png';

const ua = {
  title: 'Мої мови',
  languages: [
    {
      flag: ukrFlag,
      language: 'Українська',
    },
    {
      flag: rusFlag,
      language: 'Російська',
    },
    {
      flag: engFlag,
      language: 'Англійська',
    },
  ],
};
const ru = {
  title: 'Мои языки',
  languages: [
    {
      flag: ukrFlag,
      language: 'Украинский',
    },
    {
      flag: rusFlag,
      language: 'Русский',
    },
    {
      flag: engFlag,
      language: 'Английский',
    },
  ],
};
const en = {
  title: 'My languages',
  languages: [
    {
      flag: ukrFlag,
      language: 'Ukrainian',
    },
    {
      flag: rusFlag,
      language: 'Russian',
    },
    {
      flag: engFlag,
      language: 'English',
    },
  ],
};

const myLanguagesTranslations = {
  ua,
  en,
  ru,
};

export default myLanguagesTranslations;
