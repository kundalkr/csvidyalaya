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

// last modified
function last_modified() {
  const lastModified = new Date(document.lastModified);
  let lastup = lastModified.toDateString().split(" ");

  let hh1 = document.getElementsByTagName("h1")[0];
  let lastupdate = document.createElement("div");
  lastupdate.setAttribute("id", "last_updated_parent");
  lastupdate.innerHTML = ` 
          <div>
            <span>Last updated : </span><span>${
              lastup[1] + " " + lastup[2] + ", " + lastup[3]
            }</span>
          </div>
          <hr>
        `;
  hh1.insertAdjacentElement("afterend", lastupdate);
}

// last modified
const scriptTag = document.createElement("script");
scriptTag.type = "application/ld+json";
scriptTag.innerHTML = `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CSvidyalaya",
              "url": "https://www.csvidyalaya.com/",
              "logo": "https://www.csvidyalaya.com/assets/logo/main_Logo.jpg",
              "description": "Your Ultimate Learning Hub: Master CS Fundamentals with Ease - Welcome to your one-stop educational platform designed to empower learners at every level. Our website offers a rich collection of resources focused on Data Structures and Algorithms (DSA), CPU and Disk Scheduling Algorithms, Deadlock Concepts, Computer Fundamentals, and Computer Network Questions. Whether you're a student preparing for competitive exams, a beginner strengthening your core computer science concepts, or someone brushing up on technical interviews, our curated content is crafted to simplify learning and support your success.",
              "founder": [
                {
                  "@type": "Person",
                  "name": "Kundal Kumar",
                  "url": "www.linkedin.com/in/kundal-kumar"
                }
              ]
            }`;
document.head.appendChild(scriptTag);

let headu = document.querySelector("head");
if (
  window.location.hostname !== "localhost" &&
  window.location.hostname !== "127.0.0.1"
) {
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

function external_css() {
  let external_css = document.createElement("script");
  external_css.src = "/js/src/externalcss.min.js";
  external_css.setAttribute("type", "module");
  headu.appendChild(external_css);
}
function hdr_ftr() {
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
execution(external_css, hdr_ftr);

window.onload = function () {
  let bodu = document.querySelector("body");
  let commonforall = document.createElement("script");
  commonforall.src = "/js/src/commonforall.min.js";
  commonforall.setAttribute("type", "module");
  commonforall.async = !0;
  bodu.appendChild(commonforall);
  last_modified();
};
  