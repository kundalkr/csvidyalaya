import {bar,popup_links,sdbar_Links,book_name_recommender } from "/js/src/utilities.min.js";
import book_sugget from "/dsa_in_c/book_suggest.json" with {type : "json"};
book_name_recommender(book_sugget);
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

const sidebar_links = {
  users: [
      {
      name: "All DSA Topic question",
      link: "dsa_in_c_topic.html",
    },
    {
      name: "Array question",
      link: "Arrays.html",
    },
     {
      name: "Address finding array based question",
      link: "Array2.html",
    },
    {
      name: "infix to postfix conversion question",
      link: "infixtopostfix.html",
    },
    {
      name: "infix to prefix conversion question",
      link: "infixtoprefix.html",
    },
    {
      name: "linkedlist question",
      link: "linkedlist1.html",
    },
    {
      name: "postfix, prefix of infix conversion question",
      link: "postfixprefixofinfix.html",
    },
    {
      name: "prefix to postfix conversion question",
      link: "ps1.html",
    },
    {
      name: "queue question",
      link: "ps2.html",
    },
    {
      name: "stack question",
      link: "stack1.html",
    },
  
  ],
};


sdbar_Links(sidebar_links);
