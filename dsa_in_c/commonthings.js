import { add_body } from "/js/src/utilities.min.js";

let int_links = document.createElement("div");
int_links.style.border = "1px solid red";
// int_links.style.padding = "0px 12px";

int_links.innerHTML = `
   <div class="card" style="width: 18rem">
        <div class="card-header">Also try these question</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a href="infixtoprefix.html">practice prefix to infix</a>
          </li>
          <li class="list-group-item">
            <a href="infixtoprefix.html">practice infix to prefix</a>
          </li>
          <li class="list-group-item">
            <a href="prefixtopostfix.html">practice prefix to postfix</a>
          </li>
          <li class="list-group-item">
            <a href="Arrays.html">array questions</a>
          </li>
          <li class="list-group-item">
            <a href="../os/os_topic.html">operating system questions</a>
          </li>
        </ul>
      </div>
`;
let questions = document.getElementsByClassName("question");
for (let index = 0; index <= questions.length; index++) {
  if (index == 0) {
    questions[index].insertBefore(int_links, questions[index].firstChild);
  }
  if (index % 2 == 0) {
    // console.log(index);
    questions[index].insertBefore(int_links, questions[index].firstChild);
  }
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
            <a href="linkedlist1.html">practice linkedlist question</a>
          </li>
          <li class="list-group-item">
            <a href="infixtoprefix.html">practice prefix to infix</a>
          </li>
          <li class="list-group-item">
            <a href="infixtoprefix.html">practice infix to prefix</a>
          </li>
          <li class="list-group-item">
            <a href="prefixtopostfix.html">practice prefix to postfix</a>
          </li>
          <li class="list-group-item">
            <a href="Arrays.html">array questions</a>
          </li>
          <li class="list-group-item">
            <a href="stack1.html">practice stack question</a>
          </li>
          <li class="list-group-item">
            <a href="../os/os_topic.html">operating system questions</a>
          </li>
        </ul>
                </div>
            </div>
        </div>
    </div>
    

`;

// let bd = document.querySelector("body");
// bd.appendChild(modal);
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

// bd.appendChild(scriptss);
add_body(scriptss);
