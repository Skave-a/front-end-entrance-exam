import '../css/photo.css';

export function createPhoto() {
  const photoDiv = document.createElement('div');
  photoDiv.className = 'photo';
  return photoDiv;
}
