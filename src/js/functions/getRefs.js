const getRefs = () => {
  return {
    lang: document.querySelector('.lang__list'),
    softSkills: document.querySelector('.softSkills__template'),
    myContacts: document.querySelector('.myContacts__template'),
    aboutMe: document.querySelector('.aboutMe__template'),
    workExperience: document.querySelector('.workExperience__template'),
    myEducation: document.querySelector('.myEducation__template'),
    myLanguages: document.querySelector('.myLanguages__template'),
    print: document.querySelector('.print'),
  };
};

export default getRefs;
