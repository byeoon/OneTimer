var timerNames = [];
var activeTimers = 0;
var timerCountdown = 0;
var str = '<ul>';


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

function showMenu(menu) {
    switch(menu) {
        case 1:
            {
                document.getElementById("timer-create-popout").style.display = "block";
                break;
            }
        case 2:
            {
                document.getElementById("alarms-list-popout").style.display = "block";
                break;
            }
        case 3:
            {
                document.getElementById("timer-create-popout").style.display = "none";
                document.getElementById("alarms-list-popout").style.display = "none";
                break;
            }
        case 4:
            {
                console.log("Work in progress.");
                break;
            }
        case 5:
            {
                console.log("Work in progress.");
                break;
            }
    }
}

function createTimer()
{
    hourCountdown = document.getElementById("hourbox").value * 3600;
    minuteCountdown = document.getElementById("minutebox").value * 60;
    secondCountdown = document.getElementById("secondbox").value;
    timerNames.push(document.getElementById("timername").textContent);
    timerCountdown = hourCountdown + minuteCountdown + secondCountdown;
    activeTimers++;
    startTimer(timerCountdown);
    alert("countdown: " + timerCountdown);

    timerNames.forEach(function(timer) {
        str += '<li>'+ timer + '</li>';
    });
      str += '</ul>';
    document.getElementById("currentTimers").innerHTML = str;
}

function startTimer(duration) {
    var timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer % 3600, 2);
        minutes = parseInt(timer / 60, 2)
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        document.getElementById("timerCURRENTTHING").style.visibility = "visible";
        document.getElementById("timerCURRENTTHING").textContent = hours + ":" + minutes + ":" + seconds;
       
        if (--timer < 0) {
            timer = 0;
            alert("The timer went off!");
        }
    }, 1000);
}

function getCurrentTime(timezone) {
    const options = { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return new Date().toLocaleTimeString([], options);
}


