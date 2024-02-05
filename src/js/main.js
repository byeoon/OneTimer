function updateTime() {
    now = new Date();
    document.getElementById("time").textContent = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + " ";
 }


function TimerSetup()
{
    alert("Working on the timer setup function, please wait.");
}


function getTimezoneAbbreviation(timezone) {
    // Create a Date object for the current time in the specified timezone
    const date = new Date().toLocaleString('en', {timeZone: timezone});

    // Use Intl.DateTimeFormat to format the timezone abbreviation
    const timezoneAbbreviation = new Intl.DateTimeFormat('en', {timeZoneName: 'short'}).formatToParts(new Date(date)).find(part => part.type === 'timeZoneName').value;

    return timezoneAbbreviation;
}

function addTimezone(timezone) {
    const timezoneList = document.getElementById('timezoneList');
    const li = document.createElement('li');
    const label = document.createElement('span');
    const time = document.createElement('span');

    const abbreviation = getTimezoneAbbreviation(timezone) || "Unknown";

    label.innerHTML = `<i class="fas fa-globe fa-2xs" style="color: #fff;"> </i> ` + abbreviation + ': ';
    time.id = timezone; // Use the timezone name as the ID for the time span
    time.textContent = getCurrentTime(timezone); // Set initial time

    setInterval(function() {
        // Update time every second
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
    console.log("Pinned Timezones:", pinnedTimezones); // Log pinned timezones
    localStorage.setItem('pinnedTimezones', JSON.stringify(pinnedTimezones));
}

// Function to load pinned timezones from localStorage
function loadPinnedTimezones() {
    const pinnedTimezones = JSON.parse(localStorage.getItem('pinnedTimezones')) || [];
    pinnedTimezones.forEach(timezone => addTimezone(timezone));
}

loadPinnedTimezones();