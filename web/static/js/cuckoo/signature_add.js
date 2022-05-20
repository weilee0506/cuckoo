const signatureAddForm = document.getElementById("signature_add_form");
const signatureAddTextarea = document.getElementById("signature_add_textarea");
const signatureAddSubmit = document.getElementById("signature_add_submit");
const signatureAddResult = document.getElementById("signature_add_results");

function signatureAdd() {

    var userInput = document.getElementById("myText").value;
    
    var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "dynamic.txt");
}