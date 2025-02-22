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