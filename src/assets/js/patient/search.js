import { addPatientTable } from "./add.js";

var buttonSearch = document.querySelector("#searchPatients");

buttonSearch.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://raw.githubusercontent.com/nayarawatanuki/javascript__nutritionist/main/patients.json");

    xhr.addEventListener("load", function() {
        var ajaxError = document.querySelector("#search--error");
        
        if(xhr.status == 200) {

            var response = xhr.responseText;        
            var patients = JSON.parse(response);
            ajaxError.textContent = "";

            patients.forEach( function(patient) {
                
                addPatientTable(patient);
            });
        } else {
            ajaxError.textContent = "Erro ao carregar pacientes.";
            alert("Erro: \n" + xhr.responseText);
        }
    });

    xhr.send();
});