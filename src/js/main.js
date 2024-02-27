var activeTimers = 0;
var timerCountdown = new Date(document.getElementById("timerbox").value).getTime();

const getNavigatorLanguage = () => {
    if (navigator.languages && navigator.languages.length) {
      return navigator.languages[0];
    } else {
      return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
    }
  }


function updateTime() {
    now = new Date();
    document.getElementById("time").textContent =  time.toLocaleString(getNavigatorLanguage, { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    document.getElementById("timezone").textContent = now.getTimezoneAbbreviation();
    
 }

 function updateTimeScreensaver() {
    now = new Date();
    document.getElementById("time2").innerHTML = `<i class="fas fa-clock fa-2xs" style="color: #fff;"> </i> ` + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + " ";
 }

function TimerSetup()
{
    document.getElementById("timer-create-popout").style.display = "block";

    if(activeTimers == 0)
    {
        document.getElementById("currentTimers").style.visibility = "hidden";
    }
    else
    {
        document.getElementById("currentTimers").style.visibility = "block";
    }
}

function createTimer()
{
    alert(document.getElementById("timerbox").value + "and also " + timerCountdown);
    activeTimers++;
}

function hidePopout()
{
    document.getElementById("timer-create-popout").style.display = "none";
}



function getTimezoneAbbreviation(timezone) {
    const date = new Date().toLocaleString('en', {timeZone: timezone});
    const timezoneAbbreviation = new Intl.DateTimeFormat('en', {timeZoneName: 'short'}).formatToParts(new Date(date)).find(part => part.type === 'timeZoneName').value;

    return timezoneAbbreviation;
}

function addTimezone(timezone) {
    const timezoneList = document.getElementById('timezoneList');
    const li = document.createElement('li');
    const label = document.createElement('span');
    const time = document.createElement('span');

    label.innerHTML = `<i class="fas fa-globe fa-2xs" style="color: #fff;"> </i> ` + timezone + ': ';
    time.id = timezone; 
    time.textContent = getCurrentTime(timezone);
    setInterval(function() {
        time.textContent = getCurrentTime(timezone); 
    }, 1000);

    li.appendChild(label);
    li.appendChild(time);
    timezoneList.appendChild(li);
    savePinnedTimezones();
}

function getCurrentTime(timezone) {
    const options = { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return new Date().toLocaleTimeString([], options);
}
