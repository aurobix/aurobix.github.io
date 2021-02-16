function lengthConverter(valNum) {
    document.getElementById("outputMeters").innerHTML=valNum/3.2808;
    document.getElementById("outputInches").innerHTML=valNum*12;
    document.getElementById("outputcm").innerHTML=valNum/0.032808;
    document.getElementById("outputYards").innerHTML=valNum*0.33333;
    document.getElementById("outputKilometers").innerHTML=valNum/3280.8;
    document.getElementById("outputMiles").innerHTML=valNum*0.00018939;
}