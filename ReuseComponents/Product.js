class ProductPage extends HTMLElement {
  connectedCallback() {
    let ProductName = this.getAttribute("product-name");
    let Product_img_arr = this.getAttribute("product-img-arr");
    let ProductAr = JSON.parse(Product_img_arr) || [];
    let ProductInfo = this.getAttribute("product-info");
    let Product_Specification_arr = this.getAttribute(
      "product-specification-arr"
    );
    let Product_Specification = JSON.parse(Product_Specification_arr) || []; //products specification  array
    let Product_Feature_arr = this.getAttribute("product-feature-arr");

    let ProductFeatures = JSON.parse(Product_Feature_arr) || [];
    let ProductHtml = `<div class="w-full">`;
    // Heading Of the Products
    ProductHtml += `  <div class="w-screen pb-11 Product_DetailContainer">
    <div class="product-info w-full flex flex-wrap pt-36 m-auto">
      <div class="lg:w-2/4 w-11/12 pb-4 md:pl-0 flex items-center">
        <h1
          class="md:text-5xl text-start text-4xl mb-5 text-blue-600 font-bold italic border-spacing-2"
        >
        ${ProductName}
        </h1>
      </div>
      <div class="w-2/5 flex flex-col ">`;

    ProductAr.forEach((image) => {
      ProductHtml += `<img class="md:w-4/5 mt-4" src=${image} alt="Product_img" />`;
    });
    ProductHtml += `<br></br>`;
    ProductHtml += `</div>
    </div>
    <div class="w-screen flex justify-start border-none">
      <p
        class="md:text-2xl text-xl text-gray-400 w-11/12 m-auto border-none font-medium"
      >
        ${ProductInfo || ""}
      </p>
    </div>
  </div>`;

    //   Product specification
    ProductHtml += `<div class="w-full bg-gray-800 py-6">
    <div class="ProductSpecification m-auto p-2">
    <h1 class="text-4xl text-start text-blue-600 font-bold">
      Product Specification
    </h1>
    
    <table class="md:w-9/12 w-full mt-5 ">
    <!-- <thead></thead> -->
    <tbody class="md:w-9/12 w-full p-2">`;

    Product_Specification.forEach((ele) => {
      ProductHtml += `<tr>
        <td
          class="h-auto md:p-4 p2 text-gray-100 bg-gray-700 font-semibold md:text-xl text-base border border-gray-600 p-1"
        >
         ${ele[0]}
        </td>
        <td
          class="h-auto md:p-4 p2 text-gray-400 font-normal md:text-xl text-base border border-gray-600 p-1"
        >
        ${ele[1]}
        </td>
      </tr>`;
    });

    ProductHtml += `</tbody>
      </table>
     </div>
    </div>`;

    //  <!-- product features -->
    ProductHtml += ` <div class="w-screen bg-gray-800 py-12">
    <div class="product-feature h-auto p-2 m-auto bg-gray-800">
      <h1 class="text-4xl text-start text-blue-600 font-bold">
        Key Features
      </h1>
      <div class="product-feature-boxe">
        <ul class="w-full space-y-7 list-disc ml-4 mt-3">`;

    ProductFeatures.forEach((ele) => {
      ProductHtml += `<li class="text-gray-400 text-xl">
       ${ele}
      </li>`;
    });

    ProductHtml += ` </ul>
    </div>
  </div>
</div>
</div>`;
    this.innerHTML = ProductHtml;
  }
}

customElements.define("product-item", ProductPage);
