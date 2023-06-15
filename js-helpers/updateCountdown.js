const reunionDate = new Date('2023-09-16');
setInterval(updateCountdown, 1000);

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = reunionDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}