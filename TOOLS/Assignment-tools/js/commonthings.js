import { add_css, book_name_recommender, } from "/js/src/utilities.min.js";

import { breadcrumb } from "/js/src/for_all_page.min.js";

import book_sugget from "/TOOLS/Assignment-tools/js/template.json" with {type: "json"};
book_name_recommender(book_sugget);
add_css(
  "ul>li>a{color: black;} button#down{ background-color: #00FF40;a{color: black; }}"
);
const breadcrumb_Links = {
  users: [
    {
      link: "/index.html", name: "CS vidyalaya"
    },
    {
      link: "/TOOLS/Assignment-tools/CUSB-assignment-template.html", name: "Assignment tools"
    }
  ]
}
breadcrumb(breadcrumb_Links);