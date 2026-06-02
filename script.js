const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

yesBtn.addEventListener("click", () => {
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
});

noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";

    noBtn.style.left =
        Math.random() * (window.innerWidth - 100) + "px";

    noBtn.style.top =
        Math.random() * (window.innerHeight - 50) + "px";
});