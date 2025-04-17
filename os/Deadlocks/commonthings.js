import { add_css, add_body ,add_head} from "/js/src/utilities.min.js";


let bar_style = document.createElement("style");
bar_style.innerHTML = `   
      #bar1 {
      a {
            color: rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          text-decoration-thickness: 0.3ex;
          text-underline-offset: 0.3ex;
        }
        display: none;
      }
      @media (min-width: 950px) {
        #bar1 {
            display: flex;
        }
      }
 `;
add_head(bar_style);

let bar = document.createElement("div");
bar.innerHTML = `<div
      id="bar1"
      style="
        background-color: rgb(5, 148, 79);
        flex-direction: row;
        justify-content: space-between;
       padding: 10px 10px;color:"black";
      "
    >
    <a href="/os/scheduling_algorithms/Scheduling_Alorithms_topic.html">scheduling algorithms</a>
  <a href="/dsa_in_c/dsa_in_c_topic.html">Dsa</a>
      <a href="/DBMS/dbms_topic.html">DBMS</a>
  <a href="/Digital_Fundamentals/Boolean_Algebra/booleanalgebra1.html">Boolean algebra question</a>
   <a href="/dsa_in_c/dsa_in_c_topic.html">Dsa question </a>
      <a href="/DBMS/DBMS_topics/relational_algebra_relational_calculus.html"
        >relational algebra</a
      > 
    <a href="/dsa_in_c/stack1.html">Stack</a>
         <a href="/Digital_Fundamentals/Dgital_funda_topic.html"
      >Digital Fundamentals</a
    >
   </div>  
  
    <br>`;

let body = document.querySelector("body");
let h1 = document.querySelector("body>div");
body.insertBefore(bar, h1);

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
