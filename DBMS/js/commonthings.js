import { bar,popup_links,sdbar_Links, book_name_recommender} from "/js/src/utilities.min.js";
import book_suggest from "/DBMS/DBMS_books.json" with {type : "json"};
  book_name_recommender(book_suggest);
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


const pop_link = {
  users: [
    {
      name: "selection operation questions",
      link: "https://csvidyalaya.com/DBMS/DBMS_topics/relational_algebra/selection_operation.html",
    },
    {
      name: "projection operation question",
      link: "https://csvidyalaya.com/DBMS/DBMS_topics/relational_algebra/projection_operation.html",
    },
    {
      name: "realational algebra question",
      link: "https://csvidyalaya.com/DBMS/DBMS_topics/relational_algebra/relational_algebra_question.html",
    },
    {
      name: "tuple relational question",
      link: "https://csvidyalaya.com/DBMS/DBMS_topics/relational_calculus/tuple_relational_calculus.html",
    },
    {
      name: "relational algebra + relational calculus question",
      link: "https://csvidyalaya.com/DBMS/DBMS_topics/relational_algebra_relational_calculus.html",
    }
  ]
};
popup_links(pop_link);


const sidebar_links = {
  users: [
    {
      name: "first-come-first-serve questions",
      link: "fcfs.html",
    },
    {
      name: "shortest job first(SJF) question",
      link: "sjf1.html",
    },
    {
      name: "Shortest Remaining Time First (SRTF) question",
      link: "sjf2.html",
    },
    {
      name: "Multilevel feedback queue scheduling question",
      link: "mlfqs.html",
    },
    {
      name: "Multilevel queue scheduling question",
      link: "MLQS.html",
    },
    {
      name: "priority scheduling question",
      link: "ps1.html",
    },
    {
      name: "peemptive priority scheduling question",
      link: "ps2.html",
    },
    {
      name: "Round Robin scheduling question",
      link: "RR1.html",
    },
    {
      name: "Bankers algorithms question",
      link: "/os/Deadlocks/Bankers_Algorithms.html",
    },
    {
      name: "Disk scheduling algorithms question",
      link: "/os/Disk_scheduling/disk_scheduling_algorithms.html",
    },
    {
      name: "Memory management question",
      link: "/os/memory_management/memory_management_topics.html",
    },
    {
      name: "Buddy System question",
      link: "/os/memory_management/Buddy_system.html",
    },
    {
      name: "Fit question",
      link: "/os/memory_management/Fit_question.html",
    },
  ],
};


sdbar_Links(sidebar_links);

