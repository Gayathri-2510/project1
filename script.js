// Function to generate random color
function getRandomColor() {
    const colors = ['green', 'blue', 'red'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Function to change h5 colors
function changeH5Colors() {
    const h5Elements = document.querySelectorAll('h5');
    h5Elements.forEach(element => {
        element.style.color = getRandomColor();
    });
}

// Add click event listeners to all h5 elements
document.querySelectorAll('h5').forEach(element => {
    element.addEventListener('click', changeH5Colors);
});

// Initial color change
changeH5Colors();
