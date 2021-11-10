const getRefs = () => {
  return {
    lang: document.querySelector('.lang__list'),
    softSkills: document.querySelector('.softSkills__template'),
    myContacts: document.querySelector('.myContacts__template'),
    aboutMe: document.querySelector('.aboutMe__template'),
  };
};

export default getRefs;
