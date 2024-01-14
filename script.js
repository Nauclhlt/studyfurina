function onClickStartButton()
{
    showTimerPanel();
    randomizeBackground();

    startTimer(document.getElementById("timer-label-id"), false);
}

function showStartPanel()
{
    let startpanel = document.getElementById("start-panel-id");
    startpanel.style.display = "block";
    let timerpanel = document.getElementById("timer-panel-id");
    timerpanel.style.display = "none";
}

function setTimerLabel(text)
{
    document.getElementById("timer-text-label-id").textContent = text;
}

function showTimerPanel()
{
    let startpanel = document.getElementById("start-panel-id");
    startpanel.style.display = "none";
    let timerpanel = document.getElementById("timer-panel-id");
    timerpanel.style.display = "block";
}

function randomizeBackground()
{
    let uri = "url(\"assets/furina_" + randomInt(0, 12) + ".jpg\")";
    document.body.style.backgroundImage = uri;
}

function startTimer(label, isBreak) {
    let secondsLeft;
    if (!isBreak)
        secondsLeft = 30 * 60;
    else
        secondsLeft = 5 * 60;

    let minutes = padZero(Math.floor(secondsLeft / 60), 2);
    let seconds = padZero((secondsLeft % 60), 2);
    label.textContent = minutes + ":" + seconds;

    if (isBreak)
    {
        setTimerLabel("休憩残り時間:");
    }
    else
    {
        setTimerLabel("作業残り時間:");
    }

    let timer = setInterval(function () {
        secondsLeft--;
        if (secondsLeft == 0)
        {
            clearInterval(timer);
            if (isBreak)
            {
                showStartPanel();
            }
            else
            {
                startTimer(label, true);
            }
        }
        let minutes = padZero(Math.floor(secondsLeft / 60), 2);
        let seconds = padZero((secondsLeft % 60), 2);
        label.textContent = minutes + ":" + seconds;
    }, 1000);
}

function randomInt(min, max)
{
    return Math.floor( Math.random() * (max + 1 - min) ) + min;
}

function padZero(number, length){
	return ( Array(length).join('0') + number ).slice( -length );
}