(function() {

  // impress.js's API. You get it from its events.
  var api;
  // 15 seconds is standard ignite time
  var slideAdvance = 15000;
  var element;

  // make sure impress.js is loaded first
  document.addEventListener("impress:init", function(evt) {
    api = evt.detail.api;

    // add presentation button
    element= document.createElement('input');
    element.setAttribute('type','button');
    element.setAttribute("value", "Begin Presentation");
    element.setAttribute("name", "Begin Presentation");
    element.setAttribute("id", "js-begin-ignite");
    element.style.zIndex = 1000;
    element.style.position = "relative";
    document.body.appendChild(element);

    // start presentation
    element.onclick = function() {
      // try to get into full-screen mode
      if(document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if(document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if(document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen();
      }

      // hide button
      element.style.display = 'none';

      //go to first slide
      api.goto(0);

      // presentation has as many step classes as slides, used to determine how many times to advance before stopping
      var steps = document.getElementsByClassName('step').length;
      waitAndAdvance(0, steps);
    }
  },false);

  // recursive function to wait seconds before advancing
  function waitAndAdvance(step, steps) {
    setTimeout(function(){
      if (step < steps - 1) {
        api.next();
        waitAndAdvance(step+1, steps);
      }
      else {
        // after 15 seconds on last slide, exit fullscreen
        if(document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if(document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if(document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    }, slideAdvance);
  }

})();
