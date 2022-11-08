var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon1.png","assets/balloon1.png")
}

function setup(){

//Imagen de fondo
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3





}

function draw() {
  
  background("black");
        
         
        drawSprites();
        
}
