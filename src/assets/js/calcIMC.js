var patients = document.querySelectorAll(".patient");

export function weightValid(weight) {
    if(weight >= 0 && weight < 1000) {
        return true;
    } else {
        return false;
    }
}

export function heightValid(height) {
    if(height >= 0 && height < 3.0) {
        return true;
    } else {
        return false;
    }
}

export function calcIMC(weight, height) {
    var imc = weight / (height * height);
    return imc.toFixed(2);
}

for(var i = 0; i < patients.length; i++) {
    var patient = patients[i];

    var weight = patient.querySelector(".patient__weight").textContent;
    var height = patient.querySelector(".patient__height").textContent;
    var imc = patient.querySelector(".patient__imc");

    var weight_valid = weightValid(weight);
    var height_valid = heightValid(height);

    if(!weight_valid) {
        console.log("Peso inválido.");
        imc.textContent = "Peso inválido!"
        patient.classList.add("patient-invalid");
    }

    if(!height_valid) {
        console.log("Altura inválida.");
        imc.textContent = "Altura inválida!"
        patient.classList.add("patient-invalid");
    }

    if(weight_valid && height_valid) {
        imc.textContent = calcIMC(weight, height);
    }
}