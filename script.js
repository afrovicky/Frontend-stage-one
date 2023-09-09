
function displayUTCTime() {
    const currentTimeMillis = new Date().getTime();
    document.getElementById('time').textContent = currentTimeMillis ;
}

displayUTCTime();
setInterval(displayUTCTime, 1000);