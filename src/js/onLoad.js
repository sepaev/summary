import { getLang, getRefs, rewriteInnerHTML } from './functions';
import {
  titleTranslations,
  softSkillsTranslations,
  myContactsTranslations,
  aboutMeTranslations,
  workExperienceTranslations,
  myEducationTranslations,
} from './translations';
import softSkillsHbs from '../templates/softSkills.hbs';
import myContactsHbs from '../templates/myContacts.hbs';
import aboutMeHbs from '../templates/aboutMe.hbs';
import workExperienceHbs from '../templates/workExperience.hbs';
import myEducationHbs from '../templates/myEducation.hbs';

function onLoad() {
  const currentLang = getLang();
  const refs = getRefs();
  document.title = titleTranslations[currentLang];
  refs.print.href = '/downloads/summary' + currentLang.toUpperCase() + '.pdf';
  //my contacts
  rewriteInnerHTML(refs.myContacts, myContactsHbs(myContactsTranslations[currentLang]));
  //soft skills
  rewriteInnerHTML(refs.softSkills, softSkillsHbs(softSkillsTranslations[currentLang]));
  //about me
  rewriteInnerHTML(refs.aboutMe, aboutMeHbs(aboutMeTranslations[currentLang]));
  //work experience
  rewriteInnerHTML(refs.workExperience, workExperienceHbs(workExperienceTranslations[currentLang]));
  //my education
  rewriteInnerHTML(refs.myEducation, myEducationHbs(myEducationTranslations[currentLang]));
}

export default onLoad;
