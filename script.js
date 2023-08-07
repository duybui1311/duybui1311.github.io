/*MIT University Vietnam
Course: COSC2430 Web Programming
Semester: 2023B
Assessment: Assignment 1
Author: Bui Cong Duy
ID: s3978546
Acknowledgement: Images from google.com ; icon images are downloaded from flaticon.com; book description are from amazon.com */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

window.onscroll = function() {
  showBackToTopButton();
};

function showBackToTopButton() {
  var button = document.getElementById('backToTopBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.classList.add('show');
  } else {
    button.classList.remove('show');
  }
}
