let leftbtn = document.querySelector(".leftbtn");
console.log("hi from products");
let right = document.querySelector(".rightbtn");
let productSlider = document.querySelector(".utlProductsSlider");
let isHover = false;
productSlider.addEventListener("mouseover", () => {
  isHover = true;
});
productSlider.addEventListener("mouseleave", () => {
  isHover = false;
});

let count = 0; // in rem
const leftSlide = () => {
  if (!isHover) {
    if (count >= 13) {
      productSlider.classList.remove("utlProductsSlider");
      productSlider.classList.add("utlProductsSliderRepeat");
      count = 0;
    } else {
      productSlider.classList.add("utlProductsSlider");
      productSlider.classList.remove("utlProductsSliderRepeat");
      count += 1;
    }

    productSlider.style.transform = `translateX(${-count * 100}vw)`;
  }
};
const rightSlide = () => {
  if (count <= 0) {
    productSlider.classList.remove("utlProductsSlider");
    productSlider.classList.add("utlProductsSliderRepeat");
    count = 13;
  } else {
    productSlider.classList.add("utlProductsSlider");
    productSlider.classList.remove("utlProductsSliderRepeat");
    count -= 1;
  }

  productSlider.style.transform = `translateX(${-count * 100}vw)`;
};

leftbtn.addEventListener("click", leftSlide);
setInterval(leftSlide, 3500);
right.addEventListener("click", rightSlide);
