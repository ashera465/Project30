const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground, wall, wall2, rope, link,stone, zombie1, backgroundImage, zombie;
var stones = [];
function preload(){
  zombie1 = loadImage("./assets/zombie.png");
  backgroundImage = loadImage("./assets/background.png");
}
function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  wall = new base(275,350,550,80);
  wall2 = new base(1225,350,550,80);
  ground = new base(750, 550, 1500, 20);

  rope = new Bridge(12,{x:550, y:330});

  zombie = createSprite(width / 2, height - 100, 50, 50);
  zombie.addImage(zombie1)
  zombie.scale = 0.1;
  zombie.velocityX = 1;

  breakButton = createButton("");
  breakButton.position(width/2, height / 2 -100);
  breakButton.class("breakbutton");
  breakButton.mouseClicked(handleButtonPress);


  link = new Link (rope, wall2);
  for (var i = 0; i<=8; i++){
    var x = random(width/2 -200, width/2 + 300);
    var y = random(10, 140);
    stone = new Stone(x, y, 10);
    stones.push(stone);
    stone.show();
  }

}

function draw() {
  background(backgroundImage)
  Engine.update(engine);
  for (var stone of stones) {
    stone.show();
    
  }
  wall.display();
  wall2.display();
  rope.show();
  ground.display();
  
  drawSprites();
 
}
function handleButtonPress() {
  link.dettach();
  setTimeout(() => {
    rope.break();
  }, 1500);
}