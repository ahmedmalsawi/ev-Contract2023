/** @format */

// Replace YOUR_API_KEY with your actual API key
const API_KEY =
	"eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjIxMDUwODY3MCwidWlkIjoyNTE0NTU3NywiaWFkIjoiMjAyMi0xMi0xOVQwMDoxNjo0Mi4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTAxMDc5MzUsInJnbiI6InVzZTEifQ.LSkXeQjznsLA9D2tXkjMXYIz7w7iEklG4-syhIK_o28";

// Replace YOUR_BOARD_ID with your actual board ID
const BOARD_ID = "3560555809";

// Get form element
const form = document.getElementById("form");

// Handle form submission
form.addEventListener("submit", (event) => {
	event.preventDefault();

	// Get form data
	const textInput = document.getElementById("text-input").value;
	const numberInput = document.getElementById("number-input").value;
	const textarea = document.getElementById("textarea").value;
	const status = document.getElementById("status").value;
	const dropdown = document.getElementById("dropdown").value;
	const date = document.getElementById("date").value;
	const email = document.getElementById("email").value;

	// Build query
	const query = `
    mutation {
      create_item (
        board_id: "${BOARD_ID}"
        group_id: null
        item_name: "${textInput}"
        column_values: {
          long_text: "${textarea}",
          numbers: "${numberInput}",
          status: "${status}",
          dropdown: "${dropdown}",
          date: "${date}",
          email: "${email}"
        }
      ) {
        id
      }
    }
  `;

	// Send request to monday.com API
	fetch("https://api.monday.com/v2", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${API_KEY}`,
		},
		body: JSON.stringify({
			query,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.error(error);
		});
});
