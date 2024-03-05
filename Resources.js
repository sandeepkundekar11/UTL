// Writeing the logic for the white paper page start
let WhitePaperContainer = document.querySelector(".WhitePaperImageBoxs");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let whitePapaerStartIndex = 0;
let WhitePaperEndIndex = 3;
const AppendData = () => {
  let whitePaperHtml = "";
  arr.forEach((ele, index) => {
    if (index >= whitePapaerStartIndex && index <= WhitePaperEndIndex) {
      whitePaperHtml += `<div class="md:w-96 w-11/12 h-64 border md:m-4 m-auto md:mt-0 mt-4">
          <div class="w-full h-4/5 bg-slate-300">
            <img src="" class="w-full h-full" alt="images" />
          </div>
          <div class="w-full h-1/5 flex items-center justify-normal">
            <p class="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            </p>
            <div class="w-14 h-12 border rounded-full text-white">${ele}</div>
          </div>
        </div>`;
    }
  });
  WhitePaperContainer.innerHTML = whitePaperHtml;
};
AppendData();
