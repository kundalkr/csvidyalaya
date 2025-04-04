import { add_css, add_body } from "/js/src/utilities.min.js";
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
