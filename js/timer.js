const dayBlock = document.getElementById('days-remaining'),
  hoursBlock = document.getElementById('hours-remaining'),
  minutesBlock = document.getElementById('minutes-remaining'),
  secondsBlock = document.getElementById('seconds-remaining'),
  deadLine = '27 march 2022';

let interval;

const updateClock = () => {
  const date = new Date().getTime(),
  
    dateDeadLine = new Date (deadLine).getTime(),
    timeRemaining = (dateDeadLine - date) / 1000,

    hours = Math.floor((timeRemaining / 60 / 60) % 24),
    minutes = Math.floor((timeRemaining / 60) % 60),
    seconds = Math.floor(timeRemaining % 60),
    days = Math.floor((timeRemaining / 60 / 60) / 24),

    fHours = hours < 10 ? '0' + hours : hours,
    fMinutes = minutes < 10 ? '0' + minutes : minutes,
    fSeconds = seconds < 10 ? '0' + seconds : seconds,
    fDays = days < 10 ? '0' + days : days;


    // timerBlock.innerHTML = `${fDays}:${fHours}:${fMinutes}:${fSeconds}`;
    dayBlock.innerHTML = `${fDays}`;
    hoursBlock.innerHTML = `${fHours}`;
    minutesBlock.innerHTML = `${fMinutes}`;
    secondsBlock.innerHTML = `${fSeconds}`;

  if (timeRemaining <= 0) {
    clearInterval(interval);
    dayBlock.innerHTML = "00";
    hoursBlock.innerHTML = "00";
    minutesBlock.innerHTML = "00";
    secondsBlock.innerHTML = "00";
  }
}

updateClock();

interval = setInterval(updateClock, 500);