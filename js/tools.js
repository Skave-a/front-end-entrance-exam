import '../css/tools.css';

export function createTools() {
  const toolsDiv = document.createElement('div');
  toolsDiv.className = 'toolsBox';

  const title = document.createElement('h2');
  title.className = 'title';
  title.textContent = 'Tools';

  function createSection(className, icons) {
    const section = document.createElement('div');
    section.className = className;

    const tag = document.createElement('div');
    tag.className = 'tag';

    const tagText = document.createElement('div');
    tagText.className = 'tag-text';
    tagText.textContent = className;

    tag.appendChild(tagText);
    section.appendChild(tag);

    icons.forEach(icon => {
      const img = document.createElement('img');
      img.src = `../assets/${className}/${icon}`;
      img.className = `${className}-icon`;
      section.appendChild(img);
    });

    return section;
  }

  const designIcons = [
    'logoFigma.svg',
    'photoshop.svg',
    'illustrator.svg',
    'premiere.svg',
    'logoNotion.svg',
    'logoMeet.svg',
  ];

  const noCodeIcons = [
    'logoZapier.svg',
    'logoWordpress.svg',
    'logoFramer.svg',
    'logoWebflow.svg',
  ];

  const aiIcons = [
    'logoChatGPT.svg',
    'logoCopilot.svg',
    'logoMidjourney.svg'
  ];

  toolsDiv.appendChild(title);

  const tools = document.createElement('div');
  tools.className = 'tools';

  tools.appendChild(createSection('design', designIcons));
  tools.appendChild(createSection('no-code', noCodeIcons));
  tools.appendChild(createSection('artificial-intelligence', aiIcons));
  toolsDiv.appendChild(tools);

  return toolsDiv;
}
