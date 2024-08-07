// Funktion zum Setzen eines Cookies
function setCookie(name, value, days) {
  var cookiesStatus = getCookie('cookies');
  if (cookiesStatus !== 'accepted') {
    console.log('Cookies sind nicht akzeptiert. Kein Cookie gesetzt:', name);
    return;
  }

  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
}

// Funktion zum Abrufen eines Cookies
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

// Funktion zum Anwenden des gespeicherten Modus
function applyStoredTheme() {
  var modeCookie = getCookie('mode');

  if (modeCookie === 'dark') {
    document.body.classList.add('dunkelmodus');
    console.log('Dunkelmodus aktiviert');
  } else {
    document.body.classList.remove('dunkelmodus');
    console.log('Hellmodus aktiviert');
  }

  // Bildfilter anpassen
  var ellipse = document.querySelector('.ellipse-image');
  if (ellipse) {
    if (document.body.classList.contains('dunkelmodus')) {
      ellipse.style.filter = 'brightness(7%) saturate(0%) sepia(0%) hue-rotate(0deg) invert(0%)';
    } else {
      ellipse.style.filter = '';
    }
  }

  // Icon setzen, nachdem der gespeicherte Modus angewendet wurde
  var themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    var isDarkMode = document.body.classList.contains('dunkelmodus');
    var newIconSrc = isDarkMode ? 'images/Dunkelmodus.png' : 'images/Hellmodus.png';
    themeIcon.src = newIconSrc;
    themeIcon.style.display = 'block';
  }
}

// Funktion zum Umschalten des Darkmodes
function toggleTheme() {
  document.body.classList.toggle('dunkelmodus');
  var isDarkMode = document.body.classList.contains('dunkelmodus');
  
  // Überprüfen, ob Cookies akzeptiert sind, bevor der Cookie gesetzt wird
  if (getCookie('cookies') === 'accepted') {
    setCookie('mode', isDarkMode ? 'dark' : 'light', 365);
    console.log('Thema umgeschaltet. Modus:', isDarkMode ? 'dunkel' : 'hell');
  } else {
    console.log('Cookies sind nicht akzeptiert. Der Cookie für den Modus wird nicht gesetzt.');
  }

  // Bildfilter anpassen
  var ellipse = document.querySelector('.ellipse-image');
  if (ellipse) {
    if (isDarkMode) {
      ellipse.style.filter = 'brightness(7%) saturate(0%) sepia(0%) hue-rotate(0deg) invert(0%)';
    } else {
      ellipse.style.filter = '';
    }
  }

  // Icon ändern
  var themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    var newIconSrc = isDarkMode ? 'images/Dunkelmodus.png' : 'images/Hellmodus.png';
    themeIcon.src = newIconSrc;
  }
}

// Event-Listener für den Darkmode-Button
document.addEventListener('DOMContentLoaded', function() {
  var themeButton = document.getElementById('themeButton');
  if (themeButton) {
    themeButton.addEventListener('click', toggleTheme);
  }

  // Icon verstecken, bis der Modus angewendet wurde
  var themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.style.display = 'none'; // Bild verstecken
  }

  applyStoredTheme();
});