let headu = document.querySelector("head");
function external_css(params) {
  let external_css = document.createElement("script");
  external_css.src = "/js/src/externalcss.min.js";
  external_css.setAttribute("type", "module");
  headu.appendChild(external_css);
}
function hdr_ftr(params) {
  let header_footer = document.createElement("script");
  header_footer.src = "/js/src/hdr_ftr.min.js";
  header_footer.setAttribute("type", "module");
  header_footer.async = !0;
  // header_footer.defer = true;
  headu.appendChild(header_footer);
}

if (window.location.pathname.startsWith("/os/scheduling_algorithms/")) {
  let commonthings = document.createElement("script");
  commonthings.src = "/os/scheduling_algorithms/commonthings.min.js";
  commonthings.setAttribute("type", "module");
  headu.appendChild(commonthings);
}

window.onload = function () {
  let bodu = document.querySelector("body");
  let commonforall = document.createElement("script");
  commonforall.src = "/js/src/commonforall.min.js";
  commonforall.setAttribute("type", "module");
  commonforall.async = !0;
  bodu.appendChild(commonforall);

  if (
    window.location.hostname !== "localhost" &&
    window.location.hostname !== "127.0.0.1"
  ) {
    let extra_tags = document.createElement("script");
    extra_tags.src = "/js/src/tags_script.min.js";
    extra_tags.setAttribute("type", "module");
    extra_tags.async = !0;
    bodu.appendChild(extra_tags);
  }
};

function aa_value(params) {
  if (
    window.location.pathname.startsWith(
      "/DBMS/DBMS_topics/relational_algebra/projection_operation.html"
    )
  ) {
    let aa_value = document.createElement("script");
    aa_value.src = "/DBMS/js/aa_value.min.js";
    aa_value.setAttribute("type", "module");
    headu.appendChild(aa_value);
  }
}

function execution(hdr_ftr, fn1,fn2) {
  hdr_ftr();
  fn1();
  fn2();
}
execution(hdr_ftr,external_css,aa_value);

function c() {
  document.getElementById("sidebar").style.display = "block";
}

function d() {
  document.getElementById("sidebar").style.display = "none";
}
