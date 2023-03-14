// Get the button that opens the modal
var buttonModal = document.getElementById("button-modal");

// Get the modal
var modal = document.getElementById("addPatientModal");

// Get form 
var form = document.querySelector("#form-addPatient");

// Get the <span> element that closes the modal
var buttonClose = document.getElementsByClassName("close")[0];
var buttonCancel = document.getElementsByClassName("button-cancel");


// When the user clicks on the button, open the modal
buttonModal.onclick = function() {
  modal.style.display = "block";
}

export function close() {
  form.reset();
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    form.reset();
    close();
    return;
  }
}

// When the user clicks on <span> (x), close the modal
buttonClose.onclick = close;
buttonCancel.onclick = close;

