document.getElementById('motivation').style.visibility = "visible";

const dates = document.querySelector('div#startdate span').innerHTML.trim();
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = function () {
    updateCounter();
    setInterval(ifNoClicks, 2000);
};

async function ifNoClicks() {

    let show = document.getElementById('motivation').style.visibility;
    await sleep(3000);
    if (document.getElementById('motivation').style.visibility == show) {
        if (show == "visible") hideMotivation();
        else if (show == "hidden") showMotivation();
    }
}



document.getElementById('container').onclick = showMotivation;

document.getElementById('motivation').onclick = hideMotivation;

function showMotivation() {
    document.getElementById('container').style.visibility = "hidden";
    document.getElementById('motivation').style.visibility = "visible";

}

function hideMotivation() {
    document.getElementById('motivation').style.visibility = "hidden";
    document.getElementById('container').style.visibility = "visible";
    console.log((60 * document.querySelector('div#timegained span').innerHTML).toFixed(3) + " seconds");
    updateCounter();
    setInterval(updateCounter, 950);
}


const mydate = new Date(dates.split('-').reverse().join('-'));
mydate.setHours(8, 1, 1);
console.log("date is", mydate);

document.querySelector('div#startdate span').innerHTML = mydate.getDate().toString() + " " + monthNames[mydate.getMonth()] + " " + mydate.getFullYear().toString();

console.log();

function updateCounter() {
    let difference = Math.ceil((Date.now() - mydate.getTime()) / 1000);

    // console.log("difference is ", secondsToCountdown(difference));

    document.querySelector('div#timegained span').innerHTML = ((difference / 60) * (5 / 129600)).toFixed(3);

    document.querySelector('div#countdown span').innerHTML = secondsToCountdown(difference);
}

function secondsToCountdown(seconds) {
    let d = Math.floor(seconds / (3600 * 24));
    let h = Math.floor(seconds % (3600 * 24) / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 60);


    let days = d > 0 ? d + (d == 1 ? " day <br>" : " days <br>") : "";
    let hours = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
    let mins = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
    let secs = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return days + hours + '<br>' + mins + '<br>' + secs + '<br>';

}