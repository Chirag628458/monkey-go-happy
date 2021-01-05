
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score
var survivalTime= 0  

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
createCanvas(550, 450)

 
  
monkey= createSprite(55, 332, 20, 20)
monkey.addAnimation("running", monkey_running)
monkey.scale= 0.2;
  
ground= createSprite(300, 400, 600, 20)
ground.velocityX= -6
}

function draw() {
background("white")
  
text("score: "+ score, 400, 20)

survivalTime= Math.ceil(frameCount/frameRate())
text("survival time: "+ survivalTime, 400, 40)
  
if(ground.x<= 250 ){
  ground.x= 300
  ground.y= 400
  ground.velocityX= -6
}

if(keyDown("space")){
  monkey.velocityY= -15;
}
  monkey.velocityY= monkey.velocityY+0.6
  monkey.collide(ground);
  
drawSprites();
spawnObstacle();
spawnBananas();
  
}

function spawnObstacle()
{
  
  if(frameCount%300==0){
   obstacle= createSprite(450, 353, 30, 30)
   obstacle.addImage("obstacle", obstacleImage);
   obstacle.scale=0.2
   obstacle.velocityX= -6
   obstacle.lifetime= 80
  }
}

function spawnBananas(){
  if(frameCount%80===0){
    banana= createSprite(400, 40, 20, 20)
    banana.addImage("banana", bananaImage);
    banana.scale=0.1
    banana.y= Math.round(random(50, 200))
    banana.velocityX= -6
    banana.lifetime= 75
  }
  
}







