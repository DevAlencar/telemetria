var speed = 0;
var prevSpeed = 0;
var currenteScale = 1;

var ace = 0;
var prevAce = 0;
var currenteScaleAce = 1;

function increaseSpeed() {
    if(speed < 130){
        speed = speed + 10;
        addClass();
        currenteScale = currenteScale + 1;
        changeActive();
        changeText();
    }
}

function increaseAce() {
    if(speed < 130){
        ace = ace + 10;
        addClass();
        currenteScaleAce = currenteScaleAce + 1;
        changeActive();
        changeText();
    }
}

function decreaseSpeed() {
    if(speed > 0){
        speed = speed - 10;
        addClass();
        changeActive();
        currenteScale = currenteScale - 1;
        changeText();
    }
}

function decreaseAce() {
    if(speed > 0){
        ace = ace - 10;
        addClass();
        changeActive();
        currenteScaleAce = currenteScaleAce - 1;
        changeText();
    }
}

function addClass(){
    let newClass = "speed-" + speed;
    let prevClass = "speed-" + prevSpeed;
    let el = document.getElementsByClassName("arrow-wrapper")[0];
    if (el.classList.contains(prevClass)) {
        el.classList.remove(prevClass);
        el.classList.add(newClass);
    }
    prevSpeed = speed;
}

function changeActive() {
    let tempClass = "speedometer-scale-" + currenteScale;
    let el = document.getElementsByClassName(tempClass)[0];
    el.classList.toggle("active")
}

function changeText() {
    let el = document.getElementsByClassName("km")[0];
    el.innerText = speed;
}

function changeTextAce() {
    let el = document.getElementsByClassName("rpm")[0];
    el.innerText = ace;
}