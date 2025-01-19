function submitForm() {
    var operationalHours = document.getElementById('operational-hours').value;
    var errorMessage = document.getElementById('error-message');

    // Check if the input field is empty
    if (operationalHours === '') {
        errorMessage.style.display = 'block';  // Show error message
    } else {
        errorMessage.style.display = 'none';   // Hide error message
        alert('Form submitted successfully!');  // Show success alert
    }
}
