const head = document.querySelector("head");
// analytics
const scriptrs = document.createElement("script");
scriptrs.async = true;
scriptrs.src = "https://www.googletagmanager.com/gtag/js?id=G-C4M8ZRW6HS";
document.head.appendChild(scriptrs);

const jsscript = document.createElement("script");
jsscript.type = "text/javascript";
jsscript.text = `
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-C4M8ZRW6HS');
`;
document.head.appendChild(jsscript);
// analytics end
// meta verification
const metaveri = document.createElement("meta");
metaveri.setAttribute("name", "yandex-verification");
metaveri.setAttribute("content", "6cad077691947e7f");
head.appendChild(metaveri);
// meta verification end

// bootstrap icon
const bootstrapicon = document.createElement("link");
bootstrapicon.setAttribute("rel", "stylesheet");
bootstrapicon.setAttribute(
  "href",
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
);
head.appendChild(bootstrapicon);
// bootstrap icon end

// bootstrap js script start
const bootstrapScript = document.createElement("script");
bootstrapScript.src =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
bootstrapScript.setAttribute(
  "integrity",
  "sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
);
bootstrapScript.setAttribute("crossorigin", "anonymous");
head.appendChild(bootstrapScript);
// bootstrap js script end
