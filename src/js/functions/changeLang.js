import onLoad from '../onLoad';

const changeLang = ({ target }) => {
  const targetChoice = target.dataset.lang || 'ua';
  console.log(targetChoice);
  localStorage.setItem('sumLang', targetChoice);
  onLoad();
};

export default changeLang;
