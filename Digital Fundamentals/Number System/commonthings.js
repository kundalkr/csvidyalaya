import { add_body, add_head } from "/js/src/utilities.min.js";
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
           <a href="/Digital Fundamentals/Number System/decimaltobinary.html"
        >Decimal & Binary</a
      >
      <a href="/Digital Fundamentals/Number System/decimaltohexadecimal1.html"
        >Decimal & Hexadecimal</a
      >
      <a href="/Digital Fundamentals/Number System/decimaltoOctal1.html">Decimal & Octal</a>
      <a href="/Digital Fundamentals/Number System/octaltohexadecimal1.html">Octal & Hexadecimal</a>
      <a href="/Digital Fundamentals/Boolean Algebra/booleanalgebra1.html">Boolean algebra question </a>
      <a href="/dsa_in_c/dsa_in_c_topic.html">Dsa question </a>
      <a href="/DBMS/dbms_topic.html">DBMS</a>
      <a href="/os/scheduling_algorithms/Scheduling_Alorithms_topic.html">scheduling algorithms</a>
    </div>     <br>`;

let body = document.querySelector("body");
let h1 = document.querySelector("body>div");
body.insertBefore(bar, h1);

let modal = document.createElement("div");
modal.innerHTML = `
    <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Also try these question</h5>
                    <button type="button" id="btn_closeder" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                       <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a target="_blank" href="decimaltobinary.html">practice decimal & Binary conversion question</a>
          </li>
          <li class="list-group-item">
            <a target="_blank" href="decimaltohexadecimal1.html">practice decimal & hexadecimal conversion question</a>
          </li>
          <li class="list-group-item">
            <a target="_blank" href="decimaltoOctal1.html">practice decimal & octal conversion</a>
          </li>
          <li class="list-group-item">
            <a target="_blank" href="octaltohexadecimal1.html">practice octal & hexadecimal conversion</a>
          </li>
        </ul>
                </div>
            </div>
        </div>
    </div>
`;

add_body(modal);

let scriptss = document.createElement("script");
scriptss.innerHTML = ` 
 function openModal() {
            var myModal = new bootstrap.Modal(document.getElementById('myModal'));
            myModal.show();
        }
            setTimeout(openModal, 10000);
            document.getElementById('btn_closeder').addEventListener('click',() => setTimeout(openModal, 12 * 60 * 1000));
    `;
add_body(scriptss);
