class HeadBar extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
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

          h2 {
            font-size: 90px;
            position: absolute;
            margin-bottom: 70px;
            left: 230px;
            top: 60px;
            color: #fff;

          }
          p{
            font-size: 20px;
            position: absolute;
            margin-bottom: 70px;
            left: 250px;
            top: 155px;
            color: #fff;
          }
          @media screen and (max-width: 800px){
            h2{
              font-size: 65px;
              position: absolute;
              margin-bottom: 70px;
              left: 80px;
              top: 47px;
              color: #fff;
            }
            p{
              font-size: 13px;
              position: absolute;
              margin-bottom: 70px;
              left: 100px;
              top: 114px;
              color: #fff;
            }
          }
          </style>
          <h2>CockT</h2>
          <p>Find your favorite drink here.</p>
          `;
    }
  }
  customElements.define("head-bar", HeadBar);
  