const FooterDropdownBtn = document.querySelector("#footerDropDown");
let CompliancesDropdown = document.querySelector(".Compliances");
FooterDropdownBtn.addEventListener("click", () => {
  if (CompliancesDropdown.style.display === "block") {
    CompliancesDropdown.style.display = "none";
  } else {
    CompliancesDropdown.style.display = "block";
  }
});
// adding menu dropdown
let menu = document.querySelector(".menu");
let navlist = document.querySelector(".navlist");
menu.addEventListener("click", () => {
  if (navlist.className.includes("navlist")) {
    navlist.classList.remove("navlist");
    navlist.classList.add("showNavbar");
  } else {
    navlist.classList.add("navlist");
    navlist.classList.remove("showNavbar");
  }
});

// adding dropdown to each dropdown
// openDropdown
let productDropdownBtn = document.querySelector(".productDropdown");
let navProduct = document.querySelector(".navProduct");
productDropdownBtn.addEventListener("click", () => {
  if (navProduct.className.includes("navProduct")) {
    navProduct.classList.remove("navProduct");
    navProduct.classList.add("openDropdown");
  } else {
    navProduct.classList.add("navProduct");
    navProduct.classList.remove("openDropdown");
  }
});

let solutionDropdownBtn = document.querySelector(".solutionDropdown");
let navSolution = document.querySelector(".navSolution");

solutionDropdownBtn.addEventListener("click", () => {
  if (navSolution.className.includes("navSolution")) {
    navSolution.classList.remove("navSolution");
    navSolution.classList.add("openDropdown");
  } else {
    navSolution.classList.add("navSolution");
    navSolution.classList.remove("openDropdown");
  }
});

let groupsDropdownBtn = document.querySelector(".groupsDropdown");
let navGroups = document.querySelector(".navGroups");
groupsDropdownBtn.addEventListener("click", () => {
  if (navGroups.className.includes("navGroups")) {
    navGroups.classList.remove("navGroups");
    navGroups.classList.add("openDropdown");
  } else {
    navGroups.classList.add("navGroups");
    navGroups.classList.remove("openDropdown");
  }
});

let aboutDropdownBtn = document.querySelector(".aboutDropdown");
let navAbout = document.querySelector(".navAbout");

aboutDropdownBtn.addEventListener("click", () => {
  if (navAbout.className.includes("navAbout")) {
    navAbout.classList.remove("navAbout");
    navAbout.classList.add("openDropdown");
  } else {
    navAbout.classList.add("navAbout");
    navAbout.classList.remove("openDropdown");
  }
});

// slider js
document.addEventListener("DOMContentLoaded", function () {
  const sliderTrack = document.querySelector(".slider-track");
  const slides = document.querySelectorAll(".slide");
  const slideWidth = slides[0].clientWidth;
  let currentIndex = 0;

  function updateSlider() {
    sliderTrack.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  }

  setInterval(nextSlide, 3000); // Auto slide every 3 seconds

  document
    .querySelector(".slider-container")
    .addEventListener("mouseenter", () => {
      clearInterval(interval);
    });

  document
    .querySelector(".slider-container")
    .addEventListener("mouseleave", () => {
      interval = setInterval(nextSlide, 3000);
    });
});
