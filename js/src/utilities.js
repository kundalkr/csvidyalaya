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
    // console.log(users.link + "" + users.name);
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

export function popup_links(linksarr) {
  let modal = document.createElement("div");
  let inrHTML = ` <div class="modal fade" id="myModal" tabindex="-1" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Also try these question</h5>
                    <button type="button" id="btn_closeder" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                       <ul class="list-group list-group-flush">`;

  let loopt = "";
  for (const users of linksarr.users) {
    loopt += `<li class="list-group-item" style="background-color: #FFD1DC;"><a href="${users.link}">${users.name}</a></li>`;
  }
  modal.innerHTML = inrHTML + loopt + `</ul></div></div></div></div>`;
  add_body(modal);
  let scriptss = document.createElement("script");
  scriptss.innerHTML = ` 
 function openModal() {
            var myModal = new bootstrap.Modal(document.getElementById('myModal'));
            myModal.show();
        }
            setTimeout(openModal, 10000);
            document.getElementById('btn_closeder').addEventListener('click',() => setTimeout(openModal, 12 * 60 * 1000));
    `;
  add_body(scriptss);
}

export function google_font(element) {
  for (const users of element.users) {
    let fontes = document.createElement("link");
    fontes.setAttribute("href", `${users.link}`);
    fontes.setAttribute("rel", "stylesheet");
    add_head(fontes);
  }
}
