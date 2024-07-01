const cureentTime = document.getElementById('currentTime');
const currentDay = 
document.getElementById('currentDay');

setInterval(() => {
    const utcTime = new Date().toLocaleTimeString('en-US', {
    timeZone: 'UTC',
    hour12: false
});
cureentTime.innerText = utcTime;
    const date = new Date()
    const day = 
    date.toLocaleString('en-US', {weekday: 'long'});
    currentDay.innerText=day;
}, 1000)
