

const date = new Date();
function updateMainClock()
{
    document.getElementById("time").textContent = date;
}
function getTime()
{
    return new Date().getTime();;
}

function TimerSetup()
{
    alert("Working on the timer setup function, please wait.");
}