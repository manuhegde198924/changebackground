const button=document.getElementById("change-bg-button");
const imageButton=document.getElementById("change-bg-image-button");
let imageIndex = 0;
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']
// we will write a function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
 // Function to change the background color
 function changeBackgroundColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
}

// Event listener for the button click
button.addEventListener('click', changeBackgroundColor);
// Function to change the background image
// function changeBackgroundImage() {
//     const imageUrl = 'https://leetcode.com/';
//     document.body.style.backgroundImage = `url('${imageUrl}')`;
// }
function changeBackgroundImage() {
    const imageUrl = images[imageIndex];
    document.body.style.backgroundImage = `url('${imageUrl}')`;
    imageIndex = (imageIndex + 1) % images.length; // Cycle through images
}
// Event listener for the image button click
imageButton.addEventListener('click', changeBackgroundImage);