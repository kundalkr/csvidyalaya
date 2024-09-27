const head = document.querySelector("head");

const bootstrapcss = document.createElement("link");
bootstrapcss.setAttribute(
  "href",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
);
// bootstrapcss.href =
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
bootstrapcss.setAttribute("rel", "stylesheet");
// bootstrapcss.rel = "stylesheet";
// bootstrapcss.integrity =
//   "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH";
bootstrapcss.setAttribute(
  "integrity",
  "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
);

bootstrapcss.setAttribute("crossorigin", "anonymous");
bootstrapcss.crossorigin = "anonymous";
head.appendChild(bootstrapcss);

// favicon start
const apple_fav1 = document.createElement("link");
apple_fav1.rel = "apple-touch-icon";
apple_fav1.setAttribute("sizes", "180x180");
apple_fav1.href = "/assets/favicon_io/apple-touch-icon.png";
head.appendChild(apple_fav1);

const android_chrome_fav1 = document.createElement("link");
android_chrome_fav1.rel = "icon";
android_chrome_fav1.setAttribute("type", "image/png");
android_chrome_fav1.setAttribute("sizes", "192x192");
android_chrome_fav1.href = "/assets/favicon_io/android-chrome-192x192.png";
head.appendChild(android_chrome_fav1);

const fav32 = document.createElement("link");
fav32.rel = "icon";
fav32.setAttribute("type", "image/png");
fav32.setAttribute("sizes", "32x32");
fav32.href = "/assets/favicon_io/favicon-32x32.png";
head.appendChild(fav32);

const fav16 = document.createElement("link");
fav16.rel = "icon";
fav16.setAttribute("type", "image/png");
fav16.setAttribute("sizes", "16x16");
fav16.href = "/assets/favicon_io/favicon-16x16.png";
head.appendChild(fav16);

const fav512 = document.createElement("link");
fav512.rel = "icon";
fav512.setAttribute("type", "image/png");
fav512.setAttribute("sizes", "512x512");
fav512.href = "/assets/favicon_io/android-chrome-512x512.png";
head.appendChild(fav512);

// favicon end

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
