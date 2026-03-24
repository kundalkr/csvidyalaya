window.AMAZON_PRODUCTS = {
  induction1: {
    title: "Prestige Induction Cooktop",
    image: "/assets/ad-picture/electric-induction.webp",
    price: "₹2,000",
    link: "https://amzn.to/4btYEZl"
  },
  induction2: {
    title: "Motorcycle Keychain Biker Protection",
    image: "/assets/ad-picture/KEYCHAIN.webp",
    price: "₹100",
    link: "https://amzn.to/4lQQcHc"
  }
};



class AmazonAd extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const productKey = this.getAttribute("product");
    const data = window.AMAZON_PRODUCTS[productKey];

    if (!data) {
      this.shadowRoot.innerHTML = `<p>Product not found</p>`;
      return;
    }

     this.shadowRoot.innerHTML = `
      <style>
        .card {
          border: 1px solid #ddd;
          border-radius: 12px;
          padding: 12px;
          width: 220px;
          font-family: Arial, sans-serif;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          text-align: center;
          transition: 0.3s;
          margin: auto;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }

        .title {
          font-size: 14px;
          margin: 10px 0;
        }

        .price {
          color: green;
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .btn {
          display: inline-block;
          margin-top: 10px;
          padding: 8px 12px;
          background: #ff9900;
          color: white;
          border-radius: 6px;
          font-size: 14px;
        }

        /* ✅ Tablet */
        @media (max-width: 768px) {
          .card {
            width: 180px;
            padding: 10px;
          }
          .title {
            font-size: 13px;
          }
          .btn {
            font-size: 13px;
            padding: 6px 10px;
          }
        }

        /* ✅ Mobile */
        @media (max-width: 480px) {
          .card {
            width: 100%;
            max-width: 300px;
          }
          .title {
            font-size: 12px;
          }
          .price {
            font-size: 14px;
          }
          .btn {
            width: 100%;
            display: block;
          }
        }
      </style>

      <div class="card">
        <a href="${window.AMAZON_PRODUCTS[productKey].link}" target="_blank" rel="noopener noreferrer">
          <img src="${window.AMAZON_PRODUCTS[productKey].image}" alt="${window.AMAZON_PRODUCTS[productKey].title}">
          <div class="title">${window.AMAZON_PRODUCTS[productKey].title}</div>
          <div class="price">${window.AMAZON_PRODUCTS[productKey].price}</div>
          <div class="btn">Buy on Amazon</div>
        </a>
      </div>
    `;
  }
}

customElements.define("amazon-ad", AmazonAd);

{/* <amazon-ads-collection></amazon-ads-collection> */}
{/* <amazon-ads-collection products="induction1,induction2,induction3,induction4"></amazon-ads-collection> */}

window.AMAZON_PRODUCTS = {
  induction1: {
    title: "",
    image: "/assets/ad-picture/electric-induction.png",
    price: "₹2,000",
    link: "https://amzn.to/4bDzlD2"
  },
  induction2: {
    title: "Philips Induction Stove",
    image: "/assets/ad-picture/philips.png",
    price: "₹3,499",
    link: "#"
  },
  induction3: {
    title: "Bajaj Induction Cooktop",
    image: "/assets/ad-picture/bajaj.png",
    price: "₹2,799",
    link: "#"
  },
  induction4: {
    title: "Usha Induction Cooktop",
    image: "/assets/ad-picture/usha.png",
    price: "₹2,499",
    link: "#"
  }
};

class AmazonAdsCollection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    let productKeys = this.getAttribute("products");

    if (productKeys) {
      productKeys = productKeys.split(",");
    } else {
      productKeys = Object.keys(window.AMAZON_PRODUCTS).slice(0, 4);
    }

    const cards = productKeys.map(key => {
      const data = window.AMAZON_PRODUCTS[key];
      if (!data) return "";

      return `
        <a href="${data.link}" target="_blank">
          <div class="card">
            <img src="${data.image}" />
            <h4>${data.title}</h4>
            <div class="price">${data.price}</div>
            <div class="btn">Buy Now</div>
          </div>
        </a>
      `;
    }).join("");

    this.shadowRoot.innerHTML = `
      <style>
        .grid {
          display: grid;
          gap: 16px;
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Tablet */
        @media (min-width: 600px) and (max-width: 1023px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile */
        @media (max-width: 599px) {
          .grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }

        .card {
          border: 1px solid #ddd;
          border-radius: 12px;
          padding: 12px;
          text-align: center;
          font-family: Arial;
          transition: 0.3s;
          background: white;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        img {
          width: 100%;
          border-radius: 8px;
        }

        h4 {
          font-size: 14px;
          margin: 10px 0;
        }

        .price {
          color: green;
          font-weight: bold;
        }

        .btn {
          background: #ff9900;
          color: white;
          padding: 8px;
          display: inline-block;
          margin-top: 8px;
          border-radius: 6px;
          font-size: 13px;
        }

        a {
          text-decoration: none;
        }
      </style>

      <div class="grid">
        ${cards}
      </div>
    `;
  }
}

customElements.define("amazon-ads-collection", AmazonAdsCollection);

