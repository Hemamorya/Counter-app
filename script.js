const countValue = document.querySelector('#counter');

// Function to increment the value
const increment = () => {
    let value = parseInt(countValue.innerText);
   
    value += 1; // Increment the value
    countValue.innerText = value; // Update the displayed value
};

// Function to decrement the value
const decrement = () => {
    let value = parseInt(countValue.innerText);
   
    value -= 1; // Decrement the value
    countValue.innerText = value; // Update the displayed value
};

let touched = document.querySelector('#touch');
    touched.addEventListener('click', function() {
        console.log('touch +/- button');
    });






