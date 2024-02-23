//your JS code here. If required.
// Function to create a promise that resolves after a specified time with a given value
function delayPromise(value, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}

// Function to perform the series of operations on the input number
function performOperations(inputNumber) {
    return delayPromise(inputNumber, 2000)
        .then(number => {
            document.getElementById('output').textContent = `Result: ${number}`;
            return delayPromise(number * 2, 1000);
        })
        .then(number => {
            document.getElementById('output').textContent = `Result: ${number}`;
            return delayPromise(number - 3, 1000);
        })
        .then(number => {
            document.getElementById('output').textContent = `Result: ${number}`;
            return delayPromise(number / 2, 1000);
        })
        .then(number => {
            document.getElementById('output').textContent = `Result: ${number}`;
            return delayPromise(number + 10, 1000);
        })
        .then(finalResult => {
            document.getElementById('output').textContent = `Final Result: ${finalResult}`;
        })
        .catch(error => {
            console.error(error);
            document.getElementById('output').textContent = 'Error occurred';
        });
}

// Event listener for the button click
document.getElementById('btn').addEventListener('click', () => {
    const inputValue = parseFloat(document.getElementById('ip').value);
    if (!isNaN(inputValue)) {
        performOperations(inputValue);
    } else {
        document.getElementById('output').textContent = 'Please enter a valid number';
    }
});
