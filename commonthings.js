import { book_name_recommender,add_css, popup_links,sdbar_Links,sequence_function_call} from "/js/src/utilities.min.js";

import {breadcrumb , breadcrumb_space} from "/js/src/for_all_page.min.js";

import book_sugget from "/book_suggest.json" with {type : "json"};

book_name_recommender(book_sugget);

const pop_link = {
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
      name: "Shortest Remaining Time First (SRTF) or preemptive SJF question",
      link: "sjf2.html",
    },
    {
      name: " Multilevel feedback queue scheduling question",
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
  ],
};
popup_links(pop_link);
add_css(
  "ul>li>a{color: black;} button#down{ background-color: #00FF40;a{color: black; }}"
);

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
    },{
      name: "ARRAYS QUESTION",
      link: "https://csvidyalaya.com/DSA/Arrays.html",
    },
    {
      name: "Stack",
      link: "https://csvidyalaya.com/DSA/stack1.html",
    },
    {
      name: "infix to prefix",
      link: "https://csvidyalaya.com/DSA/infixtoprefix.html",
    },
    {
      name: "infix to postfix",
      link: "https://csvidyalaya.com/DSA/infixtopostfix.html",
    },
    {
      name: "prefix to postfix",
      link: "https://csvidyalaya.com/DSA/prefixtopostfix.html",
    },
    {
      name: "postfix prefix of infix",
      link: "https://csvidyalaya.com/DSA/postfixprefixofinfix.html",
    },
    {
      name: "linked list",
      link: "https://csvidyalaya.com/DSA/linkedlist1.html",
    },
    {
      name: "Queue",
      link: "https://csvidyalaya.com/DSA/queue2.html",
    }
  ],
};
sdbar_Links(sidebar_links);
const breadcrumb_Links = {
  users: [
    {
    link: "/index.html",name:"CS vidyalaya"
    }
  ]
}






sequence_function_call(()=>{breadcrumb_space()},()=>{breadcrumb(breadcrumb_Links);} );




