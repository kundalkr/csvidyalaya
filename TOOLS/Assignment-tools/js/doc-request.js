const form = document.getElementById("myForm");

let div = document.createElement("div");
let buttone = document.createElement("a");
buttone.textContent = "Click Me to get your file";
buttone.setAttribute("class", "btn btn-secondary");
buttone.style.display = "none";
// div.appendChild(buttone);
function hide_form() {
    div.setAttribute("id", "timerDisplay");
    form.insertAdjacentElement("afterend", div);
    form.style.display = "none";
    let timeLeft = 20;
    div.textContent = `${timeLeft}`;
    const interval = setInterval(() => {
        timeLeft--;
        div.textContent = `${timeLeft}`;
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
    buttone.setAttribute("target","_blank");
}
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    hide_form();
    let text;
    const formData = new FormData(form);
    const scriptURL =
        "https://script.google.com/macros/s/AKfycbyNXCtUmaY3hzl4iCnzv91O01SLmiDlPjRXlv6ukNRyjdbwIKGsYVKUmgQCiCmoB2n0gQ/exec";
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

