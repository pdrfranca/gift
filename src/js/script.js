function showMessage() {
    const message = document.getElementById('surprise-message');
    message.classList.add('visible');

    // Iniciar confetes
    startConfetti();
}

// Função de confetes
function startConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    const confettiCount = 300;
    const confetti = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Função para gerar confetes
    function createConfetti() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            size: Math.random() * 10 + 5,
            speedX: Math.random() * 5 - 2.5,
            speedY: Math.random() * 7 + 3
        };
    }

    // Inicializar confetes
    for (let i = 0; i < confettiCount; i++) {
        confetti.push(createConfetti());
    }

    // Desenhar confetes
    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach((c, index) => {
            c.x += c.speedX;
            c.y += c.speedY;

            if (c.y > canvas.height) {
                confetti[index] = createConfetti();
            }

            ctx.fillStyle = c.color;
            ctx.fillRect(c.x, c.y, c.size, c.size);
        });
        requestAnimationFrame(drawConfetti);
    }

    drawConfetti();
}
