const form = document.getElementById("myForm");
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const scriptURL =
        "https://script.google.com/macros/s/AKfycbx5CpdUwmym8Mpx_5nk4rvnR2czfIEyA6QWbPKalUcYpInvR8JNhHJp0TDICA7fID2r/exec";
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