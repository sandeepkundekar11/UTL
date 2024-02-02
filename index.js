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
    heading: "UTL AGM Notice 2021-22",
    pdf: "./Documets/1_UTL_AGM_Notice_2021-22.pdf",
  },
  {
    id: 2,
    heading: "UTL AGM Notice 2022-23",
    pdf: "./Documets/1_UTL_AGM_Notice_2022-23.pdf",
  },
  {
    id: 3,
    heading: "UTL Adjourned AGM Notice 2021-22",
    pdf: "Documets/1_UTL_AGM_Notice_2022-23.pdf",
  },
  {
    id: 4,
    heading: "UTL Adjourned AGM Notice 2022-23",
    pdf: "Documets/1_UTL_Adjourned_AGM_Notice_2022-23.pdf",
  },
  {
    id: 5,
    heading: "Declaration of the Voting Result UTL",
    pdf: "Documets/Declaration_of_the_Voting_Results_UTL_sd.pdf",
  },
  {
    id: 6,
    heading: "Scutiniser Report 07.01.2023",
    pdf: "Documets/Scutiniser_Report_07.01.2023.pdf",
  },
  {
    id: 7,
    heading: "Annual Report 21-22",
    pdf: "Documets/Annual_Report_21-22.pdf",
  },
  {
    id: 8,
    heading: "Draft MGT-7 Annual Return",
    pdf: "Documets/Draft_MGT-7_Annual_Return.pdf",
  },
  {
    id: 9,
    heading: "UTL AGM Notice 2020-21_signed",
    pdf: "Documets/UTL_AGM_Notice_2020-21_signed.pdf",
  },
  {
    id: 10,
    heading: "UTL EGM Notice_2022-23",
    pdf: "Documets/UTL_EGM_Notice_2022-23.pdf",
  },
  {
    id: 11,
    heading: "UTL EGM Notice 06.08.2021",
    pdf: "Documets/UTL_EGM_Notice_06.08.2021.pdf",
  },
  {
    id: 12,
    heading: "UTL MGT 7,2020-21 for website",
    pdf: "Documets/UTL_MGT_7_2020-21_for_website.pdf",
  },
  {
    id: 13,
    heading: "UTL_AGM Notice 2019-20",
    pdf: "Documets/UTL_AGM_Notice_2019-20.pdf",
  },
  {
    id: 14,
    heading: "CIN Number",
    pdf: "Documets/CIN.pdf",
  },
  {
    id: 15,
    heading: "Quality Policy",
    pdf: "",
  },
  {
    id: 16,
    heading: "CSR Projects for FY 21-22",
    pdf: "Documets/CSR_Projects_for_FY_21-22.pdf",
  },
  {
    id: 17,
    heading: "CNR Policy",
    pdf: "Documets/CSRPolicy.pdf",
  },
];
let DocumentContainer = document.querySelector(".DocumentContainer");
let collapsDiv = "";

pdf_Heading.forEach((ele) => {
  collapsDiv += `<div class="collapsBox  cursor-pointer mt-5 ">
                 <div class=" collaps-Box-Heading-container w-full h-24  flex items-center justify-between border-b border-gray-800">

                 <!-- Heading and pdf icon conatiner  -->

                <div class="flex items-center w-3/4">
                <p class=" w-2/4 md:text-xl text-base font-mono text-white transition-all duration-300 hover:text-gray-400 hover:translate-x-4 hover:italic ml-4">
                ${ele.id}).${ele.heading}
                 </p>

                 <div class=" w-2/4 md:ml-4 ml-0 flex items-center">
                 <img
                  src="./Images/pdf.png"
                  class="w-12 h-12"
                  alt=""/>
                  <a class="underline text-white text-sm" target="#" href="${ele.pdf}">click to view</a>
                 </div> 

                </div>
                <!-- End Of Heading -->
                
                <!--  Dropdown toggle Image icon-->
                 <img
                 src="./Images/Dropdown.png"
                 alt=""
                 class=" cursor-pointer md:w-10 w-8 md:h-10 h-7 p-2 mr-4 transition-all duration-300 hover:bg-gray-700 rounded-3xl collapsButton  "
                 />
                 </div>
                <div class="collaps w-full">
                 <object data=${ele.pdf} type="application/pdf" width="100%" height="100%">
              <p class="text-white">Unable to display PDF file. <a target="#" href="${ele.pdf}">Download</a> instead.</p>
                 </object>
                </div>
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
