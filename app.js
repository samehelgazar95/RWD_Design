// Skills
let skillsSpans = document.querySelectorAll(".the-progress span");
let skillsSec = document.querySelector(".our-skills");
// Stats
let statsSec = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .num");
let started = false; // function started ? >> nooooo

function startCount (el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter)
    }
  },2000 / goal)
}

// Window On Scroll For Both The Above
window.onscroll = function () {
  if (window.scrollY > skillsSec.offsetTop - 150) {
    skillsSpans.forEach(span => {
      span.style.width = span.dataset.width
    });
  } 

  if (window.scrollY >= statsSec.offsetTop - 150) {
    if (!started) {
      nums.forEach(function(num) {
      startCount(num)
    })
    }
    started = true
  }
}


// Events
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {

let dateNow = new Date().getTime();

let dateDiff = countDownDate - dateNow;

let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
document.querySelector(".days").innerHTML = days < 10 ? `0${days}`: days;

let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}`: hours;

let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`: minutes;

let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000))
document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds;

if (dateDiff < 0) {
  clearInterval(counter)
}
}, )