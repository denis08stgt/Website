document.addEventListener("DOMContentLoaded", function() {
  var year = new Date().getFullYear();
  document.getElementById('copyright').textContent = "Copyright © " + year;
});