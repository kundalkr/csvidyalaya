import {add_head} from "/js/src/utilities.min.js";
// let headr = document.querySelector("head");
const scriptrs = document.createElement("script");
scriptrs.async = !0;
scriptrs.src = "https://www.googletagmanager.com/gtag/js?id=G-C4M8ZRW6HS";
add_head(scriptrs);
const jsscript = document.createElement("script");
jsscript.type = "text/javascript";
jsscript.text = `
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-C4M8ZRW6HS');
`;
add_head(jsscript);

const metaveri = document.createElement("meta");
metaveri.setAttribute("name", "yandex-verification");
metaveri.setAttribute("content", "6cad077691947e7f");
add_head(metaveri);

const bootstrapicon = document.createElement("link");
bootstrapicon.setAttribute("rel", "stylesheet");
bootstrapicon.setAttribute(
  "href",
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
);
add_head(bootstrapicon);
const bootstrapScript = document.createElement("script");
bootstrapScript.src =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
bootstrapScript.setAttribute(
  "integrity",
  "sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
);
bootstrapScript.setAttribute("crossorigin", "anonymous");
add_head(bootstrapScript);
