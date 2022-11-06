import $ from 'jquery';
import {gsap} from 'gsap';


//
// ██████╗  ██████╗ ██████╗ ██╗   ██╗██████╗
// ██╔══██╗██╔═══██╗██╔══██╗██║   ██║██╔══██╗
// ██████╔╝██║   ██║██████╔╝██║   ██║██████╔╝
// ██╔═══╝ ██║   ██║██╔═══╝ ██║   ██║██╔═══╝
// ██║     ╚██████╔╝██║     ╚██████╔╝██║
// ╚═╝      ╚═════╝ ╚═╝      ╚═════╝ ╚═╝
//


$(document).on('keypress',function(e) {
    if(e.which === 13) {
      var div = document.querySelector("#popupMain");
      div.classList.add("visible", "animate__backInRight");
      div.classList.remove("invisible", "animate__zoomOut");
      localStorage.setItem('popupToggle', "0");
      toggle = 1;
    }
});
var toggle = 0;
export const PopupToggle = () => {
    if (toggle === 0) {
      setTimeout(function(){
        var div = document.querySelector("#popupMain");
        div.classList.add("animate__backInRight", "visible");
        div.classList.remove("invisible", "animate__zoomOut");
        toggle = 1;
        localStorage.setItem('popupToggle', "1");
      },50000);
    }

    if (toggle === 1) {
      var div = document.querySelector("#popupMain");
      div.classList.remove("animate__backInRight");
      div.classList.add("animate__zoomOut");
      setTimeout(function(){
        div.classList.add("invisible");
        div.classList.remove("visible");
      }, 100);
      toggle = 0;
  } else {
    return false;
  }
}
//
// ██████╗ ███████╗███████╗███████╗████████╗
// ██╔══██╗██╔════╝██╔════╝██╔════╝╚══██╔══╝
// ██████╔╝█████╗  ███████╗█████╗     ██║
// ██╔══██╗██╔══╝  ╚════██║██╔══╝     ██║
// ██║  ██║███████╗███████║███████╗   ██║
// ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝   ╚═╝
//
// ████████╗██╗  ██╗███████╗███╗   ███╗███████╗
// ╚══██╔══╝██║  ██║██╔════╝████╗ ████║██╔════╝
//    ██║   ███████║█████╗  ██╔████╔██║█████╗
//    ██║   ██╔══██║██╔══╝  ██║╚██╔╝██║██╔══╝
//    ██║   ██║  ██║███████╗██║ ╚═╝ ██║███████╗
//    ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝
//

export const ResetTheme = () => {
  document.documentElement.style.setProperty("--colorPalet-container", 'rgb(255 255 255)');
  document.documentElement.style.setProperty("--colorPalet-background", 'rgb(236 236 235)');
  document.documentElement.style.setProperty("--colorPalet-text", 'rgb(0 0 0)');
  document.documentElement.style.setProperty("--colorPalet-header", 'rgb(255 255 255)');
  document.documentElement.style.setProperty("--colorPalet-containerAlt", 'rgb(38 57 77 / 50%)');
  document.documentElement.style.setProperty("--colorPalet-mainLight", 'rgb(105, 182, 213)');
  localStorage.removeItem('theme');
  localStorage.setItem('theme', 'normal');
}
//
// ██████╗██╗   ██╗███████╗████████╗ ██████╗ ███╗   ███╗
// ██╔════╝██║   ██║██╔════╝╚══██╔══╝██╔═══██╗████╗ ████║
// ██║     ██║   ██║███████╗   ██║   ██║   ██║██╔████╔██║
// ██║     ██║   ██║╚════██║   ██║   ██║   ██║██║╚██╔╝██║
// ╚██████╗╚██████╔╝███████║   ██║   ╚██████╔╝██║ ╚═╝ ██║
// ╚═════╝ ╚═════╝ ╚══════╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝
//
// ███╗   ███╗ ██████╗ ██╗   ██╗███████╗███████╗
// ████╗ ████║██╔═══██╗██║   ██║██╔════╝██╔════╝
// ██╔████╔██║██║   ██║██║   ██║███████╗█████╗
// ██║╚██╔╝██║██║   ██║██║   ██║╚════██║██╔══╝
// ██║ ╚═╝ ██║╚██████╔╝╚██████╔╝███████║███████╗
// ╚═╝     ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚══════╝
//

export const Mouse = () => {

  //linear interpretation function
  function lerp(start, end, amount) {
    return (1-amount)*start+amount*end
  }

  //create a div called mouse to replace mouse
  const mouse = document.createElement('div');
  mouse.className = 'mouse';

  //create a div called mouse-follow to follow mouse
  const mouseF = document.createElement('div');
  mouseF.className = 'mouse-follow';

  //initiate variables
  let pageX = 0;
  let pageY = 0;
  let mouseX = 0;
  let mouseY = 0;
  let size = 8;
  let sizeF = 36;
  let followSpeed = .13;

  //make sure multiple mice cant be initiated
  var mouse1check = document.querySelector(".mouse");
  var mouse2check = document.querySelector(".mouse-follow");

  if (!mouse1check && !mouse2check) {
      //add the divs to the main
      document.body.appendChild(mouse);
      document.body.appendChild(mouseF);
  }
  else {
    return false;
  }


  //remove styling of mouse
  if ('ontouchstart' in window) {
    mouse.style.display = 'none';
    mouseF.style.display = 'none';
  }

  //stop mouse from showing
  document.documentElement.style.setProperty('--cursor-type', 'none');

  //set the mouse size
  mouse.style.setProperty('--size', size+'px');
  mouseF.style.setProperty('--size', sizeF+'px');

  //everytime the mouse moves, update the page position and the mouse position
  window.addEventListener('mousemove', function(e) {
    pageX = e.clientX;
    pageY = e.clientY;
    mouse.style.left = e.clientX-size/2+'px';
    mouse.style.top = e.clientY-size/2+'px';
  });

  //create the loop to run the "animation" for the mouse follow
  function loop() {
    mouseX = lerp(mouseX, pageX, followSpeed);
    mouseY = lerp(mouseY, pageY, followSpeed);
    mouseF.style.top = mouseY - sizeF/2 + 'px';
    mouseF.style.left = mouseX - sizeF/2 + 'px';
    requestAnimationFrame(loop);
  }

  loop();


  //create the variables for the mouse click
  let startY;
  let endY;
  let clicked = false;

  //setup the "animations" for the mouse click
  function mousedown(e) {
    gsap.to(mouse, {scale: 2.5});
    gsap.to(mouseF, {scale: .1});

    clicked = true;
    startY = e.clientY || e.touches[0].clientY || e.targetTouches[0].clientY;
  }
  function mouseup(e) {
    gsap.to(mouse, {scale: 1});
    gsap.to(mouseF, {scale: 1});

    endY = e.clientY || endY;
    if (clicked && startY && Math.abs(startY - endY) >= 40) {
      clicked = false;
      startY = null;
      endY = null;
    }
  }

  //main event listeners
  window.addEventListener('mousedown', mousedown, false);
  window.addEventListener('touchstart', mousedown, false);
  window.addEventListener('touchmove', function(e) {
    if (clicked) {
      endY = e.touches[0].clientY || e.targetTouches[0].clientY;
    }
  }, false);
  window.addEventListener('touchend', mouseup, false);
  window.addEventListener('mouseup', mouseup, false);
  $('.mouseHover').mouseover('mousedown', mousedown, false);
  $('.mouseHover').mouseout('mouseup', mouseup, false);


}




//
// ██████╗      ██████╗     ███╗   ██╗     ██████╗
// ██╔══██╗    ██╔═══██╗    ████╗  ██║    ██╔════╝
// ██████╔╝    ██║   ██║    ██╔██╗ ██║    ██║  ███╗
// ██╔═══╝     ██║   ██║    ██║╚██╗██║    ██║   ██║
// ██║         ╚██████╔╝    ██║ ╚████║    ╚██████╔╝
// ╚═╝          ╚═════╝     ╚═╝  ╚═══╝     ╚═════╝
//





var pongToggle = 0;
export const PongToggle = () => {
  if (pongToggle === 0) {
    $('#PongGameContainer').addClass("visible");
    $('#PongGameContainer').removeClass("invisible");
    pongToggle++;
  }
  else if (pongToggle === 1) {
    $('#PongGameContainer').removeClass("visible");
    $('#PongGameContainer').addClass("invisible");
    pongToggle = 0;
  }
}



export const PongFunction = () => {
    var beep1 = new Audio(
     "data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="
    );
    var beep2 = new Audio(
     "data:audio/wav;base64,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"
    );
    var beep3 = new Audio(
     "data:audio/wav;base64,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"
    );

    // Global Variables
    var DIRECTION = {
      IDLE: 0,
      UP: 1,
      DOWN: 2,
      LEFT: 3,
      RIGHT: 4
    };

    var rounds = [5, 5, 3, 3, 2];
    var colors = ['#1abc9c', '#2ecc71', '#3498db', '#e74c3c', '#9b59b6'];

    // The ball object (The cube that bounces back and forth)
    var Ball = {
      new: function (incrementedSpeed) {
        return {
          width: 18,
          height: 18,
          x: (this.canvas.width / 2) - 9,
          y: (this.canvas.height / 2) - 9,
          moveX: DIRECTION.IDLE,
          moveY: DIRECTION.IDLE,
          speed: incrementedSpeed || 9
        };
      }
    };

    // The paddle object (The two lines that move up and down)
    var Paddle = {
      new: function (side) {
        return {
          width: 18,
          height: 170,
          x: side === 'left' ? 150 : this.canvas.width - 150,
          y: (this.canvas.height / 2) - 35,
          score: 0,
          move: DIRECTION.IDLE,
          speed: 10
        };
      }
    };

    var Game = {
      initialize: function () {
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');

        this.canvas.width = 1400;
        this.canvas.height = 1000;

        this.canvas.style.width = (this.canvas.width / 2) + 'px';
        this.canvas.style.height = (this.canvas.height / 2) + 'px';

        this.player = Paddle.new.call(this, 'left');
        this.paddle = Paddle.new.call(this, 'right');
        this.ball = Ball.new.call(this);

        this.paddle.speed = 8;
        this.running = this.over = false;
        this.turn = this.paddle;
        this.timer = this.round = 0;
        this.color = '#fafaf2';

        Pong.menu();
        Pong.listen();
      },

      endGameMenu: function (text) {
        // Change the canvas font size and color
        Pong.context.font = '50px Courier New';
        Pong.context.fillStyle = this.color;

        // Draw the rectangle behind the 'Press any key to begin' text.
        Pong.context.fillRect(
          Pong.canvas.width / 2 - 350,
          Pong.canvas.height / 2 - 48,
          700,
          100
        );

        // Change the canvas color;
        Pong.context.fillStyle = '#4d4761';

        // Draw the end game menu text ('Game Over' and 'Winner')
        Pong.context.fillText(text,
          Pong.canvas.width / 2,
          Pong.canvas.height / 2 + 15
        );

        setTimeout(function () {
          Pong = Object.assign({}, Game);
          Pong.initialize();
        }, 3000);
      },

      menu: function () {
        // Draw all the Pong objects in their current state
        Pong.draw();

        // Change the canvas font size and color
        this.context.font = '50px Courier New';
        this.context.fillStyle = this.color;

        // Draw the rectangle behind the 'Press any key to begin' text.
        this.context.fillRect(
          this.canvas.width / 2 - 350,
          this.canvas.height / 2 - 48,
          700,
          100
        );

        // Change the canvas color;
        this.context.fillStyle = '#4d4761';

        // Draw the 'press any key to begin' text
        this.context.fillText('Press space to begin',
          this.canvas.width / 2,
          this.canvas.height / 2 + 15
        );
      },

      // Update all objects (move the player, paddle, ball, increment the score, etc.)
      update: function () {
        if (!this.over) {
          // If the ball collides with the bound limits - correct the x and y coords.
          if (this.ball.x <= 0) Pong._resetTurn.call(this, this.paddle, this.player);
          if (this.ball.x >= this.canvas.width - this.ball.width) Pong._resetTurn.call(this, this.player, this.paddle);
          if (this.ball.y <= 0) this.ball.moveY = DIRECTION.DOWN;
          if (this.ball.y >= this.canvas.height - this.ball.height) this.ball.moveY = DIRECTION.UP;

          // Move player if they player.move value was updated by a keyboard event
          if (this.player.move === DIRECTION.UP) this.player.y -= this.player.speed;
          else if (this.player.move === DIRECTION.DOWN) this.player.y += this.player.speed;

          // On new serve (start of each turn) move the ball to the correct side
          // and randomize the direction to add some challenge.
          if (Pong._turnDelayIsOver.call(this) && this.turn) {
            this.ball.moveX = this.turn === this.player ? DIRECTION.LEFT : DIRECTION.RIGHT;
            this.ball.moveY = [DIRECTION.UP, DIRECTION.DOWN][Math.round(Math.random())];
            this.ball.y = Math.floor(Math.random() * this.canvas.height - 200) + 200;
            this.turn = null;
          }

          // If the player collides with the bound limits, update the x and y coords.
          if (this.player.y <= 0) this.player.y = 0;
          else if (this.player.y >= (this.canvas.height - this.player.height)) this.player.y = (this.canvas.height - this.player.height);

          // Move ball in intended direction based on moveY and moveX values
          if (this.ball.moveY === DIRECTION.UP) this.ball.y -= (this.ball.speed / 1.5);
          else if (this.ball.moveY === DIRECTION.DOWN) this.ball.y += (this.ball.speed / 1.5);
          if (this.ball.moveX === DIRECTION.LEFT) this.ball.x -= this.ball.speed;
          else if (this.ball.moveX === DIRECTION.RIGHT) this.ball.x += this.ball.speed;

          // Handle paddle (AI) UP and DOWN movement
          if (this.paddle.y > this.ball.y - (this.paddle.height / 2)) {
            if (this.ball.moveX === DIRECTION.RIGHT) this.paddle.y -= this.paddle.speed / 1.5;
            else this.paddle.y -= this.paddle.speed / 4;
          }
          if (this.paddle.y < this.ball.y - (this.paddle.height / 2)) {
            if (this.ball.moveX === DIRECTION.RIGHT) this.paddle.y += this.paddle.speed / 1.5;
            else this.paddle.y += this.paddle.speed / 4;
          }

          // Handle paddle (AI) wall collision
          if (this.paddle.y >= this.canvas.height - this.paddle.height) this.paddle.y = this.canvas.height - this.paddle.height;
          else if (this.paddle.y <= 0) this.paddle.y = 0;

          // Handle Player-Ball collisions
          if (this.ball.x - this.ball.width <= this.player.x && this.ball.x >= this.player.x - this.player.width) {
            if (this.ball.y <= this.player.y + this.player.height && this.ball.y + this.ball.height >= this.player.y) {
              this.ball.x = (this.player.x + this.ball.width);
              this.ball.moveX = DIRECTION.RIGHT;

              beep1.play();
            }
          }

          // Handle paddle-ball collision
          if (this.ball.x - this.ball.width <= this.paddle.x && this.ball.x >= this.paddle.x - this.paddle.width) {
            if (this.ball.y <= this.paddle.y + this.paddle.height && this.ball.y + this.ball.height >= this.paddle.y) {
              this.ball.x = (this.paddle.x - this.ball.width);
              this.ball.moveX = DIRECTION.LEFT;

              beep1.play();
            }
          }
        }

        // Handle the end of round transition
        // Check to see if the player won the round.
        if (this.player.score === rounds[this.round]) {
          // Check to see if there are any more rounds/levels left and display the victory screen if
          // there are not.
          if (!rounds[this.round + 1]) {
            this.over = true;
            setTimeout(function () { Pong.endGameMenu('Winner!'); }, 1000);
          } else {
            // If there is another round, reset all the values and increment the round number.
            this.color = this._generateRoundColor();
            this.player.score = this.paddle.score = 0;
            this.player.speed += 0.5;
            this.paddle.speed += 1;
            this.ball.speed += 1;
            this.round += 1;

            beep3.play();
          }
        }
        // Check to see if the paddle/AI has won the round.
        else if (this.paddle.score === rounds[this.round]) {
          this.over = true;
          setTimeout(function () { Pong.endGameMenu('Game Over!'); }, 1000);
        }
      },

      // Draw the objects to the canvas element
      draw: function () {
        // Clear the Canvas
        this.context.clearRect(
          0,
          0,
          this.canvas.width,
          this.canvas.height
        );

        // Set the fill style to black
        this.context.fillStyle = this.color;

        // Draw the background
        this.context.fillRect(
          0,
          0,
          this.canvas.width,
          this.canvas.height
        );

        // Set the fill style to white (For the paddles and the ball)
        this.context.fillStyle = '#4d4761';

        // Draw the Player
        this.context.fillRect(
          this.player.x,
          this.player.y,
          this.player.width,
          this.player.height
        );

        // Draw the Paddle
        this.context.fillRect(
          this.paddle.x,
          this.paddle.y,
          this.paddle.width,
          this.paddle.height
        );

        // Draw the Ball
        if (Pong._turnDelayIsOver.call(this)) {
          this.context.fillRect(
            this.ball.x,
            this.ball.y,
            this.ball.width,
            this.ball.height
          );
        }

        // Draw the net (Line in the middle)
        this.context.beginPath();
        this.context.setLineDash([7, 15]);
        this.context.moveTo((this.canvas.width / 2), this.canvas.height - 140);
        this.context.lineTo((this.canvas.width / 2), 140);
        this.context.lineWidth = 10;
        this.context.strokeStyle = '#4d4761';
        this.context.stroke();

        // Set the default canvas font and align it to the center
        this.context.font = '100px Courier New';
        this.context.textAlign = 'center';

        // Draw the players score (left)
        this.context.fillText(
          this.player.score.toString(),
          (this.canvas.width / 2) - 300,
          200
        );

        // Draw the paddles score (right)
        this.context.fillText(
          this.paddle.score.toString(),
          (this.canvas.width / 2) + 300,
          200
        );

        // Change the font size for the center score text
        this.context.font = '30px Courier New';

        // Draw the winning score (center)
        this.context.fillText(
          'Round ' + (Pong.round + 1),
          (this.canvas.width / 2),
          35
        );

        // Change the font size for the center score value
        this.context.font = '40px Courier';

        // Draw the current round number
        this.context.fillText(
          rounds[Pong.round] ? rounds[Pong.round] : rounds[Pong.round - 1],
          (this.canvas.width / 2),
          100
        );
      },

      loop: function () {
        Pong.update();
        Pong.draw();

        // If the game is not over, draw the next frame.
        if (!Pong.over) requestAnimationFrame(Pong.loop);
      },

      listen: function () {
        document.addEventListener('keydown', function (key) {
            if ($('#PongGameContainer').hasClass('visible')) {
              // Handle the 'Press any key to begin' function and start the game.
              if (Pong.running === false) {
                if (key.keyCode === 32) {
                  Pong.running = true;
                  window.requestAnimationFrame(Pong.loop);
                }
              }
            }


            // Handle up arrow and w key events
            if (key.keyCode === 38 || key.keyCode === 87) Pong.player.move = DIRECTION.UP;

            // Handle down arrow and s key events
            if (key.keyCode === 40 || key.keyCode === 83) Pong.player.move = DIRECTION.DOWN;
        });

        // Stop the player from moving when there are no keys being pressed.
        document.addEventListener('keyup', function (key) { Pong.player.move = DIRECTION.IDLE; });
      },

      // Reset the ball location, the player turns and set a delay before the next round begins.
      _resetTurn: function(victor, loser) {
        this.ball = Ball.new.call(this, this.ball.speed);
        this.turn = loser;
        this.timer = (new Date()).getTime();

        victor.score++;
        beep2.play();
      },

      // Wait for a delay to have passed after each turn.
      _turnDelayIsOver: function() {
        return ((new Date()).getTime() - this.timer >= 1000);
      },

      // Select a random color as the background of each level/round.
      _generateRoundColor: function () {
        var newColor = colors[Math.floor(Math.random() * colors.length)];
        if (newColor === this.color) return Pong._generateRoundColor();
        return newColor;
      }
    };

    var Pong = Object.assign({}, Game);
    Pong.initialize();
}


//
// ██████╗ ██╗██████╗ ████████╗██╗  ██╗██████╗  █████╗ ██╗   ██╗
// ██╔══██╗██║██╔══██╗╚══██╔══╝██║  ██║██╔══██╗██╔══██╗╚██╗ ██╔╝
// ██████╔╝██║██████╔╝   ██║   ███████║██║  ██║███████║ ╚████╔╝
// ██╔══██╗██║██╔══██╗   ██║   ██╔══██║██║  ██║██╔══██║  ╚██╔╝
// ██████╔╝██║██║  ██║   ██║   ██║  ██║██████╔╝██║  ██║   ██║
// ╚═════╝ ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝
//
//  ██████╗ █████╗ ██╗      ██████╗
// ██╔════╝██╔══██╗██║     ██╔════╝
// ██║     ███████║██║     ██║
// ██║     ██╔══██║██║     ██║
// ╚██████╗██║  ██║███████╗╚██████╗
//  ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝
//                                                              4


export const BirthdayVersionCalc = () => {
  //birthday in unix
  var countdownDate = 934313330000;
  //get current date
  var now = new Date().getTime();
  //convert difference into years and months
  var numyears = (Math.floor((now - countdownDate) / 3153600000)/10);
  //update the page
  document.getElementById('ageVersion').innerHTML = 'V'+numyears;
  document.getElementById('ageNormal').innerHTML = numyears.toFixed(0);
  //update in other places
  document.getElementById('daughterAge').innerHTML = ((numyears - 22.5) * 10).toFixed(0);

}
