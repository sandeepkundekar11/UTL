class DirectorCard extends HTMLElement {
  connectedCallback() {
    let img = this.getAttribute("img");
    let DirectorName = this.getAttribute("director-name");
    let Designation = this.getAttribute("designation");
    this.innerHTML = `<div class="w-full h-full">
    <img class="w-full h-52 border-none bg-transparent" src=${img}alt="" />
    <div class="Directorname h-24 w-full">
      <div
        class="w-full h-2/4 DirectorNamediv font-bold lg:text-xl text-base flex items-center text-white pl-3"
      >
     ${DirectorName}
      </div>
      <div
        class="w-full h-2/4 text-lg pl-3 text-white flex items-center font-medium"
      >
       ${Designation}
      </div>
    </div>
  </div>`;
  }
}
// now Registering the componets
customElements.define("director-card", DirectorCard);
