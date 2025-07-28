import { add_css, popup_links, book_name_recommender, } from "/js/src/utilities.min.js";

import { breadcrumb } from "/js/src/for_all_page.min.js";

import book_sugget from "/TOOLS/Assignment-tools/js/template.json" with {type: "json"};
book_name_recommender(book_sugget);
const pop_link = {
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
popup_links(pop_link);
add_css(
  "ul>li>a{color: black;} button#down{ background-color: #00FF40;a{color: black; }}"
);

// const sidebar_links = {
//   users: [
//     {
//       name: "first-come-first-serve questions",
//       link: "/Operating-system/scheduling-algorithms/first-come-first-serve.html"
//     },
//     {
//       name: "shortest job first(SJF) question",
//       link: "/Operating-system/scheduling-algorithms/shortest-job-first.html"
//     },
//     {
//       name: "Shortest Remaining Time First (SRTF) question",
//       link: "/Operating-system/scheduling-algorithms/Shortest-Remaining-Time-First.html"
//     },
//     {
//       name: "Multilevel feedback queue scheduling question",
//       link: "/Operating-system/scheduling-algorithms/multilevel-feedback-queue.html"
//     },
//     {
//       name: "Multilevel queue scheduling question",
//       link: "/Operating-system/scheduling-algorithms/multilevel-queue-scheduling.html"
//     },
//     {
//       name: "priority scheduling question",
//       link: "/Operating-system/scheduling-algorithms/priority-scheduling.html"
//     },
//     {
//       name: "peemptive priority scheduling question",
//       link: "/Operating-system/scheduling-algorithms/preemptive-priority-scheduling.html"
//     },
//     {
//       name: "Round Robin scheduling question",
//       link: "/Operating-system/scheduling-algorithms/round-robin.html"
//     },
//     {
//       name: "Bankers algorithms question",
//       link: "/Operating-system/Deadlocks/Bankers-Algorithms.html"
//     },
//     {
//       name: "Disk scheduling algorithms question",
//       link: "/Operating-system/Disk-scheduling/disk-scheduling-algorithms.html"
//     },
//     {
//       name: "Memory management question",
//       link: "/Operating-system/memory-management/memory-management-topics.html"
//     },
//     {
//       name: "Buddy System question",
//       link: "/Operating-system/memory-management/Buddy-system.html"
//     },
//     {
//       name: "Fit question",
//       link: "/Operating-system/memory-management/Fit-algorithms.html"
//     },
//   ],
// };
// sdbar_Links(sidebar_links);

const breadcrumb_Links = {
  users: [
    {
      link: "/index.html", name: "CS vidyalaya"
    },
    {
      link: "/TOOLS/Assignment-tools/CUSB-assignment-tools.html", name: "Assignment tools"
    },
    // {
    //   link: "/Operating-system/scheduling-algorithms/Scheduling-Alorithms-topic.html",name:"Scheduling Algorithms"
    // }
  ]
}
breadcrumb(breadcrumb_Links);