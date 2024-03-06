// Writeing the logic for the white paper page start
const ReuseResouceFun = (resource) => {};
try {
  let WhitePaperContainer = document.querySelector(".WhitePaperImageBoxs");
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let whitePapaerStartIndex = 0;
  let WhitePaperEndIndex = 3;
  const AppendData = () => {
    let whitePaperHtml = "";
    arr.forEach((ele, index) => {
      if (index >= whitePapaerStartIndex && index <= WhitePaperEndIndex) {
        whitePaperHtml += `<div class="md:w-96 w-11/12 h-64 border-b border-gray-500 md:m-4 p-2 m-auto md:mt-0 mt-4 
        transition-all duration-300 hover:border-b-4 hover:border-blue-950 hover:-translate-y-4 hover:shadow hover:shadow-gray-600 ">
          <div class="w-full h-4/5 bg-slate-300">
            <img src="/Images/Resouces/ReosucesDummyImg1.jpg" class="w-full h-full" alt="images" />
          </div>
          <div class="w-full h-1/5 flex items-center justify-normal py-2">
            <p class="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ${ele}
            </p>
            <div class="w-14 h-10 hover:bg-gray-800 flex items-center justify-center rounded-full text-white"><img class="w-6 h-6" src="/Images/Download_file.png"/></div>
          </div>
        </div>`;
      }
    });
    WhitePaperContainer.innerHTML = whitePaperHtml;
  };
  AppendData();

  // Creatin the Buttons for next and previous Functionality

  let WhitePaperSubcontainer = document.querySelector(
    ".WhitePaperSubcontainer"
  );
  // bellow we are calculating the Tpotal number Button should come
  let TotalButtons = Math.ceil(arr.length / 4);
  // bellow we are Creating the Buttons
  for (let i = 1; i <= TotalButtons; i++) {
    let Buttons = document.createElement("button");
    Buttons.classList.add("ResourcesButtons");
    Buttons.innerHTML = `${i}`;
    WhitePaperSubcontainer.appendChild(Buttons);
  }
  // bellow we are setting initial value of the page
  let pageCount = 1;
  // bellow we are getting all the buttons using queryParameters
  let PreBtn = document.querySelector(".ResourcesButtonsPre");
  let Nextbtn = document.querySelector(".ResourcesButtonsNext");
  let AllButtons = document.querySelectorAll(".ResourcesButtons");

  // bellow we are setting the initial color of the Button
  AllButtons[pageCount - 1].classList.add("activeBtn");

  // bellow function we are using to toggle the color of the buttons
  const ToggleColor = () => {
    AllButtons.forEach((ele, index) => {
      if (index + 1 !== pageCount) {
        ele.classList.remove("activeBtn");
      } else {
        ele.classList.add("activeBtn");
      }
    });
  };

  // bellow we are toggling the pre next and next button
  const ToggleSlideBtns = () => {
    if (pageCount === 1) {
      PreBtn.style.display = "none";
    } else {
      PreBtn.style.display = "block";
    }
    if (pageCount === 3) {
      Nextbtn.style.display = "none";
    } else {
      Nextbtn.style.display = "block";
    }
  };
  ToggleSlideBtns();
  let newArr = [];
  // bellow we are created a array for the setting the start and End index
  for (let i = 0; i < arr.length; i += 4) {
    let start = i;
    newArr.push({
      startIndex: i,
      endIndex: start + 3,
    });
  }

  // bellow we are setting the start and end index onClick function
  newArr.forEach((ele, index) => {
    AllButtons[index].addEventListener("click", () => {
      pageCount = parseInt(AllButtons[index].innerHTML);
      whitePapaerStartIndex = ele.startIndex;
      WhitePaperEndIndex = ele.endIndex;
      AppendData();
      ToggleSlideBtns();
      ToggleColor();
    });
  });
  console.log(newArr);

  // bellow function we are using to go to previous function
  PreBtn.addEventListener("click", () => {
    pageCount--;
    whitePapaerStartIndex = whitePapaerStartIndex - 4;
    WhitePaperEndIndex = WhitePaperEndIndex - 4;
    AppendData();
    ToggleSlideBtns();
    ToggleColor();
  });

  //bellow function we are using to go next page
  Nextbtn.addEventListener("click", () => {
    pageCount++;
    whitePapaerStartIndex = whitePapaerStartIndex + 4;
    WhitePaperEndIndex = WhitePaperEndIndex + 4;
    AppendData();
    ToggleSlideBtns();
    ToggleColor();
  });
} catch (error) {}

// Writing the Logic for Articles pages

try {
  let Articals_Arr = [
    {
      title: "The Future of Telecommunications: Embracing 5G Technology",
      image: "https://example.com/telecom_image_1.jpg",
      information:
        "Explore the advancements and potential of 5G technology in shaping the future of telecommunications. This article delves into the key features and applications, paving the way for a connected world.",
      link: "https://example.com/article1",
    },
    {
      title: "Navigating the Digital Landscape: Telecom Trends in 2024",
      image: "https://example.com/telecom_image_2.jpg",
      information:
        "Stay ahead in the fast-paced world of telecommunications. Uncover the latest trends shaping the industry in 2024 and understand how digital transformation is influencing communication networks.",
      link: "https://example.com/article2",
    },
    {
      title:
        "Revolutionizing Connectivity: Exploring the Impact of IoT on Telecommunications",
      image: "https://example.com/telecom_image_3.jpg",
      information:
        "Dive into the intersection of telecommunications and the Internet of Things (IoT). Discover how IoT is reshaping connectivity, from smart homes to industrial applications, and the challenges it presents.",
      link: "https://example.com/article3",
    },
    {
      title:
        "5G Unleashed: A Deep Dive into the Next Generation of Wireless Communication",
      image: "https://example.com/telecom_image_4.jpg",
      information:
        "Unlock the potential of 5G with an in-depth exploration of its capabilities. From faster speeds to low-latency communication, this article provides a comprehensive look at the latest in wireless technology.",
      link: "https://example.com/article4",
    },
    {
      title: "Telecom Resilience: How the Industry Adapts to Global Challenges",
      image: "https://example.com/telecom_image_5.jpg",
      information:
        "Examine the resilience of the telecom industry in the face of global challenges. Learn about strategies and innovations that help the sector adapt and thrive in a rapidly changing environment.",
      link: "https://example.com/article5",
    },
  ];
  const ArticalBoxContainer = document.querySelector(".ArticalBoxContainer");
  const ShowArticles = (arr = [], Text) => {
    let ArticalHtml = "";
    if (arr.length > 0) {
      arr.forEach((ele) => {
        ArticalHtml += `<div
    class="border-b border-gray-500 h-auto px-1 pb-4 m-3 ArticalBox transition-all duration-300 hover:border-b-4
     hover:border-blue-900 hover:-translate-y-4 hover:shadow hover:shadow-gray-600 ">
    <h1 class="font-normal text-blue-600 font-serif text-2xl text-wrap mb-4"> ${ele.title}</h1>
    <div class="flex flex-wrap items-center w-full pb-4">
      <img class="h-44 w-full bg-white border-none" src="" alt="" />
      <div class="h-44 w-full pl-2 flex flex-col justify-between">
        <p class="text-base text-white text-start">
        ${ele.information}
        </p>
        <button class="w-28 mt-2 h-10 border text-white">
          Read more
        </button>
      </div>
    </div>
  </div>`;
      });
    } else {
      ArticalHtml = `<h1 class="text-center text-3xl text-gray-600">Articles  not found :${Text} </h1>`;
    }
    ArticalBoxContainer.innerHTML = ArticalHtml;
  };
  ShowArticles(Articals_Arr);
  let searchIcon = document.querySelector(".searchIcon");
  let Loader = document.querySelector(".Loader");
  // Writing the logic for the Search Box
  let ArticalSearchInput = document.querySelector(".ArticalSearchInput");
  ArticalSearchInput.addEventListener("input", (e) => {
    if (e) {
      searchIcon.classList.add("hidden");
      Loader.classList.remove("hidden");
    }
    setTimeout(() => {
      searchIcon.classList.remove("hidden");
      Loader.classList.add("hidden");
    }, 1000);
    let Inputvalue = e.target.value;
    let uppdatedArr = Articals_Arr.reduce((acc, pre) => {
      if (pre.title.toLowerCase().includes(Inputvalue.toLowerCase())) {
        acc.push(pre);
      }
      return acc;
    }, []);
    ShowArticles(uppdatedArr, Inputvalue);
  });
} catch (error) {}
