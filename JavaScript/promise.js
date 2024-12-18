// Create a Promise
const promise = new Promise((resolve, reject) => {
    // Simulate asynchronous operation (e.g., API request)
    setTimeout(() => {
    // Resolve with success message
    resolve("Operation successful!");
    }, 2000);
    });
    // Handle Promise outcome
    promise
    .then((message) => {
    console.log(message); // Output: "Operation successful!"
    })
    .catch((error) => {
    console.error(error); // Handle errors
    });