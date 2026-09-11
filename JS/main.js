const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#site-nav");
const navigationLinks = document.querySelectorAll("#site-nav a");
const year = document.querySelector("#year");

// Open and close the mobile navigation menu
menuButton.addEventListener("click", function () {
  const menuIsOpen = navigation.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", menuIsOpen);
});

// Close the mobile menu after someone selects a link
navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Automatically display the current year in the footer
year.textContent = new Date().getFullYear();

// Reveal sections as the visitor scrolls down
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

const revealElements = document.querySelectorAll(".reveal");

revealElements.forEach(function (element) {
  observer.observe(element);
});