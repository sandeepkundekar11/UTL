// Only we can use in solution pages
let arr = [
  {
    id: 1,
    title: "State Wide Area Network (SWAN)",
    text: "",
    background: "/Images/solutionsPage/Solution1_SWAN.jpg",
  },
  {
    id: 2,
    title: "e-Governance and Citizen Service",
    text: "",
    background: "/Images/solutionsPage/Solution2_E-Governance.jpg",
  },
  {
    id: 3,
    title: "Mobile Fronthaul/Backhaul",
    text: "",
    background: "/Images/solutionsPage/Solution3_Mobile_Fronthaul.jpg",
  },
  {
    id: 4,
    title: "Broadband Network",
    text: "",
    background: "/Images/solutionsPage/Solution4_BroadCast-network.jpg",
  },
  {
    id: 5,
    title: "Enterprise Network",
    text: "",
    background: "/Images/solutionsPage/Solution1_SWAN.jpg",
  },
  {
    id: 6,
    title: "Managed Services",
    text: "",
    background: "/Images/solutionsPage/Solution2_E-Governance.jpg",
  },
  {
    id: 7,
    title: "Access Network",
    text: "",
    background: "/Images/solutionsPage/Solution3_Mobile_Fronthaul.jpg",
  },
  {
    id: 8,
    title: "Transmission Network",
    text: "",
    background: "/Images/solutionsPage/Solution4_BroadCast-network.jpg",
  },
  {
    id: 9,
    title: "Embedded and IoT",
    text: "",
    background: "/Images/solutionsPage/Solution1_SWAN.jpg",
  },
  {
    id: 10,
    title: "IT & ITES",
    text: "",
    background: "/Images/solutionsPage/Solution2_E-Governance.jpg",
  },
  {
    id: 11,
    title: "education",
    text: "",
    background: "/Images/solutionsPage/Solution3_Mobile_Fronthaul.jpg",
  },
];
class SolutionCard extends HTMLElement {
  connectedCallback() {
    let ContentHtml = `<div class="swiper mySwiper1 RelatedSolutionContainer mt-8"  >
    <div class="swiper-wrapper">`;
    // style=
    arr.forEach((ele) => {
      ContentHtml += `
        <div class="h-96 w-80 border transition-all duration-300 swiper-slide RelatedSolutionBox">
        <div class="frontSideOfSolutionBox  absolute h-full w-full text-3xl font-bold flex items-center justify-center text-white"  
        style="background: url(${ele.background}) no-repeat center center/cover;">
         ${ele.title}
        </div>
       <div class="BackSideOfSolutionBox p-4 bg-gray-700 "> 
       <h1 class=" text-white  text-2xl font-semibold">${ele.title}</h1>
          <p class="text-white text-lg mt-4">  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
          aut consectetur optio labore reiciendis repudiandae, repellendus
          voluptatibus, minima dicta, omnis aliquam est ratione at
          excepturi. Laudantium dolorum quidem molestiae voluptates.
          </p>
       <button class=" w-32 text-xl mt-7 h-10 bg-white rounded-lg"><a href="#">Read more .<a/></button>
       </div>
      </div>
        `;
    });

    ContentHtml += `</div>
    <div class="swiper-pagination"></div>
  </div>`;
    this.innerHTML = ContentHtml;
  }
}

customElements.define("solution-box-container", SolutionCard);
//   <div
//       class="h-96 w-80 border transition-all duration-300 RelatedSolutionBox"
//       style:""
//     >
//       <div
//         class="frontSideOfSolutionBox bg-slate-400 absolute h-full w-full"
//       >
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
//         aut consectetur optio labore reiciendis repudiandae, repellendus
//         voluptatibus, minima dicta, omnis aliquam est ratione at
//         excepturi. Laudantium dolorum quidem molestiae voluptates.
//       </div>
//       <div class="BackSideOfSolutionBox">Sandeep n Kundekar</div>
//     </div>
