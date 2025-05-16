let headu = document.querySelector("head");
let bodu = document.querySelector("body");

  if (
    window.location.hostname !== "localhost" &&
    window.location.hostname !== "127.0.0.1"
  ) {
  let script1 = document.createElement("script");
  script1.async = !0;
  script1.src = "https://www.googletagmanager.com/gtag/js?id=G-C4M8ZRW6HS";
  headu.appendChild(script1);
  
  let script2 = document.createElement("script");
  
  script2.innerHTML=`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', 'G-C4M8ZRW6HS');`
    headu.appendChild(script2);
  }


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
  headu.appendChild(header_footer);
}
function execution(hdr_ftr, fn1) {
  hdr_ftr();
  fn1();
}
execution(external_css,hdr_ftr);


window.onload = function () {
  let bodu = document.querySelector("body");
  let commonforall = document.createElement("script");
  commonforall.src = "/js/src/commonforall.min.js";
  commonforall.setAttribute("type", "module");
  commonforall.async = !0;
  bodu.appendChild(commonforall);

  // if (
  //   window.location.hostname !== "localhost" &&
  //   window.location.hostname !== "127.0.0.1"
  // ) {
  //   let extra_tags = document.createElement("script");
  //   extra_tags.src = "/js/src/tags_script.min.js";
  //   extra_tags.setAttribute("type", "module");
  //   extra_tags.async = !0;
  //   bodu.appendChild(extra_tags);
  // }
};
