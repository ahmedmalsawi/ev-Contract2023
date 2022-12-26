/** @format */


// ======================================= A ==============================================
// // get the form element
// const form = document.getElementById("my-form");

// // get the input elements
// const nameInput = document.getElementById("name");
// const emailInput = document.getElementById("email");

// // handle form submission
// form.addEventListener("submit", (event) => {
// 	event.preventDefault(); // prevent the form from submitting

// 	// get the values from the form inputs
// 	const name = nameInput.value;
// 	const email = emailInput.value;

// 	// send the data to the API
// 	fetch("/api/submit-form", {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({ name, email }),
// 	})
// 		.then((response) => response.json())
// 		.then((data) => {
// 			console.log(data);
// 		});
// });




// ========================================== B ===========================================
  // get the form element
  const form = document.getElementById('my-form');

  // get the input elements
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  // set up the API request options
  const apiKey =
		"eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjIxMDUwODY3MCwidWlkIjoyNTE0NTU3NywiaWFkIjoiMjAyMi0xMi0xOVQwMDoxNjo0Mi4zMzJaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTAxMDc5MzUsInJnbiI6InVzZTEifQ.UqyMtnl8B4NAyNJK1qvn0ie1JOuQ2jjyXiWBH2WY9yc"; // replace with your API token
  const boardId = 'YOUR_BOARD_ID'; // replace with the ID of the board you want to use
  const apiEndpoint = `https://api.monday.com/v2/boards/${boardId}/columns/text/cells.json`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
  };

  // handle form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting

    // get the values from the form inputs
    const name = nameInput.value;
    const email = emailInput.value;

    // set the request body
    options.body = JSON.stringify({ name, email });

    // send the data to the API
    fetch(apiEndpoint, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  });
