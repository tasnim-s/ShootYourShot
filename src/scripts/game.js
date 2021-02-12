import BackBoard from "./backboard";
import Ball from "./ball";
import Controls from "./controls";


export default class Game {
    constructor(ctx, scoreDiv) {
        this.ctx = ctx;
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
        this.backboard = new BackBoard(this);
        this.basketball = new Ball(this);
        this.scoreDiv = scoreDiv;
        this.score = 0;
        this.scored  = false;
        this.swish = new Audio(".././dist/sounds/swish.mp3");
        this.running = false;
        
        new Controls(this);
    }

    start() {
        this.backboard.reset();
        if(!this.scored) {
            this.score = 0;
            this.basketball.reset();
        } else {
            this.basketball.random();
        }
        this.scored = false;
    }

    scoreBucket() {
        if (this.basketball.comingDown && this.basketball.x > this.backboard.line.x1 && this.basketball.x + this.basketball.diameter < this.backboard.line.x2 && this.basketball.y + this.basketball.diameter/2 > this.backboard.line.y) {
            console.log("collision");
            this.score++;
            this.basketball.comingDown = false;
            this.scored = true;
            this.basketball.shooting = false;
            this.swish.play();
        }
        !this.score ? this.scoreDiv.style.color = "red" : this.scoreDiv.style.color = "green";
        this.scoreDiv.innerHTML = this.score;
    }
    
    draw() {
        this.backboard.draw();
        this.basketball.draw();
        if(!this.running) {
            this.ctx.rect(0, 0, canvas.width, canvas.height);
            this.ctx.fillStyle = "#dadde1";
            this.ctx.fill();
            this.ctx.font = "32px Roboto";
            this.ctx.fillStyle = "#f2a154";
            this.ctx.textAlign = 'center';
            this.ctx.fillText("Press Spacebar to begin", this.width/2, this.height/2);
        }
    }

    update(){
        if (!this.running) return;
        if(this.basketball.y + this.basketball.diameter > this.height || this.basketball.x + this.basketball.diameter > this.width || this.basketball.x < 0) {
            // this.basketball.shooting = false;
            this.start();
            return;
        }
        this.backboard.update();
        this.basketball.update();
    }

}