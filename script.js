const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const sendBtn = document.getElementById("send");

yesBtn.addEventListener("click", () => {
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
});

noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
    noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
});

sendBtn.addEventListener("click", sendForm);

async function sendForm() {
    const payload = {
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        place: document.getElementById("place").value,
        outfit: document.getElementById("outfit").value,
        food: document.getElementById("food").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("https://date-webhook.sibolpl.workers.dev/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            document.getElementById("step2").innerHTML = `
                <h1>Dziękuję ❤️</h1>
                <p>Termin został wysłany.</p>
            `;
        } else {
            alert("Błąd wysyłania.");
        }
    } catch (error) {
        console.error(error);
        alert("Nie udało się połączyć z serwerem.");
    }
}
