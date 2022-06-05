import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  // dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
   // of the mouse, set with a mousemove event listener below
var dots = [],
mouse = {
  x: 0,
  y: 0
};

// The Dot object used to scaffold the dots
var Dot = function() {
this.x = 0;
this.y = 0;
this.node = (function(){
var n = document.createElement("div");
n.className = "trail";
document.body.appendChild(n);
return n;
}());
};
// The Dot.prototype.draw() method sets the position of 
// the object's <div> node
Dot.prototype.draw = function() {
this.node.style.left = this.x + "px";
this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 12; i++) {
var d = new Dot();
dots.push(d);
}

// This is the screen redraw function
function draw() {
// Make sure the mouse position is set everytime
// draw() is called.
var x = mouse.x,
  y = mouse.y;

// This loop is where all the 90s magic happens
dots.forEach(function(dot, index, dots) {
var nextDot = dots[index + 1] || dots[0];

dot.x = x;
dot.y = y;
dot.draw();
x += (nextDot.x - dot.x) * .6;
y += (nextDot.y - dot.y) * .6;

});
}

window.addEventListener("mousemove", function(event) {
//event.preventDefault();
mouse.x = event.pageX;
mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
// everytime the screen repaints via requestAnimationFrame().
function animate() {
draw();
requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();

 
  return (
    <div className='hero-container'>
      <video src='/videos/datavid.mp4' autoPlay loop muted />
    
      <h1 >Hi, I'm Tushar</h1>
      <p>UI developer with a B.tech in Computer Engineering from Grapic Era University in Uttrakhand, specialized in Cloud Computing. At the moment, I'm employed at Tata Consultancy Services as a System Engineer.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;