const header = document.createElement("div");

header.innerHTML = `
              <html>
    <head>
      <!-- always remove this -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

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
            font-size: x-large;
          }
        }

        .navbar .navbar-expand-lg .navbar-light {
          color: black;
        }

        .nav.nav-pills > li {
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
          .dropdown-menu.dropdown-menu-dark {
            li {
              a,
              a:hover,
              a:focus,
              a:active {
                text-decoration: none;
                color: inherit;
                color: white;
              }
            }
          }
        }

        @media (width<= 500px) {
          .nav.nav-pills > li {
            font-family: "Playpen Sans", cursive;
            font-optical-sizing: auto;
            font-weight: 300;
            font-style: normal;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <header
          class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
        >
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <!-- <svg class="bi me-2" width="40" height="32">
              <use xlink:href="#bootstrap"></use>
            </svg> -->
            <span class="fs-4 navbar-bran">CSvidyalaya.com</span>
          </a>

          <ul class="nav nav-pills">
            <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
            <li class="nav-item dropdown">
              <button
                class="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Subjects
              </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <!-- dropdown-menu-dark -->
                <li>
                  <a class="dropdown-item" href="/sub_modules/os/os_topic.html"
                    >Operating System</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="/sub_modules/dsa_in_c/dsa_in_c_topic.html"
                    >Dsa</a
                  >
                </li>
                <!-- <li><a class="dropdown-item" href="#">Something else here</a></li> -->
              </ul>
            </li>

            <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
            <li class="nav-item"><a href="#" class="nav-link">About</a></li>
          </ul>
        </header>
      </div>

      <!-- bootstrap js link -->
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"
      ></script>
      <!-- bootstrap js link end -->
    </body>
  </html>

`;
document.querySelector("body").prepend(header);

const footer = document.createElement("div");
footer.innerHTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    /> -->
  </head>
  <body>
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
  </body>
</html>`;
document.querySelector("body").append(footer);
