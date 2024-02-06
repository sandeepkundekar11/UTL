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
let home = document.querySelector(".homeText");
let doc = [
  {
    id: 1,
    comp: ` <h1
    class="sm:text-5xl text-3xl font-bold italic text-white pt-2"
  >
    Transforming Data Networks with DWDM Excellence
  </h1>
  <p class="font-medium text-gray-500 text-xl md:mt-8 mt-0">
    Unleash unparalleled speed, reliability, and scalability in your
    communication infrastructure.
  </p>`,
  },
  {
    id: 2,
    comp: ` <h1
    class="sm:text-5xl text-3xl font-bold italic text-white pt-2"
  >
  Seamless Connectivity, Enhanced Performance
  </h1>
  <p class="font-medium text-gray-500 text-xl md:mt-8 mt-0">
  Experience the future of data transmission with our advanced DWDM system solutions.
  </p>`,
  },
  {
    id: 3,
    comp: ` <h1
    class="sm:text-5xl text-3xl font-bold italic text-white pt-2"
  >
  Maximize Bandwidth, Minimize Complexity
  </h1>
  <p class="font-medium text-gray-500 text-xl md:mt-8 mt-0">
  Our DWDM services simplify network management while optimizing data transfer capabilities.

  </p>`,
  },
];

const getText = () => {
  try {
    home.innerHTML = doc[0].comp;
    let count = 0;
    home.innerHTML = doc[count].comp;
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
                 <div class=" collaps-Box-Heading-container w-full h-24  flex items-center justify-between border-b border-gray-700">

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
                <div class="collaps w-full overflow-hidden">
                
                 <iframe src=${ele.pdf} width="100%" height="100%"></iframe>
                </div>
                </div>`;
});
try {
  DocumentContainer.innerHTML = collapsDiv;
} catch (error) {}
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

// writing the logic to show hide Popup

let PopUpButton = document.querySelector(".PopUpButton");
let PopupContainer = document.querySelector(".PopupContainer");
let PopupButtonImg = document.querySelector(".PopupButtonImg");
let hoverDocument = document.querySelector(".hoverDocument");

try {
  PopUpButton.addEventListener("click", () => {
    PopupContainer.classList.toggle("hidden");
    if (PopupContainer.classList.contains("hidden")) {
      PopupButtonImg.setAttribute("src", "Images/Upload.png");
    } else {
      PopupButtonImg.setAttribute("src", "Images/Black_cancel_icon.png");
    }
  });
} catch (error) {
  console.log("error in Popup button", error);
}

// writing the upload file
let InsertDocument = document.querySelector(".InsertDocument");
let UploadFile = document.querySelector(".UploadFile_Input");
let UploadFileName = document.querySelector(".UploadFileName");
let FileSubmitButton = document.querySelector(".FileSubmitButton");
// cursor-not-allowed
// let admin = false;
let admin = true;

try {
  let Login = document.querySelector(".Login");
  if (!admin) {
    InsertDocument.classList.add("hidden");
    Login.classList.add("block");
  } else {
    InsertDocument.classList.add("block");
    Login.classList.add("hidden");
  }
} catch (error) {
  console.log("error occurred in Login and upload document", error);
}

// writing the logic for product display page

let product_list = [
  {
    id: 1,
    product_name: "DWDM",
    img: "./Images//Products/OTN.webp",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi ",
    link: "./Product.html",
  },
  {
    id: 2,
    product_name: "ONT",
    img: "./Images//Products/OTN.webp",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugiLorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi ",
    link: "./Product.html",
  },
  {
    id: 3,
    product_name: "Optical Line System (OLS)",
    img: "./Images//Products/OTN.webp",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi ",
    link: "./Product.html",
  },
  {
    id: 4,
    product_name: "GPON/NG-PON",
    img: "./Images//Products/OTN.webp",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi ",
    link: "./Product.html",
  },
  {
    id: 5,
    product_name: "MPLS/CSGR",
    img: "./Images//Products/OTN.webp",
    discription:
      "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi  adipisicing elit. Aspernatur dolore ipsum fugi",
    link: "./Product.html",
  },
  {
    id: 6,
    product_name: "Enterprise Switch/Router",
    img: "./Images//Products/OTN.webp",
    discription:
      "Lorem ipsum dolor sit amet consectetu Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi r adipisicing elit. Aspernatur dolore ipsum fugi",
    link: "./Product.html",
  },
  {
    id: 7,
    product_name: "4G/LTE RAN",
    img: "./Images//Products/OTN.webp",
    discription:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi  consectetur adipisicing elit. Aspernatur dolore ipsum fugi",
    link: "./Product.html",
  },
  {
    id: 8,
    product_name: "5G RAN",
    img: "./Images//Products/OTN.webp",
    discription:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi  consectetur adipisicing elit. Aspernatur dolore ipsum fugi",
    link: "./Product.html",
  },
  {
    id: 9,
    product_name: "Wireless Backhaul Radios",
    img: "./Images//Products/OTN.webp",
    discription:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi  consectetur adipisicing elit. Aspernatur dolore ipsum fugi",
    link: "./Product.html",
  },
  {
    id: 10,
    product_name: "WiFi Access Point",
    img: "./Images//Products/OTN.webp",
    discription:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi  consectetur adipisicing elit. Aspernatur dolore ipsum fugi",
    link: "./Product.html",
  },
  {
    id: 11,
    product_name: "4G/5G CPE",
    img: "./Images//Products/OTN.webp",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi",
    link: "./Product.html",
  },
  {
    id: 12,
    product_name: "Set Top Box",
    img: "./Images//Products/OTN.webp",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi",
    link: "./Product.html",
  },
  {
    id: 13,
    product_name: "Smart Energy Meter",
    img: "./Images//Products/OTN.webp",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi",
    link: "./Product.html",
  },
  {
    id: 14,
    product_name: "Network Orchestrator",
    img: "./Images//Products/OTN.webp",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi",
    link: "./Product.html",
  },
];

let product_swaper = document.querySelector(".product_swaper");
let pruduct_html = "";
product_list.forEach((ele, index) => {
  pruduct_html += `<div class=" swiper-slide  productSlide border border-gray-700 md:w-80 w-72 h-80 rounded-md bg-gray-900 mr-7 mt-4 transition-all duration-300 sm:hover:scale-110 p-3 overflow-hidden">
  <img
    class="w-full h-4/5"
    src="./Images/Products/400G.png"
    alt=""
  />
  <div class="absolute top-0 left-0  transition-all duration-300  w-full h-72 pt-5 bg-slate-300 viewProductView">
  <div
  class="product-InnerInfo w-full pl-3  cursor-pointer h-52 overflow-hidden "
>
  <h1
    class="font-bold md:text-2xl italic mb-4 text-xl text-start text-blue-500"
  >
    ${ele.product_name}
  </h1>
  <p
    class=" text-gray-400 text-start "
    style="font-family: Arial, Helvetica, sans-serif"
  >
    ${ele.discription}
  </p>
</div>
  <a class="text-xl text-blue-500 font-semibold underline underline-offset-4" href=${ele.link}>View Product</a>
  </div>
  <h1 class="text-blue-500 text-xl">${ele.product_name}</h1>
  <p class="text-xl text-gray-400 underline font-normal" >View Product</p>
</div>`;
});

product_swaper.innerHTML = pruduct_html;
