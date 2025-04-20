export function data(ids) {
  fetch("/DBMS/DBMS_question.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (questions) {
      let loader = document.getElementById("loadering");
      loader.style.display = "none";
      let i = 1;
      let j = 1;
      for (let question of questions) {
        let divs = document.createElement("div");
        divs.setAttribute("id", `question${i}`);
        let qusn = document.createElement("div");
        qusn.setAttribute("class", "question");
        let ans = document.createElement("div");
        ans.setAttribute("class", "solution");
        document.querySelector("#req_data").appendChild(divs);
        divs.appendChild(qusn);
        divs.appendChild(ans);
  
        if (question.Tags.includes(`${ids}`)) {
          qusn.innerHTML = `<h2>${j}) ${question.Question}</h2>`;
          if (i != 0) {
            ans.innerHTML = `  
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample${i}" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">click here for answer</a>
                <div class="row">
              <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample${i}">
                  <div class="card card-body bg-danger-subtle">
                   <p style="font-size: x-large;">${question.Solution}</p>
                  </div>
                </div>
              </div>
                </div><br />`;
          }
          j++;
        }

        i++;
      }
    });
}
