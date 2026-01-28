const selectElem = document.querySelector('#modeSelect');
const logo = document.querySelector('#byuiLogo');

const LIGHT_LOGO = 'images/byuilogoblue.jpg';
const DARK_LOGO = 'images/byuilogowhite.jpg';

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
  const current = selectElem.value;

  if (current === 'dark') {
    document.body.classList.add('dark');
    logo.src = DARK_LOGO;
  } else if (current === 'light') {
    document.body.classList.remove('dark');
    logo.src = LIGHT_LOGO;
  }
}
