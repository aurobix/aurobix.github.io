function weightConverter(valNum) {
    document.getElementById("outputGrams").innerHTML = valNum / 0.0022046;
    document.getElementById("outputKilograms").innerHTML=valNum/2.2046;
    document.getElementById("outputOunces").innerHTML=valNum*16;
}
