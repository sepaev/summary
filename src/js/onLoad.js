import { getLang, getRefs, rewriteInnerHTML } from './functions';
import {
  titleTranslations,
  softSkillsTranslations,
  myContactsTranslations,
  aboutMeTranslations,
  workExperienceTranslations,
  myEducationTranslations,
  myLanguagesTranslations,
} from './translations';
import softSkillsHbs from '../templates/softSkills.hbs';
import myContactsHbs from '../templates/myContacts.hbs';
import aboutMeHbs from '../templates/aboutMe.hbs';
import workExperienceHbs from '../templates/workExperience.hbs';
import myEducationHbs from '../templates/myEducation.hbs';
import myLanguagesHbs from '../templates/myLanguages.hbs';

function onLoad() {
  const currentLang = getLang();
  const refs = getRefs();
  //index.html
  document.title = titleTranslations[currentLang];
  document.documentElement.lang = currentLang;
  //print button
  refs.print.href = './public/summary' + currentLang.toUpperCase() + '.pdf';
  refs.printHidden[0].href = './public/summaryUA.pdf';
  refs.printHidden[1].href = './public/summaryEN.pdf';
  refs.printHidden[2].href = './public/summaryRU.pdf';
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
  //my languages
  rewriteInnerHTML(refs.myLanguages, myLanguagesHbs(myLanguagesTranslations[currentLang]));
  console.log(refs.printHidden);
}

export default onLoad;
