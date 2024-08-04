import '../css/connection.css';

export function createConnection() {
  const connectionDiv = document.createElement('div');
  connectionDiv.className = 'contact';
  connectionDiv.contentEditable = 'true';

  const titleDiv = document.createElement('div');
  titleDiv.className = 'title';

  const nameTitle = document.createElement('span');
  nameTitle.className = 'title-con';
  nameTitle.textContent = 'Contact';

  titleDiv.appendChild(nameTitle);

  const subtitleDiv = document.createElement('div');
  subtitleDiv.className = 'subtitle';

  const subtitleText = document.createElement('span');
  subtitleText.className = 'subtitle-text';
  subtitleText.textContent = 'Let´s chat! I´m ready to work on exciting projects';

  subtitleDiv.appendChild(subtitleText);

  const emailDiv = document.createElement('div');
  emailDiv.className = 'email';

  const emailLink = document.createElement('a');
  emailLink.href = 'mailto:natasha734@bk.ru';
  emailLink.textContent = 'natasha734@bk.ru';

  emailDiv.appendChild(emailLink);

  connectionDiv.appendChild(titleDiv);
  connectionDiv.appendChild(subtitleDiv);
  connectionDiv.appendChild(emailDiv);

  return connectionDiv;
}
