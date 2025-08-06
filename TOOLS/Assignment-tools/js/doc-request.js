const form = document.getElementById("myForm");
let div = document.createElement("div");
let buttone = document.createElement("a");
buttone.textContent = "Click here for your file";
buttone.setAttribute("class", "btn btn-success");
buttone.style.display = "none";

function hide_form() {
    div.setAttribute("id", "timerDisplay");
    div.setAttribute("class", "border border-2 p-4 mb-5");
    form.insertAdjacentElement("afterend", div);
    form.style.display = "none";
    let timeLeft = 22;
    let div1 = document.createElement("div");
    div1.setAttribute("id", "firstdiv");
    div1.innerHTML = `<h2 class="text-center">generating your file , please wait  </h2> <br>
    <div class="text-center"> <h2 >join our telegram Group to suggest any Idea </h2> <a href="https://t.me/+0y7RpzVA1nhlYzk9" class="btn btn-success " target="_blank"><i class="bi bi-telegram">Telegram</i></a></div>
    `
    div.appendChild(div1);
    let div2 = document.createElement("div");
    div2.setAttribute("id", "seconddiv");
    div2.setAttribute("class", "text-center");
    div.appendChild(div2);
    const interval = setInterval(() => {
        timeLeft--;
        div2.textContent = `${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(interval);
            buttone.style.display = "block";
            div.textContent = ``;
            div.appendChild(buttone);
        }
    }, 1000);
}
function button(params) {
    buttone.setAttribute("href", `https://drive.google.com/file/d/${params}/view`);
    buttone.setAttribute("target", "_blank");
}
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    hide_form();
    let text;
    const formData = new FormData(form);
    const scriptURL =
        "https://script.google.com/macros/s/AKfycbxQoBxck2bbxsokewkdi36GSlYPqmh5DHGDKpMB5MwXQ6_DLgFeysqzgUAvwxWHZaSoMg/exec";
    try {
        const res = await fetch(scriptURL, {
            method: "POST",
            body: formData,
        });
        text = await res.text();
        button(text);
    } catch (err) {
        alert("Fetch error: " + err.message);
    }
});

document.getElementsByTagName("input").addEventListener("focus", function () {
    this.style.border = '1px solid red'
});
