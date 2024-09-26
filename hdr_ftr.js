const header = document.createElement("div");
header.innerHTML = `
      <head>
   
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
    />

    <link
      href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&display=swap"
      rel="stylesheet"
    />
    <style>
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
      /* .navbar .navbar-expand-lg .navbar-light {
        color: black;
      } */

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
      }
    </style>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a
          class="navbar-brand navbar-bran"
          href="https://kundalkr.github.io/csvidyalaya/"
          >CSvidyalaya.com</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="https://kundalkr.github.io/csvidyalaya/"
                >Home</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Subjects
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a
                    class="dropdown-item"
                    href="https://kundalkr.github.io/csvidyalaya/sub_modules/os/os_topic.html"
                    >Operating System</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="https://kundalkr.github.io/csvidyalaya/sub_modules/dsa_in_c/dsa_in_c_topic.html"
                    >Dsa</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="https://kundalkr.github.io/csvidyalaya/sub_modules/Digital%20Fundamentals/Dgital_funda_topic.html"
                    >Digital Fundamentals</a
                  >
                </li>
                <!-- <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li> -->
              </ul>
            </li>
            <!-- <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
              >
            </li> -->
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="https://kundalkr.github.io/csvidyalaya/"
                >About</a
              >
            </li>
          </ul>
          <!-- <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> -->
        </div>
      </div>
    </nav>
<br><br>
`;
document.querySelector("body").prepend(header);

const footer = document.createElement("div");
footer.innerHTML = `
    <div class="container">
      <footer
        class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top"
      >
        <div class="col mb-3">
          <a
            href="/"
            class="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <svg class="bi me-2" width="40" height="32">
              <use xlink:href="#bootstrap"></use>
            </svg>
          </a>
          <p class="text-muted">
            © 2024 <span class="navbar-bran">csvidyalaya.com</span>
          </p>
              <p>Here student can practice university core subject question like OS, DSA , any programming language</p>
        </div>

        <div class="col mb-3"></div>

        <div class="col mb-3">
          <h5>HOME</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Home</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">ALL COURSES</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">FAQs</a>
            </li>

  <li class="nav-item mb-2">
              <a href="../../sitemap.html" class="nav-link p-0 text-muted">Sitemap</a>
            </li>

            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">About</a>
            </li>
          </ul>
        </div>
        <div class="col mb-3">
          <h5>All Question</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Stack </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Array</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">FCFS scheduling</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">SJF scheduling</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted"
                >PRIORITY Scheduling</a
              >
            </li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5>Subtopic Question</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">infix to prefix</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">infix to postfix</a>
            </li>
            <!-- <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li> -->
          </ul>
        </div>
      </footer>
    </div>

`;
document.querySelector("body").append(footer);

const head = document.querySelector("head");

const bootstrapcss = document.createElement("link");
bootstrapcss.href =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css";
bootstrapcss.rel = "stylesheet";
bootstrapcss.integrity =
  "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65";
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
