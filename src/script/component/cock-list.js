import "./cock-item";

class CockList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set cock(cocktail) {
    this._cocktail = cocktail;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
        <style>
           .placeholder {
            font-weight: lighter;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            
          }
        </style>
      `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this._cocktail.forEach((cock) => {
      const CockItemElement = document.createElement("cock-item");
      CockItemElement.cock = cock;
      this.shadowDOM.appendChild(CockItemElement);
    });
  }
}

customElements.define("cock-list", CockList);
