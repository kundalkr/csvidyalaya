fetch(
  "https://script.google.com/macros/s/AKfycbwQ5XGf8-vSQa4dwio4lDatODcjPqGQNsUYY04QSW4O5pMpGEwsOs1-sWDu3J7eY7Fzew/exec"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (questions) {
    let i = 1;
    for (let question of questions.questions) {
        console.log(question.question)
   
      let divs = document.createElement("div");
      divs.setAttribute("id", `question${i}`);
      let qusn = document.createElement("div");
      qusn.setAttribute("class", "question");
      let ans = document.createElement("div");
      ans.setAttribute("class", "solution");
      document.querySelector("#rq_data").appendChild(divs);
      divs.appendChild(qusn);
      divs.appendChild(ans);
      qusn.innerHTML = `${i} ) --> ${question.question}`;
      i++;
    }
  });
