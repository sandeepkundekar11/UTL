// Creating the Comman Resources category Component
class CommonCategory extends HTMLElement {
  connectedCallback() {
    let basepath = this.getAttribute("path");
    this.innerHTML = `<div class="ResourcesListContaier h-96 p-4">
        <h1 class="text-2xl text-end text-white font-semibold mb-4">
          Catagories
        </h1>
        <ul class="w-full flex flex-col items-end space-y-4 cursor-pointer">
          <li
            class="text-xl font-medium text-gray-300 w-full text-end hover:bg-cyan-800"
          >
          <a href=${basepath}Html/Resources/Articles.html>Articles</a>
          </li>
          <li
            class="text-xl font-medium text-gray-300 w-full text-end hover:bg-cyan-800"
          >
          <a href=${basepath}Html/Resources/CaseStudy.html>Case Studies</a>
          </li>
          <li
            class="text-xl font-medium text-gray-300 w-full text-end hover:bg-cyan-800"
          >
          <a href=${basepath}Html/Resources/WhitePaper.html>White Papers</a>
          </li>
          <li
            class="text-xl font-medium text-gray-300 w-full text-end hover:bg-cyan-800"
          >
          <a href=${basepath}Html/Resources/Videos.html>Videos<a/>
          </li>
          <li
            class="text-xl font-medium text-gray-300 w-full text-end hover:bg-cyan-800"
          >
          <a href=${basepath}Html/Resources/Webinar.html>Webinars</a>
          </li>
          <li
            class="text-xl text-end font-medium text-gray-300 w-full hover:bg-cyan-800"
          >
          <a href=${basepath}Html/Resources/ProductsDocumentation.html>Product Documentations</a>
          </li>
        </ul>
      </div>`;
  }
}

customElements.define("common-category", CommonCategory);
