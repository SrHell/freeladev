function myFunction() {
  var body = document.querySelector("body");
  if (localStorage.getItem('isDarkMode', 'true')) {
  body.classList.remove('night');
  localStorage.removeItem('isDarkMode');
  } else {
    body.classList.add('night');
    localStorage.setItem('isDarkMode', 'true');
  } 
};

