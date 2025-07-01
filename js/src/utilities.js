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
function file_name_viewer() {
  let url = window.location.pathname;
  return url.substring(url.lastIndexOf("/") + 1);
}

export function book_name_recommender(object) {
  let books = "";
  let h2i = "";
  let p1 = "";
for (let filename of object) {
    if (filename.file_name.includes(`${file_name_viewer()}`)) {
      h2i = `<h2 class="text-center text-decoration-underline" style=" text-underline-offset: 5px;">List of books that help you learn the${filename.topic_name} </h2>`;
      p1 = `<p class="text-center text-decoration-underline" style="text-underline-offset: 5px;color:#000000;background-color:#FF6B6F;padding:5px;">List of books that help you learn the ${filename.topic_name} </p>`;
      for (let book of filename.book) {
        books += `<a href="${book.book_link}"><img loading="lazy" class="w-100 h-auto p-2"  src="${book.book_image}" alt="${book.image_alt}"/></a>`;
      }
    }
  }
if (window.innerWidth <= 1000) {
    let article = document.querySelector("#main_content > main > article");
    let article_book_recommendation = document.createElement("section");
    article_book_recommendation.setAttribute("id", "book_recommendation");
    article_book_recommendation.setAttribute("class", "border border-danger border-2");
    article_book_recommendation.style.padding="5px";
    article_book_recommendation.innerHTML = `${h2i}<div style="width: 90%;">${books} </div>`;
    article.appendChild(article_book_recommendation);
  } else {
    let article = document.querySelector("#right_content");
    let right_content = document.createElement("section");
    right_content.setAttribute("id", "book_recommendation");
    right_content.setAttribute("class", "border border-danger border-2");
    right_content.innerHTML = `${p1}<div class="w-100">${books} </div>`;
    article.appendChild(right_content);
  }
}
export function sdbar_Links(params) {
  let left_content = document.querySelector("#left_content > ul");
  for (const user of params.users) {
    left_content.innerHTML += `<li style="list-style: none;">
    <a style="text-decoration: none;" href="${user.link}">${user.name}</a>
    </li>`;
  }
}
export function sequence_function_call(...args) {

  for (let arg of args) {
      if (typeof arg === 'function'){ arg();}
  }
}