import { addRippleEffect } from './ripple.js';

export function createInterests() {
  const interestsDiv = document.createElement('div');
  interestsDiv.className = 'extra-box';
  interestsDiv.contentEditable = 'true';

  const interestsBox = document.createElement('div');
  interestsBox.className = 'interests-box';

  const titleDiv = document.createElement('div');

  const nameTitle = document.createElement('span');
  nameTitle.className = 'title';
  nameTitle.textContent = 'Interests';

  titleDiv.appendChild(nameTitle);

  const contentDiv = document.createElement('div');
  contentDiv.className = 'content-in';

  const interests = [
    'Technology',
    'Design',
    'Development',
    'Music',
    'Travel',
    'Fitness',
    'Gaming'
  ];

  interests.forEach((interest, index) => {
    const tag = document.createElement('div');
    tag.className = 'tag-in';

    const name = document.createElement('span');
    name.className = 'name';
    name.textContent = interest;

    tag.appendChild(name);
    contentDiv.appendChild(tag);
  });

  interestsBox.appendChild(titleDiv);
  interestsBox.appendChild(contentDiv);
  interestsDiv.appendChild(interestsBox);

  addRippleEffect(interestsBox);

  return interestsDiv;
}
