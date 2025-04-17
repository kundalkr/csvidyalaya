import { add_css, add_body ,add_head} from "/js/src/utilities.min.js";


let bar_style = document.createElement("style");
bar_style.innerHTML = `   
      #bar1 {
      a {
            color: rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          text-decoration-thickness: 0.3ex;
          text-underline-offset: 0.3ex;
        }
        display: none;
      }
      @media (min-width: 950px) {
        #bar1 {
            display: flex;
        }
      }
 `;
add_head(bar_style);

let bar = document.createElement("div");
bar.innerHTML = `<div
      id="bar1"
      style="
        background-color: rgb(5, 148, 79);
        flex-direction: row;
        justify-content: space-between;
       padding: 10px 10px;color:"black";
      "
    >
    <a href="/os/scheduling_algorithms/Scheduling_Alorithms_topic.html">scheduling algorithms</a>
  <a href="/dsa_in_c/dsa_in_c_topic.html">Dsa</a>
      <a href="/DBMS/dbms_topic.html">DBMS</a>
  <a href="/Digital_Fundamentals/Boolean_Algebra/booleanalgebra1.html">Boolean algebra question</a>
   <a href="/dsa_in_c/dsa_in_c_topic.html">Dsa question </a>
      <a href="/DBMS/DBMS_topics/relational_algebra_relational_calculus.html"
        >relational algebra</a
      > 
    <a href="/dsa_in_c/stack1.html">Stack</a>
         <a href="/Digital_Fundamentals/Dgital_funda_topic.html"
      >Digital Fundamentals</a
    >
   </div>  
  
    <br>`;

let body = document.querySelector("body");
let h1 = document.querySelector("body>div");
body.insertBefore(bar, h1);

add_css(
  "ul>li>a{color: black;} button#down{ background-color: #00FF40;a{color: black; }}"
);


