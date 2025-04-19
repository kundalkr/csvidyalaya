export function add_head(elmnt) {
  document.querySelector("head").appendChild(elmnt);
}

export function add_css(elmntr) {
  let csr = document.createElement("style");
  csr.innerHTML = `${elmntr}`;
  add_head(csr);
}

export function adding_div_child(params) {
  let divs = document.createElement("div");
  divs.innerHTML = `${params}`;
}

export function add_body(elmnt) {
  document.querySelector("body").appendChild(elmnt);
}

export function bar(link_arr) {
  let bar = document.createElement("div");
  let irhtml = `<div
      id="bar1"
      style="
        background-color: rgb(5, 148, 79);
        flex-direction: row;
        justify-content: space-between;
       padding: 10px 10px;color:black;
      "
    >`;
  let loopt = "";
  for (const users of link_arr.users) {
    console.log(users.link + "" + users.name);
    loopt += `<a href="${users.link}">${users.name}</a>`;
  }
  
  bar.innerHTML = irhtml + loopt + ` </div><br>`;

  let bar_style = document.createElement("style");
  bar_style.innerHTML = `   
          #bar1 {
          a {
                color: rgb(255, 255, 255);
              text-decoration-color: rgb(255, 255, 255);
              text-decoration-thickness: 0.3ex;
              text-underline-offset: 0.3ex;
            }
            display: none;
          }
          @media (min-width: 950px) {
            #bar1 {
                display: flex;
            }
          }
     `;
  add_head(bar_style);

  let body = document.querySelector("body");
  let h1 = document.querySelector("body>div");
  body.insertBefore(bar, h1);
}
