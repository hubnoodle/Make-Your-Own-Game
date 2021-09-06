var canvas;
var blueball, redball, yellowball, runner, back;

function preload(){
  blueball = loadImage("blueball.png");
  redball = loadImage("redball.png");
  yellowball = loadImage("yellowball.png");
  runner = loadAnimation("run1.png","run2.jpg","run3.png");
  back = loadImage("background.png");
}

function setup(){

  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  run = createSprite(displayWidth - 30, displayHeight - 100,20,50);
 
  run.addAnimation(runner); 
  run.scale = 0.5;

  blueball = createSprite(displayWidth - 50, dispalyHeight - 100,20,20);
  blueball.addImage(blueball);

  yellowball = createSprite(displayWidth - 60, dispalyHeight - 100,20,20);
  yellowball.addImage(yellowball);

  redball = createSprite(displayWidth - 70, dispalyHeight - 100,20,20);
  redball.addImage(redball);

}

function draw(){

background(back);

}
