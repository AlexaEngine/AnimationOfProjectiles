// Array to store the balls
let balls = [];
let x = [];
let y = [];
let velocity_x = [];
let velocity_y = [];

// this function makes a ball with position and velocity set
function makeBall(xcoord, ycoord, color, velx = 0, vely = 0, fixed = 0) {
    let ball = document.createElement("div");
    let size = 50; // Assuming a default size of 50 pixels
    ball.style.backgroundColor = color;
    ball.className = "ball";
    ball.style.height = ball.style.width = `${size}px`;
    ball.style.borderRadius = "50%"; // Make the ball round
    ball.style.top = `${ycoord}px`;
    ball.style.left = `${xcoord}px`;
    document.body.appendChild(ball);
    if (!fixed) {
        // only free balls will be updated
        balls.push(ball);
        x.push(xcoord);
        y.push(ycoord);
        velocity_x.push(velx);
        velocity_y.push(vely);
    }
}

// Add event listener for click event
document.addEventListener("click", function(event) {
    let xcoord = event.clientX;
    let ycoord = event.clientY;
    let color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    makeBall(xcoord, ycoord, color);
});

// Start moving the balls randomly after 2 seconds
setTimeout(moveBallsRandomly, 2000);

function moveBallsRandomly() {
    setInterval(function() {
        for (let i = 0; i < balls.length; i++) {
            velocity_x[i] = Math.random() * 10 - 5;
            velocity_y[i] = Math.random() * 10 - 5;
        }
    }, 1000 / 60); // 60 frames per second
}

function update() {
    for (let i = 0; i < balls.length; i++) {
        x[i] += velocity_x[i];
        y[i] += velocity_y[i];

        // Update ball position
        balls[i].style.left = `${x[i]}px`;
        balls[i].style.top = `${y[i]}px`;
    }

    requestAnimationFrame(update);
}

requestAnimationFrame(update);
