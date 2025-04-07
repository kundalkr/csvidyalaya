fetch(
  "https://script.google.com/macros/s/AKfycbwQ5XGf8-vSQa4dwio4lDatODcjPqGQNsUYY04QSW4O5pMpGEwsOs1-sWDu3J7eY7Fzew/exec"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (questions) {
    let i = 1;
    for (let question of questions.questions) {
      console.log(question.question);

      let divs = document.createElement("div");
      divs.setAttribute("id", `question${i}`);
      let qusn = document.createElement("div");
      qusn.setAttribute("class", "question");
      let ans = document.createElement("div");
      ans.setAttribute("class", "solution");
      document.querySelector("#req_data").appendChild(divs);
      divs.appendChild(qusn);
      divs.appendChild(ans);
      qusn.innerHTML = ` <h2>${i} ) --> ${question.question} </h2> `;

      ans.innerHTML = `  
         <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Accordion Item #1
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
          <div class="accordion-body  bg-danger-subtle">
            <p style="font-size: x-large;">${question.answer}</p>
          </div>
        </div>
      </div>
    </div>
      
      
      
      
      
      
      
      
      `;

      i++;
    }
  });
