import { add_css, add_body, bar } from "/js/src/utilities.min.js";

const data = {
  users: [
    {
      name: "scheduling algorithms",
      link: "/os/scheduling_algorithms/Scheduling_Alorithms_topic.html",
    },
    {
      name: "Dsa",
      link: "/dsa_in_c/dsa_in_c_topic.html",
    },
    {
      name: "DBMS",
      link: "/DBMS/dbms_topic.html",
    },
    {
      name: "Boolean algebra",
      link: "/Digital_Fundamentals/Boolean_Algebra/booleanalgebra1.html",
    },
    {
      name: "relational algebra",
      link: "/DBMS/DBMS_topics/relational_algebra_relational_calculus.html",
    },
    {
      name: "Stack",
      link: "/dsa_in_c/stack1.html",
    },
    {
      name: "Digital Fundamentals",
      link: "/Digital_Fundamentals/Dgital_funda_topic.html",
    },
    {
      name: "Buddy system",
      link: "https://csvidyalaya.com/os/memory_management/Buddy_system.html",
    },
  ],
};
bar(data);

add_css(
  "ul>li>a{color: black;} button#down{ background-color: #00FF40;a{color: black; }}"
);
let int_links = document.createElement("div");
int_links.style.padding = "0px 12px";
int_links.innerHTML = `
<br>
   <div class="card" style="width: 18rem">
        <div class="card-header" id="this">Also Try These Question</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a target="_blank" href="fcfs.html">practice first come first serve questions</a>
          </li>
          <li class="list-group-item">
            <a target="_blank" href="sjf1.html">practice shortest job first(SJF) question</a>
          </li>
           <li class="list-group-item">
            <a target="_blank" href="sjf2.html">practice Shortest Remaining Time First (SRTF) question</a>
          </li>
          <li class="list-group-item">
            <a target="_blank" href="mlfqs.html">practice Multilevel feedback queue scheduling question</a>
          </li>
          <li class="list-group-item">
            <a target="_blank" href="MLQS.html">practice Multilevel queue scheduling question</a>
          </li>
          <li class="list-group-item">
            <a target="_blank" href="ps1.html">practice priority scheduling question</a>
          </li>
          <li class="list-group-item">
            <a target="_blank" href="ps2.html">practice peemptive priority scheduling question</a>
          </li>
              <li class="list-group-item">
            <a target="_blank" href="RR1.html">practice Round Robin scheduling question</a>
          </li>
        </ul>
      </div>
      <br>
`;

let questions = document.getElementById("question1");
questions.appendChild(int_links);

let erty = document.querySelector("div#this.card-header");
erty.style.color = "white";
erty.style.backgroundColor = "#0A0AFF";
erty.style.fontWeight = "bold";

let sche_topics = document.querySelectorAll(
  "#question1 > div:nth-child(3) > div > ul>li"
);
for (let index = 0; index < sche_topics.length; index++) {
  sche_topics[index].style.backgroundColor = "#1AFF53";
}

let modal = document.createElement("div");
modal.innerHTML = `
      <div class="modal fade" id="myModal" tabindex="-1" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Also try these question</h5>
                    <button type="button" id="btn_closeder" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                       <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a target="_blank" href="fcfs.html">practice first come first serve questions</a>
          </li>
          <li class="list-group-item">
            <a target="_blank" href="sjf1.html">practice shortest job first(SJF) question</a>
          </li>
           <li class="list-group-item">
            <a target="_blank" href="sjf2.html">practice Shortest Remaining Time First (SRTF) question</a>
          </li>
          <li class="list-group-item">
            <a target="_blank" href="mlfqs.html">practice Multilevel feedback queue scheduling question</a>
          </li>
          <li class="list-group-item">
            <a target="_blank" href="MLQS.html">practice Multilevel queue scheduling question</a>
          </li>
          <li class="list-group-item">
            <a target="_blank" href="ps1.html">practice priority scheduling question</a>
          </li>
          <li class="list-group-item">
            <a target="_blank" href="ps2.html">practice peemptive priority scheduling question</a>
          </li>
              <li class="list-group-item">
            <a target="_blank" href="RR1.html">practice Round Robin scheduling question</a>
          </li>
        </ul>
                </div>
            </div>
        </div>
    </div>
`;

add_body(modal);

window.onload = function () {
  let modal_script = document.createElement("script");
  modal_script.innerHTML = ` 
          function openModal() {
              var myModal = new bootstrap.Modal(document.getElementById('myModal'));
              myModal.show();
          }
              setTimeout(openModal, 10000);
              document.getElementById('btn_closeder').addEventListener('click',() => setTimeout(openModal, 12 * 60 * 1000));
     `;
  add_body(modal_script);
};
