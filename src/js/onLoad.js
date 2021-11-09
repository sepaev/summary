import { getLang, getRefs, getTranslations, writeInnerHTML } from './functions';
import softSkillsHbs from '../templates/softSkills.hbs';
import contactsHbs from '../templates/contacts.hbs';

function onLoad() {
  const currentLang = getLang();
  const refs = getRefs();

  //contacts
  const contactsTranslations = getTranslations(currentLang, 'contacts');
  writeInnerHTML(refs.contacts, contactsHbs(contactsTranslations));
  //soft skills
  const softSkillsTranslations = getTranslations(currentLang, 'softSkills');
  writeInnerHTML(refs.softSkills, softSkillsHbs(softSkillsTranslations));
}

export default onLoad;
