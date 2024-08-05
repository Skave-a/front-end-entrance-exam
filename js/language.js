import { addRippleEffect } from './ripple.js';

export function createLanguages() {
  const languagesDiv = document.createElement('div');
  languagesDiv.className = 'languages';

  const languagesTitle = document.createElement('h2');
  languagesTitle.className = 'title';
  languagesTitle.textContent = 'Languages';

  const listLanguages = document.createElement('div');
  listLanguages.className = 'listLanguages';

  const languageList = document.createElement('div');
  languageList.className = 'language-list';

  const progressBarList = document.createElement('div');
  progressBarList.className = 'progress-bar-list';

  const languages = [
    { name: 'Russian', width: '100%' },
    { name: 'English', width: '70%' },
    { name: 'Uzbek', width: '10%' }
  ];

  languages.forEach((lang) => {
    const langItem = document.createElement('div');
    langItem.className = 'language-item';

    const langName = document.createElement('p');
    langName.className = 'language-name';
    langName.textContent = lang.name;
    langName.contentEditable = 'true';

    langItem.appendChild(langName);
    languageList.appendChild(langItem);

    const progressBarContainer = document.createElement('div');
    progressBarContainer.className = 'progress-bar-container';
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.style.width = lang.width;

    progressBarContainer.appendChild(progressBar);
    progressBarList.appendChild(progressBarContainer);
  });

  listLanguages.appendChild(languageList);
  listLanguages.appendChild(progressBarList);

  languagesDiv.appendChild(languagesTitle);
  languagesDiv.appendChild(listLanguages);

  addRippleEffect(languagesDiv);

  return languagesDiv;
}
