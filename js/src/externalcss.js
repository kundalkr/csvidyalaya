import {add_head} from "/js/src/utilities.min.js";

const head = document.querySelector("head");

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
const gfont1 = document.createElement("link");
gfont1.setAttribute("rel", "preconnect");
gfont1.setAttribute("href", "https://fonts.googleapis.com");
head.appendChild(gfont1);
const gfont2 = document.createElement("link");
gfont2.setAttribute("rel", "preconnect");
gfont2.setAttribute("href", "https://fonts.gstatic.com");
gfont2.setAttribute("crossorigin", "anonymous");
head.appendChild(gfont2);
const gapi1 = document.createElement("link");
gapi1.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
);
gapi1.setAttribute("rel", "stylesheet");
head.appendChild(gapi1);
const gapi2 = document.createElement("link");
gapi2.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&display=swap"
);
gapi2.setAttribute("rel", "stylesheet");
head.appendChild(gapi2);
const googleicon = document.createElement("link");
googleicon.setAttribute(
  "href",
  "https://fonts.googleapis.com/icon?family=Material+Icons"
);
googleicon.setAttribute("rel", "stylesheet");
head.appendChild(googleicon);
const googl = document.createElement("link");
googl.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=close"
);
googl.setAttribute("rel", "stylesheet");
head.appendChild(googl);
const googleapi3 = document.createElement("link");
googleapi3.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap"
);
googleapi3.setAttribute("rel", "stylesheet");
head.appendChild(googleapi3);

// linked_services icon
const googleicon4 = document.createElement("link");
googleicon4.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=linked_services"
);
googleicon4.setAttribute("rel", "stylesheet");
head.appendChild(googleicon4);

// linked_services icon



const cssstyle = document.createElement("style");
cssstyle.innerHTML = `
@media(width<=700px){div#foot:has(ul){display:flex;justify-content:center}
div#foot>ul li{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;width:250px;text-align:center;margin:5px 0}}.headi{color:rgb(11,24,207);font-weight:bold}.py-5{padding-top:0px}
@media(width<=800px){#navbarSupportedContent{display:none}
#sdbrs_open_button{display:block}
#sidebar{padding-top:15px;position:fixed;top:0px;background-color:#ffd1dc;z-index:111111111;border:1px solid red;width:100vw;height:90vh;li{list-style-type:none;margin-bottom:10px;a{text-decoration:none;color:black}}
button{border:none;background-color:#ffd1dc}}}.navbar-bran{font-family:"Pacifico",cursive;font-weight:400;font-style:normal}
@media(width>=500px){.navbar-bran{font-family:"Pacifico",cursive;font-weight:400;font-style:normal}}
li>a{font-family:"Playpen Sans",cursive;font-optical-sizing:auto;font-weight:450;font-style:normal;a,a:hover,a:focus,a:active{text-decoration:none;color:inherit;color:black}}
a{text-decoration-color:blueviolet;text-decoration-thickness:.3ex;text-underline-offset:.3ex}`;
head.appendChild(cssstyle);
