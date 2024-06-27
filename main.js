let countVal = document.getElementById("count");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resumeBtn = document.getElementById("resume");
let restartBtn = document.getElementById("restart");
var countStart;

let count = 0;

function start() {
  countStart = setInterval(function () {
    count += 1;
    countVal.textContent = count;
  }, 1000);
}

function stop() {
  clearInterval(countStart);
}

function resume() {
  if (count > 0) {
    countStart = setInterval(function () {
      count += 1;
      countVal.textContent = count;
    }, 1000);
  }
}
function restart() {
  count = 0;
  countVal.textContent = count;
  stop();
}

startBtn.addEventListener("click", start);

stopBtn.addEventListener("click", stop);

resumeBtn.addEventListener("click", resume);

restartBtn.addEventListener("click", restart);
