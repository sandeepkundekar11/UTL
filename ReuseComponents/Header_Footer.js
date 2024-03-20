class Header extends HTMLElement {
  connectedCallback() {
    const baspath = this.getAttribute("basepath");
    const htmlpath = this.getAttribute("htmlbase-path");
    this.innerHTML = `  <nav class="w-screen z-20 allNavbar">
    <marquee class="h-10 w-screen marquee flex items-center text-sm"
      >#18A/19, Doddanekundi Industrial Area,II Phase, Mahadevapura
      Post,Bangalore - 560 048,Karnataka, India. || #18A/19, Doddanekundi
      Industrial Area,II Phase, Mahadevapura Post,Bangalore - 560
      048,Karnataka, India.</marquee
    >
    <div
      class="border-slate-400 w-screen h-20 navbar transition ease-in duration-300 hover:opacity-100 lg:bg-transparent bg-gray-800 hover:bg-gray-800 flex justify-end items-center text-xs z-30"
    >
      <img
        class="w-10 float-start h-11 menu"
        src=${baspath}/Images/menu.png
        alt=""
      />
     <a href=${htmlpath}index.html>
     <img
     class="md:w-16 h-10 ml-4 w-14 lg:mr-0 mr-12 md:h-14"
     src=${baspath}/Images/Logo.png
     alt="logo"
   />
     </a>

      <ul class="flex lg:justify-center w-11/12 lg:ml-4 ml-0 navlist">
        <li
          class="text-lg font-semibold items-center cursor-pointer mx-4 product lg:pt-2 pt-4 lg:border-t-0 border-slate-600 border-t"
        >
          <div class="flex items-center justify-between text-white text-lg">
            Products
            <img
              class="w-6 h-5 ml-2 productDropdown lg:hidden block"
              src=${baspath}/Images/Dropdown.png
              alt=""
            />
            <!-- the bellow image will come in to the picture when our screen width is 1024 -->
            <img
              class="w-4 h-4 lg:ml-2 lg:block hidden"
              src=${baspath}/Images/Dropdown.png
              alt=""
            />
          </div>
          <div
            class="navProduct flex justify-evenly bg-gray-700 lg:px-0 px-5"
          >
            <ul
              class="h-auto md:space-y-4 space-y-0 text-lg lg:text-white text-slate-500 md:pt-3 pt-0"
            >
              <li
                class="text-lg lg:border-none lg:text-white text-slate-300 flex lg:w-auto w-10/12"
              >
                DWDM
              </li>
              <ul class="space-y-4 lg:ml-0 ">
                <li class="hover:text-red-600 text-gray-400">
                  <a href=${htmlpath}Html/Products/Product.html >Product 1</a>
                </li>
                <li class="hover:text-red-600 text-gray-400">
                  <a href=${htmlpath}Html/Products/Product.html>Product 2</a>
                </li>
                <li class="hover:text-red-600 text-gray-400">
                  <a href=${htmlpath}Html/Products/Product.html>Product 3</a>
                </li>
                <li class="hover:text-red-600 text-gray-400">
                <a href=${htmlpath}Html/Products/Product.html >Product 1</a>
              </li>
              </ul>
            </ul>
            <ul
              class="md:space-y-4 space-y-0 lg:text-white text-lg text-slate-500 md:pt-3 pt-0"
            >
              <li class="text-lg lg:text-white text-slate-300 lg:mt-0 mt-3">
                OTN
              </li>
              <ul class="space-y-4 lg:ml-0 ">
                <li class="hover:text-red-600 text-gray-400">
                  <a href=${htmlpath}Html/Products/Product.html>Product 1</a>
                </li>
                <li class="hover:text-red-600 text-gray-400">
                  <a href=${htmlpath}Html/Products/Product.html>Product 2</a>
                </li>
                <li class="hover:text-red-600 text-gray-400">
                  <a href=${htmlpath}Html/Products/Product.html>Product 3</a>
                </li>
                <li class="hover:text-red-600 text-gray-400">
                <a href=${htmlpath}Html/Products/Product.html >Product 1</a>
              </li>
              </ul>
            </ul>
            <ul
              class="md:space-y-4 space-y-0 lg:text-white text-lg text-slate-500 md:pt-3 pt-0"
            >
              <li class="text-lg lg:text-white text-slate-300 lg:mt-0 mt-3">
                Optical Line System (OLS)
              </li>
              <ul class="space-y-4 lg:ml-0">
                <li class="hover:text-red-600 text-gray-400">
                  <a href=${htmlpath}Html/Products/ROADM_Whitebox.html>ROADM Whitebox</a>
                </li>
                <li class="hover:text-red-600 text-gray-400">
                  <a href=${htmlpath}Html/Products/CDC_Add-Drop_Whitebox.html>CDC Add-Drop Whitebox</a>
                </li>
                <li class="hover:text-red-600 text-gray-400">
                  <a href=${htmlpath}Html/Products/Line_Amplifier.html>Terminal/Line Amplifier</a>
                </li>
                <li class="hover:text-red-600 text-gray-400">
                <a href=${htmlpath}Html/Products/Mux-Demux.html >Mux-Demux Whitebox</a>
              </li>
              </ul>
            </ul>
            <ul
              class="md:space-y-4 space-y-0 lg:text-white text-lg text-slate-500 md:pt-3 pt-0"
            >
              <li class="text-lg lg:text-white text-slate-300 lg:mt-0 mt-3">
                GPON/NG-PON
              </li>
              <ul class="space-y-4 lg:ml-0 ">
                <li class="hover:text-red-600 text-gray-400">
                  <a href=${htmlpath}Html/Products/OLT_8_Port.html>OLT8 Port</a>
                </li>
                <li class="hover:text-red-600 text-gray-400">
                  <a href=${htmlpath}Html/Products/OLT_4_Port.html>OLT4 Port</a>
                </li>
                <li class="hover:text-red-600 text-gray-400">
                  <a href=${htmlpath}Html/Products/ONT_Dual_Band.html>ONT Dual Band</a>
                </li>
                <li class="hover:text-red-600 text-gray-400">
                <a href=${htmlpath}Html/Products/ONT_single_Band.html >ONT Sigle Band</a>
              </li>
              </ul>
            </ul>
            <ul
              class="lg:text-white text-slate-300 space-y-3 md:pt-3 pt-0 text-lg lg:mt-0 mt-5"
            >
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/Products/MPLS.html>MPLS/CSGR</a>
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/Products/Product.html>Enterprise Switch/Router</a>
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/Products/Product.html>4G/LTE RAN</a>
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/Products/Product.html>5G RAN</a>
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/Products/Product.html>Wireless Backhaul Radios</a>
              </li>
            </ul>
            <ul
              class="text-lg lg:text-white text-slate-300 space-y-3 md:pt-3 pt-0 lg:mt-0 mt-5"
            >
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/Products/Product.html>WiFi Access Point</a>
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/Products/Product.html>4G/5G CPE</a>
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/Products/Product.html>Set Top Box</a>
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/Products/EnergyMeter.html>Smart Energy Meter</a>
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/Products/Product.html>Network Orchestrator </a>
              </li>
            </ul>
          </div>
        </li>
        <li
          class="text-lg font-semibold items-center cursor-pointer mx-4 solutions lg:border-t-0 border-slate-600 border-t lg:pt-2 pt-4"
        >
          <div class="flex items-center justify-between text-white text-lg">
            Solutions
            <img
              class="w-6 h-5 ml-2 solutionDropdown lg:hidden"
              src=${baspath}/Images/Dropdown.png
              alt=""
            />
            <!-- the bellow image will come in to the picture when our screen width is 1024 -->
            <img
              class="w-4 h-4 lg:ml-2 lg:block hidden"
              src=${baspath}/Images/Dropdown.png
              alt=""
            />
          </div>
          <div class="navSolution px-5 flex flex-col bg-gray-700">
            <ul
              class="h-auto space-y-4 lg:text-white text-slate-500 text-lg md:pt-6 pt-0"
            >
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/Solutions_pages/State_Wide_Area_Network.html>State Wide Area Network (SWAN)</a>
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/Solutions_pages/e-Governance-and-Citizen-Service.html>e-Governance and Citizen Service </a>
              </li>
              <li class="hover:text-red-600">
                <a href="">Mobile Fronthaul/Backhaul</a>
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/Solutions_pages/Broadband_Network.html>Broadband Network</a>
              </li>
              <li class="hover:text-red-600">
                <a href="">Enterprise Network</a>
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/Solutions_pages/Manage_services.html>Managed Services</a>
              </li>
              <li class="hover:text-red-600">
                <a href="">Access Network</a>
              </li>
              <li class="hover:text-red-600">
                <a href="">Transmission Network</a>
              </li>
              <li class="hover:text-red-600">
                <a href="">Embedded and IoT</a>
              </li>
              <li class="hover:text-red-600"><a href=${htmlpath}Html/Solutions_pages/IT_ITES.html>IT & ITES</a></li>
              <li class="hover:text-red-600"><a href=${htmlpath}Html/Solutions_pages/Eduction_services.html>Education</a></li>
            </ul>
          </div>
        </li>
        <li
          class="text-lg font-semibold items-center cursor-pointer mx-4 CompanyGroup lg:border-t-0 border-t border-slate-600 lg:pt-2 pt-4"
        >
          <div class="flex items-center justify-between text-white text-lg">
            UTL Group Companies
            <img
              class="w-6 h-5 ml-2 groupsDropdown lg:hidden"
              src=${baspath}/Images/Dropdown.png
              alt=""
            />
            <!-- the bellow image will come in to the picture when our screen width is 1024 -->
            <img
              class="w-4 h-4 lg:ml-2 lg:block hidden"
              src=${baspath}/Images/Dropdown.png
              alt=""
            />
          </div>
          <div class="flex flex-col px-5 navGroups bg-gray-700">
            <ul
              class="h-auto space-y-4 lg:text-white text-lg text-slate-500 md:pt-4 pt-0"
            >
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/UTL_Groups/UTL.html
                  >United Telecoms Limited</a
                >
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/UTL_Groups/Trigyn_tech.html
                  >Trigyn Technologies</a
                >
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/UTL_Groups/USEIPL.html>USEIPL</a>
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/UTL_Groups/Priya_Raja_Electronics.html
                  >Priya Raja Electronics</a
                >
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/UTL_Groups/UTL_Technologies.html
                  >UTL Technologies</a
                >
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/UTL_Groups/United_Telelinks.html
                  >United Telelinks</a
                >
              </li>
            </ul>
          </div>
        </li>

        <li
          class="text-lg items-center cursor-pointer mx-4 Resources  font-semibold lg:border-t-0 border-t border-slate-600 lg:pt-2 pt-4"
        >
          <div class="flex items-center justify-between text-white text-lg">
            Resources
            <img
              class="w-6 h-5 ResourcesDropdown lg:hidden"
              src=${baspath}/Images/Dropdown.png
              alt=""
            />
            <!-- the bellow image will come in to the picture when our screen width is 1024 -->
            <img
              class="w-4 h-4 ml-2 lg:block hidden"
              src=${baspath}/Images/Dropdown.png
              alt=""
            />
          </div>
          
          <div class="flex flex-col px-5 navResources bg-gray-700">
            <ul
              class="h-auto space-y-4 text-lg lg:text-white text-slate-500 md:pt-4 pt-0"
            >
              <li class="hover:text-red-600 transition-all duration-200">
                <a href=${htmlpath}Html/Resources/Articles.html>Articles</a>
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/Resources/CaseStudy.html>Case Studies</a>
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/Resources/WhitePaper.html>White Paper</a>
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/Resources/Videos.html>Videos</a>
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/Resources/Webinar.html>Webinars</a>
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/Resources/ProductsDocumentation.html>Product Documentation</a>
              </li>
            </ul>
          </div>
        </li>

        <li
          class="text-lg items-center cursor-pointer mx-4 about font-semibold lg:border-t-0 border-t border-slate-600 lg:pt-2 pt-4"
        >
          <div class="flex items-center justify-between text-white text-lg">
            About Us
            <img
              class="w-6 h-5 aboutDropdown lg:hidden"
              src=${baspath}/Images/Dropdown.png
              alt=""
            />
            <!-- the bellow image will come in to the picture when our screen width is 1024 -->
            <img
              class="w-4 h-4 ml-2 lg:block hidden"
              src=${baspath}/Images/Dropdown.png
              alt=""
            />
          </div>
          <div class="flex flex-col px-5 navAbout bg-gray-700">
            <ul
              class="h-auto space-y-4 text-lg lg:text-white text-slate-500 md:pt-4 pt-0"
            >
              <li class="hover:text-red-600 transition-all duration-200">
                <a href="">Company Profile</a>
              </li>
              <li class="hover:text-red-600">
                <a href=${htmlpath}Html/About_pages/BoardOfDirectors.html>Board Of Directors</a>
              </li>
              <li class="hover:text-red-600">
                <a href="">Key Management</a>
              </li>
              <li class="hover:text-red-600">
                <a href="">Award And Recognition</a>
              </li>
              <li class="hover:text-red-600">
                <a href="">Corporate Social Responsibility</a>
              </li>
            </ul>
          </div>
        </li>
        <li
          class="text-lg flex items-center cursor-pointer font-semibold mx-4 text-white lg:border-t-0 border-t border-slate-600 lg:pt-2 pt-4 lg:pb-0 pb-4"
        >
          <a href=${htmlpath}Html/Invester.html>Investor</a>
        </li>
        <li
          class="text-lg flex items-center cursor-pointer font-semibold mx-4 text-white lg:border-t-0 border-slate-600 border-t lg:pt-2 pt-4"
        >
        <a href=${htmlpath}Html/Contact.html>Contact Us</a>
        </li>
      </ul>
    </div>
  </nav>
`;
  }
}
class Footer extends HTMLElement {
  connectedCallback() {
    const baspath = this.getAttribute("basepath");
    const htmlpath = this.getAttribute("htmlbase-path");
    this.innerHTML = `<div class="w-screen footer pb-8">
        <div
          class="w-screen h-72 flex justify-center items-center footer-contact bg-slate-300"
        >
          <div
            class="sm:w-4/5 m-auto md:pl-0 pl-4 w-full flex flex-wrap justify-between items-center"
          >
            <div class="md:w-2/4 w-full">
              <h1 class="font-bold sm:text-5xl text-3xl py-3 text-white">
                We’re Ready To Help You
              </h1>
              <p class="text-xl font-semibold text-gray-800">
                Get in touch with us today and let’s start transforming your
                business from the ground up.
              </p>
            </div>
            <div class="md:w-2/4 w-full flex justify-center">
              <button
                class="w-48 h-12 border-gray-600 border italic transition-all duration-300 hover:bg-blue-600 md:mt-0 mt-8 hover:border-none hover:font-semibold drop-shadow-lg rounded-md text-black hover:text-white font-medium"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
        <div class="Logo-and-Icon m-auto mb-6 pt-4">
          <h1 class="font-extrabold text-5xl text-blue-600 italic">UTL</h1>
          <div class="flex space-x-2">
            <a
              class="w-10 h-10 rounded-full hover:transition-transform hover:duration-300 hover:-translate-y-3"
              href=""
            >
              <img src=${baspath}Images/SocialMedia/facebook.png alt=""
            /></a>
            <a
              class="w-10 h-10 rounded-full hover:transition-transform hover:duration-300 hover:-translate-y-3"
              href=""
              ><img src=${baspath}Images/SocialMedia/gmail.png alt=""
            /></a>
            <a
              class="w-10 h-10 rounded-full hover:transition-transform transition-all hover:duration-300 hover:-translate-y-3"
              href=""
              ><img src=${baspath}Images/SocialMedia/linkedIn.png alt=""
            /></a>
          </div>
        </div>
        <div class="footer-list flex flex-wrap md:justify-evenly justify-start">
          <div class="cursor-pointer text-start space-y-2 md:mt-0 mt-6">
            <h1 class="text-xl font-semibold mb-6 text-white">
              UTL Group Companies
            </h1>
            <li>United Telecoms Limited</li>
            <li>Trigyn Technologies</li>
            <li>USEIPL</li>
            <li>Priya Raja Electronics</li>
            <li>UTL Technologies</li>
            <li>United Telelinks</li>
          </div>
          <div class="cursor-pointer space-y-2 md:mt-0 mt-6">
            <h1 class="text-xl font-semibold mb-6 text-white">Solution</h1>
            <li>State Wide Area Network (SWAN)</li>
            <li>e-Governance and Citizen Service</li>
            <li>Mobile Fronthaul/Backhaul</li>
            <li>Broadband Network</li>
            <li>Enterprise Network</li>
            <li>Managed Services</li>
            <a href="" class="font-bold text-lg text-blue-600">View More..</a>
            <!-- <li>Access Network</li>
            <li>Transmission Network</li>
            <li>Embedded and IoT</li>
            <li>IT & ITES</li>
            <li>Education</li> -->
          </div>
          <div class="cursor-pointer space-y-2 md:mt-0 mt-6">
            <h1 class="text-xl font-semibold mb-6 text-white">About Us</h1>
            <li>Company Profile</li>
            <li><a href=${htmlpath}Html/About_pages/BoardOfDirectors.html>Board Of Directors</a></li>
            <li>Key Management</li>
            <li>Award And Recognition</li>
            <li>Corporate Social Responsibility</li>
          </div>
  
          <div class="cursor-pointer space-y-2 md:mt-0 mt-6 md:mb-0">
            <li>Compliance</li>
            <li>NewsRoom</li>
            <li>Privacy Policy</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </div>
        </div>
  
        <div class="md:w-5/6 w-11/12 text-center m-auto mt-7 footerBottom">
          <p class="text-gray-600">Terms Of Use Privacy Policy</p>
          <p class="text-blue-700">© 2023-24 UTL All Rights Reserved.</p>
        </div>
      </div>`;
  }
}

// now Registering the componets
customElements.define("main-header", Header);
customElements.define("main-footer", Footer);
