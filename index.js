let CompliancesDropdown = document.querySelector(".Compliances");

// adding menu dropdown
let menu = document.querySelector(".menu");
let navlist = document.querySelector(".navlist");
menu.addEventListener("click", () => {
  if (navlist.className.includes("navlist")) {
    navlist.classList.remove("navlist");
    navlist.classList.add("showNavbar");
    menu.setAttribute("src", "./Images/cancel.png");
    menu.setAttribute("src", "../Images/cancel.png");
  } else {
    navlist.classList.add("navlist");
    navlist.classList.remove("showNavbar");
    menu.setAttribute("src", "./Images/menu.png");
    menu.setAttribute("src", "../Images/menu.png");
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
    productDropdownBtn.classList.toggle("rotate-180");
  } else {
    navProduct.classList.add("navProduct");
    productDropdownBtn.classList.toggle("rotate-180");
    navProduct.classList.remove("openDropdown");
  }
});

let solutionDropdownBtn = document.querySelector(".solutionDropdown");
let navSolution = document.querySelector(".navSolution");

solutionDropdownBtn.addEventListener("click", () => {
  if (navSolution.className.includes("navSolution")) {
    navSolution.classList.remove("navSolution");
    navSolution.classList.add("openDropdown");
    solutionDropdownBtn.classList.toggle("rotate-180");
  } else {
    navSolution.classList.add("navSolution");
    navSolution.classList.remove("openDropdown");
    solutionDropdownBtn.classList.toggle("rotate-180");
  }
});

let groupsDropdownBtn = document.querySelector(".groupsDropdown");
let navGroups = document.querySelector(".navGroups");
groupsDropdownBtn.addEventListener("click", () => {
  if (navGroups.className.includes("navGroups")) {
    navGroups.classList.remove("navGroups");
    navGroups.classList.add("openDropdown");
    groupsDropdownBtn.classList.toggle("rotate-180");
  } else {
    navGroups.classList.add("navGroups");
    navGroups.classList.remove("openDropdown");
    groupsDropdownBtn.classList.toggle("rotate-180");
  }
});

let aboutDropdownBtn = document.querySelector(".aboutDropdown");
let navAbout = document.querySelector(".navAbout");

aboutDropdownBtn.addEventListener("click", () => {
  if (navAbout.className.includes("navAbout")) {
    navAbout.classList.remove("navAbout");
    navAbout.classList.add("openDropdown");
    aboutDropdownBtn.classList.toggle("rotate-180");
  } else {
    navAbout.classList.add("navAbout");
    navAbout.classList.remove("openDropdown");
    aboutDropdownBtn.classList.toggle("rotate-180");
  }
});

// slider js

// setting home page background text
let home = document.querySelector(".home");
let doc = [
  {
    id: 1,
    comp: `<div
    class="md:w-4/5 w-11/12 md:h-4/5 h-full md:pt-20 md:pl-5 flex flex-col justify-center items-center transition-opacity duration-500 transform origin-bottom"
    style="animation: fadeInUp 1s ease-out"
  >
    <h1
      class="homeHaeding text-start lg:text-7xl sm:text-4xl md:ml-0 ml-10 text-4xl md:w-5/6 w-full text-blue-200 text-wrap   font-bold"
    >
      Transforming Data Networks with DWDM Excellence
    </h1>
    <p
      class="homeHaeding md:text-3xl text-xl wmd:w-5/6 w-fulltext-start mt-7 md:ml-0 ml-6 text-blue-100 font-semibold transition-opacity duration-500 transform origin-bottom"
      style="animation: fadeInUp 1s ease-out"
    >
      Unleash unparalleled speed, reliability, and scalability in your
      communication infrastructure.
    </p>
  </div>`,
  },
  {
    id: 2,
    comp: `  <div
    class="md:w-4/5 w-11/12 md:h-4/5 h-full md:pt-20 md:pl-5 md:ml-0 ml-6 flex flex-col justify-center items-center transition-opacity duration-500 transform origin-bottom "
    style="animation: fadeInUp 1s ease-out"
  >
    <h1
      class="homeHaeding text-start lg:text-7xl sm:text-4xl text-4xl md:ml-0 ml-1 md:w-5/6 w-full text-red-500 text-wrap  font-bold"
    >
    Seamless Connectivity, Enhanced Performance
    </h1>
    <p
      class="homeHaeding md:text-3xl text-xl md:w-5/6  w-full text-start mt-7 text-blue-100 font-semibold transition-opacity duration-500 transform origin-bottom"
      style="animation: fadeInUp 1s ease-out"
    >
    Experience the future of data transmission with our advanced DWDM system solutions.
    </p>
  </div>`,
  },
  {
    id: 3,
    comp: `<div
    class="md:w-4/5 w-11/12 md:h-4/5 h-full md:pt-20 md:pl-5  flex flex-col justify-center items-center transition-opacity duration-500 transform origin-bottom"
    style="animation: fadeInUp 1s ease-out"
  >
    <h1
      class="homeHaeding lg:text-7xl sm:text-4xl text-4xl md:ml-0 ml-10 md:w-5/6 w-full text-white  font-bold "
    >
    DWDM Solutions for a Connected Tomorrow
    </h1>
    <p
      class="homeHaeding md:text-3xl text-xl md:ml-0 ml-8 md:w-5/6 w-full text-start mt-7 text-blue-100 font-semibold transition-opacity duration-500 transform origin-bottom"
      style="animation: fadeInUp 1s ease-out"
    >
    Building networks that bridge gaps, ensuring a fast and reliable flow of information    </p>
  </div>`,
  },
];
home.innerHTML = doc[0].comp;
const getText = () => {
  let count = 0;
  // home.innerHTML = doc[count].comp;
  setInterval(() => {
    count = (count + 1) % doc.length; // Reset count when it reaches the maximum index
    home.innerHTML = doc[count].comp;
  }, 5000);
};
getText();
setInterval(getText, 15000);

document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("bg-black-on-scroll");
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.remove("bg-black-on-scroll");
      navbar.classList.add("bg-transparent");
    }
  });
});
