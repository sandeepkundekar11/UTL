try {
  let CompliancesDropdown = document.querySelector(".Compliances");

  // adding menu dropdown

  // adding dropdown to each dropdown
  // openDropdown
  let productDropdownBtn = document.querySelector(".productDropdown");
  let navProduct = document.querySelector(".navProduct");
  productDropdownBtn.addEventListener("click", () => {
    if (navProduct.className.includes("navProduct")) {
      navProduct.classList.remove("navProduct");
      navProduct.classList.add("openProductDropdown");
      productDropdownBtn.classList.toggle("rotate-180");
    } else {
      navProduct.classList.add("navProduct");
      productDropdownBtn.classList.toggle("rotate-180");
      navProduct.classList.remove("openProductDropdown");
    }
  });

  let solutionDropdownBtn = document.querySelector(".solutionDropdown");
  let navSolution = document.querySelector(".navSolution");

  solutionDropdownBtn.addEventListener("click", () => {
    if (navSolution.className.includes("navSolution")) {
      navSolution.classList.remove("navSolution");
      navSolution.classList.add("solutionShowDropdown");
      solutionDropdownBtn.classList.toggle("rotate-180");
    } else {
      navSolution.classList.add("navSolution");
      navSolution.classList.remove("solutionShowDropdown");
      solutionDropdownBtn.classList.toggle("rotate-180");
    }
  });

  let groupsDropdownBtn = document.querySelector(".groupsDropdown");
  let navGroups = document.querySelector(".navGroups");
  groupsDropdownBtn.addEventListener("click", () => {
    if (navGroups.className.includes("navGroups")) {
      navGroups.classList.remove("navGroups");
      navGroups.classList.add("groupsShowDropdown");
      groupsDropdownBtn.classList.toggle("rotate-180");
    } else {
      navGroups.classList.add("navGroups");
      navGroups.classList.remove("groupsShowDropdown");
      groupsDropdownBtn.classList.toggle("rotate-180");
    }
  });

  let aboutDropdownBtn = document.querySelector(".aboutDropdown");
  let navAbout = document.querySelector(".navAbout");

  aboutDropdownBtn.addEventListener("click", () => {
    if (navAbout.className.includes("navAbout")) {
      navAbout.classList.remove("navAbout");
      navAbout.classList.add("openAboutDropdown");
      aboutDropdownBtn.classList.toggle("rotate-180");
    } else {
      navAbout.classList.add("navAbout");
      navAbout.classList.remove("openAboutDropdown");
      aboutDropdownBtn.classList.toggle("rotate-180");
    }
  });

  // openResourcesDropdown

  let ResourcesDropdownBtn = document.querySelector(".ResourcesDropdown");
  let navResources = document.querySelector(".navResources");

  ResourcesDropdownBtn.addEventListener("click", () => {
    if (navResources.className.includes("navResources")) {
      navResources.classList.remove("navResources");
      navResources.classList.add("openResourcesDropdown");
      aboutDropdownBtn.classList.toggle("rotate-180");
    } else {
      navResources.classList.add("navResources");
      navResources.classList.remove("openResourcesDropdown");
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

  // writing the logic for product display page

  let product_list = [
    {
      id: 1,
      product_name: "DWDM",
      img: "./Images//Products/OTN.webp",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi ",
      link: "/Html/Products/Product.html",
    },
    {
      id: 2,
      product_name: "ONT",
      img: "./Images//Products/OTN.webp",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugiLorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi ",
      link: "/Html/Products/Product.html",
    },
    {
      id: 3,
      product_name: "Optical Line System (OLS)",
      img: "./Images//Products/OTN.webp",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi ",
      link: "/Html/Products/Product.html",
    },
    {
      id: 4,
      product_name: "GPON/NG-PON",
      img: "./Images//Products/OTN.webp",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi ",
      link: "/Html/Products/Product.html",
    },
    {
      id: 5,
      product_name: "MPLS/CSGR",
      img: "./Images//Products/OTN.webp",
      discription:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi  adipisicing elit. Aspernatur dolore ipsum fugi",
      link: "/Html/Products/Product.html",
    },
    {
      id: 6,
      product_name: "Enterprise Switch/Router",
      img: "./Images//Products/OTN.webp",
      discription:
        "Lorem ipsum dolor sit amet consectetu Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi r adipisicing elit. Aspernatur dolore ipsum fugi",
      link: "/Html/Products/Product.html",
    },
    {
      id: 7,
      product_name: "4G/LTE RAN",
      img: "./Images//Products/OTN.webp",
      discription:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi  consectetur adipisicing elit. Aspernatur dolore ipsum fugi",
      link: "/Html/Products/Product.html",
    },
    {
      id: 8,
      product_name: "5G RAN",
      img: "./Images//Products/OTN.webp",
      discription:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi  consectetur adipisicing elit. Aspernatur dolore ipsum fugi",
      link: "/Html/Products/Product.html",
    },
    {
      id: 9,
      product_name: "Wireless Backhaul Radios",
      img: "./Images//Products/OTN.webp",
      discription:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi  consectetur adipisicing elit. Aspernatur dolore ipsum fugi",
      link: "/Html/Products/Product.html",
    },
    {
      id: 10,
      product_name: "WiFi Access Point",
      img: "./Images//Products/OTN.webp",
      discription:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi  consectetur adipisicing elit. Aspernatur dolore ipsum fugi",
      link: "/Html/Products/Product.html",
    },
    {
      id: 11,
      product_name: "4G/5G CPE",
      img: "./Images//Products/OTN.webp",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi",
      link: "/Html/Products/Product.html",
    },
    {
      id: 12,
      product_name: "Set Top Box",
      img: "./Images//Products/OTN.webp",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi",
      link: "/Html/Products/Product.html",
    },
    {
      id: 13,
      product_name: "Smart Energy Meter",
      img: "./Images//Products/OTN.webp",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi",
      link: "/Html/Products/Product.html",
    },
    {
      id: 14,
      product_name: "Network Orchestrator",
      img: "./Images//Products/OTN.webp",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore ipsum fugi",
      link: "/Html/Products/Product.html",
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

  try {
    product_swaper.innerHTML = pruduct_html;
  } catch (error) {
    console.log("product_swaper.innerHTML = pruduct_html;", error);
  }
} catch (error) {}
