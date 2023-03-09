/**
 * Validates the form on user input.
 *
 * @function
 * @returns {boolean} true if form input is valid, otherwise false.
 */
function FormValidation() {

    let name = document.forms[0]["name"].value;
    let lastName = document.forms[0]["lastName"].value;
    let phone = document.forms[0]["phone"].value;
    let isFormValid = true;

    /** regex regular expression patterns */
    namePattern = /^[A-Za-z ]+$/;
    lastNamePattern = /^[A-Za-z ]+$/;
    phonePattern = /\d{8,}/;

    /** matching user inputs to regex expression patterns */
    if (!name.match(namePattern)) {
        displayErrorMessage("name-error");
        isFormValid = false;
    } else {
        removeErrorMessage("name-error");
    }
    if (!lastName.match(lastNamePattern)) {
        displayErrorMessage("last-name-error");
        isFormValid = false;
    } else {
        removeErrorMessage("last-name-error");
    }
    if (!phone.match(phonePattern)) {
        displayErrorMessage("phone-error");
        isFormValid = false;
    } else {
        removeErrorMessage("phone-error");
    }

    if (isFormValid) {
        // display confirmation message
        let confirmationMessage = document.createElement("p");
        confirmationMessage.textContent = "Form input is valid!";
        confirmationMessage.style.color = "green";
        let form = document.getElementsByTagName("form")[0];
        form.appendChild(confirmationMessage);
    }

    return isFormValid;

}

/**
 * Displays error message based on the user input id.
 *
 * @function
 * @param {string} elementId - The id of the input element that caused the error.
 */
function displayErrorMessage(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = "block";
}

/**
 * Removes error message based on the user input id.
 *
 * @function
 * @param {string} elementId - The id of the input element that caused the error.
 */
function removeErrorMessage(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = "none";
}