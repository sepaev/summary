import { getLang, getRefs, rewriteInnerHTML } from './functions';
import {
  softSkillsTranslations,
  myContactsTranslations,
  aboutMeTranslations,
} from './translations';
import softSkillsHbs from '../templates/softSkills.hbs';
import myContactsHbs from '../templates/myContacts.hbs';
import aboutMeHbs from '../templates/aboutMe.hbs';

function onLoad() {
  const currentLang = getLang();
  const refs = getRefs();
  //contacts
  rewriteInnerHTML(refs.myContacts, myContactsHbs(myContactsTranslations[currentLang]));
  //soft skills
  rewriteInnerHTML(refs.softSkills, softSkillsHbs(softSkillsTranslations[currentLang]));
  //about me
  rewriteInnerHTML(refs.aboutMe, aboutMeHbs(aboutMeTranslations[currentLang]));
}

export default onLoad;
