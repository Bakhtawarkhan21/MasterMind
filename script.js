// List of 50 colors
const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33D7", "#33FFF2", "#FF5733", "#FFC300", "#DAF7A6", "#581845", "#900C3F",
    "#C70039", "#FF5733", "#FFC300", "#FF8C00", "#ADFF2F", "#9400D3", "#FF4500", "#FFD700", "#40E0D0", "#FF1493",
    "#8A2BE2", "#FF69B4", "#A52A2A", "#7FFF00", "#00FFFF", "#00008B", "#006400", "#A9A9A9", "#BDB76B", "#8B0000",
    "#228B22", "#FFD700", "#4B0082", "#20B2AA", "#778899", "#008080", "#FF6347", "#6A5ACD", "#483D8B", "#4682B4",
    "#FF4500", "#2E8B57", "#D2691E", "#1E90FF", "#F0E68C", "#7CFC00", "#B0C4DE", "#FFDEAD", "#A0522D", "#CD5C5C"
];

let currentColorIndex = 0;

// Function to change the background color
function changeColor() {
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length; // Loop through the colors
}

// Change color on spacebar press or touch
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        changeColor();
    }
});

document.addEventListener('touchstart', () => {
    changeColor();
});
