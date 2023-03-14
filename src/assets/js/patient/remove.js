var patients = document.querySelectorAll(".patient");

var table = document.querySelector("#patients-table");

table.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fade-out");
    setTimeout(function() {

        event.target.parentNode.remove();
    }, 500);
});

// patients.forEach(function(patient) {
//     patient.addEventListener("dblclick", function() {
//         console.log(" duplo click.");
//         this.remove();
//     });
// });