import BackBoard from "./backboard";
import Ball from "./ball";
import Controls from "./controls";
import Rim from "./rim";


export default class Game {
    constructor(ctx, scoreDiv) {
        this.ctx = ctx;
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
        this.backboard = new BackBoard(this);
        this.basketball = new Ball(this);
        this.rim = new Rim(this);
        this.scoreDiv = scoreDiv;
        this.bestScore = document.getElementById("best");
        this.bestScore.innerHTML = 0;
        this.score = 0;
        this.scored  = false;
        this.swish = document.getElementById("swishNoise");
        this.running = false;
        
        new Controls(this);
    }

    start() {
        this.backboard.reset();
        this.rim.reset();
        if(!this.scored) {
            if(this.score > this.bestScore.innerHTML) this.bestScore.innerHTML = this.score;
            this.score = 0;
            this.basketball.reset();
        } else {
            this.basketball.random();
            if (this.score >= 10) {
                this.backboard.dx >= 0 ? this.backboard.dx = 2 : this.backboard.dx = -2;
            } else if (this.score >= 20) {
                this.backboard.dx >= 0 ? this.backboard.dx = 4 : this.backboard.dx = -4;
            }
        }
        this.scored = false;
    }

    scoreBucket() {
        if (this.basketball.comingDown && this.basketball.x > this.rim.x1 && this.basketball.x + this.basketball.diameter < this.rim.x2 && this.basketball.y + this.basketball.diameter/2 > this.rim.y) {
            // console.log("collision");
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
        if (this.basketball.dy <= 0) {
            this.rim.draw();
        }
        this.basketball.draw();
        if(this.basketball.dy > 0) {
            this.rim.draw();
        }
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
            this.start();
            return;
        }
        
        this.backboard.update();
        this.basketball.update();
        this.rim.update();
    }

}