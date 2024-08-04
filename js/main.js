import { createPhoto } from './photo.js';
import { createGreeting } from './greeting.js';
import { createLanguages } from './language.js';
import { createExperience } from './experience.js';
import { createTools } from './tools.js';
import { createEducation } from './education.js';
import { createInterests } from './interests.js';
import { createConnection } from './connection.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  const row1 = document.createElement('div');
  row1.className = 'row';
  row1.appendChild(createPhoto());
  row1.appendChild(createGreeting());
  row1.appendChild(createLanguages());

  const row2 = document.createElement('div');
  row2.className = 'row';
  row2.appendChild(createExperience());
  row2.appendChild(createTools());

  const col1 = document.createElement('div');
  col1.className = 'col';
  col1.appendChild(createInterests());
  col1.appendChild(createConnection());

  const row3 = document.createElement('div');
  row3.className = 'row';
  row3.appendChild(createEducation());
  row3.appendChild(col1);

  wrapper.appendChild(row1);
  wrapper.appendChild(row2);
  wrapper.appendChild(row3);

  app.appendChild(wrapper);

  const downloadButton = document.createElement('button');
  downloadButton.textContent = 'Скачать';
  downloadButton.className = 'download-button ripple';
  downloadButton.addEventListener('click', () => {
    const element = document.querySelector('.wrapper');
    html2pdf().from(element).save('resume.pdf');
  });

  downloadButton.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    const rect = this.getBoundingClientRect();
    ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
    ripple.style.left = e.clientX - rect.left - ripple.offsetWidth / 2 + 'px';
    ripple.style.top = e.clientY - rect.top - ripple.offsetHeight / 2 + 'px';
    this.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  });

  app.appendChild(downloadButton);
});
