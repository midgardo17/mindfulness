let timeLeft = 15 * 60; // 15 minutos em segundos
const timerElement = document.getElementById('timer');
const priceElements = document.querySelectorAll('#price, #price-price');

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateTimer, 1000);
    } else {
        priceElements.forEach(el => el.textContent = '27,97');
    }
}

updateTimer();

// Botão de Compra
document.getElementById('buy-button').addEventListener('click', function() {
    window.location.href = 'https://www.seusite.com/pagamento'; // Substitua pela URL de pagamento real
});