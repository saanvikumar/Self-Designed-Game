
var Jerry, Tom;

function preload(){
  jungleImage = loadImage("assets/bg.png");
  JerryImage = loadImage("assets/Jerry1.png");
  Tom = loadAnimation("assets/Tom1.png, assets/Tom2.png, assets/Tom3.png");

function setup() {
  createCanvas(800, 400);

  Jerry = createSprite(50,200,20,50);
  Jerry.addImage("JerryImage",JerryImage);
  Jerry.scale = 0.15;

}

function draw() {
  background(255);
  
  drawSprites();


}}
