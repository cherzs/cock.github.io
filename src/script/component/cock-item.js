class CockItem extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: "open" });
    }
  
    set cock(cock) {
      this._cock = cock;
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            :host {
              border-radius: 10px;
              width: 200px;
              display: flex;
              margin: 10px;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
              
            }
          
            .poster {
              object-fit: cover;
              object-position: center;
              border-radius: 10px;
              width: 200px;
              height: 190px;
            }
            
            .cock {
              padding: 24px;
            }
            
            .cock > h2 {
              font-weight: lighter;
              margin-top: 1px;
              border-radius:2px;              
            }
            .cock > h3 {
              font-weight: lighter;
              margin-top: 10px;
              border-radius:2px;              
            }
          
            .cock > p {
              margin-top: 8px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 10; 
            }
            @media only screen and (max-width: 600px) {
              :host {
                width: 300px;
              }
              h2{
                font-weight: bold;
                margin-top: 1px;
              }
            }
            
          </style>
          
          <div>
          <img class="poster" src="${this._cock.strDrinkThumb}">
          
          <div class="cock">
            <h2>${this._cock.strDrink}</h2>
            <h3>${this._cock.strCategory}</h3>
            <p>${this._cock.strInstructions}</p>
          </div>
        `;
    }
  }
  
  customElements.define("cock-item", CockItem);
  