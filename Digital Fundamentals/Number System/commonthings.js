import { add_body } from "/js/src/utilities.min.js";

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
