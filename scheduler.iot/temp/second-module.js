// second-module.js

// Import the function from the first module
import { myModuleFunction } from '/first-module.js';

// Function to run on button click
function handleButtonClick() {
    // Call the function from the first module
    myModuleFunction();
}

// Attach the event listener to the button
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('myButton');
    button.addEventListener('click', handleButtonClick);
});
