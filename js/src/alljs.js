let headu = document.querySelector("head");
let external_css = document.createElement("script");
external_css.src = "/js/src/externalcss.min.js";
external_css.setAttribute("type", "module");
headu.appendChild(external_css);

window.onload = function () {
  if (!window.location.href.startsWith("http://127.0.0.1")||!window.location.href.startsWith("127.0.0.1:5500")) {
    let bodu = document.querySelector("body");
    let extra_tags = document.createElement("script");
    extra_tags.src = "/js/src/tags_script.min.js";
    extra_tags.setAttribute("type", "module");
    extra_tags.async = !0;
    bodu.appendChild(extra_tags);
  }
};
let header_footer = document.createElement("script");
header_footer.src = "/js/src/hdr_ftr.min.js";
header_footer.setAttribute("type", "module");
header_footer.async = !0;
headu.appendChild(header_footer);
function c() {
  document.getElementById("sidebar").style.display = "block";
}

function d() {
  document.getElementById("sidebar").style.display = "none";
};
function name(params) {
  
}