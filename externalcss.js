const head = document.querySelector("head");
// meta verification
const metaveri = document.createElement("meta");
metaveri.setAttribute("name", "yandex-verification");
metaveri.setAttribute("content", "6cad077691947e7f");
head.appendChild(metaveri);
// meta verification end
// google icon
const googleicon = document.createElement("link");

googleicon.setAttribute(
  "href",
  "https://fonts.googleapis.com/icon?family=Material+Icons"
);
googleicon.setAttribute("rel", "stylesheet");
head.appendChild(googleicon);

/* <link
href="https://fonts.googleapis.com/icon?family=Material+Icons"
rel="stylesheet"
/> */

const googleapi3 = document.createElement("link");
googleapi3.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap"
);
googleapi3.setAttribute("rel", "stylesheet");
head.appendChild(googleapi3);
/* <link
href="https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap"
rel="stylesheet"
/> */

// google icon end

// bootstrap css
const bootstrapcss = document.createElement("link");
bootstrapcss.setAttribute(
  "href",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
);
bootstrapcss.setAttribute("rel", "stylesheet");

bootstrapcss.setAttribute(
  "integrity",
  "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
);
bootstrapcss.setAttribute("crossorigin", "anonymous");
head.appendChild(bootstrapcss);
// bootstrap css end
// bootstrap icon
const bootstrapicon = document.createElement("link");
bootstrapicon.setAttribute("rel", "stylesheet");
bootstrapicon.setAttribute(
  "href",
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
);
head.appendChild(bootstrapicon);
/*<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
 */
// bootstrap icon end

// bootstrap font
/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */
const gfont1 = document.createElement("link");
gfont1.setAttribute("rel", "preconnect");
gfont1.setAttribute("href", "https://fonts.googleapis.com");
head.appendChild(gfont1);

const gfont2 = document.createElement("link");
gfont2.setAttribute("rel", "preconnect");
gfont2.setAttribute("href", "https://fonts.gstatic.com");
gfont2.setAttribute("crossorigin", "anonymous");
head.appendChild(gfont2);
/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */

const gapi1 = document.createElement("link");
gapi1.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
);
gapi1.setAttribute("rel", "stylesheet");
head.appendChild(gapi1);
/* <link
  href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
  rel="stylesheet"
/> */

const gapi2 = document.createElement("link");
gapi2.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&display=swap"
);
gapi2.setAttribute("rel", "stylesheet");
head.appendChild(gapi2);
/*
<link
  href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&display=swap"
  rel="stylesheet"
/> */

// bootstrap font end

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
const cssstyle = document.createElement("style");
cssstyle.innerHTML = `
@media (width<=700px) {
        div#foot:has(ul) {
          display: flex;
          justify-content: center;
        }

        div#foot > ul li {
          display: flex;
          justify-content: center; /* Center text horizontally within the li */
          align-items: center; /* Center text vertically within the li */
          flex-wrap: wrap; /* Allow text to wrap */
          width: 250px; /* Set a width for the li elements */
          text-align: center; /* Center text alignment */
          margin: 5px 0; /* Optional: add some spacing between items */
        }
      }
            .headi{
        color: rgb(11, 24, 207);
        font-weight: bold;
      }
 .py-5 {
    padding-top: 0px ;
}
.navbar-bran {
        font-family: "Pacifico", cursive;
        font-weight: 400;
        font-style: normal;
      }
      @media (width>= 500px) {
        .navbar-bran {
          font-family: "Pacifico", cursive;
          font-weight: 400;
          font-style: normal;
        }
      } 
      li > a {
        font-family: "Playpen Sans", cursive;
        font-optical-sizing: auto;
        font-weight: 450;
        font-style: normal;
        a,
        a:hover,
        a:focus,
        a:active {
          text-decoration: none;
          color: inherit;
          color: black;
        }
      }`;
head.appendChild(cssstyle);

const nav = document.querySelectorAll("body > div:nth-child(1) > nav");
nav[0].style.backgroundColor = "#2db88f";
