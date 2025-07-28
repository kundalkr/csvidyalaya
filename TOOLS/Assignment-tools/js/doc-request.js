const form = document.getElementById("myForm");
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const scriptURL =
        "https://script.google.com/macros/s/AKfycbwD4GSttrXPew7g7S5LHzZtl62-XlUU5w2zNLV6vN_g7Iv5QdCTwhQS8gJTiww0WE43/exec";
    try {
        const res = await fetch(scriptURL, {
            method: "POST",
            body: formData,
        });
        const text = await res.text();
        window.location.href = `${text}`;
    } catch (err) {
        alert("Fetch error: " + err.message);
    }
});