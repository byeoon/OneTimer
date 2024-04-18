var activeTimers = 0;
var timerNames = [];
var timerCountdown = 0;
var str = '<ul>'

const getNavigatorLanguage = () => {
    if (navigator.languages && navigator.languages.length) {
      return navigator.languages[0];
    } else {
      return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
    }
  }


function updateTime() {
    now = new Date();
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

function showAlarms()
{
    document.getElementById("alarms-list-popout").style.display = "block";
}

function createTimer()
{
    document.getElementById("currentTimers").innerHTML = "";
    timerCountdown = new Date(document.getElementById("timerbox").value).getTime();
    var time = timerCountdown / 2;

    startTimer(time);
    alert("countdown: " + timerCountdown);
    activeTimers++;
    timerNames.push(document.getElementById("timername").textContent);

    timerNames.forEach(function(addToList) {
        str += '<li>'+ timerNames + '</li>';
      }); 
      str += '</ul>';
    document.getElementById("currentTimers").innerHTML = str;
}

function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        console.log("debug: " + duration + " " + minutes + " " + seconds);
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        document.getElementById("timerCURRENTTHING").style.visibility = "visible";
        document.getElementById("timerCURRENTTHING").textContent = minutes + ":" + seconds;
       

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}


function hidePopout()
{
    document.getElementById("timer-create-popout").style.display = "none";
    document.getElementById("alarms-list-popout").style.display = "none";
}

function getCurrentTime(timezone) {
    const options = { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return new Date().toLocaleTimeString([], options);
}


