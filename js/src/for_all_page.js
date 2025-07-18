import { add_head, google_font } from "/js/src/utilities.min.js";
const refurnished_links = {
  users: [
    {
      link: "/os/scheduling_algorithms/MLQS.html", redirect: "https://www.csvidyalaya.com/Operating-system/scheduling-algorithms/multilevel-queue-scheduling.html"
    },
    {
      link: "/os/scheduling_algorithms/fcfs2.html", redirect: "https://www.csvidyalaya.com/Operating-system/scheduling-algorithms/first-come-first-serve-2.html"
    },
    {
      link: "/os/scheduling_algorithms/fcfs.html", redirect: "https://www.csvidyalaya.com/Operating-system/scheduling-algorithms/first-come-first-serve.html"
    },
    {
      link: "/os/scheduling_algorithms/sjf1.html", redirect: "https://www.csvidyalaya.com/Operating-system/scheduling-algorithms/shortest-job-first.html"
    },
    {
      link: "/os/scheduling_algorithms/sjf2.html", redirect: "https://www.csvidyalaya.com/Operating-system/scheduling-algorithms/Shortest-Remaining-Time-First.html"
    },
    {
      link: "/os/scheduling_algorithms/RR4.html", redirect: "https://www.csvidyalaya.com/Operating-system/scheduling-algorithms/RR4.html"
    },
    {
      link: "/os/scheduling_algorithms/RR1.html", redirect: "https://www.csvidyalaya.com/Operating-system/scheduling-algorithms/round-robin.html"
    },
    {
      link: "/os/scheduling_algorithms/RR2.html", redirect: "https://www.csvidyalaya.com/Operating-system/scheduling-algorithms/round-robin-2.html"
    },
    {
      link: "/os/scheduling_algorithms/RR3.html", redirect: "https://www.csvidyalaya.com/Operating-system/scheduling-algorithms/RR3.html"
    },
    {
      link: "/os/scheduling_algorithms/ps1.html", redirect: "https://www.csvidyalaya.com/Operating-system/scheduling-algorithms/priority-scheduling.html"
    },
    {
      link: "/os/scheduling_algorithms/ps2.html", redirect: "https://www.csvidyalaya.com/Operating-system/scheduling-algorithms/preemptive-priority-scheduling.html"
    },
    {
      link: "/os/scheduling_algorithms/mlfqs.html", redirect: "https://www.csvidyalaya.com/Operating-system/scheduling-algorithms/multilevel-feedback-queue.html"
    },
    {
      link: "/os/scheduling_algorithms/Scheduling_Alorithms_topic.html", redirect: "https://www.csvidyalaya.com/Operating-system/scheduling-algorithms/Scheduling-Alorithms-topic.html"
    },
    {
      link: "/os/Deadlocks/deadlock_topics.html", redirect: "https://www.csvidyalaya.com/Operating-system/Deadlocks/deadlock-topics.html"
    },
    {
      link: "/os/Deadlocks/Bankers_Algorithms.html", redirect: "https://www.csvidyalaya.com/Operating-system/Deadlocks/Bankers-Algorithms.html"
    },
    {
      link: "/os/Disk_scheduling/disk_scheduling_algorithms.html", redirect: "https://www.csvidyalaya.com/Operating-system/Disk-scheduling/disk-scheduling-algorithms.html"
    },
    {
      link: "/os/memory_management/Buddy_system.html", redirect: "https://www.csvidyalaya.com/Operating-system/memory-management/Buddy-system.html"
    },
    {
      link: "/os/memory_management/memory_management_topics.html", redirect: "https://www.csvidyalaya.com/Operating-system/memory-management/memory-management-topics.html"
    },
    {
      link: "/os/memory_management/Fit-algorithms.html", redirect: "https://www.csvidyalaya.com/Operating-system/memory-management/Fit-algorithms.html"
    },
    {
      link: "/os/memory_management/page-replacement-algorithms.html", redirect: "https://www.csvidyalaya.com/Operating-system/memory-management/page-replacement-algorithms.html"
    },
  ]
};
for (const user of refurnished_links.users) {
  if (
    window.location.pathname.startsWith(`${user.link}`)
  ) {
    window.location.href =
      `${user.redirect}`;
  }
}

(function () {
  const favi_size = {
    users: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        link: "/assets/favicon_io/apple-touch-icon.png",
      },
      {
        rel: "icon",
        sizes: "192x192",
        link: "/assets/favicon_io/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        sizes: "32x32",
        link: "/assets/favicon_io/favicon-32x32.png",
      },
      {
        rel: "icon",
        sizes: "16x16",
        link: "/assets/favicon_io/favicon-16x16.png",
      },
      {
        rel: "icon",
        sizes: "512x512",
        link: "/assets/favicon_io/android-chrome-512x512.png",
      },
    ],
  };
  let hd = document.querySelector("head");
  for (const user of favi_size.users) {
    let favicon = document.createElement("link");
    favicon.setAttribute("type", "image/png");
    favicon.setAttribute("rel", `${user.rel}`);
    favicon.setAttribute("sizes", `${user.sizes}`);
    favicon.setAttribute("href", `${user.link}`);
    hd.appendChild(favicon);
  }

})();
let bootstrapcss = document.createElement("link");
bootstrapcss.setAttribute(
  "href",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
);
bootstrapcss.setAttribute("rel", "stylesheet");
bootstrapcss.setAttribute(
  "integrity",
  "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
);
bootstrapcss.setAttribute("crossorigin", "anonymous");
add_head(bootstrapcss);
const gfont = {
  users: [
    {
      about: "",
      link: "https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap",
    },
    {
      link: "https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&display=swap"
    },
    {
      link: "https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
    },
    {
      link: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&icon_names=close,hub&display=block",
    },
    {
      link: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
    }
  ],
};
google_font(gfont);

export function breadcrumb(data) {
  let brdcrmb = document.querySelector("#main-content > main > nav#breadcrumbs > ol.breadcrumb");
  let active_link = Object.entries(data.users).length;
  let i = 1;
  let list;
  for (let name_link of data.users) {

    if (i == active_link) {
      list = document.createElement("li");
      list.classList.add("breadcrumb-item", "p-1", "active");
      list.innerHTML += `<a href="${name_link.link}" class="bg-body-secondary rounded-2 p-1  text-decoration-none ">${name_link.name}</a>`;
      brdcrmb.appendChild(list);
    } else {
      list = document.createElement("li");
      list.classList.add("breadcrumb-item", "p-1");
      list.innerHTML = `<a  href="${name_link.link}" class="p-1 .text-black">${name_link.name}</a>`;
      brdcrmb.appendChild(list);
    }
    i++;
  }
}
