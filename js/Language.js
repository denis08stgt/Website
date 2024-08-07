// Funktion zum Setzen eines Cookies
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Funktion zum Abrufen des Werts eines Cookies
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Funktion zum Überprüfen, ob Cookies akzeptiert wurden
function areCookiesAccepted() {
  var cookieConsent = getCookie('cookies');
  return cookieConsent === 'accepted';
}

// Funktion zum Ändern der Sprache
function changeLanguage(language) {
  if (areCookiesAccepted()) {
    setCookie('userLanguage', language, 7); // Sprache für 7 Tage speichern
  }
  window.location.href = `/${language}/`; // Weiterleiten zur ausgewählten Sprache
}

// Beispiel für Event-Listener auf Sprachwahl-Buttons
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const language = e.target.closest('a').href.split('/')[3]; // Sprache aus href extrahieren
    const currentLanguage = window.location.pathname.split('/')[1]; // Aktuelle Sprache herausfinden
    if (language !== currentLanguage) {
      changeLanguage(language); // Sprache ändern und weiterleiten
    }
  });
});