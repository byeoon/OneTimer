var activeTimers;

function updateTime() {
    now = new Date();
    document.getElementById("time").textContent = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + " ";
 }

 function updateTimeScreensaver() {
    now = new Date();
    document.getElementById("time2").textContent = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + " ";
 }

function TimerSetup()
{
    alert("Working on the timer setup function, please wait.");

    if(activeTimers == 0)
    {
        document.getElementById("activetimers").textContent = "No active timers.";
    }
    else
    {
        document.getElementById("activetimers").style.visibility = "hidden";
    }
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

function savePinnedTimezones() {
    const timezoneList = document.getElementById('timezoneList');
    const pinnedTimezones = Array.from(timezoneList.getElementsByTagName('li')).map(a => a.textContent);
    console.log("Pinned Timezones:", pinnedTimezones);
    localStorage.setItem('pinnedTimezones', JSON.stringify(pinnedTimezones));
}

function loadPinnedTimezones() {
    const pinnedTimezones = JSON.parse(localStorage.getItem('pinnedTimezones')) || [];
    pinnedTimezones.forEach(timezone => addTimezone(timezone));
}

loadPinnedTimezones();
