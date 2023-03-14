import {weightValid, heightValid, calcIMC} from "../calcIMC.js";
import {close} from "../../../components/modal.js";

function getPatientForm(form) {

    var patient = {
        name: form.name.value,
        weight: form.weight.value,
        height: form.height.value,
        fat: form.fat.value,
        imc: calcIMC(form.weight.value, form.height.value)
    }

    return patient;
}

function patientValid(patient) {
    var inputWeight = document.querySelector("#weight");
    var inputHeight = document.querySelector("#height");
    var spanWeight = document.querySelector("#weight--error");
    var spanHeight = document.querySelector("#height--error");
    var msgWeight = "";
    var msgHeight = "";

    /*
        nomes.forEach(function(nome) {
            console.log(nome + " é instrutor da Alura");
        }) 
    */

    if(!weightValid(patient.weight) && heightValid(patient.height)) {
        inputWeight.classList.add("form__field--invalid");
        msgWeight = "Peso inválido.";
        spanWeight.textContent = msgWeight;

        inputHeight.classList.remove("form__field--invalid");
        msgHeight = "";
        spanHeight.textContent = msgHeight;
        return false;
    } else

    if(!heightValid(patient.height) && weightValid(patient.weight)){
        inputHeight.classList.add("form__field--invalid");
        msgHeight = "Altura inválida.";
        spanHeight.textContent = msgHeight;

        inputWeight.classList.remove("form__field--invalid");
        msgWeight = "";
        spanWeight.textContent = msgWeight;
        return false;
    } else

    if(!weightValid(patient.weight) && !heightValid(patient.height)) {
        inputWeight.classList.add("form__field--invalid");
        msgWeight = "Peso inválido.";
        spanWeight.textContent = msgWeight;

        inputHeight.classList.add("form__field--invalid");
        msgHeight = "Altura inválida.";
        spanHeight.textContent = msgHeight;
        return false;

    } else

    if(weightValid(patient.weight) && heightValid(patient.height)) {
        inputWeight.classList.remove("form__field--invalid");
        inputHeight.classList.remove("form__field--invalid");

        msgWeight = "";
        spanWeight.textContent = msgWeight;
        msgHeight = "";
        spanHeight.textContent = msgHeight;
        return true;
    }


}

function mountTd(data, td_class) {
    var td = document.createElement("td");
    td.textContent = data;
    td.classList.add(td_class);

    return td;
}

function mountPatient(patient) {

    var patient_tr = document.createElement("tr");
    patient_tr.classList.add("patient");
    
    patient_tr.appendChild(mountTd(patient.name, "patient__name"));
    patient_tr.appendChild(mountTd(patient.weight, "patient__weight"));
    patient_tr.appendChild(mountTd(patient.height, "patient__height"));
    patient_tr.appendChild(mountTd(patient.fat, "patient__fat"));
    patient_tr.appendChild(mountTd(patient.imc, "patient__imc"));
    
    return patient_tr;
}

export function addPatientTable(patient) {
    // cria tr e tds do paciente
    var patient_tr = mountPatient(patient);
        
    // adicionando paciente na tabela
    var table = document.querySelector("#patients-table");
    table.appendChild(patient_tr);
}


var buttonAdd = document.querySelector("#addPatient");
buttonAdd.addEventListener("click", function(event) {
    event.preventDefault();
    
    // selecionando o form
    var form = document.querySelector("#form-addPatient");
    
    // Extraindo informações do form
    var patient = getPatientForm(form);

    if(!patientValid(patient)) {
        return false;
    } else {
    
        addPatientTable(patient);

        close();
    
    }
})