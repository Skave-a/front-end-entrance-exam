export function createGreeting() {
  const infoDiv = document.createElement('div');
  infoDiv.className = 'info';
  infoDiv.contentEditable = 'true';

  const helloText = document.createElement('p');
  helloText.className = 'hello';
  helloText.textContent = 'Hello 👋🏻 I’m';

  const nameRoleDiv = document.createElement('div');
  nameRoleDiv.className = 'name-role';

  const nameText = document.createElement('p');
  nameText.className = 'name';
  nameText.textContent = 'Natalya';

  const roleText = document.createElement('p');
  roleText.className = 'role';
  roleText.textContent = 'Frontend Developer';

  nameRoleDiv.appendChild(nameText);
  nameRoleDiv.appendChild(roleText);

  infoDiv.appendChild(helloText);
  infoDiv.appendChild(nameRoleDiv);

  return infoDiv;
}
