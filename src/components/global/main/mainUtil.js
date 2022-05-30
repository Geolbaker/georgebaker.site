import $ from 'jquery';
import {gsap, Power4} from 'gsap';

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

  //add the divs to the main
  document.body.appendChild(mouse);
  document.body.appendChild(mouseF);

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
    gsap.to(mouse, {scale: 4.5});
    gsap.to(mouseF, {scale: .4});

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



}
