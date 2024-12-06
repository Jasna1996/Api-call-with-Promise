// Utility function to generate a random number between 1 and 10
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

// Function to simulate the promise operation
function randomNumberPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = getRandomNumber();
        console.log("Generated Random Number:", randomNumber);
        if (randomNumber < 2) {
            resolve("Operation Success");
        } else {
            reject("Operation Failed");
        }
    });
}

// Fetch API call
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log("Fetched Data:", data.slice(0, 5)); // Log first 5 entries
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Handle with .then/catch
document.getElementById('thenCatchBtn').addEventListener('click', () => {
    randomNumberPromise()
        .then(message => {
            document.getElementById('result').innerText = message;
            fetchData(); // Fetch data on success
        })
        .catch(error => {
            document.getElementById('result').innerText = error;
        });
});

// Handle with async/await
document.getElementById('asyncAwaitBtn').addEventListener('click', async () => {
    try {
        const message = await randomNumberPromise();
        document.getElementById('result').innerText = message;
        await fetchData(); // Fetch data on success
    } catch (error) {
        document.getElementById('result').innerText = error;
    }
});
