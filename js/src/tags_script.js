import {add_head} from "/js/src/utilities.min.js";
// let headr = document.querySelector("head");
let scriptrs = document.createElement("script");
scriptrs.async = !0;
scriptrs.src = "https://www.googletagmanager.com/gtag/js?id=G-C4M8ZRW6HS";
add_head(scriptrs);
let jsscript = document.createElement("script");
jsscript.type = "text/javascript";
jsscript.text = `
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-C4M8ZRW6HS');
`;
add_head(jsscript);

let metaveri = document.createElement("meta");
metaveri.setAttribute("name", "yandex-verification");
metaveri.setAttribute("content", "6cad077691947e7f");
add_head(metaveri);


