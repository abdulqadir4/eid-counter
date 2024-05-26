function countdown() {
    const eidDate = new Date('2024-06-16T00:00:00').getTime(); // Set your Eid date here
    const now = new Date().getTime();
    const timeLeft = eidDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').innerText = "Eid Mubarak!";
    }
}

const timerInterval = setInterval(countdown, 1000);
countdown();
