const secondsHand = document.querySelector('.seconds-hand');
const minutesHand = document.querySelector('.minutes-hand');
const hoursHand = document.querySelector('.hours-hand');



function getDate() {
    const now = new Date()
    let seconds = now.getSeconds()
    let minutes = now.getMinutes()
    let hours = now.getHours()
    let timeInterval = 360 / 60


    secondsHand.style.transform = 'rotate('+ (seconds * timeInterval) +'deg)'
    minutesHand.style.transform = 'rotate('+ (minutes * timeInterval ) +'deg)'
    hoursHand.style.transform = 'rotate('+ (hours * 30 + minutes /2) +'deg)'

    
} 




setInterval(getDate , 50)