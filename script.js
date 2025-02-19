// Smooth Scroll to Hero Section on Arrow Click
document
  .querySelector(".scroll-down")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#hero").scrollIntoView({ behavior: "smooth" });
  });

// Parallax Effect for Wedding Info Section
window.addEventListener("scroll", function () {
  let scrolled = window.scrollY;
  document.getElementById("wedding-info").style.backgroundPositionY =
    -(scrolled * 0.3) + "px";
});

// Countdown Timer Logic for October 10, 2025
function updateCountdown() {
  const weddingDate = new Date("2025-10-10T15:30:00").getTime();
  const now = new Date().getTime();
  const timeLeft = weddingDate - now;

  if (timeLeft <= 0) {
    document.getElementById("countdown").innerHTML =
      "<h2>Chúc mừng ngày cưới!</h2>";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Scroll-triggered fade-in effect
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("visible", entry.isIntersecting);
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach((element) => observer.observe(element));

// Scroll-triggered fade-in effect for Our Story title
const storyTitle = document.querySelector(".story-title");

const titleObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

if (storyTitle) {
  titleObserver.observe(storyTitle);
}
