import { add_css, bar} from "/js/src/utilities.min.js";


const data = {
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
bar(data);

add_css(
  "ul>li>a{color: black;} button#down{ background-color: #00FF40;a{color: black; }}"
);


