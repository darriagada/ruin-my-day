var element = document.getElementById("endCall");
element.disabled = true;


function startCall() {
    var x = document.getElementById("showStatus");
    if (x.innerText === "Start the call") {
      x.innerText = "Calling...";
    } 
   console.log("Call started!");

   var element = document.getElementById("callerId");
   element.classList.add("avatar-on");

   var element = document.getElementById("startCall");
   element.classList.add("active");

   var element = document.getElementById("endCall");
   element.disabled = false;
   element.classList.remove("active");
}

function endCall() {
var x = document.getElementById("showStatus");
if (x.innerText === "Calling...") {
  x.innerText = "Start the call";
}
// play the End Call bit
  let ding = new Audio('https://res.cloudinary.com/deimoslab/video/upload/v1720810121/ms-call-end_h4dipy.mp3');
  ding.play();
  console.log("Call ended!");
  
// remove the fade of the profile picture
var element = document.getElementById("callerId");
element.classList.remove("active");
element.classList.remove("avatar-on");

var element = document.getElementById("startCall");
element.classList.remove("active");

var element = document.getElementById("endCall");
element.disabled = true;
element.classList.add("active");
}

/* Call SFX control */
var x = document.getElementById("myAudio"); 
function playAudio() { 
x.play();
}

function pauseAudio() { 
x.pause();
x.currentTime = 0; 
}

/* About */
function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

/* Assign actions */
document.getElementsByClassName('start-call')[0].addEventListener('click', function() {
    playAudio();
    startCall();
})

document.getElementsByClassName('end-call')[0].addEventListener('click', function() {
    pauseAudio();
    endCall();
})

document.getElementsByClassName('help-btn')[0].addEventListener('click', function() {
    on();
})

document.getElementsByClassName('about-modal')[0].addEventListener('click', function() {
    off();
})