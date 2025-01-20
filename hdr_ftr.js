const header=document.createElement("div");header.innerHTML=`
    <nav class="navbar navbar-expand-lg navbar-light"style="background-color: #FFD1DC;">
      <div class="container-fluid">
        <a
          class="navbar-brand navbar-bran"
          href=" https://csvidyalaya.com/" target="_blank"
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
          <span class="navbar-toggler-icon" onclick="opene()"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="https://kundalkr.github.io/csvidyalaya/" target="_blank"
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
                    href="/os/operating_System_Topics.html"
                    >Operating System</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="/dsa_in_c/dsa_in_c_topic.html"
                    >Dsa</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="/Digital%20Fundamentals/Dgital_funda_topic.html"
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
                href="csvidyalaya.com" target="_blank"
                >About</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/sitemap.html" target="_blank"
                ><span class="material-symbols-outlined">
linked_services
</span></a
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
    <div id="sidebar" style="display: none">
      <button onclick="closee()" style="float: right; padding-right: 22px;">
        <span class="material-symbols-outlined"> close </span>
      </button>
      <ul>
        <li><a href="/index.html">Home</a></li>
        <li>
          <a href="/os/operating_System_Topics.html"
            >operating System Topics</a
          >
        </li>
        <li>
          <a
            href="/os/scheduling_algorithms/Scheduling_Alorithms_topic.html"
            >Scheduling Algorithms Question</a
          >
        </li>
        <li>
          <a href="/dsa_in_c/dsa_in_c_topic.html">Dsa In C</a>
        </li>
        <li>
          <a href="/dsa_in_c/infixtopostfix.html"
            >Infix And Postfix question</a
          >
        </li>
            <li>
          <a href="/dsa_in_c/prefixtopostfix.html"
            >Prefix And Postfix question</a
          >
        </li>
        <li>
          <a href="/dsa_in_c/stack2.html"
            >Infix And Prefix question</a
          >
        </li>
        <li>
          <a href="/dsa_in_c/stack3.html"
            >Prefix And Infix question</a
          >
        </li>
        <li>
          <a href="/dsa_in_c/postfixprefixofinfix.html"
            >Postfix & Prefix To Infix</a
          >
        </li>
         <li>
          <a href="/dsa_in_c/infixtoprefix.html"
            >Infix To Prefix question</a
          >
        </li>
        <li>
          <a href="/dsa_in_c/linkedlist1.html"
            >linkedlist question</a
          >
        </li>
        <li>
          <a href="/Digital Fundamentals/Dgital_funda_topic.html"
            >Dgital fundamental</a
          >
        </li>
      </ul>
    </div>
    <br>
`;document.querySelector("body").prepend(header);const footer=document.createElement("div");footer.style.backgroundColor="#FFD1DC";footer.innerHTML=`
       <div class="container">
      <footer
        class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-top"
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
          <p>
            Here student can practice university core subject question like OS,
            DSA , any programming language
          </p>
        </div>
        <div class="col mb-3" id="foot">
          <ul class="nav flex-column">
            <li class="nav-item mb-2 headi">HOME</li>
            <li class="nav-item mb-2">
              <a
                href="/index.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Home</a
              >
            </li>

            <li class="nav-item mb-2">
              <a
                href="/anotherpage/FAQs.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >FAQs</a
              >
            </li>

            <li class="nav-item mb-2">
              <a
                href="/sitemap.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Sitemap</a
              >
            </li>

            <li class="nav-item mb-2">
              <a
                href="/anotherpage/about.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >About</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/anotherpage/privacy_policy.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Privacy policy</a
              >
            </li>
          </ul>
        </div>
        <div class="col mb-3" id="foot">
          <ul class="nav flex-column">
            <li class="nav-item mb-2 headi">What Is</li>
            <li class="nav-item mb-2">
              <a
                href="/os/what-is/operating-system.html#osystem"
                class="nav-link p-0 text-muted"
                target="_blank"
                title="what is operating system"
                >Operating System</a
              >
            </li>

            <li class="nav-item mb-2">
              <a
                href="/os/what-is/operating-system.html#how_os_work"
                class="nav-link p-0 text-muted"
                target="_blank"
                title="how operating system work"
                >how OS work</a
              >
            </li>

            <li class="nav-item mb-2">
              <a
                href="/os/what-is/operating-system.html#process_management"
                class="nav-link p-0 text-muted"
                target="_blank"
                title="what is process management"
                >Process Management</a
              >
            </li>

            <li class="nav-item mb-2">
              <a
                href="/os/what-is/operating-system.html#future_of_os"
                class="nav-link p-0 text-muted"
                target="_blank"
                title="what are future of operating system ?"
                >Future Of Os</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/anotherpage/privacy_policy.html"
                class="nav-link p-0 text-muted"
                target="_blank"
              ></a>
            </li>
          </ul>
        </div>
        <div class="col mb-3" id="foot">
          <ul class="nav flex-column">
            <li class="nav-item mb-2 headi">Operating System Question</li>
            <li class="nav-item mb-2">
              <a
                href="/os/operating_System_Topics.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Operating System Questions</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/os/scheduling_algorithms/Scheduling_Alorithms_topic.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Cpu Scheduling algorithm questions</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/os/scheduling_algorithms/fcfs.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >First Come First Serve (FCFS) Scheduling</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/os/scheduling_algorithms/sjf1.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Shortest Job First (SJF) Scheduling</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/os/scheduling_algorithms/sjf2.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Shortest Remaining Time First (Preemptive SJF or SRTF)</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/os/scheduling_algorithms/ps1.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Priority Scheduling</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/os/scheduling_algorithms/ps2.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Preemptive Priority Scheduling</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/os/scheduling_algorithms/RR1.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Round Robin Scheduling</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/os/scheduling_algorithms/mlfqs.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Multilevel Feedback Queue Scheduling (MLFQ)</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/os/scheduling_algorithms/MLQS.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Multilevel Queue (MLQ) Scheduling</a
              >
            </li>
          </ul>
        </div>
        <div class="col mb-3" id="foot">
          <ul class="nav flex-column">
            <li class="nav-item mb-2 headi">Deadlock Questions</li>
            <li class="nav-item mb-2">
              <a
                href="/os/Deadlocks/deadlock_topics.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Deadlock Question</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/os/Deadlocks/Bankers_Algorithms.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Banker's Algorithm question</a
              >
            </li>
          </ul>
        </div>

        <div class="col mb-3" id="foot">
          <ul class="nav flex-column">
            <li class="nav-item mb-2 headi">Memory Management Question</li>
            <li class="nav-item mb-2">
              <a
                href="/os/memory_management/Fit_question.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >fit algorithms question</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/os/memory_management/Buddy_system.html "
                class="nav-link p-0 text-muted"
                target="_blank"
                >Buddy System Question</a
              >
            </li>
          </ul>
        </div>

        <div class="col mb-3" id="foot">
          <ul class="nav flex-column">
            <li class="nav-item mb-2 headi">DSA QUESTION</li>
            <li class="nav-item mb-2">
              <a
                href="/dsa_in_c/Arrays.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Arrays</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/dsa_in_c/infixtopostfix.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Infix And Postfix Conversion</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/dsa_in_c/infixtoprefix.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Infix To Prefix Conversion</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/dsa_in_c/stack2.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Infix And Prefix Conversion</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/dsa_in_c/postfixprefixofinfix.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Infix To Postfix and Prefix Conversion</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/dsa_in_c/prefixtopostfix.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Prefix And Postfix Conversion</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/dsa_in_c/linkedlist1.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Linkedlist Question</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/dsa_in_c/queue1.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Queue Question</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/dsa_in_c/stack1.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >stack Question</a
              >
            </li>
          </ul>
        </div>
        <div class="col mb-3" id="foot">
          <ul class="nav flex-column">
            <li class="nav-item mb-2 headi">Digital Fundamentals Questions</li>
            <li class="nav-item mb-2">
              <a
                href="/Digital Fundamentals/Dgital_funda_topic.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Digital Fundamentals Question</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/Digital Fundamentals/Boolean Algebra/booleanalgebra1.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Boolean Algebra Question</a
              >
            </li>
          </ul>
        </div>
        <div class="col mb-3" id="foot">
          <ul class="nav flex-column">
            <li class="nav-item mb-2 headi">Number System Questions</li>
            <li class="nav-item mb-2">
              <a
                href="/Digital Fundamentals/Number System/decimaltobinary.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Decimal And Binary Conversion</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/Digital Fundamentals/Number System/decimaltohexadecimal1.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Decimal And Hexadecimal Conversion</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/Digital Fundamentals/Number System/decimaltoOctal1.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Decimal And Octal Conversion</a
              >
            </li>
            <li class="nav-item mb-2">
              <a
                href="/Digital Fundamentals/Number System/octaltohexadecimal1.html"
                class="nav-link p-0 text-muted"
                target="_blank"
                >Octal And Hexadecimal Conversion</a
              >
            </li>
          </ul>
        </div>
      </footer>
    </div>
`;document.querySelector("body").append(footer);if(window.location.href.indexOf("https://csvidyalaya.com/sub_modules/os/scheduling_algorithms/mlfqs.html")===0){window.location.href="https://csvidyalaya.com/os/scheduling_algorithms/mlfqs.html"}
if(window.location.href.indexOf("https://csvidyalaya.com/sub_modules/os/scheduling_algorithms/mlqs.html")===0){window.location.href="https://csvidyalaya.com/os/scheduling_algorithms/mlqs.html"}
const script=document.createElement("script");script.src="/tags_script.js";script.type="text/javascript";script.async=!0;document.body.appendChild(script);script.onload=()=>{console.log("Script loaded and ready to run!")}