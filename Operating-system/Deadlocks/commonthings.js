import { add_css, add_body ,sdbar_Links,book_name_recommender} from "/js/src/utilities.min.js";

import {breadcrumb } from "/js/src/for_all_page.min.js";
    import book_sugget from "/Operating-system/scheduling-algorithms/recommended-book.json" with {type : "json"};
      book_name_recommender(book_sugget);


add_css(
  "ul>li>a{color: black;} button#down{ background-color: #00FF40;a{color: black; }}"
);

let modal = document.createElement("div");
modal.innerHTML = `
      <div class="modal fade" id="myModal" tabindex="-1" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Also try scheduling question</h5>
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

const sidebar_links = {
  users: [
    {
      name: "first-come-first-serve questions",
      link: "/Operating-system/scheduling-algorithms/first-come-first-serve.html"
    },
    {
      name: "shortest job first(SJF) question",
      link: "/Operating-system/scheduling-algorithms/shortest-job-first.html"
    },
    {
      name: "Shortest Remaining Time First (SRTF) question",
      link: "/Operating-system/scheduling-algorithms/Shortest-Remaining-Time-First.html"
    },
    {
      name: "Multilevel feedback queue scheduling question",
      link: "/Operating-system/scheduling-algorithms/multilevel-feedback-queue.html"
    },
    {
      name: "Multilevel queue scheduling question",
      link: "/Operating-system/scheduling-algorithms/multilevel-queue-scheduling.html"
    },
    {
      name: "priority scheduling question",
      link: "/Operating-system/scheduling-algorithms/priority-scheduling.html"
    },
    {
      name: "peemptive priority scheduling question",
      link: "/Operating-system/scheduling-algorithms/preemptive-priority-scheduling.html"
    },
    {
      name: "Round Robin scheduling question",
      link: "/Operating-system/scheduling-algorithms/round-robin.html"
    },
    {
      name: "Bankers algorithms question",
      link: "/Operating-system/Deadlocks/Bankers-Algorithms.html"
    },
    {
      name: "Disk scheduling algorithms question",
      link: "/Operating-system/Disk-scheduling/disk-scheduling-algorithms.html"
    },
    {
      name: "Memory management question",
      link: "/Operating-system/memory-management/memory-management-topics.html"
    },
    {
      name: "Buddy System question",
      link: "/Operating-system/memory-management/Buddy-system.html"
    },
    {
      name: "Fit question",
      link: "/Operating-system/memory-management/Fit-algorithms.html"
    },
  ],
};
sdbar_Links(sidebar_links);

const breadcrumb_Links = {
  users: [
    {
    link: "/index.html",name:"CS vidyalaya"
    },
    {
      link: "/Operating-system/operating_System_Topics.html",name:"OS"
    },
    {
      link: "/Operating-system/Deadlocks/deadlock-topics.html",name:"Deadlocks"
    }
  ]
}
breadcrumb(breadcrumb_Links);