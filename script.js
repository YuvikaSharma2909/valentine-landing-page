// Page-based welcome messages
const page = window.location.pathname;

if (page.includes("index.html")) {
    setTimeout(() => {
        alert("Hey love ❤️ I made something special for you");
    }, 800);
}

if (page.includes("love.html")) {
    setTimeout(() => {
        alert("This page is full of feelings 💖");
    }, 800);
}

// if (page.includes("surprise.html")) {
//     setTimeout(() => {
//         alert("Final surprise 🎁 Just for you");
//     }, 800);
// }

// Button popup + navigation
function showPopupAndGo(pageName) {
    const ok = confirm("Ready for the next cute surprise? 💕");
    if (ok) {
        window.location.href = pageName;
    }
}

// Floating hearts (soft)
setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💗";
    heart.className = "floating-heart";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}, 1000);
function sayYes() {
    document.getElementById("yesMessage").style.display = "block";

    // Extra heart celebration
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.style.position = "fixed";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.top = Math.random() * 100 + "vh";
            heart.style.fontSize = "30px";
            heart.style.animation = "popHeart 1.5s ease-out";
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 1500);
        }, i * 100);
    }
}
// Typewriter effect
const typeTextEl = document.getElementById("typeText");

if (typeTextEl) {
    const text = "I didn’t fall in love all at once… I fell in love in small moments, again and again.";
    let index = 0;
    const speed = 70;

    function typeEffect() {
        if (index < text.length) {
            typeTextEl.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        }
    }

    typeEffect();
}

// Button to go next page
function goNext() {
    window.location.href = "surprise.html";
}