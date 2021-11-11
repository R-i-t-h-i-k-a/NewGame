function preload(){
background = loadImage("background.png");
ground = loadImage("ground.png");
dog = loadImage("dog.png");
obstacle = loadImage("obstacle.png");
}

function setup() {
createCanvas(400,400);
 var background = createSprite(300, 300, 300, 300);
 var ground = createSprite(200, 350, 300, 10);
 var dog = createSprite(200,200, 20, 20);
 var obstacle = createSprite(50, 350, 10, 100);

 score =0
}

function draw() {
 if gameState ==PLAY{
    ground.velocityX = -(4 + 3* score/10);
    
    score = score + Math.round(getFrameRate()/100);


 }
 if gameState ==END{
     Text("gameover");
     background.destroy();
     ground.destroy();
     dog.destroy();
     obstacle.destroy();



 }
}