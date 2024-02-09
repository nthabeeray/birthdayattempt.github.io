const year = new Date().getFullYear();
const birthday = new Date(year, 1,10).getTime();
const month = new Date().getMonth();

// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;
  if(month < 6) {
    diff = birthday - today;
  }

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    document.getElementById("happy").innerHTML = 'Happy';
    document.body.classList.add('background1');
} else {
    document.getElementById("happy").innerHTML = "Nthabiseng's Birthday";
}

if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
  document.getElementById("timer").innerHTML = "<div class=\"days\"> \
  <div class=\"numbers\">" + "B" + "</div></div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + "I" + "</div></div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + "R" + "</div></div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + "T" + "</div></div> \
</div>\
<div class=\"days\"> \
  <div class=\"numbers\">" + "H" + "</div></div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + "D" + "</div></div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + "A" + "</div></div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + "Y" + "</div></div> \
</div>";
} else {
  document.getElementById("timer").innerHTML = 
  "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";
}
}, 1000);

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  
  const randomX = Math.random() * window.innerWidth;
  const randomSize = Math.random() * 20 + 10; // Random size between 10 and 30
  const randomAnimationDuration = Math.random() * 4 + 2; // Random duration between 2 and 6
  
  balloon.style.left = `${randomX}px`;
  balloon.style.width = `${randomSize}px`;
  balloon.style.height = `${randomSize}px`;
  balloon.style.animationDuration = `${randomAnimationDuration}s`;
  
  document.body.appendChild(balloon);
}

// Create balloons at intervals
setInterval(createBalloon, 1000);