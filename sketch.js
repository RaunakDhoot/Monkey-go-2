var bananaImage;
var obstacleImage;
var obstacleGroup;
var backgroundImage;
var score;
var monkeyImage;
var bananaGroup;
var background1;
var Monkey;
var ground;
var obstacle;



function preload(){
  backgroundImage = loadImage("jungle.jpg")
  
  monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bananaImage = loadImage("banana.png")
  obstacleImage = loadImage("stone.png")
   bananaGroup =  new Group()
   obstacleGroup = new Group()
  
  


function setup() {
  createCanvas(600,300);
  background1 = createSprite(600,350,600,20)
  background1.addImage("backgroundImage",backgroundImage)
  background1.velocityX = -4
  background1.x = background1.width /2;
   ground = createSprite(300,190,600,10)
   Monkey = createSprite(100,180,20,50)
  
  var banana = createSprite(400,365,10,40);
  

  
  ground.visible = false
  
  score = 0
  
  Monkey.addAnimation("monkeyImage",monkeyImage)
  Monkey.scale = 0.12
  obstacle = createSprite(400,345,10,40);
}


function draw(){
 background(255); 
 drawSprites();
  food();
  obstacles();
  Monkey.collide(ground)
  
  
  
  if (background1.x < 0){
    background1.x = background1.width/2;
  }
  
  if(bananaGroup.isTouching(Monkey)){
  score = score + 2
  bananaGroup.setVelocityXEach = (0)
    
  
  
  }
  
 
  if(keyDown("Space")) {
    Monkey.velocityY = -12;
  }
  
  Monkey.velocityY = Monkey.velocityY + 0.8
  
}

switch(score) {
      case 10: player.scale = 0.12;
              break;
      case 20: player.scale = 0.14;
              break;
      case 30: player.scale = 0.16;
              break;
      case 40: player.scale = 0.18;
              break;
      
      default: break;
    }
  
function food(){
  if(World.frameCount % 80 === 0) {
    var banana = createSprite(400,200,10,40);
     banana.addImage("bananaImage",bananaImage)
  
    banana.velocityX = - 2
    banana.y = random(80,100)
    banana.x = random(160,200)
    banana.lifetime = 80;
    banana.scale = 0.12
    bananaGroup.add(banana)
  }
}

function obstacles(){
  if(World.frameCount % 300 === 0) {
    var obstacle = createSprite(400,345,10,40);
    obstacle.addImage("obstacleImage",obstacleImage)
    
}
    obstacle.velocityX = - 2
    obstacle.lifetime = 300;
    
    obstacle.scale = 0.15
    obstacleGroup.add(obstacle)
  }
}


