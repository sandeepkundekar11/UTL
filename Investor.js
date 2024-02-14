// // writting the logic to create document Collapes
let pdf_Heading = [
  {
    id: 1,
    Year: 21,
    heading: "UTL AGM Notice 2021-22",
    pdf: "../Documets/1_UTL_AGM_Notice_2021-22.pdf",
  },
  {
    id: 2,
    Year: 22,
    heading: "UTL AGM Notice 2022-23",
    pdf: "../Documets/1_UTL_AGM_Notice_2022-23.pdf",
  },
  {
    id: 3,
    Year: 21,
    heading: "UTL Adjourned AGM Notice 2021-22",
    pdf: "../Documets/1_UTL_AGM_Notice_2022-23.pdf",
  },
  {
    id: 4,
    Year: 21,
    heading: "UTL Adjourned AGM Notice 2022-23",
    pdf: "../Documets/1_UTL_Adjourned_AGM_Notice_2022-23.pdf",
  },
  {
    id: 5,
    Year: 0,
    heading: "Declaration of the Voting Result UTL",
    pdf: "../Documets/Declaration_of_the_Voting_Results_UTL_sd.pdf",
  },
  {
    id: 6,
    Year: 23,
    heading: "Scutiniser Report 07.01.2023",
    pdf: "../Documets/Scutiniser_Report_07.01.2023.pdf",
  },
  {
    id: 7,
    Year: 21,
    heading: "Annual Report 21-22",
    pdf: "../Documets/Annual_Report_21-22.pdf",
  },
  {
    id: 8,
    Year: 0,
    heading: "Draft MGT-7 Annual Return",
    pdf: "../Documets/Draft_MGT-7_Annual_Return.pdf",
  },
  {
    id: 9,
    Year: 20,
    heading: "UTL AGM Notice 2020-21_signed",
    pdf: "../Documets/UTL_AGM_Notice_2020-21_signed.pdf",
  },
  {
    id: 10,
    Year: 22,
    heading: "UTL EGM Notice_2022-23",
    pdf: "../Documets/UTL_EGM_Notice_2022-23.pdf",
  },
  {
    id: 11,
    Year: 21,
    heading: "UTL EGM Notice 06.08.2021",
    pdf: "../Documets/UTL_EGM_Notice_06.08.2021.pdf",
  },
  {
    id: 12,
    Year: 20,
    heading: "UTL MGT 7,2020-21 for website",
    pdf: "../Documets/UTL_MGT_7_2020-21_for_website.pdf",
  },
  {
    id: 13,
    Year: 19,
    heading: "UTL_AGM Notice 2019-20",
    pdf: "../Documets/UTL_AGM_Notice_2019-20.pdf",
  },
  {
    id: 14,
    Year: 0,
    heading: "CIN Number",
    pdf: "../Documets/CIN.pdf",
  },
  {
    id: 15,
    Year: 0,
    heading: "Quality Policy",
    pdf: "",
  },
  {
    id: 16,
    Year: 21,
    heading: "CSR Projects for FY 21-22",
    pdf: "../Documets/CSR_Projects_for_FY_21-22.pdf",
  },
  {
    id: 17,
    Year: 0,
    heading: "CNR Policy",
    pdf: "../Documets/CSRPolicy.pdf",
  },
];
pdf_Heading.sort((a, b) => {
  return b.Year - a.Year;
});
let DocumentContainer = document.querySelector(".DocumentContainer");
let collapsDiv = "";

pdf_Heading.forEach((ele, index) => {
  collapsDiv += `<div class="collapsBox  cursor-pointer mt-5 ">
                   <div class=" collaps-Box-Heading-container w-full h-24  flex items-center justify-between border-b border-gray-700">
  
                   <!-- Heading and pdf icon conatiner  -->
  
                  <div class="flex items-center w-3/4">
                  <p class=" w-2/4 md:text-xl text-base font-mono text-white transition-all duration-300 hover:text-gray-400 hover:translate-x-4 hover:italic ml-4">
                  ${index + 1}).${ele.heading}
                   </p>
  
                   <div class=" w-2/4 md:ml-4 ml-0 flex items-center">
                   <img
                    src="../Images/pdf.png"
                    class="w-12 h-12"
                    alt=""/>
                    <a class="underline text-white text-sm" target="#" href="${
                      ele.pdf
                    }">click to view</a>
                   </div> 
  
                  </div>
                  <!-- End Of Heading -->
                  
                  <!--  Dropdown toggle Image icon-->
                   <img
                   src="../Images/Dropdown.png"
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
      PopupButtonImg.setAttribute("src", "../Images/Upload.png");
    } else {
      PopupButtonImg.setAttribute("src", "../Images/Black_cancel_icon.png");
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
