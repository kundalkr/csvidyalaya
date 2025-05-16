import { add_head, google_font } from "/js/src/utilities.min.js";

let head = document.querySelector("head");

let bootstrapcss = document.createElement("link");
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
add_head(bootstrapcss);
let apple_fav1 = document.createElement("link");
apple_fav1.rel = "apple-touch-icon";
apple_fav1.setAttribute("sizes", "180x180");
apple_fav1.href = "/assets/favicon_io/apple-touch-icon.png";
add_head(apple_fav1);
let android_chrome_fav1 = document.createElement("link");
android_chrome_fav1.rel = "icon";
android_chrome_fav1.setAttribute("type", "image/png");
android_chrome_fav1.setAttribute("sizes", "192x192");
android_chrome_fav1.href = "/assets/favicon_io/android-chrome-192x192.png";
add_head(android_chrome_fav1);
let fav32 = document.createElement("link");
fav32.rel = "icon";
fav32.setAttribute("type", "image/png");
fav32.setAttribute("sizes", "32x32");
fav32.href = "/assets/favicon_io/favicon-32x32.png";
add_head(fav32);
let fav16 = document.createElement("link");
fav16.rel = "icon";
fav16.setAttribute("type", "image/png");
fav16.setAttribute("sizes", "16x16");
fav16.href = "/assets/favicon_io/favicon-16x16.png";
add_head(fav16);
let fav512 = document.createElement("link");
fav512.rel = "icon";
fav512.setAttribute("type", "image/png");
fav512.setAttribute("sizes", "512x512");
fav512.href = "/assets/favicon_io/android-chrome-512x512.png";
add_head(fav512);

let cssstyle = document.createElement("style");
cssstyle.innerHTML = `
@media(width<=700px){div#foot:has(ul){display:flex;justify-content:center}
div#foot>ul li{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;width:250px;text-align:center;margin:5px 0}}.headi{color:rgb(11,24,207);font-weight:bold}.py-5{padding-top:0px}
@media(width<=800px){#navbarSupportedContent{display:none}
#sdbrs_open_button{display:block}
#sidebar{padding-top:15px;position:fixed;top:0px;background-color:#ffd1dc;z-index:111111111;border:1px solid red;width:100vw;height:99vh;overflow: scroll;li{list-style-type:none;margin-bottom:10px;a{text-decoration:none;color:black}}
button{border:none;background-color:#ffd1dc}}}.navbar-bran{font-family:"Pacifico",cursive;font-weight:400;font-style:normal}
@media(width>=500px){.navbar-bran{font-family:"Pacifico",cursive;font-weight:400;font-style:normal}}
li>a{font-family:"Playpen Sans",cursive;font-optical-sizing:auto;font-weight:450;font-style:normal;a,a:hover,a:focus,a:active{text-decoration:none;color:inherit;color:black}}
a{text-decoration-color:blueviolet;text-decoration-thickness:.3ex;text-underline-offset:.3ex}.container .card:hover{animation:myAnim 0s ease 0s 1 normal forwards;transform-origin:center}@keyframes myAnim{0%{transform:rotate(0deg)}100%{transform:rotate(10deg)}}
`;
add_head(cssstyle);

const gfont = {
  users: [
    {
      about: "",
      link: "https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap",
    },
    {
      link: "https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&display=swap",
    },
    {
      link: "https://fonts.googleapis.com/css2?family=Pacifico&display=swap",
    },
    {
      link:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&icon_names=arrow_downward,arrow_upward,close,hub&display=block"
    }

  ],
};

google_font(gfont);
