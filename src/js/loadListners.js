import { changeLang, getRefs } from './functions';
const refs = getRefs();

function loadListners() {
  refs.lang.addEventListener('click', changeLang);
}

export default loadListners;
