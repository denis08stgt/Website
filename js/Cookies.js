// Funktion, um Cookies zu setzen
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }

  // SameSite und Secure nur hinzufügen, wenn HTTPS verwendet wird
  var sameSite = "SameSite=Lax"; // Ändere dies zu "SameSite=None" wenn du Drittanbieter-Kontexte benötigst
  var secure = ""; // Nur hinzufügen wenn du HTTPS verwendest

  if (window.location.protocol === 'https:') {
    secure = "Secure";
  }

  var cookieString = name + "=" + (value || "") + expires + "; path=/; " + sameSite + "; " + secure;
  console.log('Setze Cookie:', cookieString); // Debugging-Ausgabe
  document.cookie = cookieString;
}

// Funktion, um Cookies auszulesen
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim(); // Entfernen von führenden Leerzeichen
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

// Zeigt das Cookie-Banner an, wenn keine Entscheidung getroffen wurde
window.onload = function() {
  var cookiesValue = getCookie('cookies');
  console.log('Cookies-Wert beim Laden:', cookiesValue); // Debugging-Ausgabe
  if (cookiesValue === null) {
    // Verwende Klasse, um das Banner anzuzeigen
    document.getElementById('cookie-banner').classList.add('show');
  }
};

// Akzeptieren von Cookies
document.getElementById('accept-cookies').onclick = function() {
  setCookie('cookies', 'accepted', 365);
  console.log('Cookies akzeptiert'); // Debugging-Ausgabe
  var cookieBanner = document.getElementById('cookie-banner');
  cookieBanner.classList.remove('show'); // Banner verstecken
};

// Ablehnen von Cookies
document.getElementById('decline-cookies').onclick = function() {
  setCookie('cookies', 'declined', 365);
  console.log('Cookies abgelehnt'); // Debugging-Ausgabe
  var cookieBanner = document.getElementById('cookie-banner');
  cookieBanner.classList.remove('show'); // Banner verstecken
};