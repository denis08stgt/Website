function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

function toggleTheme() {
  document.body.classList.toggle('dunkelmodus');
  var themeIcon = document.getElementById('themeIcon');
  themeIcon.src = themeIcon.src.includes('Dunkelmodus') ? 'images/Hellmodus.png' : 'images/Dunkelmodus.png';
  themeIcon.alt = themeIcon.alt.includes('Dunkelmodus') ? 'Dunkelmodus' : 'Hellmodus';

  var containerFluid = document.querySelector('.header_section .container-fluid');
  containerFluid.style.backgroundColor = document.body.classList.contains('dunkelmodus') ? '#282828' : '#fefeff';

  var navLinks = document.querySelectorAll('.nav-link1, .nav-link2, .nav-link3');
  navLinks.forEach(function(link) {
    link.style.color = document.body.classList.contains('dunkelmodus') ? '#ffffff' : '#282828';
  });

  var aboutMeTitle = document.querySelector('.über_mich_titel');
  aboutMeTitle.style.color = document.body.classList.contains('dunkelmodus') ? '#ffffff' : '#282828';

  var aboutMeText = document.querySelector('.über_mich_text');
  aboutMeText.style.color = document.body.classList.contains('dunkelmodus') ? '#ffffff' : '#282828';

  var ellipse = document.querySelector('.ellipse-image');
  if (ellipse.src.includes('Ellipse-Dunkel.png')) {
    ellipse.src = ellipse.src.replace('Ellipse-Dunkel.png', 'Ellipse-Hell.png');
  } else if (ellipse.src.includes('Ellipse-Hell.png')) {
    ellipse.src = ellipse.src.replace('Ellipse-Hell.png', 'Ellipse-Dunkel.png');
  }

  var darktheme = document.querySelector('.bg-light');
  darktheme.style.setProperty('background-color', document.body.classList.contains('dunkelmodus') ? '#282828' : '#ffffff', 'important');

  var dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.style.backgroundColor = document.body.classList.contains('dunkelmodus') ? '#282828' : '#fefeff';

  // Speichern des aktuellen Modus in einem Cookie
  var isDarkMode = document.body.classList.contains('dunkelmodus');
  setCookie('mode', isDarkMode ? 'dark' : 'light', 365);
}

document.getElementById('themeButton').addEventListener('click', toggleTheme);

// Überprüfen, ob ein Modus-Cookie vorhanden ist und den Modus wiederherstellen
var modeCookie = getCookie('mode');
if (modeCookie) {
  document.body.classList.toggle('dunkelmodus', modeCookie === 'dark');
  var themeIcon = document.getElementById('themeIcon');
  themeIcon.src = modeCookie === 'dark' ? 'images/Hellmodus.png' : 'images/Dunkelmodus.png';
  themeIcon.alt = modeCookie === 'dark' ? 'Dunkelmodus' : 'Hellmodus';

  var containerFluid = document.querySelector('.header_section .container-fluid');
  containerFluid.style.backgroundColor = modeCookie === 'dark' ? '#282828' : '#fefeff';

  var navLinks = document.querySelectorAll('.nav-link1, .nav-link2, .nav-link3');
  navLinks.forEach(function(link) {
    link.style.color = modeCookie === 'dark' ? '#ffffff' : '#282828';
  });

  var aboutMeTitle = document.querySelector('.über_mich_titel');
  aboutMeTitle.style.color = modeCookie === 'dark' ? '#ffffff' : '#282828';

  var aboutMeText = document.querySelector('.über_mich_text');
  aboutMeText.style.color = modeCookie === 'dark' ? '#ffffff' : '#282828';

  var ellipse = document.querySelector('.ellipse-image');
  if (modeCookie === 'dark' && ellipse.src.includes('Ellipse-Hell.png')) {
    ellipse.src = ellipse.src.replace('Ellipse-Hell.png', 'Ellipse-Dunkel.png');
  } else if (modeCookie === 'light' && ellipse.src.includes('Ellipse-Dunkel.png')) {
    ellipse.src = ellipse.src.replace('Ellipse-Dunkel.png', 'Ellipse-Hell.png');
  }

  var darktheme = document.querySelector('.bg-light');
  darktheme.style.setProperty('background-color', modeCookie === 'dark' ? '#282828' : '#ffffff', 'important');

  var dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.style.backgroundColor = modeCookie === 'dark' ? '#282828' : '#fefeff';
}
