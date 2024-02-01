let CompliancesDropdown = document.querySelector(".Compliances");

// adding menu dropdown
let menu = document.querySelector(".menu");
let navlist = document.querySelector(".navlist");
menu.addEventListener("click", () => {
  if (navlist.className.includes("navlist")) {
    navlist.classList.remove("navlist");
    navlist.classList.add("showNavbar");
    menu.setAttribute("src", "./Images/cancel.png");
  } else {
    navlist.classList.add("navlist");
    navlist.classList.remove("showNavbar");
    menu.setAttribute("src", "./Images/menu.png");
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

const getText = () => {
  try {
    home.innerHTML = doc[0].comp;
    let count = 0;
    // home.innerHTML = doc[count].comp;
    setInterval(() => {
      count = (count + 1) % doc.length; // Reset count when it reaches the maximum index
      home.innerHTML = doc[count].comp;
    }, 5000);
  } catch (error) {}
};
getText();
setInterval(getText, 15000);

// writting the logic to create document Collapes

let pdf_Heading = [
  {
    id: 1,
    heading: "UTl AGM Notice 2021-22",
  },
  {
    id: 2,
    heading: "UTL AGM Notice 2022-23",
  },
  {
    id: 3,
    heading: "UTL Adjourned AGM Notice 2021-22",
  },
  {
    id: 4,
    heading: "UTL Adjourned AGM Notice 2022-23",
  },
  {
    id: 5,
    heading: "Declaration of the Voting Result UTL",
  },
  {
    id: 6,
    heading: "Scutiniser Report 07.01.2023",
  },
  {
    id: 7,
    heading: "Annual Report 21-22",
  },
  {
    id: 8,
    heading: "Draft MGT-7 Annual Return",
  },
  {
    id: 9,
    heading: "UTL AGM Notice 2020-21_signed",
  },
  {
    id: 10,
    heading: "UTL EGM Notice_2022-23",
  },
  {
    id: 11,
    heading: "UTL EGM Notice 06.08.2021",
  },
  {
    id: 12,
    heading: "UTL MGT 7,2020-21 for website",
  },
  {
    id: 13,
    heading: "UTL_AGM Notice 20219-20",
  },
  {
    id: 14,
    heading: "CIM Number",
  },
  {
    id: 15,
    heading: "Quality Policy",
  },
  {
    id: 16,
    heading: "CSR Projects for FY 21-22",
  },
  {
    id: 17,
    heading: "CNR Policy",
  },
];
let DocumentContainer = document.querySelector(".DocumentContainer");
let collapsDiv = "";
console.log("hi");
pdf_Heading.forEach((ele) => {
  collapsDiv += `<div class="collapsBox cursor-pointer mt-5 border border-gray-700">
                 <div class=" collaps-Box-Heading-container w-full h-14 bg-gray-900 flex items-center justify-between border-b border-gray-800">
                 <p class=" md:text-xl text-base font-mono text-white transition-all duration-300 hover:text-gray-400 hover:translate-x-4 hover:italic ml-4">
                ${ele.id}).${ele.heading}
                 </p>
                 <img
                 src="./Images/Dropdown.png"
                 alt=""
                 class=" cursor-pointer md:w-10 w-8 md:h-10 h-7 p-2 mr-4 transition-all duration-300 hover:bg-gray-700 rounded-3xl collapsButton  "
                 />
                 </div>
                <div class="collaps w-full"></div>
                </div>`;
});
DocumentContainer.innerHTML = collapsDiv;
// writing the logic to show hide Collaps

let collapsArea = document.querySelectorAll(".collaps"); // area which we want to expand
let collapsButtons = document.querySelectorAll(".collapsButton");
//here collapsButton is Array of button and we appliying click event on each of the Button using forEach Loop bellow we are going the Same

collapsButtons.forEach((btns, index) => {
  btns.addEventListener("click", () => {
    collapsArea[index].classList.toggle("showCollaps"); //toggling the showCollaps class
    btns.classList.toggle("-rotate-180"); // toggling the -rotate-180 class

    //  the above loop we are using to remove the collaps from unclicked CollapsArea
    collapsArea.forEach((ele, collapsIndex) => {
      if (collapsIndex !== index) {
        ele.classList.remove("showCollaps");
      }
    });

    // above loop we are using to remove the rotate class for remaining unclicked Buttons
    collapsButtons.forEach((ele, btnIndex) => {
      if (btnIndex !== index) {
        ele.classList.remove("-rotate-180");
      }
    });
  });
});
