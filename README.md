Shoot Your Shot
======

*Shoot Your Shot* is a basketball shot game created using HTML Canvas and Vanilla Javascript. Players can play a easy to pick up game where they can throw a ball into a hoop to score points using their mouse to the views of the beautiful Venice Beach basketball courts.

[Live Site](https://tasnimsaiduzzaman.com/ShootYourShot/)

## Technologies Used
* Javascript
* HTML Canvas
* HTML/SCSS

## Features
![gif example](https://github.com/tasnim-s/ShootYourShot/blob/main/showcase.gif)

* Players can shoot a ball with their mouse into hoop
* Players will be able to view their highscores and their current score update live
* Players will be able to move up in difficulty level as their current score streak increases

## Challenges and Solutions

* Ball movement and user chosen trajectory was calculated by taking starting and ending positon of mouse as well as trigonometry to calculate hyptonuse of vector.

![BallTrig](https://github.com/tasnim-s/GitHubImages/blob/main/BallTrig.png)


* Collision logic used to determine whether to update score to to reset the game

![BallLogic](https://github.com/tasnim-s/GitHubImages/blob/main/BallLogic.png)


* Game logic used to draw different game state on the canvas depending on user interaction

![BallMenu](https://github.com/tasnim-s/GitHubImages/blob/main/BallMenu.png)

### Bonus
* Users will be able to put their names in a leaderboard where their top score will be kept.
* Users will be able to see the live stats for todays games on the side

## Wireframes
![Wireframe example](https://github.com/tasnim-s/JavaScriptProject/blob/main/BasketballGameWF.png)