import { add_head} from "/js/src/utilities.min.js";

function loadScript(src, callback) {
  const script = document.createElement('script');
  script.src = src;
  script.type = "module";
  script.onload = callback;
  document.head.appendChild(script);
}
function adsense_code() {
  let ads_script = document.createElement("script");
  ads_script.async = !0;
  ads_script.setAttribute("crossorigin", "anonymous");
  ads_script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3328405028227056";
  add_head(ads_script);
}
adsense_code();
function last_modified() {
  const lastModified = new Date(document.lastModified);
  let lastup = lastModified.toDateString().split(" ");

  let hh1 = document.querySelector("#main_content > main > div#title_date > h1");
  let lastupdate = document.createElement("div");
  lastupdate.setAttribute("id", "last_updated_parent");
  lastupdate.innerHTML = ` 
          <div>
            <span>Last updated : </span><span>${lastup[1] + " " + lastup[2] + ", " + lastup[3]
    }</span>
          </div>
          <hr>
          <div class="d-flex justify-content-between align-items-center border border-2">
            <div>
            <p style="margin:0;" class="m-0 fw-bold"> Like & Follow </p> </div>

         <div>
       <a style="font-size: xx-large;"href="https://www.facebook.com/csvidyalaya1/"><i class="bi bi-facebook"></i></a> &nbsp;<a style="font-size: xx-large;color: brown;" href="https://www.instagram.com/csvidyalaya/"><i class="bi bi-instagram"></i></a>
          </div>  
          
          
          </div>`;
  hh1.insertAdjacentElement("afterend", lastupdate);
}

function css_files() {
  const cssFiles = [
    "/css/headings-footer.min.css",
    "/css/main_content.min.css",
    "/css/universal-css.min.css",
  ];
  let heads = document.querySelector("head");
  cssFiles.forEach((file) => {
    let cssf = document.createElement("link");
    cssf.setAttribute("rel", "stylesheet");
    cssf.setAttribute("href", `${file}`);
    heads.appendChild(cssf);
  });
}


//  all css adding end
function founder_schemas() {
  // founder json ld
  const founder_schema = document.createElement("script");
  founder_schema.type = "application/ld+json";
  founder_schema.innerHTML = `{
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
              ],
  "sameAs": [
    "https://www.facebook.com/csvidyalaya1/",
    "https://www.instagram.com/csvidyalaya/"
  ]
            }`;
  document.head.appendChild(founder_schema);
  // founder json ld
}


loadScript('/js/src/for_all_page.min.js', () => {
  loadScript('/js/src/hdr_ftr.min.js', () => { founder_schemas(); css_files(); last_modified(); });
});
function published_data() {
  const lastModified = new Date(document.lastModified).toISOString().split('T')[0];
  const scriptTag = document.getElementById("structured-data");
  const json = JSON.parse(scriptTag.textContent);
  json.dateModified = lastModified;
  scriptTag.textContent = JSON.stringify(json);
}
published_data();
function bar(link_arr) {
  let bar = document.createElement("div");
  let irhtml = `<div
        id="bar1"
        class="p-2 d-none d-lg-flex flex-row justify-content-between"
        style="
          background-color:rgb(248, 21, 21);
        "
      >`;
  let loopt = "";
  for (const users of link_arr.users) {
    // console.log(users.link + "" + users.name);
    loopt += `<a class="text-black text-decoration-underline" style="text-decoration-color: rgb(255, 255, 255);text-decoration-thickness: 0.3ex;text-underline-offset: 0.3ex;"   href="${users.link}">${users.name}</a>`;
  }
  bar.innerHTML = irhtml + loopt + ` </div>`;

  let h12 = document.querySelector("#fheader");
  h12.insertAdjacentElement("afterend", bar);
}

