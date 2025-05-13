import {add_head} from "/js/src/utilities.min.js";

// google analytics tags
let script1 = document.createElement("script");
script1.async = !0;
script1.src = "https://www.googletagmanager.com/gtag/js?id=G-C4M8ZRW6HS";
add_head(script1);

let script2 = document.createElement("script");

script2.innerHTML=`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', 'G-C4M8ZRW6HS');`
  add_head(script2);

// google analytics tags end 





