const balloonsContainer = document.querySelector('.balloons-container');
const confettiContainer = document.querySelector('.confetti');

function createBalloon() {
    const balloonTypes = ['balloon1', 'balloon2', 'balloon3'];
    const balloon = document.createElement('div');
    balloon.classList.add('balloon', balloonTypes[Math.floor(Math.random() * balloonTypes.length)]);
    
    // Posición aleatoria horizontal
    const randomX = Math.random() * (window.innerWidth - 50); // 50 es el ancho del globo
    balloon.style.left = `${randomX}px`;
    
    balloonsContainer.appendChild(balloon);
    
    // Eliminar el globo después de un tiempo
    setTimeout(() => {
        balloon.remove(); // Se elimina el globo después de que termina la animación
    }, 500000); // Espera a que termine la animación de flotación
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    // Posición aleatoria horizontal
    const randomX = Math.random() * 100; // 0 a 100% del ancho
    confetti.style.left = `${randomX}%;`; // Mueve el confeti a una posición aleatoria en la parte superior

    confettiContainer.appendChild(confetti);

    // Eliminar el confeti después de un tiempo
    setTimeout(() => {
        confetti.style.animation = 'fade-out 2s ease-in forwards';
        setTimeout(() => {
            confetti.remove();
        }, 2000); // Espera a que termine la animación antes de eliminar
    }, 300); // Espera 3 segundos antes de comenzar la animación de desvanecimiento
}

// Crear globos y confeti cada 1 segundo
setInterval(() => {
    createBalloon();
    createConfetti();
}, 1000);
