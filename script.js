var time = new Date().getHours();

// Key milestone times of the day
var wakeupTime = 9; // 9AM
var noon = 12;
var lunchTime = 13; // 13PM
var napTime = lunchTime + 2; // 3PM
var evening = 17; // 5PM
var partyTime = 20; // 8PM


// mapping the variable times set above to the hour of the day, (updateClock function )
var updateClock = function () {

    var loldogImage = document.getElementById('loldogImage');
    var timeEventJS = document.getElementById('timeEvent');

    // message text  + image variables that dynamically changes depending on the time of day it is.
    var messageText;
    var image = "https://daisy-images.s3.eu-west-2.amazonaws.com/daisy05.jpg";


    if (time == partyTime) {
        messageText = "IZ PARTEE TIME!!";
        image = "https://daisy-images.s3.eu-west-2.amazonaws.com/daisy01.jpg";
    }

    else if (time == wakeupTime) {
        messageText = "IZ TIME TO GETTUP.";
        image = "https://daisy-images.s3.eu-west-2.amazonaws.com/daisy02.jpg";
    }

    else if (time == lunchTime) {
        messageText = "IZ NOM NOM NOM TIME!!";
        image = "https://daisy-images.s3.eu-west-2.amazonaws.com/daisy03.jpg";
    }

    else if (time == napTime) {
        messageText = "IZ NAP TIME…";
        image = "https://daisy-images.s3.eu-west-2.amazonaws.com/daisy04.jpg";
    }

    else if (time < noon) {
        messageText = "Good morning!";
        image = "https://daisy-images.s3.eu-west-2.amazonaws.com/daisy06.jpg";
    }

    else if (time >= evening) {
        messageText = "Good Evening!";
        image = "https://daisy-images.s3.eu-west-2.amazonaws.com/daisy07.jpg";
    }

    else {
        messageText = "Good afternoon!";
        image = "https://daisy-images.s3.eu-west-2.amazonaws.com/daisy05.jpg";
    }

    timeEventJS.innerText = messageText;
    loldogImage.src = image;

    //Injecting a realTime ticking clock into the page
    showCurrentTime();

};

//printing the current time of day into the page (showCurrentTime Function)
var showCurrentTime = function () {
    // locates the ID in the webpage of where the clock display will be injected into

    var clock = document.getElementById('clock');

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    //Set hours

    if (hours >= noon) {
        meridian = "PM"
    }

    if (hours > noon) {
        hours = hours - 12
    }


    //Set Minutes

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Set Seconds

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // put togther the string that display the time 
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;

};



// Calling the updateClock function to run on the page every second, and constantly check what image/text combo it should be showing in alignment with the timeset variables above
updateClock();
setInterval(updateClock, oneSecond);

// Updates the clock in one second increments
var oneSecond = 1000;

// Partytime button vars
var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var partyEvent = function () {

    if (isPartyTime === false) {
        isPartyTime = true;
        time = partyTime;
        partyTimeButton.innerText = "PARTY TIME!";
        partyTimeButton.style.backgroundColor = "#222";
    }

    else {
        isPartyTime = false;
        time = new Date().getHours();
        partyTimeButton.innerText = "PARTY OVER";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
};

// Attaching an event listener to the party time button, that calls the partyEvent function
partyTimeButton.addEventListener('click', partyEvent);

/////////////////////////////////////////////////////////////////////////

//Hooking up the dropdown time selectors to the wakeup, lunch and nap times

var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");


var lunchTimeEvent = function () {
    lunchTime = lunchTimeSelector.value;
};

var wakeUpEvent = function () {
    wakeupTime = wakeUpTimeSelector.value;
};

var napTimeEvent = function () {
    napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener('change', napTimeEvent);
lunchTimeSelector.addEventListener('change', lunchTimeEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

