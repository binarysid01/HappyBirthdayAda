// Set initial score to 0
let score = 0;

// Function to generate random position for hearts
function generateRandomPosition() {
let xPos = Math.floor(Math.random() * 500);
let yPos = Math.floor(Math.random() * 400);
return {x: xPos, y: yPos};
}

// Function to create a new heart element and append to the page
function createHeart() {
let heart = document.createElement('img');
heart.src = 'https://media4.giphy.com/media/SMMSuJoUIGO8ZamUEm/giphy.gif?cid=a7122425&rid=giphy.gif&ct=s';
let position = generateRandomPosition();
heart.style.left = position.x + 'px';
heart.style.top = position.y + 'px';
heart.addEventListener('click', function() {
score++;
document.getElementById('score').innerHTML = score;
heart.remove();
});
document.getElementById('hearts').appendChild(heart);
}

// Generate a new heart every 1000ms
setInterval(createHeart, 1000);

