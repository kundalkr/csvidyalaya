const int_links = document.createElement("div");
int_links.style.border = "1px solid red";
int_links.style.padding = "0px 12px";

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
var questions = document.getElementsByClassName("question");
for (let index = 0; index <= questions.length; index++) {

//   const divs = document.createElement("div");
  if (index == 0) {
    questions[index].insertBefore(int_links,questions[index].firstChild);
  } if (index % 2 == 0) {
    console.log(index);
    questions[index].insertBefore(int_links,questions[index].firstChild);

  }
}
