fetch(
  "https://script.google.com/macros/s/AKfycbwQ5XGf8-vSQa4dwio4lDatODcjPqGQNsUYY04QSW4O5pMpGEwsOs1-sWDu3J7eY7Fzew/exec"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (questions) {
    let i = 1;
    for (let question of questions.questions) {
<<<<<<< HEAD
      console.log(question.question);
      let i = 1;
=======
>>>>>>> cbaae5c01126baa4b81a8bf7a45dcaab05e596bd
      let divs = document.createElement("div");
      divs.setAttribute("id", `question${i}`);
      let qusn = document.createElement("div");
      qusn.setAttribute("class", "question");
      let ans = document.createElement("div");
      ans.setAttribute("class", "solution");
<<<<<<< HEAD
      document.querySelector("body").appendChild(divs);
      divs.appendChild(qusn);
      divs.appendChild(ans);
      qusn.innerHTML = `${question.question}`;
=======
      document.querySelector("#req_data").appendChild(divs);
      divs.appendChild(qusn);
      divs.appendChild(ans);
      qusn.innerHTML = `<h2>${i}) ${question.question}</h2>`;
      if (i!=1) {
        ans.innerHTML = `  
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample${i}" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">click here for answer</a>
        <div class="row">
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample${i}">
          <div class="card card-body bg-danger-subtle">
           <p style="font-size: x-large;">${question.answer}</p>
          </div>
        </div>
      </div>
        </div><br />`;
      }
>>>>>>> cbaae5c01126baa4b81a8bf7a45dcaab05e596bd
      i++;
    }
  });
