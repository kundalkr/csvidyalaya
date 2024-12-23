const int_links = document.createElement("div");
int_links.style.padding = "0px 12px";
int_links.innerHTML = `

<br>
   <div class="card" style="width: 18rem">
        <div class="card-header" id="this">Also Try These Question</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a href="fcfs.html">practice first come first serve questions</a>
          </li>
          <li class="list-group-item">
            <a href="sjf1.html">practice shortest job first(SJF) question</a>
          </li>
           <li class="list-group-item">
            <a href="sjf2.html">practice Shortest Remaining Time First (SRTF) question</a>
          </li>
          <li class="list-group-item">
            <a href="mlfqs.html">practice Multilevel feedback queue scheduling question</a>
          </li>
          <li class="list-group-item">
            <a href="MLQS.html">practice Multilevel queue scheduling question</a>
          </li>
          <li class="list-group-item">
            <a href="ps1.html">practice priority scheduling question</a>
          </li>
          <li class="list-group-item">
            <a href="ps2.html">practice peemptive priority scheduling question</a>
          </li>
              <li class="list-group-item">
            <a href="RR1.html">practice Round Robin scheduling question</a>
          </li>
        </ul>
      </div>
      <br>
`;

var questions = document.getElementsByClassName("question");
questions[0].append(int_links);

let erty = document.querySelector("div#this.card-header");
erty.style.color = "red";
erty.style.fontWeight = "bold";
