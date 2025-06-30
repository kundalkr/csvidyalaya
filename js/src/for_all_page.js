import { add_head, google_font } from "/js/src/utilities.min.js";

(function () {
  const favi_size = {
    users: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        link: "/assets/favicon_io/apple-touch-icon.png",
      },
      {
        rel: "icon",
        sizes: "192x192",
        link: "/assets/favicon_io/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        sizes: "32x32",
        link: "/assets/favicon_io/favicon-32x32.png",
      },
      {
        rel: "icon",
        sizes: "16x16",
        link: "/assets/favicon_io/favicon-16x16.png",
      },
      {
        rel: "icon",
        sizes: "512x512",
        link: "/assets/favicon_io/android-chrome-512x512.png",
      },
    ],
  };
  let hd = document.querySelector("head");
  for (const user of favi_size.users) {
    let favicon = document.createElement("link");
    favicon.setAttribute("type", "image/png");
    favicon.setAttribute("rel", `${user.rel}`);
    favicon.setAttribute("sizes", `${user.sizes}`);
    favicon.setAttribute("href", `${user.link}`);
    hd.appendChild(favicon);
  }

})();
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
const gfont = {
  users: [
    {
      about: "",
      link: "https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap",
    },
    {
      link: "https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&display=swap"
    },
    {
      link: "https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
    },
    {
      link: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&icon_names=arrow_downward,arrow_upward,close,hub&display=block",
    },
    {
      link: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
    }
  ],
};
google_font(gfont);
if (
  window.location.hostname !== "localhost" &&
  window.location.hostname !== "127.0.0.1"
) {
  let headu = document.querySelector("head");
  let script1 = document.createElement("script");
  script1.async = !0;
  script1.src = "https://www.googletagmanager.com/gtag/js?id=G-C4M8ZRW6HS";
  headu.appendChild(script1);

  let script2 = document.createElement("script");

  script2.innerHTML = `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', 'G-C4M8ZRW6HS');`;
  headu.appendChild(script2);
}
// function adsense_code() {
//   let ads_script = document.createElement("script");
//   ads_script.async = !0;
//   ads_script.setAttribute("crossorigin", "anonymous");
//   ads_script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3328405028227056";
//   add_head(ads_script);
// }

// adsense_code();

export function breadcrumb(data) {
  let brdcrmb = document.querySelector("#main_content > main > nav#breadcrumbs > ol.breadcrumb");
  let active_link = Object.entries(data.users).length;
  let i = 1;
 let list;
  for (let name_link of data.users) {
    
    if (i == active_link) {
       list = document.createElement("li");
      list.classList.add("breadcrumb-item", "p-1", "active");
      list.innerHTML += `<a href="" class="bg-body-secondary rounded-2 p-1  text-decoration-none ">${name_link.name}</a>`;
      brdcrmb.appendChild(list);
    } else {
       list = document.createElement("li");
      list.classList.add("breadcrumb-item", "p-1");
      list.innerHTML = `<a  href="${name_link.link}" class="p-1 .text-black">${name_link.name}</a>`;
      brdcrmb.appendChild(list);
    }
    i++;
  }
}

export function breadcrumb_space() {
   let fd_image = document.querySelector("#main_content > main > div.featured-image");
   let fd_image_parent = document.querySelector("#main_content > main > div.featured-image").parentNode;
   let nav = document.createElement("nav");
   nav.setAttribute("id" , "breadcrumbs");
   nav.setAttribute("style","--bs-breadcrumb-divider: '>';");
   nav.innerHTML = ` <ol class="breadcrumb mt-2">
          </ol>`;
     fd_image_parent.insertBefore(nav,fd_image);
}

