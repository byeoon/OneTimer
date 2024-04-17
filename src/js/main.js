// todo: lots of stuff needs to be fixed.
var activeTimers = 0;
var timerCountdown = 0;
const mode = "clock";

const getNavigatorLanguage = () => {
    if (navigator.languages && navigator.languages.length) {
      return navigator.languages[0];
    } else {
      return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
    }
  }


function updateTime() {
    now = new Date();
    if(mode == "clock")
        document.getElementById("time").textContent = now.toLocaleString(getNavigatorLanguage, { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    
    document.getElementById("timezone").textContent = String(String(now).split("(")[1]).split(")")[0];  
 }

function TimerSetup()
{
    document.getElementById("timer-create-popout").style.display = "block";

    if(activeTimers == 0)
        document.getElementById("currentTimers").style.visibility = "hidden";
    else
        document.getElementById("currentTimers").style.visibility = "block";
}

function createTimer()
{
    timerCountdown = new Date(document.getElementById("timerbox").value).getTime();
    var time = timerCountdown / 2;

    startTimer(time);
    alert(document.getElementById("timerbox").value + "and also " + timerCountdown);
    activeTimers++;
    mode = "timer";
}

function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        console.log("debug: " + duration + " " + minutes + " " + seconds);
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("time").textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}


function hidePopout()
{
    document.getElementById("timer-create-popout").style.display = "none";
    mode = "clock";
}

function getCurrentTime(timezone) {
    const options = { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return new Date().toLocaleTimeString([], options);
}


