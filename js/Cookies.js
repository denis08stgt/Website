window.onload = function() {
  if (!document.cookie.split('; ').find(row => row.startsWith('cookies_accepted'))) {
    document.getElementById('cookie-banner').style.display = 'block';
  }
}

document.getElementById('accept-cookies').onclick = function() {
  document.cookie = "cookies_accepted=true; path=/; max-age=31536000";
  var cookieBanner = document.getElementById('cookie-banner');
  cookieBanner.style.opacity = '0';
  cookieBanner.classList.add('accepted');
  cookieBanner.addEventListener('animationend', function() {
    cookieBanner.style.display = 'none';
  });
}