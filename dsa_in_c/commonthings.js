import {bar,popup_links } from "/js/src/utilities.min.js";

const bar_data = {
  users: [
    {
      name: "scheduling algorithms",
      link: "/os/scheduling_algorithms/Scheduling_Alorithms_topic.html",
    },
    {
      name: "Dsa",
      link: "/dsa_in_c/dsa_in_c_topic.html",
    },
    {
      name: "DBMS",
      link: "/DBMS/dbms_topic.html",
    },
    {
      name: "Boolean algebra",
      link: "/Digital_Fundamentals/Boolean_Algebra/booleanalgebra1.html",
    },
    {
      name: "relational algebra",
      link: "/DBMS/DBMS_topics/relational_algebra_relational_calculus.html",
    },
    {
      name: "Stack",
      link: "/dsa_in_c/stack1.html",
    },
    {
      name: "Digital Fundamentals",
      link: "/Digital_Fundamentals/Dgital_funda_topic.html",
    },
    {
      name: "Buddy system",
      link: "https://csvidyalaya.com/os/memory_management/Buddy_system.html",
    },
  ],
};
bar(bar_data);
const popup_link = {
  users: [
    {
      name: "ARRAYS QUESTION",
      link: "https://csvidyalaya.com/dsa_in_c/Arrays.html",
    },
    {
      name: "Stack",
      link: "https://csvidyalaya.com/dsa_in_c/stack1.html",
    },
    {
      name: "infix to prefix",
      link: "https://csvidyalaya.com/dsa_in_c/infixtoprefix.html",
    },
    {
      name: "infix to postfix",
      link: "https://csvidyalaya.com/dsa_in_c/infixtopostfix.html",
    },
    {
      name: "prefix to postfix",
      link: "https://csvidyalaya.com/dsa_in_c/prefixtopostfix.html",
    },
    {
      name: "postfix prefix of infix",
      link: "https://csvidyalaya.com/dsa_in_c/postfixprefixofinfix.html",
    },
    {
      name: "linked list",
      link: "https://csvidyalaya.com/dsa_in_c/linkedlist1.html",
    },
    {
      name: "Queue",
      link: "https://csvidyalaya.com/dsa_in_c/queue2.html",
    },
  ],
};
popup_links(popup_link);


let int_links = document.createElement("div");
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
    questions[index].insertBefore(int_links, questions[index].firstChild);
  }
}
