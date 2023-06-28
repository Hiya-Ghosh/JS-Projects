// have to pass id in ""
const daysEle= document.getElementById("days");
const hoursEle=document.getElementById("hours");
const minsEle=document.getElementById("mins");
const secEle=document.getElementById("seconds");


// date format 
const newYears = "1 Jan 2024";


function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const d= Math.floor(totalSeconds / 3600 / 24);
    const h= Math.floor(totalSeconds / 3600) % 24;
    const m= Math.floor(totalSeconds / 60) % 60;
    const s = Math.floor(totalSeconds) % 60;
    
    // if you dont do %60 or %24, it will give you the complete hours/mins/seconds not in terms of time left in a day 
    daysEle.innerHTML=d;
    hoursEle.innerHTML=format(h);
    minsEle.innerHTML=format(m);
    secEle.innerHTML=format(s);
}

// say 9 seconds left, instead of 9 it will show 09  
function format(time){

    return (time<10? `0${time}`:time);
}

countdown();

setInterval(countdown,1000);


