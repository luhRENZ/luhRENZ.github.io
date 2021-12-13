function playCraps() {
    console.log("playCraps() function Started");
    var die1 = Math.ceil(Math.random() * 6); //takes a random number it by 6 and then rounds up to store in die1 location
    var die2 = Math.ceil(Math.random() * 6); //takes a random number it by 6 and then rounds up to store in die2 location
    var sum = die1 + die2; //adding die1 and die2
    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1; //die1 assigninment to die1
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2; //die2 assigninment to die2
    document.getElementById("sumRes").innerHTML = "Sum = " + sum; //sum assigninment to sum
    if (sum == 7 || sum == 11) { // if comparing 7 or 11 = results in a loss
        loss = loss + 1; //results in a loss
        document.getElementById("lossRes").innerHTML = loss; //results in a loss
        document.getElementById("finalRes").innerHTML = "CRAPS - you lose!"; //results in a loss
    }
    else if (die1 == die2 && die1 % 2 == 0) { // when comparing, die1die2 beats die1%=0. results in a win
        wins++; //results in a win
        document.getElementById("winRes").innerHTML = wins; //results in a win
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win"; //results in a win
    } else { //results in a draw
        tie++; //results in a draw
        document.getElementById("tieRes").innerHTML = tie ;//results in a draw
        document.getElementById("finalRes").innerHTML = "Draw - You neither won nor lost. Please try again."; //results in a draw
    }
}

function blastOff() {
    var currTime = 50;
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 5000);
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 10000)
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 15000);
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 20000);
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 25000); setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 30000);
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 35000);
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 40000);
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 45000);
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = "Blastoff!"
    }, 50000);
}

function btrBlastOff() {
    console.log("btrBlastOff() started");
    var currTime = currTime = 50;
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            if (currTime >= 25) {
                //if conditions are true
                document.getElementById("countdownTimer").innerHTML = currTime;
            } else {
                //if conditions are not true
                document.getElementById("countdownTimer").innerHTML =
                    "Warning Less than ½ way to launch, time left = " + currTime;
            }
            currTime = currTime - 5;
        }, i * 5000);
    }
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = "Blastoff!";
    }, 50000);
}

function start(){
    console.log("start() function started");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    console.log("stop() function started");
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function playStation(){
    console.log("playStation() function started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    //this.sound.setAttribute("preload", "audio");
    //this.sound.setAttribute ("controls", "none");
    //this.sound.style.display = "none";
    //document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
class InputData {
    constructor(
        time_seconds,
        latitude,
        longtitude,
        gpsSensor_alt,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digsSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        mangeticX,
        mangeticY,
        mangeticZ,
        gyroX,
        gyroY,
        gyroZ,
    ){
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longtitude = longtitude;
        this.gpsSensor_alt = gpsSensor_alt;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digsSensor_temp = digsSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.mangeticX = mangeticX;
        this.mangeticY = mangeticY;
        this.mangeticZ = mangeticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

function goUATSpace(){
    console.log("goUATSpace() started");
    location.replace("login.html");
}

function goBoards(){
    console.log("goBoards() started");
    location.replace("boards.html");
}

function goIndex(){
    console.log("goIndex() started");
    location.replace("index.html");
}