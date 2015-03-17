(function(){
  window.addEventListener('load', function(){
    // this waits for the page to load before running 

    // canvas is the tag for drawing elements ususally in javascript
    // getContext('2d') is the object to draw lines, boxes, circles, etc
    // this section puts the circle in the middle of the box, and set the radius and 

    
    var context = document.getElementById('canvas').getContext('2d'),
      canvasWidth = context.canvas.width,
      canvasHeight = context.canvas.height,
      canvasCenterX = Math.floor(canvasWidth / 2),
      canvasCenterY = Math.floor(canvasHeight / 2),
      circleRadius = 50,
      grow = false,
      alpha = 0.1;
    
   // this causes the circle to expand and contract 
    
    function render() {
      
      if (circleRadius <= 50) {
        grow = true;
      }
      
      if (circleRadius >= canvasHeight / 2) {
        grow = false;
      }
      
      if (grow) {
        circleRadius++;
        alpha += 0.01;
      } else {
        circleRadius--;
        alpha -= 0.01;
      }

  // context is the variable we defined above.   
  //creates a rectangle that is transparent   
      context.clearRect(0, 0, canvasWidth, canvasHeight);

// sets the color of the rectangle and makes it appear on screen over the transparent
      context.fillStyle = 'rgba(130, 179, 139, 0.5)';
      context.fillRect(0, 0, canvasWidth, canvasHeight);

// changes the color of the circle 
      context.fillStyle = 'rgba(92, 172, 238, 0.8)';
 // changes the color of the stroke around the circle 
      context.strokeStyle = 'rgba(255, 105, 105, ' + alpha + ')';

      context.beginPath();
      context.arc(canvasCenterX, canvasCenterY, circleRadius, 0, Math.PI * 2, false);
      context.closePath();
      context.fill();
      context.stroke();

      
    }
// this makes it loop     
    (function animloop(){
      requestAnimationFrame(animloop);
      render();
    })();
    
  }, false);
})();