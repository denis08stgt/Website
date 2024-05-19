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

  var ellipse = document.querySelector('.ellipse-image');
  if (document.body.classList.contains('dunkelmodus')) {
    ellipse.style.filter = 'brightness(20%) saturate(30%) sepia(0%) hue-rotate(0deg) invert(0%)';
  } else {
    // Wenn der Dunkelmodus deaktiviert ist, entferne den Filter
    ellipse.style.filter = '';
  }

  // Speichern des aktuellen Modus in einem Cookie
  var isDarkMode = document.body.classList.contains('dunkelmodus');
  setCookie('mode', isDarkMode ? 'dark' : 'light', 365);
}

// Überprüfen, ob ein Modus-Cookie vorhanden ist und den Modus wiederherstellen
var modeCookie = getCookie('mode');
if (modeCookie) {
  document.body.classList.toggle('dunkelmodus', modeCookie === 'dark');
  var themeIcon = document.getElementById('themeIcon');
  themeIcon.src = modeCookie === 'dark' ? 'images/Hellmodus.png' : 'images/Dunkelmodus.png';
  themeIcon.alt = modeCookie === 'dark' ? 'Dunkelmodus' : 'Hellmodus';

  var ellipse = document.querySelector('.ellipse-image');
  if (document.body.classList.contains('dunkelmodus')) {
    ellipse.style.filter = 'brightness(20%) saturate(30%) sepia(0%) hue-rotate(0deg) invert(0%)';
  } else {
    // Wenn der Dunkelmodus deaktiviert ist, entferne den Filter
    ellipse.style.filter = '';
  }
}

// Fügen Sie den Event-Listener nur hinzu, wenn das Element mit der ID 'themeButton' vorhanden ist
var themeButton = document.getElementById('themeButton');
if (themeButton) {
  themeButton.addEventListener('click', toggleTheme);
} else {
  console.error("Das Element mit der ID 'themeButton' wurde nicht gefunden.");
}
