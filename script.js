// Typing effect
const texts = ["Data Analyst", "Data Storyteller", "Problem Solver"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing-text").textContent = letter;

    let typeSpeed = 100;

    if (letter.length === currentText.length) {
        typeSpeed = 2000; // Pause at end of word
        setTimeout(() => {
            index = 0;
            count++;
            type();
        }, typeSpeed);
        return;
    }

    setTimeout(type, typeSpeed);
}());

// Glitch effect on hover for main title
const glitchText = document.querySelector('.glitch-text');
glitchText.addEventListener('mouseover', () => {
    glitchText.style.textShadow = '2px 2px 0px #00d4ff, -2px -2px 0px #6C63FF';
    setTimeout(() => {
        glitchText.style.textShadow = 'none';
    }, 500);
});

// Form submission prevention for demo
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully!';
    btn.style.background = '#28a745';

    form.reset();

    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = 'var(--accent)';
    }, 3000);
});
