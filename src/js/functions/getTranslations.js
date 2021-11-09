import { softSkillsTranslations, contactsTranslations } from '../translations';

const getTranslations = (currentLang, block) => {
  if (block === 'softSkills') return softSkillsTranslations[currentLang];
  if (block === 'contacts') return contactsTranslations[currentLang];
};

export default getTranslations;
