import { add_css, sdbar_Links, book_name_recommender } from "/js/src/utilities.min.js";
import book_suggest from "/Operating-system/Disk-scheduling/book-suggest.json" with {type: "json"}; 
import { breadcrumb } from "/js/src/for_all_page.min.js";
book_name_recommender(book_suggest);

// const data = {
//   users: [
//     {
//       name: "scheduling algorithms",
//       link: "/os/scheduling_algorithms/Scheduling_Alorithms_topic.html",
//     },
//     {
//       name: "Dsa",
//       link: "/DSA/dsa-topic.html",
//     },
//     {
//       name: "DBMS",
//       link: "/DBMS/dbms_topic.html",
//     },
//     {
//       name: "Boolean algebra",
//       link: "/Digital_Fundamentals/Boolean_Algebra/booleanalgebra1.html"
//     },
//     {
//       name: "relational algebra",
//       link: "/DBMS/DBMS_topics/relational_algebra_relational_calculus.html",
//     },
//     {
//       name: "Stack",
//       link: "/DSA/stack1.html",
//     },
//     {
//       name: "Digital Fundamentals",
//       link: "/Digital_Fundamentals/Dgital_funda_topic.html",
//     },
//     {
//       name: "Buddy system",
//       link: "https://csvidyalaya.com/os/memory_management/Buddy_system.html",
//   ],
// };


add_css(
  "ul>li>a{color: black;} button#down{ background-color: #00FF40;a{color: black; }}"
);

const sidebar_links = {
  users: [
    {
      name: "first-come-first-serve questions",
      link: "/Operating-system/scheduling-algorithms/first-come-first-serve.html"
    },
    {
      name: "shortest job first(SJF) question",
      link: "/Operating-system/scheduling-algorithms/shortest-job-first.html"
    },
    {
      name: "Shortest Remaining Time First (SRTF) question",
      link: "/Operating-system/scheduling-algorithms/Shortest-Remaining-Time-First.html"
    },
    {
      name: "Multilevel feedback queue scheduling question",
      link: "/Operating-system/scheduling-algorithms/multilevel-feedback-queue.html"
    },
    {
      name: "Multilevel queue scheduling question",
      link: "/Operating-system/scheduling-algorithms/multilevel-queue-scheduling.html"
    },
    {
      name: "priority scheduling question",
      link: "/Operating-system/scheduling-algorithms/priority-scheduling.html"
    },
    {
      name: "peemptive priority scheduling question",
      link: "/Operating-system/scheduling-algorithms/preemptive-priority-scheduling.html"
    },
    {
      name: "Round Robin scheduling question",
      link: "/Operating-system/scheduling-algorithms/round-robin.html"
    },
    {
      name: "Bankers algorithms question",
      link: "/Operating-system/Deadlocks/Bankers-Algorithms.html"
    },
    {
      name: "Disk scheduling algorithms question",
      link: "/Operating-system/Disk-scheduling/disk-scheduling-algorithms.html"
    },
    {
      name: "Memory management question",
      link: "/Operating-system/memory-management/memory-management-topics.html"
    },
    {
      name: "Buddy System question",
      link: "/Operating-system/memory-management/Buddy-system.html"
    },
    {
      name: "Fit question",
      link: "/Operating-system/memory-management/Fit-algorithms.html"
    },
  ],
};


sdbar_Links(sidebar_links);


const breadcrumb_Links = {
  users: [
    {
      link: "/index.html", name: "CS vidyalaya"
    },
    {
      link: "/os/operating_System_Topics.html", name: "OS"
    },
    {
      link: "/os/Disk_scheduling/disk_scheduling_algorithms.html", name: "Disk schedulings"
    }
  ]
}
breadcrumb(breadcrumb_Links);