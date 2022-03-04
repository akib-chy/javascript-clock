const displayHours = document.getElementById("hours");
const displayMinutes = document.getElementById("minutes");
const displaySeconds = document.getElementById("seconds");
const displayAMPM = document.getElementById("ampm");

function setTimeOnDisplay() {
  const now = new Date();
  let hours = now.getHours();
  let minute = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = "AMPM";
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (hours < 12) {
    ampm = "AM";
  }
  if (hours == 0) {
    hours = 12;
  } else if (hours == 12) {
    ampm = "PM";
  } else {
    hours = eval(`${hours} - 12`);
    ampm = "PM";
  }
  displayHours.innerText = `${hours}`;
  displayMinutes.innerText = `${minute}`;
  displaySeconds.innerText = `${seconds}`;
  displayAMPM.innerText = `${ampm}`;
}

setInterval(() => {
  setTimeOnDisplay();
}, 1000);
