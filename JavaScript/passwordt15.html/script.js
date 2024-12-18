document.addEventListener("DOMContentLoaded", function() {
    const newPasswordField = document.getElementById("newPassword");
    const confirmPasswordField = document.getElementById("confirmPassword");
    const copyWarning = document.getElementById("copyWarning");
    const pasteWarning = document.getElementById("pasteWarning");


    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    });


    newPasswordField.addEventListener("copy", function(e) {
        e.preventDefault();
        copyWarning.textContent = "Copy is restricted";
    });

    confirmPasswordField.addEventListener("copy", function(e) {
        e.preventDefault();
        copyWarning.textContent = "Copy is restricted";
    });

    
    newPasswordField.addEventListener("paste", function(e) {
        e.preventDefault();
        pasteWarning.textContent = "Paste is restricted";
    });

    confirmPasswordField.addEventListener("paste", function(e) {
        e.preventDefault();
        pasteWarning.textContent = "Paste is restricted";
    });

    
    newPasswordField.addEventListener("input", function() {
        copyWarning.textContent = "";
        pasteWarning.textContent = "";
    });

    confirmPasswordField.addEventListener("input", function() {
        copyWarning.textContent = "";
        pasteWarning.textContent = "";
    });
});
