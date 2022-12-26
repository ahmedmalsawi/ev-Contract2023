/** @format */

// Get the form element
const form = document.querySelector("form");

// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
	// Prevent the default form submission behavior
	event.preventDefault();

	// Get the form data
	const formData = new FormData(form);

	// Validate the form data
	if (!validateForm(formData)) {
		// If the form data is invalid, display an error message
		displayError("Please fill out all fields correctly");
		return;
	}

	// If the form data is valid, submit the form
	submitForm(formData);
});

function validateForm(formData) {
	// Validate the form data here and return true if it is valid, or false if it is invalid
	console.log("Validating form data:", formData);
	return true;
}

function displayError(message) {
	// Display an error message to the user
	console.error(message);
}

function submitForm(formData) {
	// Send the form data to the server using an HTTP request (e.g. using fetch() or XMLHttpRequest)
	const url =
		"https://forms.monday.com/forms/handle/663aa0c5ea944d1876f02e198b6d3b88";
	fetch(url, {
		method: "POST",
		body: formData,
	})
		.then((response) => {
			// Handle the server response here
			console.log("Form submission successful:", response);
		})
		.catch((error) => {
			// Handle any errors here
			console.error("Error submitting form:", error);
		});
}
