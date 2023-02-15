// Configurações Home(index.html)
var title = document.querySelector(".title");
title.textContent = "Nutrição";

var patients = document.querySelectorAll(".patient");
console.log(patients);

for(var i = 0; i < patients.length; i++) {
    var patient = patients[i];

    var weight = patient.querySelector(".patient__weight").textContent;
    var height = patient.querySelector(".patient__height").textContent;
    var imc = patient.querySelector(".patient__imc");

    var weightValid = true;
    var heightValid = true;

    if(weight <= 0 || weight >= 1000) {
        console.log("Peso inválido.");
        weightValid = false;
        imc.textContent = "Peso inválido!"
    }

    if(height <= 0 || height >= 3.00) {
        console.log("Altura inválido.");
        heightValid = false;
        imc.textContent = "Altura inválido!"
    }

    if(heightValid && weightValid) {
        var calcIMC = weight / (height * height);
        imc.textContent = calcIMC.toFixed(2);
    }
}