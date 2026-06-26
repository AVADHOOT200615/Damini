const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const startBtn = document.getElementById("startBtn");
const giftBox = document.getElementById("giftBox");
const surprise = document.getElementById("surprise");

let playing = false;

// Music
musicBtn.addEventListener("click", () => {
    if (!playing) {
        music.play();
        musicBtn.innerHTML = "⏸ Pause Music";
        playing = true;
    } else {
        music.pause();
        musicBtn.innerHTML = "▶ Play Music";
        playing = false;
    }
});

// Reveal sections
startBtn.addEventListener("click", () => {
    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });

    document.querySelectorAll(".hidden").forEach(section => {
        section.classList.add("show");
    });

    if (!playing) {
        music.play();
        musicBtn.innerHTML = "⏸ Pause Music";
        playing = true;
    }
});

// Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".hidden").forEach(section => {
    observer.observe(section);
});

// Gift surprise
giftBox.addEventListener("click", () => {

    giftBox.innerHTML = "💝";
    surprise.style.display = "block";

    confetti({
        particleCount: 180,
        spread: 120,
        origin: {
            y: 0.6
        }
    });

    setTimeout(() => {
        confetti({
            particleCount: 120,
            spread: 160,
            origin: {
                x: 0.2,
                y: 0.5
            }
        });

        confetti({
            particleCount: 120,
            spread: 160,
            origin: {
                x: 0.8,
                y: 0.5
            }
        });
    }, 500);
});

// Prevent music autoplay errors
music.play().then(() => {
    music.pause();
}).catch(() => {});