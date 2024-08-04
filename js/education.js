import '../css/education.css';

export function createEducation() {
  const educationDiv = document.createElement('div');
  educationDiv.className = 'education-box';
  educationDiv.contentEditable = 'true';

  const header = document.createElement('h2');
  header.className = 'title';
  header.textContent = 'Education';

  educationDiv.appendChild(header);

  const createTags = (tags) => {
    return tags.map(tag => {
      const tagElement = document.createElement('span');
      tagElement.className = 'tag-ed';
      tagElement.textContent = tag;
      return tagElement;
    });
  };

  const education1 = document.createElement('div');
  education1.className = 'education-item education-item-1';

  const topBar1 = document.createElement('div');
  topBar1.className = 'top-bar';

  const year1 = document.createElement('span');
  year1.className = 'year';
  year1.textContent = '2023';

  const heartIcon = document.createElement('div');
  heartIcon.className = 'heart-icon';

  topBar1.appendChild(year1);
  topBar1.appendChild(heartIcon);

  const content1 = document.createElement('div');
  content1.className = 'content';

  const direction1 = document.createElement('div');
  direction1.className = 'direction';
  direction1.textContent = 'UI/UX';

  const nameTitle1 = document.createElement('div');
  nameTitle1.className = 'name-title';
  nameTitle1.textContent = 'Coursera';

  const tags1 = document.createElement('div');
  tags1.className = 'tags';
  createTags(['#UX', '#UI', '#research', '#DesignSystem', '#Ui', '#wireframing', '#figma', '#Ux']).forEach(tag => {
    tags1.appendChild(tag);
  });

  content1.appendChild(direction1);
  content1.appendChild(tags1);
  content1.appendChild(nameTitle1);

  education1.appendChild(topBar1);
  education1.appendChild(content1);

  const education2 = document.createElement('div');
  education2.className = 'education-item education-item-2';

  const topBar2 = document.createElement('div');
  topBar2.className = 'top-bar';

  const year2 = document.createElement('span');
  year2.className = 'year';
  year2.textContent = '2017-2022';

  topBar2.appendChild(year2);

  const content2 = document.createElement('div');
  content2.className = 'content';

  const direction2 = document.createElement('div');
  direction2.className = 'direction';
  direction2.textContent = 'Law';

  const nameTitle2 = document.createElement('div');
  nameTitle2.className = 'name-title';
  nameTitle2.textContent = 'University of Kerala';

  const tags2 = document.createElement('div');
  tags2.className = 'tags';
  createTags(['#law', '#legalStudies', '#contracts', '#internationalLaws']).forEach(tag => {
    tags2.appendChild(tag);
  });

  content2.appendChild(direction2);
  content2.appendChild(tags2);
  content2.appendChild(nameTitle2);

  education2.appendChild(topBar2);
  education2.appendChild(content2);

  const education3 = document.createElement('div');
  education3.className = 'education-item education-item-3';

  const topBar3 = document.createElement('div');
  topBar3.className = 'top-bar';

  const year3 = document.createElement('span');
  year3.className = 'year';
  year3.textContent = '2017';

  topBar3.appendChild(year3);

  const content3 = document.createElement('div');
  content3.className = 'content';

  const direction3 = document.createElement('div');
  direction3.className = 'direction';
  direction3.textContent = 'Graphic design';

  const nameTitle3 = document.createElement('div');
  nameTitle3.className = 'name-title';
  nameTitle3.textContent = 'Coursera';

  const tags3 = document.createElement('div');
  tags3.className = 'tags';
  createTags(['#branding', '#web', '#illustration', '#adobe']).forEach(tag => {
    tags3.appendChild(tag);
  });

  content3.appendChild(direction3);
  content3.appendChild(tags3);
  content3.appendChild(nameTitle3);

  education3.appendChild(topBar3);
  education3.appendChild(content3);

  const row1 = document.createElement('div');
  row1.className = 'education-row';
  row1.appendChild(education1);
  row1.appendChild(education2);

  educationDiv.appendChild(row1);
  educationDiv.appendChild(education3);

  return educationDiv;
}
