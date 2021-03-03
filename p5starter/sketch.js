
//decare variable that is defined in the preload function.
// this is neccessary to store the data for future use and act on it
let mySound, amplitude;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('music.mp3');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  console.log("hello man!");
  amplitude = new p5.Amplitude();
}

function draw() {
  background(20);
  let level = amplitude.getLevel();
  let diam = map(level, 0, 1, 10, 400)
  fill(204,100,100);
  ellipse(400, 400, diam, diam);
}

function mousePressed() {
  if (mySound.isPlaying()) {
    //song to stop
    //variables are used with dot notation for functions to act on them
    mySound.stop()
  } 
  else {
    mySound.play()
  }
  console.log("mouse is Pressed")
}

