const header = document.createElement("div");

header.innerHTML = `
             <head>
             <style>
       <!-- navbar.css --> 

       @import url("https://fonts.googleapis.com/css2?family=Moderustic:wght@300..800&display=swap");

/* // <uniquifier>: Use a unique and descriptive class name */

#cs-logo {
  font-family: "Moderustic", sans-serif;
  font-optical-sizing: auto;
  font-weight: 556;
  font-style: normal;
  color: #ffffff;
}
#vidyalaya-logo {
  font-family: "Moderustic", sans-serif;
  /* font-optical-sizing: auto; */
  font-weight: small;
  font-style: normal;
  color: #ffffff;
}

.navbar.navbar-expand-lg.navbar-light {
  background-color: #c26bcf;
}


@media (500px >= width >= 350px) {
  .navbar.bg-body-tertiary > .container > .navbar-brand > img {
    width: 130px;
    height: 40px;
  }

  .d-flex > .form-control.me-2 {
    width: 90px;
  }

}

@media (350px >= width >= 200px) {
  .navbar.bg-body-tertiary > .container > .navbar-brand > img {
    width: 200px;
    height: 60px;
  }
}
@media (760px >= width >= 500px) {
  .navbar.bg-body-tertiary > .container > .navbar-brand > img {
    width: 270px;
    height: 70px;
  }
  .d-flex > .form-control.me-2 {
    width: 100px;
  }
}
.btn .btn-success {
  .material-icons {
    background-color: red;
  }
}

          <!-- navbar.css end -->
  </style>
  </head>
<nav class="navbar bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <img
            src="https://lh3.googleusercontent.com/d/1HTa-oMNHl_CxC4Vel0u5NFstfYAkud7N"
            alt="Bootstrap"
            width="300"
            height="100"
          />
        </a>

        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><span id="cs-logo">CS</span
          ><span id="vidyalaya-logo">vidyalaya.com</span></a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="../../index.html"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Subjects
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="sub_modules/os/os_topic.html"
                    >Operating System</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="sub_modules/dsa_in_c/dsa_in_c_topic.html"
                    >DSA IN C</a
                  >
                </li>
           
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
document.querySelector("body").prepend(header);

const footer = document.createElement("div");
footer.innerHTML = `   <head>
             <style>
             .footer {
  background-color: #c26bcf;
  padding-top: 15px;
}
.footer {
  .container {
    .row {
      .col-md-3 {
        img {
          width: 200px;
          height: 50px;
        }
      }
    }
  }
}

@media (width>=500) {
  .footer {
    .container {
      .row {
        .col-md-3 {
          img {
            width: 20px;
            height: 50px;
          }
        }
      }
    }
  }
}

             </style></head>
               <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
           
            <a class="navbar-brand" href="#">
              <img
                src="https://lh3.googleusercontent.com/d/1HTa-oMNHl_CxC4Vel0u5NFstfYAkud7N"
                alt="Bootstrap"
              />
            </a>
            <!-- <h2>CSvidyalaya</h2> -->
          </div>
          <div class="col-md-3">
            <h5>About Us</h5>
            <p>
              CSvidyalaya is a learning platform where you can practice all core
              subject of computer science.
            </p>
          </div>
          <div class="col-md-3">
            <h5>Contact Us</h5>
            <ul class="list-unstyled">
              <li>Email: info@example.com</li>
              <li>Phone: +1233567890</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>
          <div class="col-md-3">
            <h5>Follow Us</h5>
            <ul class="list-inline footer-links">
              <li class="list-inline-item">
                <a href="#" style="color: white">
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" style="color: white">
                  <i class="bi bi-twitter-x"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" style="color: white">
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-6">
            <p>&copy; 2024 Your Website. All rights reserved.</p>
          </div>
          <div class="col-md-6 text-end">
            <ul class="list-inline footer-links">
              <li class="list-inline-item">
                <a href="anotherpage/privacy_policy.html" style="color: aliceblue">Privacy Policy</a>
              </li>
              <li class="list-inline-item">
                <a href="#" style="color: aliceblue">Terms of Service</a>
              </li>
              <li class="list-inline-item">
                <a href="#" style="color: aliceblue">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
             
             
             
             `;
document.querySelector("body").append(footer);
