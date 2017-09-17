"use strict"
//body object
let body = {
  Img: document.body.style.background = "url('../imgs/bg-morning-1.jpg') fixed center",
  Size: document.body.style.backgroundSize = "cover"
}
//getting the local time
let dateTime = new Date();
let time = dateTime.getHours();

//changing background-image according to time
if(time >= 12){
     body.Img = document.body.style.background = "url('../imgs/bg_morning.jpg') fixed center"
}
else{
  body.Img = document.body.style.background = "url('../imgs/bg-night.jpg') fixed center"
}

let startBtn = document.getElementById('startbutton');
startBtn.onclick = () => {

  //playing sound on click
  let audio = new Audio();
  audio.src = "../sounds/start-sound.wav";
  audio.play();

  //hiding the disclaimer
  let disclaimer = document.getElementById('disclaimer');
  disclaimer.style.display = 'none';

  //starting the show
  let myBox = document.getElementById('mybox');
  myBox.style.display = 'block';
  myBox.style.animation = 'dropDown 10s linear';
}
