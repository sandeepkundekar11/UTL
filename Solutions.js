let StateButton = document.querySelectorAll(".StateButton");
let SelectedState = "Andhra Pradesh"; // defaul value
let container = document.querySelector(".mapInfo");
let State_Projects_arr = [
  {
    id: 1,
    state: "Andhra Pradesh",
    Html: `  <div class="w-full m-auto StateContainer">
        <h1 class="text-3xl font-bold mt-4 pl-4 text-blue-400">ANDRA PRADESH</h1>
        <div class="w-full mt-5 flex sm:justify-around justify-start pl-4 sm:space-y-0 space-y-4 flex-wrap">
        <img class="w-80 h-72 bg-white" src="" alt="img"/>
        <img class="w-80 h-72 bg-white" src="" alt="img"/>
        </div>
        <p class="text-gray-200 text-2xl mt-3 ml-3">
          In March 2000, former US President Bill Clinton's attends the
          video conferencing of the APSWAN at Hyderabad <br /><br />
          The then Group Chairman of UTL, Dr.Rao Kasarabada formally
          accepting the contract from the Government of Andhra Pradesh.
        </p>
        <ul class="space-y-4 list-disc ml-4 mt-3">
          <li class="text-gray-400 text-xl">
            Contract awarded to UTL in 1999 Executed under BOO Model with
            the duration of 5+ years
          </li>
          <li class="text-gray-400 text-xl">
            Connects all the District collectorates to the State Secretariat
          </li>
          <li class="text-gray-400 text-xl">
            First kind of conceptual network in India
          </li>
          <li class="text-gray-400 text-xl">
            OEM Partners: Tellabs, Cisco, Alcatel, Lucent and PictureTel
          </li>
          <li class="text-gray-400 text-xl">
            Extension of period of operation:11 years 7 months
          </li>
          <li class="text-gray-400 text-xl">
            2 Mbps back bone connectivity to the AP Govt. catering the data,
            voice & video services simultaneously.
          </li>
        </ul>
      </div>`,
  },
  {
    id: 2,
    state: "Gujarat",
    Html: `  <div class="w-full" id="GUJARAT">
    <h1 class="text-3xl font-bold mt-4 pl-4 text-blue-400">GUJARAT</h1>
    <div class="w-full mt-5 flex sm:justify-around justify-start pl-4 sm:space-y-0 space-y-4 flex-wrap">
    <img class="w-80 h-72 bg-white" scr="" alt="img"/>
    <img class="w-80 h-72 bg-white" scr="" alt="img"/>
    </div>
    <p class="text-gray-200 text-2xl mt-3 ml-3">
    Prime Minister Shri Narendra Modi (the then Chief Minister of Gujarat) inaugurating the GSWAN Project in 2004. <br /><br />
    UTL Chairman Dr.Rajamohan Rao formally accepting the contract.
    </p>
    <ul class="space-y-4 list-disc ml-4 mt-3">
      <li class="text-gray-400 text-xl">
      Contract awarded to UTL in 2001
      </li>
      <li class="text-gray-400 text-xl">
      Connecting all the 25 District Collectorates with all the collocated departments and 237 Talukas to the State headquarter
      </li>
      <li class="text-gray-400 text-xl">
      Executed under BOOT Model
      </li>
      <li class="text-gray-400 text-xl">
      End to-end IP network for Triple play - Voice, Video and Data
      </li>
      <li class="text-gray-400 text-xl">
      Maintained for 8 years after commissioning.
      </li>
      <li class="text-gray-400 text-xl">
      OEM Partners: Cisco, Polycom, APC, Emerson, Nortel, UTL, Nomus and Alcatel
      </li>
      <li class="text-gray-400 text-xl">
      Awarded largest IP network in south east Asia
      </li>

  </div>`,
  },
  {
    id: 3,
    state: "Goa",
    Html: `  <div class="w-full">
    <h1 class="text-3xl font-bold mt-4 pl-4 text-blue-400">GOA</h1>
    <div class="w-full mt-5 flex sm:justify-around justify-start pl-4 sm:space-y-0 space-y-4 flex-wrap">
    <img class="w-80 h-72 bg-white" scr="" alt="img"/>
    <img class="w-80 h-72 bg-white" scr="" alt="img"/>
    </div>
    <p class="text-gray-200 text-2xl mt-3 ml-3">
    Prime Minister Manmohan Singh launches the Goa Broadband Network (GBBN) in 2007 (The then Group Chairman of UTL, 
    Dr.Rao Kasarabada shares the dias alongwith other dignitaries).
    </p>
    <ul class="space-y-4 list-disc ml-4 mt-3">
      <li class="text-gray-400 text-xl">
      Contract awarded to UTL in 2006
      </li>
      <li class="text-gray-400 text-xl">
      Connecting the State Headquarters. District Head Quarter with all 11 Talukas, Village Panchayats, Households,
      institution across the State with high speed OFC link
      </li>
      <li class="text-gray-400 text-xl">
      Executed under BOO Model.
      </li>
      <li class="text-gray-400 text-xl">
      Value of Contract: USD 70 Million
      </li>
      <li class="text-gray-400 text-xl">
      Still Operational under extension.
      </li>
      <li class="text-gray-400 text-xl">
      OEM Partners: Cisco, HP, IBM, and UTStarcom
      </li>
    </ul>
  </div>`,
  },
  {
    id: 4,
    state: "Jharkhand",
    Html: `  <div class="w-full">
    <h1 class="text-3xl font-bold mt-4 pl-4 text-blue-400">JHARKHAND</h1>
    <div class="w-full mt-5 flex sm:justify-around justify-start pl-4 sm:space-y-0 space-y-4 flex-wrap">
    <img class="w-80 h-72 bg-white" scr="" alt="img"/>
    </div>
    <p class="text-gray-200 text-2xl mt-3 ml-3">
    The then Group Chairman of UTL, Dr.Rao Kasarabada formally accepting the contract from the IT Secretary,
     Government of Jharkhand in the presence of Chief Minister Shri Arjun Munda.
    </p>
    <ul class="space-y-4 list-disc ml-4 mt-3">
      <li class="text-gray-400 text-xl">
      Contract awarded to UTL in 2005
      </li>
      <li class="text-gray-400 text-xl">
      Interconnecting bandwidth of 2 MBPS at all levels
      </li>
      <li class="text-gray-400 text-xl">
      Executed under BOOT Model
      </li>
      <li class="text-gray-400 text-xl">
      OEM Partners: Cisco, HP, Polycom and Carrier
      </li>
      <li class="text-gray-400 text-xl">
      Still operational under extension awarded by GoJ.
      </li>
      <li class="text-gray-400 text-xl">
      Connecting 22 districts, 35 Sub Divisional Headquarters and 212 Blocks and about 4000 Horizontal offices
      </li>
    </ul>
  </div>`,
  },
  {
    id: 5,
    state: "Kerala",
    Html: `  <div class="w-full h-full">
    <h1 class="text-3xl font-bold mt-4 pl-4 text-blue-400">KERALA</h1>
    <div class="w-full mt-5 flex sm:justify-around justify-start pl-4 sm:space-y-0 space-y-4 flex-wrap">
    <img class="w-80 h-72 bg-white" scr="" alt="img"/>
    <img class="w-80 h-72 bg-white" scr="" alt="img"/>
    </div>
    <p class="text-gray-200 text-2xl mt-3 ml-3">
    UTL Chairman Dr.Rajamohan Rao with the then Chief Minister of Kerala Shri V.S.Achuthanandan and other officials <br /><br />
    Chief Minister of Kerala Shri V.S.Achuthanandan inaugurates the project.
    </p>
    <ul class="space-y-4 list-disc ml-4 mt-3">
      <li class="text-gray-400 text-xl">
      Contract awarded to UTL in 2007
      </li>
      <li class="text-gray-400 text-xl">
      OEM Partners: Cisco, CA, HP and BSNL
      </li>
      <li class="text-gray-400 text-xl">
      Executed under BOOT Model with the duration of 7 years
      </li>
      <li class="text-gray-400 text-xl">
      Interconnecting bandwidth of 2 MBPS at all levels
      </li>
      <li class="text-gray-400 text-xl">
      Connecting 14 districts and 152 Blocks as also 1600 remote offices to the State CapitalExtension of period of operation:11 years 7 months
      </li>
    </ul>
  </div>`,
  },
  {
    id: 6,
    state: "Karnataka",
    Html: `  <div class="w-full">
    <h1 class="text-3xl font-bold mt-4 pl-4 text-blue-400">KARNATAKA</h1>
    <div class="w-full mt-5 flex sm:justify-around justify-start pl-4 sm:space-y-0 space-y-4 flex-wrap">
    <img class="w-80 h-72 bg-white" scr="" alt="img"/>
    <img class="w-80 h-72 bg-white" scr="" alt="img"/>
    </div>
    <p class="text-gray-200 text-2xl mt-3 ml-3">
    Chief Minister of Karnataka Shri B.S.Yedyurappa insugurating the Karnataka SWAN.
    </p>
    <ul class="space-y-4 list-disc ml-4 mt-3">
      <li class="text-gray-400 text-xl">
      Contract awarded to UTL in 2008
      </li>
      <li class="text-gray-400 text-xl">
      Connecting 31 districts, 48 Talukas, 29 Non-Pop Talukas, several remote locations and 177 Govt Business Centres to the State Capital
      </li>
      <li class="text-gray-400 text-xl">
      Executed under BOOT Model and maintained for 8 years.
      </li>
      <li class="text-gray-400 text-xl">
      Interconnecting bandwidth of 4 MBPS at all levels
      </li>
      <li class="text-gray-400 text-xl">
      First state wide area network on private MPLS platform.
      </li>
    </ul>
  </div>`,
  },
];
// ele.style.backgroundColor = "blue";
container.innerHTML = State_Projects_arr[0].Html;
StateButton[0].style.backgroundColor = "red";
StateButton.forEach((ele) => {
  ele.addEventListener("click", (btn) => {
    SelectedState = ele.value;
    StateButton.forEach((comp) => {
      if (comp.value === SelectedState) {
        comp.style.backgroundColor = "red";
      } else {
        comp.style.backgroundColor = "";
      }
    });
    State_Projects_arr.forEach((title) => {
      if (ele.value === title.state) {
        container.innerHTML = title.Html;
      }
    });
  });
});
