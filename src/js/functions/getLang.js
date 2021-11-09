const getLang = () => {
  const defaultLang = 'ua';
  let currentLang = localStorage.getItem('sumLang');
  if (!currentLang) {
    localStorage.setItem('sumLang', defaultLang);
    return defaultLang;
  }
  return currentLang;
};

export default getLang;
