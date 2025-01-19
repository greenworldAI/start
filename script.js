// Countdown Timer
const launchDate = new Date('January 25, 2025 00:00:00').getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const remainingTime = launchDate - now;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (remainingTime <= 0) {
        clearInterval(timer);
        document.getElementById('timer').textContent = 'We Are Live!';
    }
}, 1000);
