import BackBoard from "./scripts/backboard";
import Ball from "./scripts/ball";
import "./styles/index.scss";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 900;
canvas.height = 800;
const ballHome = [canvas.width/2, canvas.height];
let cursorX;
let cursorY;
let hold = false;
let count = 0;
let shiftSpeed = 2;
let level = 3;
const gravity = 9.81;
const friction = .98;
let score = 0;

// Mouse events
document.addEventListener("mousemove", mouseHandler, false);
canvas.addEventListener("mousedown", holdHandler, false)
canvas.addEventListener("mouseup", releaseHandler, false)

function holdHandler(e) {
    hold = true;
}

function releaseHandler(e) {
    hold = false;
    count = 0;
}

function mouseHandler(e) {
    cursorX = e.clientX - canvas.offsetLeft;
    cursorY = e.clientY;
}

function bucket() {
    
}
// Objects
const basketball = new Ball(...ballHome);
const backboard = new BackBoard(canvas.width/2, canvas.height/2)

function animate() {
    let dy = 0;
    if (count === 50) {
        hold = false;
        count = 0;
    } 
    console.log(count);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    backboard.draw(ctx);

    if(backboard.x + backboard.width > canvas.width || backboard.x < 0)  {
        shiftSpeed = -shiftSpeed;
    }

    if(level > 2) backboard.move(ctx, shiftSpeed);
    basketball.draw(ctx);
    
    if (basketball.y + basketball.diameter < canvas.height) dy += gravity;
    
    if (hold) {
        count += .5;
        dy -= count;
    }

    basketball.move(ctx, dy);
    // if(cursorX > 0 && cursorX < canvas.width && cursorY > 0 && cursorY < canvas.height) {
        
    //     // basketball.move(cursorX, cursorY, ctx);
    // } else {
    //     basketball.draw(ctx, ballHome);
    // }
    
    requestAnimationFrame(animate);
}

// Below is whats running
animate();